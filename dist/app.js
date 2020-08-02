/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/app.ts":
/*!***************************!*\
  !*** ./src/server/app.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\nconst express_session_1 = __importDefault(__webpack_require__(/*! express-session */ \"express-session\"));\nconst morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst routes_1 = __importDefault(__webpack_require__(/*! ./routes */ \"./src/server/routes.ts\"));\nconst config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./src/server/config.ts\"));\n__webpack_require__(/*! ./db/mongo */ \"./src/server/db/mongo.ts\");\nconst app = express_1.default();\nconst staticWay = path_1.default.resolve(`${__dirname}../../public/build/`);\nconst staticHandler = express_1.default.static(staticWay);\napp\n    .use(helmet_1.default())\n    .use(morgan_1.default('tiny'))\n    .use(express_session_1.default({\n    resave: true,\n    saveUninitialized: true,\n    secret: config_1.default.secret,\n}))\n    .use(body_parser_1.default.json())\n    .use('/', staticHandler)\n    .use('/api', routes_1.default);\napp.listen(config_1.default.port, () => {\n    console.log(`Server is started in http://127.0.0.1:${config_1.default.port}/`);\n});\n\n\n//# sourceURL=webpack:///./src/server/app.ts?");

/***/ }),

/***/ "./src/server/config.ts":
/*!******************************!*\
  !*** ./src/server/config.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst config = {\n    database: 'mongodb://mongodb:27017/polyteacher',\n    port: 3000,\n    secret: 'itsasecret',\n};\nexports.default = config;\n\n\n//# sourceURL=webpack:///./src/server/config.ts?");

/***/ }),

/***/ "./src/server/controllers/teachers/index.ts":
/*!**************************************************!*\
  !*** ./src/server/controllers/teachers/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.addTeacher = exports.getAllTeachers = void 0;\nconst TeacherServices = __importStar(__webpack_require__(/*! ../../services/teacherServices */ \"./src/server/services/teacherServices.ts\"));\nfunction getAllTeachers(req, res, next) {\n    return __awaiter(this, void 0, void 0, function* () {\n        let teachers;\n        try {\n            teachers = yield TeacherServices.getAllTeachers();\n        }\n        catch ({ message }) {\n            res.status(500).send(message);\n            return next();\n        }\n        return res.json(teachers);\n    });\n}\nexports.getAllTeachers = getAllTeachers;\nfunction addTeacher(req, res, next) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const { name, surname, patronymic } = req.body;\n        let teachers;\n        try {\n            teachers = yield TeacherServices.addTeacher(name, surname, patronymic);\n        }\n        catch ({ message }) {\n            console.log(message);\n            res.status(500).json(message);\n            return next();\n        }\n        return res.json(teachers);\n    });\n}\nexports.addTeacher = addTeacher;\n\n\n//# sourceURL=webpack:///./src/server/controllers/teachers/index.ts?");

/***/ }),

/***/ "./src/server/db/mongo.ts":
/*!********************************!*\
  !*** ./src/server/db/mongo.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst bluebird_1 = __importDefault(__webpack_require__(/*! bluebird */ \"bluebird\"));\nconst config_1 = __importDefault(__webpack_require__(/*! ../config */ \"./src/server/config.ts\"));\nmongoose_1.default.Promise = bluebird_1.default;\nmongoose_1.default.connect(config_1.default.database, (err) => {\n    if (err)\n        throw err;\n    console.log('Mongo is connected');\n});\n\n\n//# sourceURL=webpack:///./src/server/db/mongo.ts?");

/***/ }),

/***/ "./src/server/models/teacher.ts":
/*!**************************************!*\
  !*** ./src/server/models/teacher.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __importStar(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst TeacherSchema = new mongoose_1.Schema({\n    name: {\n        type: String, required: true,\n    },\n    surname: {\n        type: String, required: true,\n    },\n    patronymic: {\n        type: String, required: true,\n    },\n});\nTeacherSchema.index({ name: 1, surname: 1, patronymic: 1 }, { unique: true });\nexports.default = mongoose_1.default.model('Teacher', TeacherSchema);\n\n\n//# sourceURL=webpack:///./src/server/models/teacher.ts?");

/***/ }),

/***/ "./src/server/routes.ts":
/*!******************************!*\
  !*** ./src/server/routes.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst TeachersControllers = __importStar(__webpack_require__(/*! ./controllers/teachers */ \"./src/server/controllers/teachers/index.ts\"));\nconst router = express_1.default.Router();\nrouter\n    .get('/ping', (req, res) => {\n    console.log(req.headers.cookie);\n    return res.json({ status: 200 });\n})\n    .get('/teachers', TeachersControllers.getAllTeachers)\n    .post('/teachers', TeachersControllers.addTeacher);\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes.ts?");

/***/ }),

/***/ "./src/server/services/teacherServices.ts":
/*!************************************************!*\
  !*** ./src/server/services/teacherServices.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.addTeacher = exports.getAllTeachers = void 0;\nconst teacher_1 = __importDefault(__webpack_require__(/*! ../models/teacher */ \"./src/server/models/teacher.ts\"));\nfunction getAllTeachers() {\n    return __awaiter(this, void 0, void 0, function* () {\n        let teacher;\n        try {\n            teacher = yield teacher_1.default.find();\n        }\n        catch (e) {\n            throw e;\n        }\n        return teacher;\n    });\n}\nexports.getAllTeachers = getAllTeachers;\nfunction addTeacher(name, surname, patronymic) {\n    return __awaiter(this, void 0, void 0, function* () {\n        let teacher;\n        try {\n            teacher = yield teacher_1.default.create({ name, surname, patronymic });\n        }\n        catch (e) {\n            throw e;\n        }\n        return teacher;\n    });\n}\nexports.addTeacher = addTeacher;\n\n\n//# sourceURL=webpack:///./src/server/services/teacherServices.ts?");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");\n\n//# sourceURL=webpack:///external_%22bluebird%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });