/* eslint-disable no-restricted-globals */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../types/ambient.d.ts" />

import fs from "fs";
import path from "path";
import log from "fancy-log";
import del from "del";
import File from "vinyl";
import ts from "../../lib/typescript.js";
import chalk from "chalk";
import which from "which";
import { spawn } from "child_process";
import { Duplex } from "stream";
import assert from "assert";

/**
 * Executes the provided command once with the supplied arguments.
 * @param {string} cmd
 * @param {string[]} args
 * @param {ExecOptions} [options]
 *
 * @typedef ExecOptions
 * @property {boolean} [ignoreExitCode]
 * @property {boolean} [hidePrompt]
 * @property {boolean} [waitForExit=true]
 */
export async function exec(cmd, args, options = {}) {
    return /**@type {Promise<{exitCode?: number}>}*/(new Promise((resolve, reject) => {
        const { ignoreExitCode, waitForExit = true } = options;

        if (!options.hidePrompt) log(`> ${chalk.green(cmd)} ${args.join(" ")}`);
        const proc = spawn(which.sync(cmd), args, { stdio: waitForExit ? "inherit" : "ignore" });
        if (waitForExit) {
            proc.on("exit", exitCode => {
                if (exitCode === 0 || ignoreExitCode) {
                    resolve({ exitCode: exitCode ?? undefined });
                }
                else {
                    reject(new Error(`Process exited with code: ${exitCode}`));
                }
            });
            proc.on("error", error => {
                reject(error);
            });
        }
        else {
            proc.unref();
            // wait a short period in order to allow the process to start successfully before Node exits.
            setTimeout(() => resolve({ exitCode: undefined }), 100);
        }
    }));
}

/**
 * @param {ts.Diagnostic[]} diagnostics
 * @param {{ cwd?: string, pretty?: boolean }} [options]
 */
function formatDiagnostics(diagnostics, options) {
    return options && options.pretty
        ? ts.formatDiagnosticsWithColorAndContext(diagnostics, getFormatDiagnosticsHost(options && options.cwd))
        : ts.formatDiagnostics(diagnostics, getFormatDiagnosticsHost(options && options.cwd));
}

/**
 * @param {ts.Diagnostic[]} diagnostics
 * @param {{ cwd?: string }} [options]
 */
function reportDiagnostics(diagnostics, options) {
    log(formatDiagnostics(diagnostics, { cwd: options && options.cwd, pretty: process.stdout.isTTY }));
}

/**
 * @param {string | undefined} cwd
 * @returns {ts.FormatDiagnosticsHost}
 */
function getFormatDiagnosticsHost(cwd) {
    return {
        getCanonicalFileName: fileName => fileName,
        getCurrentDirectory: () => cwd ?? process.cwd(),
        getNewLine: () => ts.sys.newLine,
    };
}

/**
 * Reads JSON data with optional comments using the LKG TypeScript compiler
 * @param {string} jsonPath
 */
export function readJson(jsonPath) {
    const jsonText = fs.readFileSync(jsonPath, "utf8");
    const result = ts.parseConfigFileTextToJson(jsonPath, jsonText);
    if (result.error) {
        reportDiagnostics([result.error]);
        throw new Error("An error occurred during parse.");
    }
    return result.config;
}

/**
 * @param {string | string[]} source
 * @param {string | string[]} dest
 * @returns {boolean}
 */
export function needsUpdate(source, dest) {
    if (typeof source === "string" && typeof dest === "string") {
        if (fs.existsSync(dest)) {
            const {mtime: outTime} = fs.statSync(dest);
            const {mtime: inTime} = fs.statSync(source);
            if (+inTime <= +outTime) {
                return false;
            }
        }
    }
    else if (typeof source === "string" && typeof dest !== "string") {
        const {mtime: inTime} = fs.statSync(source);
        for (const filepath of dest) {
            if (fs.existsSync(filepath)) {
                const {mtime: outTime} = fs.statSync(filepath);
                if (+inTime > +outTime) {
                    return true;
                }
            }
            else {
                return true;
            }
        }
        return false;
    }
    else if (typeof source !== "string" && typeof dest === "string") {
        if (fs.existsSync(dest)) {
            const {mtime: outTime} = fs.statSync(dest);
            for (const filepath of source) {
                if (fs.existsSync(filepath)) {
                    const {mtime: inTime} = fs.statSync(filepath);
                    if (+inTime > +outTime) {
                        return true;
                    }
                }
                else {
                    return true;
                }
            }
            return false;
        }
    }
    else if (typeof source !== "string" && typeof dest !== "string") {
        for (let i = 0; i < source.length; i++) {
            if (!dest[i]) {
                continue;
            }
            if (fs.existsSync(dest[i])) {
                const {mtime: outTime} = fs.statSync(dest[i]);
                const {mtime: inTime} = fs.statSync(source[i]);
                if (+inTime > +outTime) {
                    return true;
                }
            }
            else {
                return true;
            }
        }
        return false;
    }
    return true;
}

