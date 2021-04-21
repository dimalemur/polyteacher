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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\r\nvar body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\r\nvar express_session_1 = __importDefault(__webpack_require__(/*! express-session */ \"express-session\"));\r\nvar morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\r\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\nvar routes_1 = __importDefault(__webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\"));\r\nvar config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./src/server/config.ts\"));\r\nvar app = express_1.default();\r\nvar staticWay = path_1.default.join(path_1.default.resolve(__dirname), '..', 'public', 'build');\r\nvar staticHandler = express_1.default.static(staticWay);\r\napp\r\n    .use(helmet_1.default())\r\n    .use(morgan_1.default('tiny'))\r\n    .use(express_session_1.default({\r\n    resave: true,\r\n    saveUninitialized: true,\r\n    secret: config_1.default.secret,\r\n    name: config_1.default.SESS_NAME,\r\n    cookie: {\r\n        maxAge: config_1.default.SESS_LIFETIME,\r\n        sameSite: true,\r\n    },\r\n}))\r\n    .use(body_parser_1.default.json())\r\n    .use('/api', routes_1.default)\r\n    .use('/', staticHandler)\r\n    .use('/:pages', staticHandler)\r\n    .use('/login/authhelp/', staticHandler)\r\n    .use(function (req, res) { res.send('Страница не найдена'); });\r\napp.listen(config_1.default.port, function () {\r\n    console.log(\"Server is started in http://127.0.0.1:\" + config_1.default.port + \"/\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/app.ts?");

/***/ }),

/***/ "./src/server/config.ts":
/*!******************************!*\
  !*** ./src/server/config.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar TWO_HOURS = 1000 * 60 * 60 * 2;\r\nvar config = {\r\n    port: 3000,\r\n    secret: 'itsasecret',\r\n    SESS_LIFETIME: TWO_HOURS,\r\n    SESS_NAME: 'sid',\r\n};\r\nexports.default = config;\r\n\n\n//# sourceURL=webpack:///./src/server/config.ts?");

/***/ }),

