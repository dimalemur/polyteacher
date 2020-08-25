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
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nvar body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\nvar express_session_1 = __importDefault(__webpack_require__(/*! express-session */ \"express-session\"));\nvar morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nvar routes_1 = __importDefault(__webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\"));\nvar config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./src/server/config.ts\"));\n__webpack_require__(/*! ./db/mongo */ \"./src/server/db/mongo.ts\");\nvar app = express_1.default();\nvar rootDir = (process.env.PWD !== undefined) ? process.env.PWD : '/';\nvar staticWay = path_1.default.join(rootDir, '/public/build/');\nvar staticHandler = express_1.default.static(staticWay);\napp\n    .use(helmet_1.default())\n    .use(morgan_1.default('tiny'))\n    .use(express_session_1.default({\n    resave: true,\n    saveUninitialized: true,\n    secret: config_1.default.secret,\n}))\n    .use(body_parser_1.default.json())\n    .use('/api', routes_1.default)\n    .use('/', staticHandler)\n    .use('/auth', staticHandler);\napp.listen(config_1.default.port, function () {\n    console.log(\"Server is started in http://127.0.0.1:\" + config_1.default.port + \"/\");\n});\n\n\n//# sourceURL=webpack:///./src/server/app.ts?");

/***/ }),

/***/ "./src/server/config.ts":
/*!******************************!*\
  !*** ./src/server/config.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar config = {\n    database: 'mongodb://mongodb:27017/polyteacher',\n    port: 3000,\n    secret: 'itsasecret',\n};\nexports.default = config;\n\n\n//# sourceURL=webpack:///./src/server/config.ts?");

/***/ }),

/***/ "./src/server/controllers/teachers/index.ts":
/*!**************************************************!*\
  !*** ./src/server/controllers/teachers/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setLikeTeacher = exports.addTeacher = exports.getAllTeachers = void 0;\nvar TeacherServices = __importStar(__webpack_require__(/*! ../../services/teacherServices */ \"./src/server/services/teacherServices.ts\"));\nfunction getAllTeachers(req, res, next) {\n    return __awaiter(this, void 0, void 0, function () {\n        var teachers, _a, message;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    _b.trys.push([0, 2, , 3]);\n                    return [4, TeacherServices.getAllTeachers()];\n                case 1:\n                    teachers = _b.sent();\n                    return [3, 3];\n                case 2:\n                    _a = _b.sent();\n                    message = _a.message;\n                    res.status(500).send(message);\n                    return [2, next()];\n                case 3: return [2, res.json(teachers)];\n            }\n        });\n    });\n}\nexports.getAllTeachers = getAllTeachers;\nfunction addTeacher(req, res, next) {\n    return __awaiter(this, void 0, void 0, function () {\n        var _a, name, surname, patronymic, teachers, _b, message;\n        return __generator(this, function (_c) {\n            switch (_c.label) {\n                case 0:\n                    _a = req.body, name = _a.name, surname = _a.surname, patronymic = _a.patronymic;\n                    _c.label = 1;\n                case 1:\n                    _c.trys.push([1, 3, , 4]);\n                    return [4, TeacherServices.addTeacher(name, surname, patronymic)];\n                case 2:\n                    teachers = _c.sent();\n                    return [3, 4];\n                case 3:\n                    _b = _c.sent();\n                    message = _b.message;\n                    res.status(500).json(message);\n                    return [2, next()];\n                case 4: return [2, res.json(teachers)];\n            }\n        });\n    });\n}\nexports.addTeacher = addTeacher;\nfunction setLikeTeacher(req, res, next) {\n    return __awaiter(this, void 0, void 0, function () {\n        var teacherId, teachers, _a, message;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    teacherId = req.body.teacherId;\n                    _b.label = 1;\n                case 1:\n                    _b.trys.push([1, 3, , 4]);\n                    return [4, TeacherServices.setLikeTeacher(teacherId)];\n                case 2:\n                    teachers = _b.sent();\n                    return [3, 4];\n                case 3:\n                    _a = _b.sent();\n                    message = _a.message;\n                    res.status(500).send(message);\n                    return [2, next()];\n                case 4:\n                    console.log(teachers);\n                    return [2, res.status(200).send({ status: 'Ok' })];\n            }\n        });\n    });\n}\nexports.setLikeTeacher = setLikeTeacher;\n\n\n//# sourceURL=webpack:///./src/server/controllers/teachers/index.ts?");

/***/ }),