export function getDiffTool() {
    const program = process.env.DIFF;
    if (!program) {
        log.warn("Add the 'DIFF' environment variable to the path of the program you want to use.");
        process.exit(1);
    }
    return program;
}

/**
 * Find the size of a directory recursively.
 * Symbolic links can cause a loop.
 * @param {string} root
 * @returns {number} bytes
 */
export function getDirSize(root) {
    const stats = fs.lstatSync(root);

    if (!stats.isDirectory()) {
        return stats.size;
    }

    return fs.readdirSync(root)
        .map(file => getDirSize(path.join(root, file)))
        .reduce((acc, num) => acc + num, 0);
}

/**
 * @param {string | ((file: File) => string) | { cwd?: string }} [dest]
 * @param {{ cwd?: string }} [opts]
 */
export function rm(dest, opts) {
    if (dest && typeof dest === "object") {
        opts = dest;
        dest = undefined;
    }
    let failed = false;

    const cwd = path.resolve(opts && opts.cwd || process.cwd());

    /** @type {{ file: File, deleted: boolean, promise: Promise<any>, cb: Function }[]} */
    const pending = [];

    const processDeleted = () => {
        if (failed) return;
        while (pending.length && pending[0].deleted) {
            const fileAndCallback = pending.shift();
            assert(fileAndCallback);
            const { file, cb } = fileAndCallback;
            duplex.push(file);
            cb();
        }
    };

    const duplex = new Duplex({
        objectMode: true,
        /**
         * @param {string|Buffer|File} file
         */
        write(file, _, cb) {
            if (failed) return;
            if (typeof file === "string" || Buffer.isBuffer(file)) return cb(new Error("Only Vinyl files are supported."));
            const basePath = typeof dest === "string" ? path.resolve(cwd, dest) :
                typeof dest === "function" ? path.resolve(cwd, dest(file)) :
                file.base;
            const filePath = path.resolve(basePath, file.relative);
            file.cwd = cwd;
            file.base = basePath;
            file.path = filePath;
            const entry = {
                file,
                deleted: false,
                cb,
                promise: del(file.path).then(() => {
                    entry.deleted = true;
                    processDeleted();
                }, err => {
                    failed = true;
                    pending.length = 0;
                    cb(err);
                })
            };
            pending.push(entry);
        },
        final(cb) {
            // eslint-disable-next-line no-null/no-null
            const endThenCb = () => (duplex.push(null), cb()); // signal end of read queue
            processDeleted();
            if (pending.length) {
                Promise
                    .all(pending.map(entry => entry.promise))
                    .then(() => processDeleted())
                    .then(() => endThenCb(), endThenCb);
                return;
            }
            endThenCb();
        },
        read() {
        }
    });
    return duplex;
}

class Deferred {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}

export class Debouncer {
    /**
     * @param {number} timeout
     * @param {() => Promise<any>} action
     */
    constructor(timeout, action) {
        this._timeout = timeout;
        this._action = action;
    }

    enqueue() {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = undefined;
        }

        if (!this._deferred) {
            this._deferred = new Deferred();
        }

        this._timer = setTimeout(() => this.run(), 100);
        return this._deferred.promise;
    }

    run() {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = undefined;
        }

        const deferred = this._deferred;
        assert(deferred);
        this._deferred = undefined;
        try {
            deferred.resolve(this._action());
        }
        catch (e) {
            deferred.reject(e);
        }
    }
}