/***/ "./src/server/controllers/users/index.ts":
/*!***********************************************!*\
  !*** ./src/server/controllers/users/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getGradetables = exports.getUserTabs = exports.getUserData = exports.getUserByToken = exports.logoutUser = exports.authUser = exports.Teacher = exports.User = void 0;\r\nexports.User = {\r\n    id: 'student',\r\n    login: 'jora',\r\n    userMode: 1,\r\n};\r\nexports.Teacher = {\r\n    id: 'teacher',\r\n    login: 'juplev',\r\n    userMode: 2,\r\n};\r\nvar orders = [\r\n    {\r\n        _id: '5ee8f1aaba20103dccebc346',\r\n        name: 'Приказ № 789-с от 27 августа 2019 г. - «О переводе на следующий курс (ликвидация задолженностей)»',\r\n        url: 'mospolytech.ru',\r\n    },\r\n    {\r\n        _id: '5ef1c3cab67412450c5778b6',\r\n        name: 'Приказ № 413-с от 28 августа 2018 г. - «О распределении по учебным группам»',\r\n        url: 'mospolytech.ru',\r\n    },\r\n    {\r\n        _id: '5ef1c3cab67412450c5778b6',\r\n        name: 'Приказ № 592-ОД от 8 августа 2018 г. - «О зачислении»',\r\n        url: 'mospolytech.ru',\r\n    },\r\n];\r\nvar workInfo = [\r\n    {\r\n        _id: '5ee8f1aaba20103dccebc346',\r\n        name: 'Инфокогнитивные технологии',\r\n        additional: '(преподаватель 0.25 ст.) - Основное место работы',\r\n    },\r\n    {\r\n        _id: '5ef1c3cab67412450c5778b6',\r\n        name: 'Центр разработки и поддержки информационных систем',\r\n        additional: '(начальник центра 0.50 ст.) - Внутреннее совместительство',\r\n    },\r\n];\r\nvar polyProfileUserData = {\r\n    name: 'Подов Гордей Семенович',\r\n    faq: {\r\n        key: 'Факультет',\r\n        val: 'ФИТ',\r\n    },\r\n    course: {\r\n        key: 'Курс',\r\n        val: '3',\r\n    },\r\n    group: {\r\n        key: 'Группа',\r\n        val: '181-361',\r\n    },\r\n    specialty: {\r\n        key: 'Специальность',\r\n        val: '09.03.03 Прикладная информатика',\r\n    },\r\n    specialization: {\r\n        key: 'Специализация',\r\n        val: 'КИС',\r\n    },\r\n    period: {\r\n        key: 'Срок обучения',\r\n        val: 4,\r\n    },\r\n    form: {\r\n        key: 'Форма обучения',\r\n        val: 'Очная',\r\n    },\r\n    financing: {\r\n        key: 'Вид финансирования',\r\n        val: 'Бюджет',\r\n    },\r\n    level: {\r\n        key: 'Уровень образования',\r\n        val: 'Бакалавр',\r\n    },\r\n    year: {\r\n        key: 'Год набора',\r\n        val: '2018/2019',\r\n    },\r\n    email: 'jora@gmail.com',\r\n    tel: '+79772714525',\r\n    _id: '5ecb904139d6512be83cfd2b',\r\n    orders: orders,\r\n};\r\nvar polyProfileTeacherData = {\r\n    name: 'Иванов Иван Иванович',\r\n    email: 'ivanov@mail.ru',\r\n    tel: '+7-939-489-56-65',\r\n    _id: '5ecb904139d6512be83cfd2b',\r\n    workInfo: workInfo,\r\n};\r\nvar linksForUser = [\r\n    {\r\n        id: 'Study',\r\n        name: 'Учёба',\r\n        links: [\r\n            {\r\n                name: 'Расписание',\r\n                url: '/timetable',\r\n            },\r\n            {\r\n                name: 'Успеваемость',\r\n                url: '/performance',\r\n            },\r\n            {\r\n                name: 'Посещения по физкультуре',\r\n                url: '/visits',\r\n            },\r\n            {\r\n                name: 'Образовательные программы',\r\n                url: '/faculties',\r\n            },\r\n        ],\r\n    },\r\n    {\r\n        id: 'Career',\r\n        name: 'Карьера',\r\n        links: [\r\n            {\r\n                name: 'Дополнительные образовательные курсы',\r\n                url: '/additional_courses',\r\n            },\r\n            {\r\n                name: 'Трудоустройство и практика',\r\n                url: '/practic',\r\n            },\r\n            {\r\n                name: 'Международные стажировки',\r\n                url: '/internship',\r\n            },\r\n        ],\r\n    },\r\n    {\r\n        id: 'myFinances',\r\n        name: 'Мои финансы',\r\n        url: '/myfinances',\r\n    },\r\n    {\r\n        id: 'certificates',\r\n        name: 'Справки',\r\n        url: '/certificates',\r\n    },\r\n    {\r\n        id: 'messages',\r\n        name: 'Сообщения',\r\n        url: '/messages',\r\n    },\r\n    {\r\n        id: 'feedback',\r\n        name: 'Обратная связь',\r\n        links: [\r\n            {\r\n                name: 'Центры по работе со студентами',\r\n                url: '/centers',\r\n            },\r\n            {\r\n                name: 'Анкета для оценки образовательного процесса',\r\n                url: '/questionnaire',\r\n            },\r\n            {\r\n                name: 'Форма обратной связи',\r\n                url: '/feedback',\r\n            },\r\n        ],\r\n    },\r\n];\r\nvar linksForTeacher = [\r\n    {\r\n        id: 'Study',\r\n        name: 'ВУЗ',\r\n        links: [\r\n            {\r\n                name: 'Расписание',\r\n                url: '/timetable',\r\n            },\r\n            {\r\n                name: 'Образовательные программы',\r\n                url: '/faculties',\r\n            },\r\n        ],\r\n    },\r\n    {\r\n        id: 'Career',\r\n        name: 'Мероприятия',\r\n        url: '/announcements',\r\n    },\r\n    {\r\n        id: 'myFinances',\r\n        name: 'Мои финансы',\r\n        url: '/myfinances',\r\n    },\r\n    {\r\n        id: 'messages',\r\n        name: 'Сообщения',\r\n        url: '/messages',\r\n    },\r\n    {\r\n        id: 'blanks',\r\n        name: 'Документы',\r\n        url: '/blanks',\r\n    },\r\n    {\r\n        id: 'digitalservices',\r\n        name: 'Cервисы',\r\n        url: '/digitalservices',\r\n    },\r\n    {\r\n        id: 'feedback',\r\n        name: 'Обратная связь',\r\n        url: '/feedback',\r\n    },\r\n];\r\nvar gradetables = [\r\n    {\r\n        semester: 1,\r\n        grades: [\r\n            {\r\n                name: 'Элективные дисциплины по физической культуре и спорту',\r\n                type: 'Оценка',\r\n                grade: 'Отлично',\r\n            },\r\n            {\r\n                name: 'Проектная деятельность',\r\n                type: 'Зачёт',\r\n                grade: 'Не Зачтено',\r\n            },\r\n            {\r\n                name: 'Программирование',\r\n                type: 'Зачёт',\r\n                grade: 'Зачтено',\r\n            },\r\n            {\r\n                name: 'Основы бух учета и управления финансами',\r\n                type: 'Зачёт',\r\n                grade: 'Зачтено',\r\n            },\r\n        ],\r\n    },\r\n    {\r\n        semester: 2,\r\n        grades: [\r\n            {\r\n                name: 'Элективные дисциплины по физической культуре и спорту',\r\n                type: 'Оценка',\r\n                grade: 'Отлично',\r\n            },\r\n            {\r\n                name: 'Проектная деятельность',\r\n                type: 'Зачёт',\r\n                grade: 'Не Зачтено',\r\n            },\r\n            {\r\n                name: 'Программирование',\r\n                type: 'Зачёт',\r\n                grade: 'Зачтено',\r\n            },\r\n            {\r\n                name: 'Основы бух учета и управления финансами',\r\n                type: 'Зачёт',\r\n                grade: 'Зачтено',\r\n            },\r\n        ],\r\n    },\r\n    {\r\n        semester: 3,\r\n        grades: [\r\n            {\r\n                name: 'Элективные дисциплины по физической культуре и спорту',\r\n                type: 'Оценка',\r\n                grade: 'Отлично',\r\n            },\r\n            {\r\n                name: 'Проектная деятельность',\r\n                type: 'Зачёт',\r\n                grade: 'Не Зачтено',\r\n            },\r\n            {\r\n                name: 'Программирование',\r\n                type: 'Зачёт',\r\n                grade: 'Зачтено',\r\n            },\r\n            {\r\n                name: 'Основы бух учета и управления финансами',\r\n                type: 'Зачёт',\r\n                grade: 'Зачтено',\r\n            },\r\n        ],\r\n    },\r\n    {\r\n        semester: 4,\r\n        grades: [\r\n            {\r\n                name: 'Элективные дисциплины по физической культуре и спорту',\r\n                type: 'Оценка',\r\n                grade: 'Отлично',\r\n            },\r\n            {\r\n                name: 'Проектная деятельность',\r\n                type: 'Зачёт',\r\n                grade: 'Не Зачтено',\r\n            },\r\n            {\r\n                name: 'Программирование',\r\n                type: 'Зачёт',\r\n                grade: 'Зачтено',\r\n            },\r\n            {\r\n                name: 'Основы бух учета и управления финансами',\r\n                type: 'Зачёт',\r\n                grade: 'Зачтено',\r\n            },\r\n        ],\r\n    },\r\n    {\r\n        semester: 5,\r\n        grades: [\r\n            {\r\n                name: 'Элективные дисциплины по физической культуре и спорту',\r\n                type: 'Оценка',\r\n                grade: 'Отлично',\r\n            },\r\n            {\r\n                name: 'Проектная деятельность',\r\n                type: 'Зачёт',\r\n                grade: 'Не Зачтено',\r\n            },\r\n            {\r\n                name: 'Программирование',\r\n                type: 'Зачёт',\r\n                grade: 'Зачтено',\r\n            },\r\n            {\r\n                name: 'Основы бух учета и управления финансами',\r\n                type: 'Зачёт',\r\n                grade: 'Зачтено',\r\n            },\r\n        ],\r\n    },\r\n];\r\nfunction authUser(req, res) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var _a, login, password;\r\n        return __generator(this, function (_b) {\r\n            _a = req.body, login = _a.login, password = _a.password;\r\n            console.log({ login: login, password: password });\r\n            if (login === 'teacher') {\r\n                res.cookie('token', '1A2B3C');\r\n                return [2, res.json(exports.Teacher)];\r\n            }\r\n            res.cookie('token', '4D5E6F');\r\n            return [2, res.json(exports.User)];\r\n        });\r\n    });\r\n}\r\nexports.authUser = authUser;\r\nfunction logoutUser(req, res) {\r\n    var _a;\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        return __generator(this, function (_b) {\r\n            (_a = req.session) === null || _a === void 0 ? void 0 : _a.destroy(function () {\r\n                console.log('Сессия завершена');\r\n            });\r\n            res.clearCookie('token');\r\n            return [2, res.status(200).send('Success')];\r\n        });\r\n    });\r\n}\r\nexports.logoutUser = logoutUser;\r\nfunction getUserByToken(req, res) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var token;\r\n        return __generator(this, function (_a) {\r\n            token = req.body.token;\r\n            console.log({ token: token });\r\n            if (token === '1A2B3C') {\r\n                return [2, res.json(exports.Teacher)];\r\n            }\r\n            return [2, res.json(exports.User)];\r\n        });\r\n    });\r\n}\r\nexports.getUserByToken = getUserByToken;\r\nfunction getUserData(req, res) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var userId;\r\n        return __generator(this, function (_a) {\r\n            userId = req.query.id;\r\n            console.log({ userId: userId });\r\n            if (userId === 'student') {\r\n                return [2, res.json(polyProfileUserData)];\r\n            }\r\n            return [2, res.json(polyProfileTeacherData)];\r\n        });\r\n    });\r\n}\r\nexports.getUserData = getUserData;\r\nfunction getUserTabs(req, res) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var userId;\r\n        return __generator(this, function (_a) {\r\n            userId = req.query.id;\r\n            console.log({ userId: userId });\r\n            if (userId === 'student') {\r\n                return [2, res.json(linksForUser)];\r\n            }\r\n            return [2, res.json(linksForTeacher)];\r\n        });\r\n    });\r\n}\r\nexports.getUserTabs = getUserTabs;\r\nfunction getGradetables(req, res) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var semesters, returnedGradetables;\r\n        return __generator(this, function (_a) {\r\n            semesters = req.body.semesters;\r\n            returnedGradetables = [];\r\n            gradetables.forEach(function (grade) {\r\n                console.log(semesters.find((function (needSemester) { return needSemester === grade.semester; })));\r\n                if (grade.semester === semesters.find((function (needSemester) { return needSemester === grade.semester; }))) {\r\n                    returnedGradetables.push(grade);\r\n                }\r\n            });\r\n            return [2, res.json(returnedGradetables)];\r\n        });\r\n    });\r\n}\r\nexports.getGradetables = getGradetables;\r\n\n\n//# sourceURL=webpack:///./src/server/controllers/users/index.ts?");

/***/ }),

