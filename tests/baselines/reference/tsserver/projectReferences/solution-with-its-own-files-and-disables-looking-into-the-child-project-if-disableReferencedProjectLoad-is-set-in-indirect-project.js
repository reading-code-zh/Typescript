Info 0    [00:01:03.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Info 1    [00:01:04.000] Search path: /user/username/projects/myproject/src
Info 2    [00:01:05.000] For info: /user/username/projects/myproject/src/main.ts :: Config file name: /user/username/projects/myproject/tsconfig.json
Info 3    [00:01:06.000] Creating configuration project /user/username/projects/myproject/tsconfig.json
Info 4    [00:01:07.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info 5    [00:01:08.000] event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/user/username/projects/myproject/tsconfig.json","reason":"Creating possible configured project for /user/username/projects/myproject/src/main.ts to open"}}
Info 6    [00:01:09.000] Config: /user/username/projects/myproject/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/own/main.ts"
 ],
 "options": {
  "outDir": "/user/username/projects/myproject/target",
  "baseUrl": "/user/username/projects/myproject/indirect1",
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/tsconfig-indirect1.json",
   "originalPath": "./tsconfig-indirect1.json"
  }
 ]
}
Info 7    [00:01:10.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/own/main.ts 500 undefined WatchType: Closed Script info
Info 8    [00:01:11.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info 9    [00:01:12.000] Config: /user/username/projects/myproject/tsconfig-indirect1.json : {
 "rootNames": [
  "/user/username/projects/myproject/indirect1/main.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/user/username/projects/myproject/target",
  "baseUrl": "/user/username/projects/myproject/src",
  "disableReferencedProjectLoad": true,
  "configFilePath": "/user/username/projects/myproject/tsconfig-indirect1.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/tsconfig-src.json",
   "originalPath": "./tsconfig-src.json"
  }
 ]
}
Info 10   [00:01:13.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig-indirect1.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info 11   [00:01:14.000] Config: /user/username/projects/myproject/tsconfig-src.json : {
 "rootNames": [
  "/user/username/projects/myproject/src/main.ts",
  "/user/username/projects/myproject/src/helpers/functions.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/user/username/projects/myproject/target",
  "baseUrl": "/user/username/projects/myproject/src",
  "configFilePath": "/user/username/projects/myproject/tsconfig-src.json"
 }
}
Info 12   [00:01:15.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig-src.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info 13   [00:01:16.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 undefined Config: /user/username/projects/myproject/tsconfig-src.json WatchType: Wild card directory
Info 14   [00:01:17.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 undefined Config: /user/username/projects/myproject/tsconfig-src.json WatchType: Wild card directory
Info 15   [00:01:18.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirect1/main.ts 500 undefined WatchType: Closed Script info
Info 16   [00:01:19.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/helpers/functions.ts 500 undefined WatchType: Closed Script info
Info 17   [00:01:20.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 18   [00:01:21.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 19   [00:01:22.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 20   [00:01:23.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 21   [00:01:24.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 22   [00:01:25.000] 	Files (5)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/src/helpers/functions.ts
	/user/username/projects/myproject/src/main.ts
	/user/username/projects/myproject/indirect1/main.ts
	/user/username/projects/myproject/own/main.ts


	../../../../a/lib/lib.d.ts
	  Default library for target 'es3'
	src/helpers/functions.ts
	  Imported via 'helpers/functions' from file 'src/main.ts'
	src/main.ts
	  Imported via 'main' from file 'indirect1/main.ts'
	indirect1/main.ts
	  Imported via 'main' from file 'own/main.ts'
	own/main.ts
	  Part of 'files' list in tsconfig.json

Info 23   [00:01:26.000] -----------------------------------------------
Info 24   [00:01:27.000] event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/user/username/projects/myproject/tsconfig.json"}}
Info 25   [00:01:28.000] event:
    {"seq":0,"type":"event","event":"telemetry","body":{"telemetryEventName":"projectInfo","payload":{"projectId":"4a33d78ee40d836c4f4e64c59aed976628aea0013be9585c5ff171dfc41baf98","fileStats":{"js":0,"jsSize":0,"jsx":0,"jsxSize":0,"ts":4,"tsSize":166,"tsx":0,"tsxSize":0,"dts":1,"dtsSize":334,"deferred":0,"deferredSize":0},"compilerOptions":{"outDir":"","baseUrl":""},"typeAcquisition":{"enable":false,"include":false,"exclude":false},"extends":false,"files":true,"include":false,"exclude":false,"compileOnSave":false,"configFileName":"tsconfig.json","projectType":"configured","languageServiceEnabled":true,"version":"FakeVersion"}}}
Info 26   [00:01:29.000] Creating configuration project /user/username/projects/myproject/tsconfig-indirect1.json
Info 27   [00:01:30.000] event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/user/username/projects/myproject/tsconfig-indirect1.json","reason":"Creating project referenced in solution /user/username/projects/myproject/tsconfig.json to find possible configured project for /user/username/projects/myproject/src/main.ts to open"}}
Info 28   [00:01:31.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig-indirect1.json
Info 29   [00:01:32.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig-indirect1.json WatchType: Type roots
Info 30   [00:01:33.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig-indirect1.json WatchType: Type roots
Info 31   [00:01:34.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig-indirect1.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 32   [00:01:35.000] Project '/user/username/projects/myproject/tsconfig-indirect1.json' (Configured)
Info 33   [00:01:36.000] 	Files (4)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/src/helpers/functions.ts
	/user/username/projects/myproject/src/main.ts
	/user/username/projects/myproject/indirect1/main.ts


	../../../../a/lib/lib.d.ts
	  Default library for target 'es3'
	src/helpers/functions.ts
	  Imported via 'helpers/functions' from file 'src/main.ts'
	src/main.ts
	  Imported via 'main' from file 'indirect1/main.ts'
	indirect1/main.ts
	  Part of 'files' list in tsconfig.json

Info 34   [00:01:37.000] -----------------------------------------------
Info 35   [00:01:38.000] event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/user/username/projects/myproject/tsconfig-indirect1.json"}}
Info 36   [00:01:39.000] event:
    {"seq":0,"type":"event","event":"telemetry","body":{"telemetryEventName":"projectInfo","payload":{"projectId":"9ccc3aed1af08832ccb25ea453f7b771199f56af238b53cc428549dbd2d59246","fileStats":{"js":0,"jsSize":0,"jsx":0,"jsxSize":0,"ts":3,"tsSize":134,"tsx":0,"tsxSize":0,"dts":1,"dtsSize":334,"deferred":0,"deferredSize":0},"compilerOptions":{"composite":true,"outDir":"","baseUrl":"","disableReferencedProjectLoad":true},"typeAcquisition":{"enable":false,"include":false,"exclude":false},"extends":false,"files":true,"include":false,"exclude":false,"compileOnSave":false,"configFileName":"other","projectType":"configured","languageServiceEnabled":true,"version":"FakeVersion"}}}
Info 37   [00:01:40.000] event:
    {"seq":0,"type":"event","event":"configFileDiag","body":{"triggerFile":"/user/username/projects/myproject/src/main.ts","configFile":"/user/username/projects/myproject/tsconfig.json","diagnostics":[]}}
Info 38   [00:01:41.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 38   [00:01:42.000] 	Files (5)

Info 38   [00:01:43.000] -----------------------------------------------
Info 38   [00:01:44.000] Project '/user/username/projects/myproject/tsconfig-indirect1.json' (Configured)
Info 38   [00:01:45.000] 	Files (4)

Info 38   [00:01:46.000] -----------------------------------------------
Info 38   [00:01:47.000] Open files: 
Info 38   [00:01:48.000] 	FileName: /user/username/projects/myproject/src/main.ts ProjectRootPath: undefined
Info 38   [00:01:49.000] 		Projects: /user/username/projects/myproject/tsconfig.json,/user/username/projects/myproject/tsconfig-indirect1.json
Info 38   [00:01:50.000] getDefaultProject for /user/username/projects/myproject/src/main.ts: /user/username/projects/myproject/tsconfig.json
Info 38   [00:01:51.000] findDefaultConfiguredProject for /user/username/projects/myproject/src/main.ts: undefined
Info 38   [00:01:52.000] Search path: /dummy
Info 39   [00:01:53.000] For info: /dummy/dummy.ts :: No config files found.
Info 40   [00:01:54.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 41   [00:01:55.000] DirectoryWatcher:: Added:: WatchInfo: /dummy/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 42   [00:01:56.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /dummy/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 43   [00:01:57.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 44   [00:01:58.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 45   [00:01:59.000] 	Files (2)
	/a/lib/lib.d.ts
	/dummy/dummy.ts


	../a/lib/lib.d.ts
	  Default library for target 'es5'
	dummy.ts
	  Root file specified for compilation

Info 46   [00:02:00.000] -----------------------------------------------
Info 47   [00:02:01.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 47   [00:02:02.000] 	Files (5)

Info 47   [00:02:03.000] -----------------------------------------------
Info 47   [00:02:04.000] Project '/user/username/projects/myproject/tsconfig-indirect1.json' (Configured)
Info 47   [00:02:05.000] 	Files (4)

Info 47   [00:02:06.000] -----------------------------------------------
Info 47   [00:02:07.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 47   [00:02:08.000] 	Files (2)

Info 47   [00:02:09.000] -----------------------------------------------
Info 47   [00:02:10.000] Open files: 
Info 47   [00:02:11.000] 	FileName: /user/username/projects/myproject/src/main.ts ProjectRootPath: undefined
Info 47   [00:02:12.000] 		Projects: /user/username/projects/myproject/tsconfig.json,/user/username/projects/myproject/tsconfig-indirect1.json
Info 47   [00:02:13.000] 	FileName: /dummy/dummy.ts ProjectRootPath: undefined
Info 47   [00:02:14.000] 		Projects: /dev/null/inferredProject1*
Info 47   [00:02:15.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/main.ts 500 undefined WatchType: Closed Script info
Info 48   [00:02:16.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 48   [00:02:17.000] 	Files (5)

Info 48   [00:02:18.000] -----------------------------------------------
Info 48   [00:02:19.000] Project '/user/username/projects/myproject/tsconfig-indirect1.json' (Configured)
Info 48   [00:02:20.000] 	Files (4)

Info 48   [00:02:21.000] -----------------------------------------------
Info 48   [00:02:22.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 48   [00:02:23.000] 	Files (2)

Info 48   [00:02:24.000] -----------------------------------------------
Info 48   [00:02:25.000] Open files: 
Info 48   [00:02:26.000] 	FileName: /dummy/dummy.ts ProjectRootPath: undefined
Info 48   [00:02:27.000] 		Projects: /dev/null/inferredProject1*
Info 48   [00:02:28.000] FileWatcher:: Added:: WatchInfo: /dummy/dummy.ts 500 undefined WatchType: Closed Script info
Info 49   [00:02:29.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 49   [00:02:30.000] 	Files (5)

Info 49   [00:02:31.000] -----------------------------------------------
Info 49   [00:02:32.000] Project '/user/username/projects/myproject/tsconfig-indirect1.json' (Configured)
Info 49   [00:02:33.000] 	Files (4)

Info 49   [00:02:34.000] -----------------------------------------------
Info 49   [00:02:35.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 49   [00:02:36.000] 	Files (2)

Info 49   [00:02:37.000] -----------------------------------------------
Info 49   [00:02:38.000] Open files: 
Info 49   [00:02:39.000] FileWatcher:: Close:: WatchInfo: /dummy/dummy.ts 500 undefined WatchType: Closed Script info
Info 50   [00:02:40.000] Search path: /dummy
Info 51   [00:02:41.000] For info: /dummy/dummy.ts :: No config files found.
Info 52   [00:02:42.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 53   [00:02:43.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 2 structureChanged: false structureIsReused:: Not Elapsed:: *ms
Info 54   [00:02:44.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 55   [00:02:45.000] 	Files (2)
	/a/lib/lib.d.ts
	/dummy/dummy.ts


	../a/lib/lib.d.ts
	  Default library for target 'es5'
	dummy.ts
	  Root file specified for compilation

Info 56   [00:02:46.000] -----------------------------------------------
Info 57   [00:02:47.000] `remove Project::
Info 58   [00:02:48.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 59   [00:02:49.000] 	Files (5)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/src/helpers/functions.ts
	/user/username/projects/myproject/src/main.ts
	/user/username/projects/myproject/indirect1/main.ts
	/user/username/projects/myproject/own/main.ts


	../../../../a/lib/lib.d.ts
	  Default library for target 'es3'
	src/helpers/functions.ts
	  Imported via 'helpers/functions' from file 'src/main.ts'
	src/main.ts
	  Imported via 'main' from file 'indirect1/main.ts'
	indirect1/main.ts
	  Imported via 'main' from file 'own/main.ts'
	own/main.ts
	  Part of 'files' list in tsconfig.json

Info 60   [00:02:50.000] -----------------------------------------------
Info 61   [00:02:51.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info 62   [00:02:52.000] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 63   [00:02:53.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 64   [00:02:54.000] `remove Project::
Info 65   [00:02:55.000] Project '/user/username/projects/myproject/tsconfig-indirect1.json' (Configured)
Info 66   [00:02:56.000] 	Files (4)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/src/helpers/functions.ts
	/user/username/projects/myproject/src/main.ts
	/user/username/projects/myproject/indirect1/main.ts


	../../../../a/lib/lib.d.ts
	  Default library for target 'es3'
	src/helpers/functions.ts
	  Imported via 'helpers/functions' from file 'src/main.ts'
	src/main.ts
	  Imported via 'main' from file 'indirect1/main.ts'
	indirect1/main.ts
	  Part of 'files' list in tsconfig.json

Info 67   [00:02:57.000] -----------------------------------------------
Info 68   [00:02:58.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/tsconfig-indirect1.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info 69   [00:02:59.000] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/src 1 undefined Config: /user/username/projects/myproject/tsconfig-src.json WatchType: Wild card directory
Info 70   [00:03:00.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/src 1 undefined Config: /user/username/projects/myproject/tsconfig-src.json WatchType: Wild card directory
Info 71   [00:03:01.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/tsconfig-src.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info 72   [00:03:02.000] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig-indirect1.json WatchType: Type roots
Info 73   [00:03:03.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig-indirect1.json WatchType: Type roots
Info 74   [00:03:04.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/src/main.ts 500 undefined WatchType: Closed Script info
Info 75   [00:03:05.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/own/main.ts 500 undefined WatchType: Closed Script info
Info 76   [00:03:06.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/indirect1/main.ts 500 undefined WatchType: Closed Script info
Info 77   [00:03:07.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/src/helpers/functions.ts 500 undefined WatchType: Closed Script info
Info 78   [00:03:08.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 78   [00:03:09.000] 	Files (2)

Info 78   [00:03:10.000] -----------------------------------------------
Info 78   [00:03:11.000] Open files: 
Info 78   [00:03:12.000] 	FileName: /dummy/dummy.ts ProjectRootPath: undefined
Info 78   [00:03:13.000] 		Projects: /dev/null/inferredProject1*
Info 78   [00:03:14.000] Search path: /user/username/projects/myproject/src
Info 79   [00:03:15.000] For info: /user/username/projects/myproject/src/main.ts :: Config file name: /user/username/projects/myproject/tsconfig.json
Info 80   [00:03:16.000] Creating configuration project /user/username/projects/myproject/tsconfig.json
Info 81   [00:03:17.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info 82   [00:03:18.000] event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/user/username/projects/myproject/tsconfig.json","reason":"Creating possible configured project for /user/username/projects/myproject/src/main.ts to open"}}
Info 83   [00:03:19.000] Config: /user/username/projects/myproject/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/own/main.ts"
 ],
 "options": {
  "outDir": "/user/username/projects/myproject/target",
  "baseUrl": "/user/username/projects/myproject/indirect1",
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/tsconfig-indirect1.json",
   "originalPath": "./tsconfig-indirect1.json"
  }
 ]
}
Info 84   [00:03:20.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/own/main.ts 500 undefined WatchType: Closed Script info
Info 85   [00:03:21.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info 86   [00:03:22.000] Config: /user/username/projects/myproject/tsconfig-indirect1.json : {
 "rootNames": [
  "/user/username/projects/myproject/indirect1/main.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/user/username/projects/myproject/target",
  "baseUrl": "/user/username/projects/myproject/src",
  "disableReferencedProjectLoad": true,
  "configFilePath": "/user/username/projects/myproject/tsconfig-indirect1.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/tsconfig-src.json",
   "originalPath": "./tsconfig-src.json"
  }
 ]
}
Info 87   [00:03:23.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig-indirect1.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info 88   [00:03:24.000] Config: /user/username/projects/myproject/tsconfig-src.json : {
 "rootNames": [
  "/user/username/projects/myproject/src/main.ts",
  "/user/username/projects/myproject/src/helpers/functions.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/user/username/projects/myproject/target",
  "baseUrl": "/user/username/projects/myproject/src",
  "configFilePath": "/user/username/projects/myproject/tsconfig-src.json"
 }
}
Info 89   [00:03:25.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig-src.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info 90   [00:03:26.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 undefined Config: /user/username/projects/myproject/tsconfig-src.json WatchType: Wild card directory
Info 91   [00:03:27.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 undefined Config: /user/username/projects/myproject/tsconfig-src.json WatchType: Wild card directory
Info 92   [00:03:28.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/indirect1/main.ts 500 undefined WatchType: Closed Script info
Info 93   [00:03:29.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/helpers/functions.ts 500 undefined WatchType: Closed Script info
Info 94   [00:03:30.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 95   [00:03:31.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 96   [00:03:32.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 97   [00:03:33.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 98   [00:03:34.000] 	Files (5)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/src/helpers/functions.ts
	/user/username/projects/myproject/src/main.ts
	/user/username/projects/myproject/indirect1/main.ts
	/user/username/projects/myproject/own/main.ts


	../../../../a/lib/lib.d.ts
	  Default library for target 'es3'
	src/helpers/functions.ts
	  Imported via 'helpers/functions' from file 'src/main.ts'
	src/main.ts
	  Imported via 'main' from file 'indirect1/main.ts'
	indirect1/main.ts
	  Imported via 'main' from file 'own/main.ts'
	own/main.ts
	  Part of 'files' list in tsconfig.json

Info 99   [00:03:35.000] -----------------------------------------------
Info 100  [00:03:36.000] event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/user/username/projects/myproject/tsconfig.json"}}
Info 101  [00:03:37.000] Creating configuration project /user/username/projects/myproject/tsconfig-indirect1.json
Info 102  [00:03:38.000] event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/user/username/projects/myproject/tsconfig-indirect1.json","reason":"Creating project referenced in solution /user/username/projects/myproject/tsconfig.json to find possible configured project for /user/username/projects/myproject/src/main.ts to open"}}
Info 103  [00:03:39.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig-indirect1.json
Info 104  [00:03:40.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig-indirect1.json WatchType: Type roots
Info 105  [00:03:41.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig-indirect1.json WatchType: Type roots
Info 106  [00:03:42.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig-indirect1.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 107  [00:03:43.000] Project '/user/username/projects/myproject/tsconfig-indirect1.json' (Configured)
Info 108  [00:03:44.000] 	Files (4)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/src/helpers/functions.ts
	/user/username/projects/myproject/src/main.ts
	/user/username/projects/myproject/indirect1/main.ts


	../../../../a/lib/lib.d.ts
	  Default library for target 'es3'
	src/helpers/functions.ts
	  Imported via 'helpers/functions' from file 'src/main.ts'
	src/main.ts
	  Imported via 'main' from file 'indirect1/main.ts'
	indirect1/main.ts
	  Part of 'files' list in tsconfig.json

Info 109  [00:03:45.000] -----------------------------------------------
Info 110  [00:03:46.000] event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/user/username/projects/myproject/tsconfig-indirect1.json"}}
Info 111  [00:03:47.000] event:
    {"seq":0,"type":"event","event":"configFileDiag","body":{"triggerFile":"/user/username/projects/myproject/src/main.ts","configFile":"/user/username/projects/myproject/tsconfig.json","diagnostics":[]}}
Info 112  [00:03:48.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 112  [00:03:49.000] 	Files (5)

Info 112  [00:03:50.000] -----------------------------------------------
Info 112  [00:03:51.000] Project '/user/username/projects/myproject/tsconfig-indirect1.json' (Configured)
Info 112  [00:03:52.000] 	Files (4)

Info 112  [00:03:53.000] -----------------------------------------------
Info 112  [00:03:54.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 112  [00:03:55.000] 	Files (2)

Info 112  [00:03:56.000] -----------------------------------------------
Info 112  [00:03:57.000] Open files: 
Info 112  [00:03:58.000] 	FileName: /dummy/dummy.ts ProjectRootPath: undefined
Info 112  [00:03:59.000] 		Projects: /dev/null/inferredProject1*
Info 112  [00:04:00.000] 	FileName: /user/username/projects/myproject/src/main.ts ProjectRootPath: undefined
Info 112  [00:04:01.000] 		Projects: /user/username/projects/myproject/tsconfig.json,/user/username/projects/myproject/tsconfig-indirect1.json
Info 112  [00:04:02.000] reload projects.
Info 113  [00:04:03.000] Scheduled: /dev/null/inferredProject1*
Info 114  [00:04:04.000] Scheduled: /user/username/projects/myproject/tsconfig.json
Info 115  [00:04:05.000] Scheduled: /user/username/projects/myproject/tsconfig-indirect1.json
Info 116  [00:04:06.000] Scheduled: *ensureProjectForOpenFiles*
Info 117  [00:04:07.000] Scheduled: /user/username/projects/myproject/tsconfig.json, Cancelled earlier one
Info 118  [00:04:08.000] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info 119  [00:04:09.000] Scheduled: /user/username/projects/myproject/tsconfig.json, Cancelled earlier one
Info 120  [00:04:10.000] Scheduled: /user/username/projects/myproject/tsconfig-indirect1.json, Cancelled earlier one
Info 121  [00:04:11.000] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info 122  [00:04:12.000] Scheduled: /user/username/projects/myproject/tsconfig.json, Cancelled earlier one
Info 123  [00:04:13.000] Scheduled: /user/username/projects/myproject/tsconfig-indirect1.json, Cancelled earlier one
Info 124  [00:04:14.000] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info 125  [00:04:15.000] Search path: /dummy
Info 126  [00:04:16.000] For info: /dummy/dummy.ts :: No config files found.
Info 127  [00:04:17.000] Search path: /user/username/projects/myproject/src
Info 128  [00:04:18.000] For info: /user/username/projects/myproject/src/main.ts :: Config file name: /user/username/projects/myproject/tsconfig.json
Info 129  [00:04:19.000] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 130  [00:04:20.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 131  [00:04:21.000] Reloading configured project /user/username/projects/myproject/tsconfig.json
Info 132  [00:04:22.000] event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/user/username/projects/myproject/tsconfig.json","reason":"User requested reload projects"}}
Info 133  [00:04:23.000] Config: /user/username/projects/myproject/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/own/main.ts"
 ],
 "options": {
  "outDir": "/user/username/projects/myproject/target",
  "baseUrl": "/user/username/projects/myproject/indirect1",
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/tsconfig-indirect1.json",
   "originalPath": "./tsconfig-indirect1.json"
  }
 ]
}
Info 134  [00:04:24.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info 135  [00:04:25.000] Config: /user/username/projects/myproject/tsconfig-indirect1.json : {
 "rootNames": [
  "/user/username/projects/myproject/indirect1/main.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/user/username/projects/myproject/target",
  "baseUrl": "/user/username/projects/myproject/src",
  "disableReferencedProjectLoad": true,
  "configFilePath": "/user/username/projects/myproject/tsconfig-indirect1.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/tsconfig-src.json",
   "originalPath": "./tsconfig-src.json"
  }
 ]
}
Info 136  [00:04:26.000] Config: /user/username/projects/myproject/tsconfig-src.json : {
 "rootNames": [
  "/user/username/projects/myproject/src/main.ts",
  "/user/username/projects/myproject/src/helpers/functions.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/user/username/projects/myproject/target",
  "baseUrl": "/user/username/projects/myproject/src",
  "configFilePath": "/user/username/projects/myproject/tsconfig-src.json"
 }
}
Info 137  [00:04:27.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 138  [00:04:28.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 139  [00:04:29.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 140  [00:04:30.000] Different program with same set of files
Info 141  [00:04:31.000] event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/user/username/projects/myproject/tsconfig.json"}}
Info 142  [00:04:32.000] event:
    {"seq":0,"type":"event","event":"configFileDiag","body":{"triggerFile":"/user/username/projects/myproject/tsconfig.json","configFile":"/user/username/projects/myproject/tsconfig.json","diagnostics":[]}}
Info 143  [00:04:33.000] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig-indirect1.json WatchType: Type roots
Info 144  [00:04:34.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig-indirect1.json WatchType: Type roots
Info 145  [00:04:35.000] Reloading configured project /user/username/projects/myproject/tsconfig-indirect1.json
Info 146  [00:04:36.000] event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/user/username/projects/myproject/tsconfig-indirect1.json","reason":"User requested reload projects"}}
Info 147  [00:04:37.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig-indirect1.json
Info 148  [00:04:38.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig-indirect1.json WatchType: Type roots
Info 149  [00:04:39.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig-indirect1.json WatchType: Type roots
Info 150  [00:04:40.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig-indirect1.json Version: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 151  [00:04:41.000] Different program with same set of files
Info 152  [00:04:42.000] event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/user/username/projects/myproject/tsconfig-indirect1.json"}}
Info 153  [00:04:43.000] event:
    {"seq":0,"type":"event","event":"configFileDiag","body":{"triggerFile":"/user/username/projects/myproject/tsconfig-indirect1.json","configFile":"/user/username/projects/myproject/tsconfig-indirect1.json","diagnostics":[]}}
Info 154  [00:04:44.000] DirectoryWatcher:: Close:: WatchInfo: /dummy/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 155  [00:04:45.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /dummy/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 156  [00:04:46.000] Before ensureProjectForOpenFiles:
Info 157  [00:04:47.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 157  [00:04:48.000] 	Files (5)

Info 157  [00:04:49.000] -----------------------------------------------
Info 157  [00:04:50.000] Project '/user/username/projects/myproject/tsconfig-indirect1.json' (Configured)
Info 157  [00:04:51.000] 	Files (4)

Info 157  [00:04:52.000] -----------------------------------------------
Info 157  [00:04:53.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 157  [00:04:54.000] 	Files (2)

Info 157  [00:04:55.000] -----------------------------------------------
Info 157  [00:04:56.000] Open files: 
Info 157  [00:04:57.000] 	FileName: /dummy/dummy.ts ProjectRootPath: undefined
Info 157  [00:04:58.000] 		Projects: /dev/null/inferredProject1*
Info 157  [00:04:59.000] 	FileName: /user/username/projects/myproject/src/main.ts ProjectRootPath: undefined
Info 157  [00:05:00.000] 		Projects: /user/username/projects/myproject/tsconfig.json,/user/username/projects/myproject/tsconfig-indirect1.json
Info 157  [00:05:01.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 158  [00:05:02.000] DirectoryWatcher:: Added:: WatchInfo: /dummy/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 159  [00:05:03.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /dummy/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 160  [00:05:04.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 3 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 161  [00:05:05.000] Different program with same set of files
Info 162  [00:05:06.000] After ensureProjectForOpenFiles:
Info 163  [00:05:07.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 163  [00:05:08.000] 	Files (5)

Info 163  [00:05:09.000] -----------------------------------------------
Info 163  [00:05:10.000] Project '/user/username/projects/myproject/tsconfig-indirect1.json' (Configured)
Info 163  [00:05:11.000] 	Files (4)

Info 163  [00:05:12.000] -----------------------------------------------
Info 163  [00:05:13.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 163  [00:05:14.000] 	Files (2)

Info 163  [00:05:15.000] -----------------------------------------------
Info 163  [00:05:16.000] Open files: 
Info 163  [00:05:17.000] 	FileName: /dummy/dummy.ts ProjectRootPath: undefined
Info 163  [00:05:18.000] 		Projects: /dev/null/inferredProject1*
Info 163  [00:05:19.000] 	FileName: /user/username/projects/myproject/src/main.ts ProjectRootPath: undefined
Info 163  [00:05:20.000] 		Projects: /user/username/projects/myproject/tsconfig.json,/user/username/projects/myproject/tsconfig-indirect1.json