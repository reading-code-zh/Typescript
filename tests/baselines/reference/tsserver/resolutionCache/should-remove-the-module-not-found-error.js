Info 0    [00:00:09.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Info 1    [00:00:10.000] request:
    {
      "seq": 0,
      "type": "request",
      "command": "open",
      "arguments": {
        "file": "/a/b/file1.ts"
      }
    }
Before request
//// [/a/b/file1.ts]
import * as T from './moduleFile'; T.bar();


PolledWatches::

FsWatches::

FsWatchesRecursive::

Info 2    [00:00:11.000] Search path: /a/b
Info 3    [00:00:12.000] For info: /a/b/file1.ts :: No config files found.
Info 4    [00:00:13.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 5    [00:00:14.000] DirectoryWatcher:: Added:: WatchInfo: /a/b/moduleFile 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 6    [00:00:15.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b/moduleFile 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 7    [00:00:16.000] DirectoryWatcher:: Added:: WatchInfo: /a/b 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 8    [00:00:17.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 9    [00:00:18.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /dev/null/inferredProject1* WatchType: Missing file
Info 10   [00:00:19.000] DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 11   [00:00:20.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 12   [00:00:21.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 13   [00:00:22.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 14   [00:00:23.000] 	Files (1)
	/a/b/file1.ts


	file1.ts
	  Root file specified for compilation

Info 15   [00:00:24.000] -----------------------------------------------
Info 16   [00:00:25.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 16   [00:00:26.000] 	Files (1)

Info 16   [00:00:27.000] -----------------------------------------------
Info 16   [00:00:28.000] Open files: 
Info 16   [00:00:29.000] 	FileName: /a/b/file1.ts ProjectRootPath: undefined
Info 16   [00:00:30.000] 		Projects: /dev/null/inferredProject1*
After request

PolledWatches::
/a/b/modulefile:
  {"pollingInterval":500}
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b:
  {}

FsWatchesRecursive::

Info 16   [00:00:31.000] response:
    {
      "responseRequired": false
    }
Info 17   [00:00:32.000] request:
    {
      "seq": 0,
      "type": "request",
      "command": "semanticDiagnosticsSync",
      "arguments": {
        "file": "/a/b/file1.ts"
      }
    }
Before request

PolledWatches::
/a/b/modulefile:
  {"pollingInterval":500}
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b:
  {}

FsWatchesRecursive::

After request

PolledWatches::
/a/b/modulefile:
  {"pollingInterval":500}
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b:
  {}

FsWatchesRecursive::

Info 18   [00:00:33.000] response:
    {
      "response": [
        {
          "start": {
            "line": 1,
            "offset": 20
          },
          "end": {
            "line": 1,
            "offset": 34
          },
          "text": "Cannot find module './moduleFile' or its corresponding type declarations.",
          "code": 2307,
          "category": "error"
        }
      ],
      "responseRequired": true
    }
Info 19   [00:00:36.000] DirectoryWatcher:: Triggered with /a/b/moduleFile.ts :: WatchInfo: /a/b 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 20   [00:00:37.000] Scheduled: /dev/null/inferredProject1*FailedLookupInvalidation
Info 21   [00:00:38.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /a/b/moduleFile.ts :: WatchInfo: /a/b 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Before running timeout callbacks
//// [/a/b/moduleFile.ts]
export function bar() { };


PolledWatches::
/a/b/modulefile:
  {"pollingInterval":500}
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b:
  {}

FsWatchesRecursive::

Info 22   [00:00:39.000] Running: /dev/null/inferredProject1*FailedLookupInvalidation
Info 23   [00:00:40.000] Scheduled: /dev/null/inferredProject1*
Info 24   [00:00:41.000] Scheduled: *ensureProjectForOpenFiles*
After running timeout callbacks

PolledWatches::
/a/b/modulefile:
  {"pollingInterval":500}
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b:
  {}

FsWatchesRecursive::

Info 25   [00:00:42.000] request:
    {
      "seq": 0,
      "type": "request",
      "command": "change",
      "arguments": {
        "file": "/a/b/file1.ts",
        "line": 1,
        "offset": 44,
        "endLine": 1,
        "endOffset": 44,
        "insertString": "\n"
      }
    }
Before request

PolledWatches::
/a/b/modulefile:
  {"pollingInterval":500}
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b:
  {}

FsWatchesRecursive::

After request

PolledWatches::
/a/b/modulefile:
  {"pollingInterval":500}
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b:
  {}

FsWatchesRecursive::

Info 26   [00:00:43.000] response:
    {
      "responseRequired": false
    }
Info 27   [00:00:44.000] request:
    {
      "seq": 0,
      "type": "request",
      "command": "semanticDiagnosticsSync",
      "arguments": {
        "file": "/a/b/file1.ts"
      }
    }
Before request

PolledWatches::
/a/b/modulefile:
  {"pollingInterval":500}
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b:
  {}

FsWatchesRecursive::

Info 28   [00:00:45.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 29   [00:00:46.000] FileWatcher:: Added:: WatchInfo: /a/b/moduleFile.ts 500 undefined WatchType: Closed Script info
Info 30   [00:00:47.000] DirectoryWatcher:: Close:: WatchInfo: /a/b/moduleFile 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 31   [00:00:48.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /a/b/moduleFile 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 32   [00:00:49.000] DirectoryWatcher:: Close:: WatchInfo: /a/b 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 33   [00:00:50.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /a/b 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 34   [00:00:51.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 2 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info 35   [00:00:52.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 36   [00:00:53.000] 	Files (2)
	/a/b/moduleFile.ts
	/a/b/file1.ts


	moduleFile.ts
	  Imported via './moduleFile' from file 'file1.ts'
	file1.ts
	  Root file specified for compilation

Info 37   [00:00:54.000] -----------------------------------------------
After request

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/modulefile.ts:
  {}

FsWatchesRecursive::

Info 38   [00:00:55.000] response:
    {
      "response": [],
      "responseRequired": true
    }