/***/ "./src/server/controllers/users/index.ts":
/*!***********************************************!*\
  !*** ./src/server/controllers/users/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getCurrentUser = exports.authUser = exports.regUser = void 0;\nvar UserServices = __importStar(__webpack_require__(/*! ../../services/userServices */ \"./src/server/services/userServices.ts\"));\nfunction regUser(req, res, next) {\n    return __awaiter(this, void 0, void 0, function () {\n        var _a, login, password, repassword, user, _b, message;\n        return __generator(this, function (_c) {\n            switch (_c.label) {\n                case 0:\n                    _a = req.body, login = _a.login, password = _a.password, repassword = _a.repassword;\n                    if (!(password === repassword)) return [3, 5];\n                    _c.label = 1;\n                case 1:\n                    _c.trys.push([1, 3, , 4]);\n                    return [4, UserServices.regUser(login, password)];\n                case 2:\n                    user = _c.sent();\n                    return [3, 4];\n                case 3:\n                    _b = _c.sent();\n                    message = _b.message;\n                    res.status(500).json(message);\n                    return [2, next()];\n                case 4: return [2, res.json(user)];\n                case 5: return [2, res.status(403).send('input data error')];\n            }\n        });\n    });\n}\nexports.regUser = regUser;\nfunction authUser(req, res, next) {\n    return __awaiter(this, void 0, void 0, function () {\n        var _a, login, password, token, _b, message;\n        return __generator(this, function (_c) {\n            switch (_c.label) {\n                case 0:\n                    _a = req.body, login = _a.login, password = _a.password;\n                    _c.label = 1;\n                case 1:\n                    _c.trys.push([1, 3, , 4]);\n                    return [4, UserServices.authUser(login, password)];\n                case 2:\n                    token = _c.sent();\n                    return [3, 4];\n                case 3:\n                    _b = _c.sent();\n                    message = _b.message;\n                    res.status(500).json(message);\n                    return [2, next()];\n                case 4: return [2, res.json({ token: token })];\n            }\n        });\n    });\n}\nexports.authUser = authUser;\nfunction getCurrentUser(req, res, next) {\n    return __awaiter(this, void 0, void 0, function () {\n        var userId, user, _a, message;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    userId = req.userId;\n                    if (!(userId !== undefined)) return [3, 5];\n                    console.log(userId);\n                    user = void 0;\n                    _b.label = 1;\n                case 1:\n                    _b.trys.push([1, 3, , 4]);\n                    return [4, UserServices.getUserById(userId)];\n                case 2:\n                    user = _b.sent();\n                    return [3, 4];\n                case 3:\n                    _a = _b.sent();\n                    message = _a.message;\n                    res.status(500).send(message);\n                    return [2, next()];\n                case 4: return [2, res.json(user)];\n                case 5: return [2];\n            }\n        });\n    });\n}\nexports.getCurrentUser = getCurrentUser;\n\n\n//# sourceURL=webpack:///./src/server/controllers/users/index.ts?");

/***/ }),

/***/ "./src/server/db/mongo.ts":
/*!********************************!*\
  !*** ./src/server/db/mongo.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nvar bluebird_1 = __importDefault(__webpack_require__(/*! bluebird */ \"bluebird\"));\nvar config_1 = __importDefault(__webpack_require__(/*! ../config */ \"./src/server/config.ts\"));\nmongoose_1.default.Promise = bluebird_1.default;\nmongoose_1.default.connect(config_1.default.database, function (err) {\n    if (err)\n        throw err;\n    console.log('Mongo is connected');\n});\n\n\n//# sourceURL=webpack:///./src/server/db/mongo.ts?");

/***/ }),

/***/ "./src/server/middleware/checkTocker.ts":
/*!**********************************************!*\
  !*** ./src/server/middleware/checkTocker.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.checkTocken = void 0;\nvar jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nvar config_1 = __importDefault(__webpack_require__(/*! ../config */ \"./src/server/config.ts\"));\nexports.checkTocken = function (req, res, next) {\n    var token = req.headers.authorization;\n    if (!token) {\n        res.status(403).send('Forbidden. No tocken!');\n        return next();\n    }\n    var tokenObj;\n    var _id;\n    try {\n        tokenObj = jsonwebtoken_1.default.verify(token, config_1.default.secret);\n        _id = tokenObj._id;\n    }\n    catch (_a) {\n        var message = _a.message;\n        res.status(400).send(message);\n        return next();\n    }\n    req.userId = _id;\n    next();\n};\n\n\n//# sourceURL=webpack:///./src/server/middleware/checkTocker.ts?");

/***/ }),

