/// <reference path="../fourslash.ts" />

// @moduleResolution: node

// @Filename: /node_modules/react/package.json
//// { "name": "react", "version": "16.8.6", "main": "index.js" }

// @Filename: /node_modules/react/index.js
//// 'use strict';
//// 
//// if (process.env.NODE_ENV === 'production') {
////   module.exports = require('./cjs/react.production.min.js');
//// } else {
////   module.exports = require('./cjs/react.development.js');
//// }

// @Filename: /node_modules/react/cjs/react.production.min.js
//// 'use strict';exports./*production*/useState=function(a){};exports.version='16.8.6';

// @Filename: /node_modules/react/cjs/react.development.js
//// 'use strict';
//// if (process.env.NODE_ENV !== 'production') {
////   (function() {
////     function useState(initialState) {}
////     exports./*development*/useState = useState;
////     exports.version = '16.8.6';
////   }());
//// }

// @Filename: /index.ts
//// import { [|/*start*/useState|] } from 'react';

verify.goToSourceDefinition("start", ["production", "development"]);
