const path = require("path");
const cp = require("child_process");
const fs = require("fs");
const { join } = require("path");

const tscPath = path.join(__dirname, "../built/local/tsc");
const inputPath = path.join(__dirname, "./input.ts");
const outPath = join(__dirname, "./input.js");

if(fs.existsSync(outPath)){
  fs.unlinkSync(outPath);
}

const app = cp.spawn("node", [tscPath, inputPath], {
  encoding: "utf-8"
});

app.stderr.on("data", (data) => {
  console.log("err",data.toString());
});

app.stdout.on("data", data => {
  console.log(data.toString());
});