/***/ "./src/server/models/teachers/index.ts":
/*!*********************************************!*\
  !*** ./src/server/models/teachers/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mongoose_1 = __importStar(__webpack_require__(/*! mongoose */ \"mongoose\"));\nvar workHistorySchema = new mongoose_1.Schema({\n    startDate: { type: Date, require: true },\n    endDate: { type: Date, require: true },\n    teach: { type: Date, require: true },\n});\nvar TeacherSchema = new mongoose_1.Schema({\n    name: {\n        type: String, required: true,\n    },\n    surname: {\n        type: String, required: true,\n    },\n    patronymic: {\n        type: String, required: true,\n    },\n    photo: {\n        type: String, default: '',\n    },\n    likes: {\n        type: Number, default: 0,\n    },\n    dislikes: {\n        type: Number, default: 0,\n    },\n    vievCount: {\n        type: Number, default: 0,\n    },\n    workHistory: {\n        type: [workHistorySchema], required: true, default: [],\n    },\n});\nTeacherSchema.index({ name: 1, surname: 1, patronymic: 1 }, { unique: true });\nexports.default = mongoose_1.default.model('Teacher', TeacherSchema);\n\n\n//# sourceURL=webpack:///./src/server/models/teachers/index.ts?");

/***/ }),

/***/ "./src/server/models/users/index.ts":
/*!******************************************!*\
  !*** ./src/server/models/users/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mongoose_1 = __importStar(__webpack_require__(/*! mongoose */ \"mongoose\"));\nvar bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\nvar UserSchema = new mongoose_1.Schema({\n    login: {\n        type: String, unique: true, lowercase: true, index: true,\n    },\n    password: String,\n});\nUserSchema.pre('save', function (next) {\n    return __awaiter(this, void 0, void 0, function () {\n        var salt, hash;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    if (!this.isModified('password')) {\n                        return [2, next()];\n                    }\n                    return [4, bcrypt_1.default.genSalt(10)];\n                case 1:\n                    salt = _a.sent();\n                    return [4, bcrypt_1.default.hash(this.password, salt)];\n                case 2:\n                    hash = _a.sent();\n                    this.password = hash;\n                    next();\n                    return [2];\n            }\n        });\n    });\n});\nUserSchema.methods.comparePasswords = function (password) {\n    return bcrypt_1.default.compare(password, this.password);\n};\nexports.default = mongoose_1.default.model('User', UserSchema);\n\n\n//# sourceURL=webpack:///./src/server/models/users/index.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar teachersRouter_1 = __webpack_require__(/*! ./teachersRouter */ \"./src/server/routes/teachersRouter.ts\");\nvar usersRouter_1 = __webpack_require__(/*! ./usersRouter */ \"./src/server/routes/usersRouter.ts\");\nvar router = express_1.default.Router();\nrouter\n    .get('/ping', function (req, res) { return res.json({ status: 200, cookie: req.headers.cookie }); })\n    .use('/teachers', teachersRouter_1.teacherRouter)\n    .use('/users', usersRouter_1.usersRouter);\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/routes/teachersRouter.ts":
/*!*********************************************!*\
  !*** ./src/server/routes/teachersRouter.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.teacherRouter = void 0;\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar TeachersControllers = __importStar(__webpack_require__(/*! ../controllers/teachers */ \"./src/server/controllers/teachers/index.ts\"));\nexports.teacherRouter = express_1.default.Router();\nexports.teacherRouter\n    .get('/', TeachersControllers.getAllTeachers)\n    .post('/', TeachersControllers.addTeacher)\n    .post('/setLike', TeachersControllers.setLikeTeacher)\n    .post('/setDisLike', TeachersControllers.setLikeTeacher);\n\n\n//# sourceURL=webpack:///./src/server/routes/teachersRouter.ts?");

/***/ }),

/***/ "./src/server/routes/usersRouter.ts":
/*!******************************************!*\
  !*** ./src/server/routes/usersRouter.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.usersRouter = void 0;\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar UserControllers = __importStar(__webpack_require__(/*! ../controllers/users */ \"./src/server/controllers/users/index.ts\"));\nvar checkTocker_1 = __webpack_require__(/*! ../middleware/checkTocker */ \"./src/server/middleware/checkTocker.ts\");\nexports.usersRouter = express_1.default.Router();\nexports.usersRouter\n    .post('/signin', UserControllers.authUser)\n    .post('/signup', UserControllers.regUser)\n    .use(checkTocker_1.checkTocken)\n    .post('/currentuser', UserControllers.getCurrentUser);\n\n\n//# sourceURL=webpack:///./src/server/routes/usersRouter.ts?");

/***/ }),