/***/ "./src/server/middleware/checkTocker.ts":
/*!**********************************************!*\
  !*** ./src/server/middleware/checkTocker.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.checkTocken = void 0;\r\nvar getCookie = function (cookie, name) {\r\n    var matches = cookie.match(new RegExp(\"(?:^|; )\" + name.replace(/([.$?*|{}()[\\]\\\\/+^])/g, '\\\\$1') + \"=([^;]*)\"));\r\n    return matches ? decodeURIComponent(matches[1]) : undefined;\r\n};\r\nexports.checkTocken = function (req, res, next) {\r\n    var reqCookie = req.headers.cookie;\r\n    var token = getCookie((reqCookie !== undefined) ? reqCookie : '', 'token');\r\n    if (token === undefined) {\r\n        res.status(403).send('Forbidden. No tocken!');\r\n        return next();\r\n    }\r\n    next();\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/middleware/checkTocker.ts?");

/***/ }),

/***/ "./src/server/routes/authRouter.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/authRouter.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AuthRouter = void 0;\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar UserControllers = __importStar(__webpack_require__(/*! ../controllers/users */ \"./src/server/controllers/users/index.ts\"));\r\nexports.AuthRouter = express_1.default.Router();\r\nexports.AuthRouter\r\n    .post('/signin', UserControllers.authUser);\r\n\n\n//# sourceURL=webpack:///./src/server/routes/authRouter.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar checkTocker_1 = __webpack_require__(/*! ../middleware/checkTocker */ \"./src/server/middleware/checkTocker.ts\");\r\nvar authRouter_1 = __webpack_require__(/*! ./authRouter */ \"./src/server/routes/authRouter.ts\");\r\nvar usersRouter_1 = __webpack_require__(/*! ./usersRouter */ \"./src/server/routes/usersRouter.ts\");\r\nvar router = express_1.default.Router();\r\nrouter\r\n    .get('/ping', function (req, res) { return res.json({ status: 200, cookie: req.headers.cookie }); })\r\n    .use('/users', authRouter_1.AuthRouter)\r\n    .use('/users', checkTocker_1.checkTocken, usersRouter_1.usersRouter);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/routes/usersRouter.ts":
/*!******************************************!*\
  !*** ./src/server/routes/usersRouter.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usersRouter = void 0;\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar UserControllers = __importStar(__webpack_require__(/*! ../controllers/users */ \"./src/server/controllers/users/index.ts\"));\r\nvar checkTocker_1 = __webpack_require__(/*! ../middleware/checkTocker */ \"./src/server/middleware/checkTocker.ts\");\r\nexports.usersRouter = express_1.default.Router();\r\nexports.usersRouter\r\n    .post('/logout', UserControllers.logoutUser)\r\n    .post('/getuserbytoken', UserControllers.getUserByToken)\r\n    .get('/getuserdata', UserControllers.getUserData)\r\n    .get('/getusertabs', UserControllers.getUserTabs)\r\n    .post('/gradetables', UserControllers.getGradetables)\r\n    .use(checkTocker_1.checkTocken);\r\n\n\n//# sourceURL=webpack:///./src/server/routes/usersRouter.ts?");

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