/***/ "./src/server/services/teacherServices.ts":
/*!************************************************!*\
  !*** ./src/server/services/teacherServices.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setLikeTeacher = exports.addTeacher = exports.getAllTeachers = void 0;\nvar teachers_1 = __importDefault(__webpack_require__(/*! ../models/teachers */ \"./src/server/models/teachers/index.ts\"));\nfunction getAllTeachers() {\n    return __awaiter(this, void 0, void 0, function () {\n        var teacher, e_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4, teachers_1.default.find()];\n                case 1:\n                    teacher = _a.sent();\n                    return [3, 3];\n                case 2:\n                    e_1 = _a.sent();\n                    throw e_1;\n                case 3: return [2, teacher];\n            }\n        });\n    });\n}\nexports.getAllTeachers = getAllTeachers;\nfunction addTeacher(name, surname, patronymic) {\n    return __awaiter(this, void 0, void 0, function () {\n        var teacher, e_2;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4, teachers_1.default.create({ name: name, surname: surname, patronymic: patronymic })];\n                case 1:\n                    teacher = _a.sent();\n                    return [3, 3];\n                case 2:\n                    e_2 = _a.sent();\n                    throw e_2;\n                case 3: return [2, teacher];\n            }\n        });\n    });\n}\nexports.addTeacher = addTeacher;\nfunction setLikeTeacher(teacherId) {\n    return __awaiter(this, void 0, void 0, function () {\n        var teacher, teacherLikes, likes, e_3;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    teacher = null;\n                    _a.label = 1;\n                case 1:\n                    _a.trys.push([1, 5, , 6]);\n                    return [4, teachers_1.default.findById(teacherId).select({ likes: 1 })];\n                case 2:\n                    teacherLikes = _a.sent();\n                    if (!(teacherLikes !== null && teacherLikes.likes !== undefined)) return [3, 4];\n                    likes = teacherLikes.likes;\n                    likes += 1;\n                    return [4, teachers_1.default.findOneAndUpdate({ _id: teacherId }, { likes: likes })];\n                case 3:\n                    teacher = _a.sent();\n                    _a.label = 4;\n                case 4: return [3, 6];\n                case 5:\n                    e_3 = _a.sent();\n                    throw e_3;\n                case 6: return [2, teacher];\n            }\n        });\n    });\n}\nexports.setLikeTeacher = setLikeTeacher;\n\n\n//# sourceURL=webpack:///./src/server/services/teacherServices.ts?");

/***/ }),

/***/ "./src/server/services/userServices.ts":
/*!*********************************************!*\
  !*** ./src/server/services/userServices.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.authUser = exports.getUserById = exports.regUser = void 0;\nvar jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nvar users_1 = __importDefault(__webpack_require__(/*! ../models/users */ \"./src/server/models/users/index.ts\"));\nvar config_1 = __importDefault(__webpack_require__(/*! ../config */ \"./src/server/config.ts\"));\nfunction regUser(login, password) {\n    return __awaiter(this, void 0, void 0, function () {\n        var user, e_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4, users_1.default.create({ login: login, password: password })];\n                case 1:\n                    user = _a.sent();\n                    return [3, 3];\n                case 2:\n                    e_1 = _a.sent();\n                    throw e_1;\n                case 3: return [2, user];\n            }\n        });\n    });\n}\nexports.regUser = regUser;\nfunction getUserById(userId) {\n    return __awaiter(this, void 0, void 0, function () {\n        var user, e_2;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4, users_1.default.findById(userId)];\n                case 1:\n                    user = _a.sent();\n                    return [3, 3];\n                case 2:\n                    e_2 = _a.sent();\n                    throw e_2;\n                case 3: return [2, user];\n            }\n        });\n    });\n}\nexports.getUserById = getUserById;\nfunction authUser(login, password) {\n    return __awaiter(this, void 0, void 0, function () {\n        var token, user, result, _a, e_3;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    token = '';\n                    _b.label = 1;\n                case 1:\n                    _b.trys.push([1, 5, , 6]);\n                    return [4, users_1.default.findOne({ login: login })];\n                case 2:\n                    user = _b.sent();\n                    _a = (user);\n                    if (!_a) return [3, 4];\n                    return [4, user.comparePasswords(password)];\n                case 3:\n                    _a = (_b.sent());\n                    _b.label = 4;\n                case 4:\n                    result = _a;\n                    if (!result) {\n                        throw new Error('Bad Creditials');\n                    }\n                    if (user) {\n                        token = jsonwebtoken_1.default.sign({ _id: user._id }, config_1.default.secret);\n                    }\n                    return [3, 6];\n                case 5:\n                    e_3 = _b.sent();\n                    throw e_3;\n                case 6: return [2, token];\n            }\n        });\n    });\n}\nexports.authUser = authUser;\n\n\n//# sourceURL=webpack:///./src/server/services/userServices.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

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