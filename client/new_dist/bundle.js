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
/******/ 	__webpack_require__.p = "client/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/CourseBigBlock/CourseBigBlock.js":
/*!************************************************************!*\
  !*** ./client/components/CourseBigBlock/CourseBigBlock.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CourseCart___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CourseCart/ */ \"./client/components/CourseCart/index.js\");\n/* harmony import */ var _helpers_lib_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/lib/component */ \"./client/helpers/lib/component.js\");\n/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/store */ \"./client/helpers/store/index.js\");\n\n\n\n\nclass CourseBigBlock extends _helpers_lib_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(app, data) {\n    let container = document.createElement(\"div\");\n    super({\n      store: _helpers_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      element: container\n    });\n    this.container = container;\n    app.appendChild(this.container);\n    this.data = data;\n    this.render();\n  }\n\n  static add_content(item) {\n    return `\n        <li class=\"course-content-regular__list-item\">\n            <div class=\"course-content-regular__list-item-title\">${item}</div>\n            <div class=\"course-content-regular__list-item-time\">04:24</div>\n        </li>`;\n  }\n  render() {\n    this.container.className = \"course-big-block__wrapper flex-join\";\n    this.container.innerHTML = ``;\n    new _CourseCart___WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.container, this.data[\"_id\"]);\n    this.container.innerHTML += `\n      <div class=\"course-content-regular\">\n          <ul class=\"course-content-regular__list\">\n              ${_helpers_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.allLessons.data\n                .filter(item => this.data.lessons.indexOf(item[\"_id\"]))\n                .map(item => CourseBigBlock.add_content(item.name))\n                .join(\"\")}\n          </ul>\n      </div>\n\n    `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseBigBlock);\n\n\n//# sourceURL=webpack:///./client/components/CourseBigBlock/CourseBigBlock.js?");

/***/ }),

/***/ "./client/components/CourseBigBlock/index.js":
/*!***************************************************!*\
  !*** ./client/components/CourseBigBlock/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./client/components/CourseBigBlock/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CourseBigBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseBigBlock */ \"./client/components/CourseBigBlock/CourseBigBlock.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _CourseBigBlock__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/CourseBigBlock/index.js?");

/***/ }),

/***/ "./client/components/CourseBigBlock/main.scss":
/*!****************************************************!*\
  !*** ./client/components/CourseBigBlock/main.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/CourseBigBlock/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/CourseBigBlock/main.scss?");

/***/ }),

/***/ "./client/components/CourseCart/CourseCart.js":
/*!****************************************************!*\
  !*** ./client/components/CourseCart/CourseCart.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/bem */ \"./client/helpers/bem.js\");\n/* harmony import */ var _helpers_lib_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/lib/component */ \"./client/helpers/lib/component.js\");\n/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/store */ \"./client/helpers/store/index.js\");\n\n\n\n\nconst b = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"course_cart\");\n\nclass CourseCart extends _helpers_lib_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(app, course_id, display_list = false) {\n    let container = document.createElement(\"div\");\n    super({\n      store: _helpers_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      element: container\n    });\n    this.course_id = course_id;\n    this.display_list = display_list;\n    this.container = container;\n    app.appendChild(this.container);\n    this.render();\n  }\n\n  render() {\n    let users = _helpers_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.allUsers;\n    let courses = _helpers_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.allCourses;\n    if (courses.fetched && users.fetched) {\n      let data = _helpers_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.allCourses.data.filter(\n        course => course[\"_id\"] === this.course_id\n      )[0];\n      let course_author = users.data.filter(\n        user => user[\"_id\"] === data.author\n      )[0];\n      this.container.className =\n        b() + (this.display_list ? ` ${b([\"space_between_inline\"])}` : \"\");\n      this.container.style.width = this.display_list ? \"25%\" : \"100%\";\n      this.container.innerHTML = `\n            <div class=\"${b(\"shadow\")}\">\n                       <div class=\"${b(\"wrapper\")}\">\n                            <div class=\"${b(\"image-wrapper\")}\">\n                                <img class=\"${b(\"image\")}\" src=\"/images/react-big-img.png\" alt=\"\">\n                            </div>\n                            <div class=\"dotted-header\">\n                                <span>COURSE </span><span class=\"dotted-header__dot\">•</span><span>${data.courseTech}</span>\n                            </div>\n                            <div class=\"${b(\"header-wrapper\")}\">\n                                <h3 class=\"${b(\"header\")}\">${data.courseName}</h3>\n                            </div>\n                        </div>\n                       <div class=\"mini-profile\">\n                                <div class=\"mini-profile__content-wrapper\">\n                                    <img class=\"icon icon--small\" src=\"/images/ari-avatar.jpg\" alt=\"\">\n                                    <div class=\"mini-profile__content\">\n                                        <h3 class=\"mini-profile__content-header\">${\n                                          course_author.name\n                                        }</h3>\n                                        <span class=\"mini-profile__content-sub_header\">${\n                                          data.lessons.length\n                                        } lessons . 41m</span>\n                                    </div>\n                                </div>\n                                <img src=\"/images/profileMiniFolder.svg\" alt=\"profileMiniFolder\">\n                                \n                        </div>\n            \n             </div>\n                `;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseCart);\n\n\n//# sourceURL=webpack:///./client/components/CourseCart/CourseCart.js?");

/***/ }),

/***/ "./client/components/CourseCart/index.js":
/*!***********************************************!*\
  !*** ./client/components/CourseCart/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./client/components/CourseCart/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CourseCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseCart */ \"./client/components/CourseCart/CourseCart.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _CourseCart__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/CourseCart/index.js?");

/***/ }),

/***/ "./client/components/CourseCart/main.scss":
/*!************************************************!*\
  !*** ./client/components/CourseCart/main.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/CourseCart/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/CourseCart/main.scss?");

/***/ }),

/***/ "./client/components/CourseLitsCart/CourseListCart.js":
/*!************************************************************!*\
  !*** ./client/components/CourseLitsCart/CourseListCart.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/bem */ \"./client/helpers/bem.js\");\n\n\nconst b = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"course-list-cart\");\nconst CourseListsCart = data => {\n  const course_list_cart = document.createElement(\"div\");\n\n  course_list_cart.className = \"course-list-cart\";\n  course_list_cart.innerHTML = `\n    <div class=\"${b(\"wrapper\")}\">\n        <div class=\"${b(\"description\")}\">\n            <div class=\"${b(\"icon-wrapper\")}\">\n                <img src=\"/images/greenFlag.svg\" alt=\"\">\n            </div>\n            <div class=\"${b(\"title-author\")}\">\n                <h1 class=\"${b(\"header\")}\">${data.name}</h1>\n                    <div class=\"profile-minimal\">\n                        <a class=\"profile-minimal__author\">Alan Show</a> \n                        <span class=\"profile-minimal__extra\">LESSON</span>\n                   </div>\n            </div>\n        </div>\n\n        <div class=\"${b(\"time_script\")}\">\n            <div class=\"${b(\"icon-text-share\")}\">\n                <img src=\"/images/clock.svg\" alt=\"clock icon\">\n                <span class=\"${b(\"text-share-content\")}\">\n                    ${data.time}\n                </span>\n            </div>\n            <div class=\"${b(\"icon-text-share\")}\">\n                <img src=\"/images/mark.svg\" alt=\"mark icon\">\n                <span class=\"${b(\"text-share-content\")}\">javascript</span>\n            </div>\n        </div>\n    </div>\n    `;\n  return course_list_cart;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseListsCart);\n\n\n//# sourceURL=webpack:///./client/components/CourseLitsCart/CourseListCart.js?");

/***/ }),

/***/ "./client/components/CourseLitsCart/index.js":
/*!***************************************************!*\
  !*** ./client/components/CourseLitsCart/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./client/components/CourseLitsCart/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CourseListCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseListCart */ \"./client/components/CourseLitsCart/CourseListCart.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _CourseListCart__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/CourseLitsCart/index.js?");

/***/ }),

/***/ "./client/components/CourseLitsCart/main.scss":
/*!****************************************************!*\
  !*** ./client/components/CourseLitsCart/main.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/CourseLitsCart/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/CourseLitsCart/main.scss?");

/***/ }),

/***/ "./client/components/Footer/Footer.js":
/*!********************************************!*\
  !*** ./client/components/Footer/Footer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/bem */ \"./client/helpers/bem.js\");\n\n\nconst b = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav-bar\");\nconst Footer = () => {\n  const footer = document.createElement(\"footer\");\n  footer.className = `${b()}`;\n\n  footer.innerHTML = `\n    <footer class=\"footer\">\n        <div class=\"footer-block\">\n            <span class=\"footer-block__logo\">\n                <img src=\"/images/logo.svg\" alt=\"\">\n            </span>\n            <div class=\"footer-block__content\">\n                <div class=\"footer-block__content-list\">\n                    <div class=\"footer-block__content-list-block\">\n                        <h2 class=\"footer-block__content-list-header\">content</h2>\n                        <ul class=\"footer-block__content-list-ulist\">\n                            <li>Browse</li>\n                            <li>Courses</li>\n                            <li>Lessons</li>\n                            <li>Podcasts</li>\n                        </ul>\n                    </div>\n                    <div class=\"footer-block__content-list-block\">\n                        <h2 class=\"footer-block__content-list-header\">about</h2>\n                        <ul class=\"footer-block__content-list-ulist\">\n                            <li>Pricing</li>\n                            <li>Instructors</li>\n                            <li>Stories</li>\n                            <li>Team</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"footer-block__content-search\">\n                </div>\n            </div>\n            <div class=\"footer-block__terms\">\n                <ul class=\"footer-block__terms-list\">\n                    <li><a href=\"#\">Terms & Conditions</a></li>\n                    <li>© egghead.io</li>\n                </ul>\n            </div>\n        </div>\n    </footer>\n`;\n  return footer;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n\n//# sourceURL=webpack:///./client/components/Footer/Footer.js?");

/***/ }),

/***/ "./client/components/Footer/index.js":
/*!*******************************************!*\
  !*** ./client/components/Footer/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./client/components/Footer/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./client/components/Footer/Footer.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack:///./client/components/Footer/index.js?");

/***/ }),

/***/ "./client/components/Footer/main.scss":
/*!********************************************!*\
  !*** ./client/components/Footer/main.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Footer/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/Footer/main.scss?");

/***/ }),

/***/ "./client/components/ListOfCarts/ListOfCarts.js":
/*!******************************************************!*\
  !*** ./client/components/ListOfCarts/ListOfCarts.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CourseLitsCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CourseLitsCart */ \"./client/components/CourseLitsCart/index.js\");\n/* harmony import */ var _helpers_bem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/bem */ \"./client/helpers/bem.js\");\n/* harmony import */ var _helpers_lib_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/lib/component */ \"./client/helpers/lib/component.js\");\n/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/store */ \"./client/helpers/store/index.js\");\n/* harmony import */ var _helpers_actions_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/actions/api */ \"./client/helpers/actions/api.js\");\n/* harmony import */ var _helpers_CheckAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/CheckAction */ \"./client/helpers/CheckAction.js\");\n\n\n\n\n\n\n\nconst b = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"cart_list_combination\");\n\nclass ListOfCarts extends _helpers_lib_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(app) {\n    let container = document.createElement(\"div\");\n    super({\n      store: _helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    });\n    this.container = container;\n    app.appendChild(this.container);\n    this.render();\n    ListOfCarts.dispatchAll();\n  }\n\n  static dispatchAll() {\n    Object(_helpers_CheckAction__WEBPACK_IMPORTED_MODULE_5__[\"CheckAction\"])(_helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].state.allCourses, _helpers_actions_api__WEBPACK_IMPORTED_MODULE_4__[\"getAllCourses\"], _helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    Object(_helpers_CheckAction__WEBPACK_IMPORTED_MODULE_5__[\"CheckAction\"])(_helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].state.allLessons, _helpers_actions_api__WEBPACK_IMPORTED_MODULE_4__[\"getAllLessons\"], _helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  }\n\n  init() {\n    this.container.innerHTML = `\n        <div class=\"${b(\"wrapper\")} website-layout-width\">\n            <div class=\"${b(\"padding\")}\">\n        \n            </div>\n        </div>`;\n  }\n\n  render() {\n    this.container.className = b();\n    this.init();\n    let body = this.container.getElementsByClassName(b(\"padding\"))[0];\n    _helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].state.allLessons.data.map(item =>\n      body.appendChild(Object(_CourseLitsCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item))\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListOfCarts);\n\n\n//# sourceURL=webpack:///./client/components/ListOfCarts/ListOfCarts.js?");

/***/ }),

/***/ "./client/components/ListOfCarts/index.js":
/*!************************************************!*\
  !*** ./client/components/ListOfCarts/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./client/components/ListOfCarts/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ListOfCarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListOfCarts */ \"./client/components/ListOfCarts/ListOfCarts.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _ListOfCarts__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/ListOfCarts/index.js?");

/***/ }),

/***/ "./client/components/ListOfCarts/main.scss":
/*!*************************************************!*\
  !*** ./client/components/ListOfCarts/main.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/ListOfCarts/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/ListOfCarts/main.scss?");

/***/ }),

/***/ "./client/components/Login/Login.js":
/*!******************************************!*\
  !*** ./client/components/Login/Login.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_actions_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/actions/auth */ \"./client/helpers/actions/auth.js\");\n/* harmony import */ var _helpers_lib_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/lib/component */ \"./client/helpers/lib/component.js\");\n/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/store */ \"./client/helpers/store/index.js\");\n/* harmony import */ var _helpers_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/cookies */ \"./client/helpers/cookies.js\");\n\n\n\n\n\nclass Login extends _helpers_lib_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(app) {\n        let container = document.createElement(\"div\");\n        super({\n            store: _helpers_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            element: container\n        });\n        this.container = container;\n        app.appendChild(this.container);\n        this.render();\n    }\n\n    handle_login(e) {\n        e.preventDefault();\n        let inputs = Array.prototype.slice.call(\n            this.container.getElementsByTagName(\"input\")\n        );\n        let data_collect = {};\n        let data = {};\n        inputs.map(input => console.log((data_collect[input.name] = input.value)));\n        data[\"email\"] = data_collect[\"email\"];\n        data[\"password\"] = data_collect[\"password\"];\n        Object(_helpers_actions_auth__WEBPACK_IMPORTED_MODULE_0__[\"login\"])(_helpers_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"], data);\n    }\n\n    onSuccessRegistration() {\n\n        _helpers_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.loggedUser.data.access_token ? Object(_helpers_cookies__WEBPACK_IMPORTED_MODULE_3__[\"set_cookie\"])(\"access_token\", _helpers_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.loggedUser.data.access_token) : null;\n        history.pushState(\n            {\n                id: \"homepage\"\n            },\n            \"egghead\",\n            \"/\"\n        );\n        location.reload();\n    }\n\n    render() {\n        _helpers_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.loggedUser.loggedIn ? this.onSuccessRegistration() : null;\n        this.container.innerHTML = `\n        <section class=\"log-in\">\n            <div>\n                <h1 class=\"log-in__title\">Sign in to your egghead account.</h1>\n            </div>\n            <div class=\"log-in__grey-box\">\n                <form class=\"log-in__form\">\n                    <div class=\"log-in__input-block\">\n                        <label class=\"log-in__email-label\">Email\n                            <input name=\"email\" class=\"log-in__email-text\">\n                        </label>\n                    </div>\n                    <div class=\"log-in__input-block\">\n                        <label class=\"log-in__email-label\">Password\n                            <input name=\"password\" type=\"password\" class=\"log-in__email-text\">\n                        </label>\n                    </div>\n                    <div class=\"log-in__input-block\">\n                        <label class=\"log-in__remember-label\">\n                            <input name =\"checkbox\" type=\"checkbox\">\n                            Remember me\n                        </label>\n                    </div>\n                    <div class=\"log-in__input-block log-in__buttons\">\n                        <button  name=\"submit\" type=\"submit\"  class=\"sign_in_button log-in__btn-log-in\">Sign In</button>\n                        <a href=\"#\" class=\"log-in__btn-log-in-github\">\n                            Sign in with Github\n                        </a>\n                    </div>\n                    <br>\n                       <div class=\"log-in__input-block log-in__input-block-info\">\n                        Need to create an\n                        account? <a href=\"/registration\">Sign up</a>\n                    </div>\n                    <div class=\"log-in__input-block log-in__input-block-info\">\n                        Forgot your\n                        password? <a href=\"#\">Recover it</a>\n                    </div>\n                    <div class=\"log-in__input-block log-in__input-block-info\">\n                        <a href=\"#\">Enterprise Sign In</a>\n                    </div>\n                </form>\n            </div>\n        </section>\n        </form>\n    `;\n        this.container\n            .getElementsByClassName(\"sign_in_button\")[0]\n            .addEventListener(\"click\", e => this.handle_login(e));\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n\n//# sourceURL=webpack:///./client/components/Login/Login.js?");

/***/ }),

/***/ "./client/components/Login/index.js":
/*!******************************************!*\
  !*** ./client/components/Login/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./client/components/Login/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ \"./client/components/Login/Login.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Login__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/Login/index.js?");

/***/ }),

/***/ "./client/components/Login/main.scss":
/*!*******************************************!*\
  !*** ./client/components/Login/main.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Login/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/Login/main.scss?");

/***/ }),

/***/ "./client/components/NavBar/NavBar.js":
/*!********************************************!*\
  !*** ./client/components/NavBar/NavBar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBar; });\n/* harmony import */ var _helpers_bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/bem */ \"./client/helpers/bem.js\");\n/* harmony import */ var _helpers_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/cookies */ \"./client/helpers/cookies.js\");\n/* harmony import */ var _helpers_lib_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/lib/component */ \"./client/helpers/lib/component.js\");\n/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/store */ \"./client/helpers/store/index.js\");\n/* harmony import */ var _helpers_actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/actions/auth */ \"./client/helpers/actions/auth.js\");\n\n\n\n\n\n\nconst b = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav-bar\");\nclass NavBar extends _helpers_lib_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    constructor(app) {\n        super({\n            store: _helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        });\n        this.container = document.createElement(\"nav\");\n        this.container.className = `${b()}`;\n        app.appendChild(this.container);\n        this.logged = Object(_helpers_cookies__WEBPACK_IMPORTED_MODULE_1__[\"get_token\"])();\n        this.logged ? Object(_helpers_actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"getUser\"])(_helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(_helpers_cookies__WEBPACK_IMPORTED_MODULE_1__[\"decode_token\"])()[\"id\"]) : null;\n        this.render();\n    }\n\n    static getProfile() {\n\n        return _helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].state.loggedUser.fetched\n            ? `<button class=\"${b(\"feadback-button\")}\">Feedback</button>\n            <a class=\"${b(\"profile\")}\" href=\"/profile\">\n            <span class=\"${b(\"profile-user\")}\">${_helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].state.loggedUser.data.name}</span>\n            <img class=\"${b(\n                \"profile-avatar\"\n            )}\" src=\"/images/headhock.png\" alt=\"avatar\">\n            </a>`\n            : `<a  class=\"${b(\"login-link\")}\" href=\"/login\">login</a>`;\n    }\n\n    render() {\n        this.container.innerHTML = ``;\n        this.container.innerHTML += `\n        <div class=\"${b(\n            \"wrapper\"\n        )} website-layout-width website-layout-position\">\n               <div class=\"${b(\"padding-wrapper\")}\">\n                <div class=\"${b(\"headers\")}\">\n                <a href=\"/\">\n                <img src=\"/images/logo.svg\" class=\"${b(\n            \"headers-logo\"\n        )}\" alt=\"Egghead logo\">\n                                <img src=\"/images/logo-small.svg\" class=\"${b(\n            \"headers-logo-small\"\n        )}\" alt=\"Egghead logo\">\n                </a>\n        \n                <div class=\"${b(\"headers-content\")}\">\n                    <img src=\"/images/play_button.svg\" alt=\"\">\n                    <a class=\"${b(\n            \"headers-content-link\"\n        )}\" href=\"#\">Learn to Code</a>\n                </div>\n            </div>\n            <div class=\"${b(\"navigation\")}\">\n                <form class=\"${b(\"form\")}\" action=\"\">\n                    <input class=\"${b(\n            \"input\"\n        )}\" placeholder=\"Search ...\" type=\"text\">\n                    <button class=\"${b(\n            \"form-button\"\n        )}\" type=\"submit\"><img src=\"images/search_icon.svg\" alt=\"\"></button>\n                </form>\n                ${NavBar.getProfile()}\n\n            </div>\n        </div>\n    </div>\n    `;\n    }\n}\n\n\n//# sourceURL=webpack:///./client/components/NavBar/NavBar.js?");

/***/ }),

/***/ "./client/components/NavBar/index.js":
/*!*******************************************!*\
  !*** ./client/components/NavBar/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./client/components/NavBar/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ \"./client/components/NavBar/NavBar.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/NavBar/index.js?");

/***/ }),

/***/ "./client/components/NavBar/main.scss":
/*!********************************************!*\
  !*** ./client/components/NavBar/main.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/NavBar/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/NavBar/main.scss?");

/***/ }),

/***/ "./client/components/Profile/Profile.js":
/*!**********************************************!*\
  !*** ./client/components/Profile/Profile.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Profile; });\n/* harmony import */ var _helpers_bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/bem */ \"./client/helpers/bem.js\");\n/* harmony import */ var _helpers_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/cookies */ \"./client/helpers/cookies.js\");\n/* harmony import */ var _helpers_lib_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/lib/component */ \"./client/helpers/lib/component.js\");\n/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/store */ \"./client/helpers/store/index.js\");\n/* harmony import */ var _helpers_actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/actions/auth */ \"./client/helpers/actions/auth.js\");\n/* harmony import */ var _helpers_actions_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/actions/api */ \"./client/helpers/actions/api.js\");\n\n\n\n\n\n\n\nconst b = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"profile\");\nconst inp = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"input-block\");\nclass Profile extends _helpers_lib_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    constructor(app) {\n        super({\n            store: _helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        });\n        this.container = document.createElement(\"div\");\n        this.container.className = `${b()}`;\n        app.appendChild(this.container);\n        this.tabId = 1;\n        this.render();\n        Object(_helpers_actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"getUser\"])(_helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(_helpers_cookies__WEBPACK_IMPORTED_MODULE_1__[\"decode_token\"])()[\"id\"]);\n        this.sendData = this.sendData.bind(this);\n    }\n\n    handleTabClick(e, id) {\n        let old = this.tabId;\n        this.tabId = id;\n        this.render();\n        this.container.getElementsByClassName(b(\"choice-panel-item\"))[old].className = b(\"choice-panel-item\");\n        this.container.getElementsByClassName(b(\"choice-panel-item\"))[id].className += \" \" + b(\"choice-panel-item--active\");\n\n    }\n\n    initListeners() {\n        [...this.container.getElementsByClassName(b(\"choice-panel-item\"))].map((item, id) => item.addEventListener(\"click\", (e) => this.handleTabClick(e, id)));\n    }\n\n    sendData() {\n        let data = {};\n        [...this.container.getElementsByTagName(\"input\")].map(item => data[item.name] = item.value);\n\n        if (this.tabId === 1) {\n            Object(_helpers_actions_auth__WEBPACK_IMPORTED_MODULE_4__[\"getUser\"])(_helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(_helpers_cookies__WEBPACK_IMPORTED_MODULE_1__[\"decode_token\"])()[\"id\"], data)\n        } else if (this.tabId === 3) {\n            Object(_helpers_actions_api__WEBPACK_IMPORTED_MODULE_5__[\"addCourse\"])(data)\n        } else if (this.tabId === 4) {\n            Object(_helpers_actions_api__WEBPACK_IMPORTED_MODULE_5__[\"addLesson\"])(data)\n        }\n\n\n    }\n\n    generateTab(title, labels_placeholders, header = false) {\n        const tab = document.createElement(\"div\");\n        tab.className = b(\"tab\");\n        tab.innerHTML = `\n                     <div class=\"${b(\"tab-header\")}\">\n                         <span>\n                         ${title}\n                         </span>\n                    </div>\n                    ${header ?\n            `<div class=\"${b(\"tab-icon-modification\")}\">\n                        <img src=\"/images/headhock.png\" class=\"${b(\"tab-avatar\")}\" alt=\"avatar\">\n                        <div class=\"${b(\"tab-load-file-wrapper\")}\">\n                               <button>\n                               Choose File\n                                </button>\n                                <span>We support Gravatar too</span>\n                        </div>\n                    </div>` : \"\"}\n                    <div class=\"${b(\"tab-fields\")}\">\n                    \n                    ${labels_placeholders.map(item => `<div class=\"${inp()}\">\n                                                            <label  class=\"${inp(\"label\")}\">${item.label}</label>\n                                                            <div class=\"${inp(\"input-wrapper\")}\">\n                                                                 <input  class=\"${inp(\"input\")}\"  name=${item.label} type=\"text\"  value=\"${item.value ? item.value : \"\"}\" placeholder=\"${item.placeholder ? item.placeholder : \"\"}\">\n                                                            </div>\n                                                        </div>`).join(\"\")}\n                    </div>\n                    <div class=\"${b(\"tab-footer\")}\">\n                    </div>\n\n        `\n        ;\n\n        let tabFooter = tab.getElementsByClassName(b(\"tab-footer\"))[0];\n        let button = document.createElement(\"button\");\n        button.className = b(\"tab-footer-button\");\n        button.innerHTML = 'Send Data';\n        button.addEventListener(\"click\", this.sendData);\n        tabFooter.appendChild(button);\n        return tab;\n\n    }\n\n    getCurrentTab() {\n        let user_data = _helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].state.loggedUser.data;\n\n        let dashboard = this.generateTab(\"DashBoard\", []);\n        let edit_course = this.generateTab(\"Add Course\", [\n            {\"label\": \"courseName\", \"placeholder\": \"Learning async js ...\"},\n            {\"label\": \"courseTech\", \"placeholder\": \"javascript ...\"}\n        ]);\n        let edit_lesson = this.generateTab(\"Add Lesson\", [\n            {\"label\": \"name\", \"placeholder\": \"Best Course in the world ...\"},\n            {\"label\": \"time\", \"placeholder\": \"4:30 ...\"},\n            {\"label\": \"video\", \"placeholder\": \"https://www.youtube.com/watch?v=bestVideo\"}]);\n        let edit_password = this.generateTab(\"Edit Password\", [\n            {\"label\": \"password\", \"placeholder\": \"\"},\n            {\"label\": \"Password confirmation\", \"placeholder\": \"\"},\n            {\"label\": \"Current password\", \"placeholder\": \"\"}]);\n        let edit_profile = this.generateTab(\"Edit Profile\", [\n            {\"label\": \"name\", \"value\": user_data.name},\n            {\"label\": \"email\", \"value\": user_data.email}\n        ], true);\n        if (this.tabId === 0) {\n            return dashboard;\n        } else if (this.tabId === 1) {\n            return edit_profile\n        } else if (this.tabId === 2) {\n            return edit_password\n        } else if (this.tabId === 3) {\n            return edit_course;\n        } else if (this.tabId === 4) {\n            return edit_lesson;\n        }\n    }\n\n\n    render() {\n        this.container.innerHTML = ``;\n        if (_helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].state.loggedUser.fetched) {\n            let user_data = _helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].state.loggedUser.data;\n            this.container.innerHTML += `\n                </div>\n            <div class=\"${b(\"wrapper\")}\">\n            <div class=\"${b(\"greetings\")}\">\n                  <h3 class=\"${b(\"greetings-content\")}\">Hi, <b>${user_data.name}</b>! Here is your account information.</h3>\n            </div>\n            <div class=\"${b(\"content\")}\">\n                <aside class=\"${b(\"choice-panel\")}\">\n                    <div class=\"${b(\"choice-panel-wrapper\")}\"> \n                        <div class=\"${b(\"choice-panel-item\")}\">\n                               <span class=\"${b(\"choice-panel-item-content\")}\">\n                               Dashboard\n                                </span>\n                        </div>\n                        <div class=\"${b(\"choice-panel-item\")}\">\n                           <span class=\"${b(\"choice-panel-item-content\")}\">\n                           Edit Profile\n                           </span>\n                    </div>\n                        <div class=\"${b(\"choice-panel-item\")}\">\n                               <span class=\"${b(\"choice-panel-item-content\")}\">\n                               Edit Password\n                               </span>\n                        </div>\n                        <div class=\"${b(\"choice-panel-item\")}\">\n                               Add Course\n                        </div>\n                        <div class=\"${b(\"choice-panel-item\")}\">\n                               Add Lesson\n                        </div>\n                    </div>\n                </aside>\n                \n                \n           \n            </div>        \n        </div>\n    `;\n            this.container.getElementsByClassName(b(\"content\"))[0].appendChild(this.getCurrentTab());\n            this.container.getElementsByClassName(b(\"choice-panel-item\"))[this.tabId].className += \" \" + b(\"choice-panel-item--active\");\n            this.initListeners();\n        }\n\n\n    }\n}\n\n\n//# sourceURL=webpack:///./client/components/Profile/Profile.js?");

/***/ }),

/***/ "./client/components/Profile/index.js":
/*!********************************************!*\
  !*** ./client/components/Profile/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./client/components/Profile/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile */ \"./client/components/Profile/Profile.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Profile__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/Profile/index.js?");

/***/ }),

/***/ "./client/components/Profile/main.scss":
/*!*********************************************!*\
  !*** ./client/components/Profile/main.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Profile/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/Profile/main.scss?");

/***/ }),

/***/ "./client/components/Publishments/Publishments.js":
/*!********************************************************!*\
  !*** ./client/components/Publishments/Publishments.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CourseCart___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CourseCart/ */ \"./client/components/CourseCart/index.js\");\n/* harmony import */ var _helpers_bem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/bem */ \"./client/helpers/bem.js\");\n/* harmony import */ var _helpers_lib_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/lib/component */ \"./client/helpers/lib/component.js\");\n/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/store */ \"./client/helpers/store/index.js\");\n/* harmony import */ var _helpers_actions_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/actions/api */ \"./client/helpers/actions/api.js\");\n/* harmony import */ var _helpers_CheckAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/CheckAction */ \"./client/helpers/CheckAction.js\");\n\n\n\n\n\n\n\nconst b = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"publications\");\n\nclass Publishments extends _helpers_lib_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(app) {\n    let container = document.createElement(\"section\");\n    super({ store: _helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"] });\n    this.container = container;\n    this.container.className = b();\n    app.appendChild(this.container);\n    Publishments.dispatchAll();\n    this.render();\n  }\n\n  static dispatchAll() {\n    Object(_helpers_CheckAction__WEBPACK_IMPORTED_MODULE_5__[\"CheckAction\"])(_helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].state.allCourses, _helpers_actions_api__WEBPACK_IMPORTED_MODULE_4__[\"getAllCourses\"], _helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    Object(_helpers_CheckAction__WEBPACK_IMPORTED_MODULE_5__[\"CheckAction\"])(_helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].state.allLessons, _helpers_actions_api__WEBPACK_IMPORTED_MODULE_4__[\"getAllLessons\"], _helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  }\n\n  render() {\n    this.container.className = `${b()}`;\n    this.container.innerHTML = `\n        <div class=\"${b(\n          \"wrapper\"\n        )} website-layout-width website-layout-position\">\n            <div class=\"publications__header\">\n                <div class=\"publications__header-label\">\n                    <span class=\"${b(\"header-label-title\")}\">\n                        What's New\n                    </span>\n                    <span class=\"${b(\"header-label-sub-title\")}\">\n                        Latest Published Courses & Lessons\n                    </span>\n                </div>\n\n                <button class=\"publications__button\">\n                    <span>Browse All </span>\n                   <img src=\"/images/rightArrow.svg\"  alt=\"\">\n                </button>\n            </div>\n        </div>\n        <div class=\"${b(\"list\")} website-layout-width website-layout-position\">\n        </div>\n`;\n    let allCourses = _helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].state.allCourses;\n    let elem = this.container.getElementsByClassName(b(\"list\"))[0];\n    allCourses.fetched\n      ? allCourses.data.map(item => new _CourseCart___WEBPACK_IMPORTED_MODULE_0__[\"default\"](elem, item[\"_id\"], true))\n      : null;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Publishments);\n\n\n//# sourceURL=webpack:///./client/components/Publishments/Publishments.js?");

/***/ }),

/***/ "./client/components/Publishments/index.js":
/*!*************************************************!*\
  !*** ./client/components/Publishments/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./client/components/Publishments/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Publishments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Publishments */ \"./client/components/Publishments/Publishments.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Publishments__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/Publishments/index.js?");

/***/ }),

/***/ "./client/components/Publishments/main.scss":
/*!**************************************************!*\
  !*** ./client/components/Publishments/main.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Publishments/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/Publishments/main.scss?");

/***/ }),

/***/ "./client/components/Registration/Registration.js":
/*!********************************************************!*\
  !*** ./client/components/Registration/Registration.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/store */ \"./client/helpers/store/index.js\");\n/* harmony import */ var _helpers_lib_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/lib/component */ \"./client/helpers/lib/component.js\");\n/* harmony import */ var _helpers_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/cookies */ \"./client/helpers/cookies.js\");\n/* harmony import */ var _helpers_actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/actions/auth */ \"./client/helpers/actions/auth.js\");\n\n\n\n\n\nclass Registration extends _helpers_lib_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(app) {\n    let container = document.createElement(\"div\");\n    super({\n      store: _helpers_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      element: container\n    });\n    this.container = container;\n    app.appendChild(this.container);\n    this.render();\n  }\n\n  handle_registration(e) {\n    e.preventDefault();\n    let inputs = Array.prototype.slice.call(\n      this.container.getElementsByTagName(\"input\")\n    );\n    let data_collect = {};\n    let data = {};\n    inputs.map(input => (data_collect[input.name] = input.value));\n    data[\"email\"] = data_collect[\"email\"];\n    data[\"password\"] = data_collect[\"password\"];\n    data[\"name\"] = data_collect[\"name\"];\n    Object(_helpers_actions_auth__WEBPACK_IMPORTED_MODULE_3__[\"registrate\"])(_helpers_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"], data);\n  }\n\n  static onSuccessRegistration() {\n    history.pushState(\n      {\n        id: \"homepage\"\n      },\n      \"egghead\",\n      \"/login\"\n    );\n    location.reload();\n  }\n\n  render() {\n    _helpers_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state.registrationState.fetched\n      ? Registration.onSuccessRegistration()\n      : null;\n\n    this.container.className = \"registration\";\n    this.container.innerHTML = `\n              <section class=\"log-in\">\n                <div>\n                    <h1 class=\"log-in__title\">\n                        Create your egghead account.\n                    </h1>\n                </div>\n                <div class=\"log-in__grey-box\">\n                    <form class=\"log-in__form\">\n                        <div class=\"log-in__input-block log-in__buttons\">\n                            <a href=\"#\" class=\"log-in__btn-log-in-github\">\n                                Sign up with Github\n                            </a>\n                        </div>\n                        <div class=\"log-in__input-block\">\n                            <em>or</em>\n                        </div>\n                        <div class=\"log-in__input-block\">\n                            <label class=\"log-in__email-label\">First Name\n                                <input name=\"name\" class=\"log-in__email-text\">\n                            </label>\n                        </div>\n                        <div class=\"log-in__input-block\">\n                            <label class=\"log-in__email-label\">Email\n                                <input name=\"email\" class=\"log-in__email-text\">\n                            </label>\n                        </div>\n                        <div class=\"log-in__input-block\">\n                            <label class=\"log-in__email-label\">Password\n                                <input name=\"password\" type=\"password\" class=\"log-in__email-text\">\n                            </label>\n                        </div>\n                        <div class=\"log-in__input-block log-in__buttons\">\n                            <button  class=\"log-in__btn-log-in button\">Create account</button>\n                        </div>\n                        <br>\n                        <div class=\"log-in__input-block log-in__input-block-info\">\n                            Have an account <a href=\"/login\">Sign in</a>\n                        </div>\n                        <div class=\"log-in__input-block log-in__input-block-info\">\n                            Forgot your\n                            password? <a href=\"#\">Recover it</a>\n                        </div>\n                    </form>\n                </div>\n            </section>\n                `;\n\n    this.container\n      .getElementsByClassName(\"button\")[0]\n      .addEventListener(\"click\", e => this.handle_registration(e));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\n\n\n//# sourceURL=webpack:///./client/components/Registration/Registration.js?");

/***/ }),

/***/ "./client/components/StatsAndRemainders/StatsAndRemainders.js":
/*!********************************************************************!*\
  !*** ./client/components/StatsAndRemainders/StatsAndRemainders.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StatsAndRemainders; });\n/* harmony import */ var _helpers_bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/bem */ \"./client/helpers/bem.js\");\n/* harmony import */ var _helpers_lib_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/lib/component */ \"./client/helpers/lib/component.js\");\n/* harmony import */ var _helpers_store_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/store/index.js */ \"./client/helpers/store/index.js\");\n/* harmony import */ var _CourseBigBlock_CourseBigBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CourseBigBlock/CourseBigBlock */ \"./client/components/CourseBigBlock/CourseBigBlock.js\");\n/* harmony import */ var _helpers_actions_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/actions/api */ \"./client/helpers/actions/api.js\");\n/* harmony import */ var _helpers_CheckAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/CheckAction */ \"./client/helpers/CheckAction.js\");\n/* harmony import */ var _helpers_actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/actions/auth */ \"./client/helpers/actions/auth.js\");\n// import course_big_block from \"../CourseBigBlock\";\n\n\n\n\n\n\n\n\nconst b = Object(_helpers_bem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"stats_and_remainders\");\n\nclass StatsAndRemainders extends _helpers_lib_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(app) {\n    let container = document.createElement(\"section\");\n    super({\n      store: _helpers_store_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    });\n    this.container = container;\n    this.container.className = b();\n    app.appendChild(this.container);\n    StatsAndRemainders.dispatchAll();\n  }\n\n  static dispatchAll() {\n    Object(_helpers_CheckAction__WEBPACK_IMPORTED_MODULE_5__[\"CheckAction\"])(_helpers_store_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.allCourses, _helpers_actions_api__WEBPACK_IMPORTED_MODULE_4__[\"getAllCourses\"], _helpers_store_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    Object(_helpers_CheckAction__WEBPACK_IMPORTED_MODULE_5__[\"CheckAction\"])(_helpers_store_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.allLessons, _helpers_actions_api__WEBPACK_IMPORTED_MODULE_4__[\"getAllLessons\"], _helpers_store_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    Object(_helpers_CheckAction__WEBPACK_IMPORTED_MODULE_5__[\"CheckAction\"])(_helpers_store_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.allUsers, _helpers_actions_auth__WEBPACK_IMPORTED_MODULE_6__[\"getAllUsers\"], _helpers_store_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  }\n\n  render() {\n    let lessons = _helpers_store_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.allLessons;\n    let data = _helpers_store_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.allCourses;\n    this.container.innerHTML = \"\";\n    if (data.fetched && lessons.fetched) {\n      data = data.data[0];\n      this.container.innerHTML += `<div class=\"${b(\n        \"wrapper\"\n      )} flex-join website-layout-width website-layout-position\">\n                    <div class=\"course-big-block\">\n                    <span class=\"${b(\"header\")}\">\n                    CONTINUE WATCHING\n                    </span>\n                </div>\n                <div class=\"stats-block\">\n                <span class=\"${b(\"header\")} \">STATS</span>\n                <div class=\"stats-block-wrapper\">\n                    <div class=\"flex-join\">\n                        <div class=\"stats-block__single-stat stats-block__space\">\n\n                            <span class=\"stats-block__count\">0</span>\n\n                            <span class=\"stats-block__block-header\">Lessons completed</span>\n\n                        </div>\n                        <div class=\"stats-block__single-stat\">\n\n                            <span class=\"stats-block__count\">0</span>\n\n                            <span class=\"stats-block__block-header\">Courses completed</h4>\n\n                        </div>\n\n                    </div>\n\n                    <button class=\"stats-block__rect-stat\">\n                        <span>\n                            VIEW FULL HISTORY\n                        </span>\n                        <img src=\"/images/clockBack.svg\" alt=\"\">\n                    </button>\n\n                </div>\n\n            </div>\n        </div>\n        `;\n      const father = this.container.getElementsByClassName(\n        \"course-big-block\"\n      )[0];\n      new _CourseBigBlock_CourseBigBlock__WEBPACK_IMPORTED_MODULE_3__[\"default\"](father, data);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./client/components/StatsAndRemainders/StatsAndRemainders.js?");

/***/ }),

/***/ "./client/components/StatsAndRemainders/index.js":
/*!*******************************************************!*\
  !*** ./client/components/StatsAndRemainders/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./client/components/StatsAndRemainders/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _StatsAndRemainders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatsAndRemainders */ \"./client/components/StatsAndRemainders/StatsAndRemainders.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _StatsAndRemainders__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./client/components/StatsAndRemainders/index.js?");

/***/ }),

/***/ "./client/components/StatsAndRemainders/main.scss":
/*!********************************************************!*\
  !*** ./client/components/StatsAndRemainders/main.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/StatsAndRemainders/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/components/StatsAndRemainders/main.scss?");

/***/ }),

/***/ "./client/css/main.scss":
/*!******************************!*\
  !*** ./client/css/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/css/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/css/main.scss?");

/***/ }),

/***/ "./client/css/media.scss":
/*!*******************************!*\
  !*** ./client/css/media.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./media.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/css/media.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/css/media.scss?");

/***/ }),

/***/ "./client/helpers/CheckAction.js":
/*!***************************************!*\
  !*** ./client/helpers/CheckAction.js ***!
  \***************************************/
/*! exports provided: CheckAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CheckAction\", function() { return CheckAction; });\nconst CheckAction = (storeObj, action, store) =>\n  storeObj.fetching || storeObj.fetched || storeObj.data.length\n    ? null\n    : action(store);\n\n\n//# sourceURL=webpack:///./client/helpers/CheckAction.js?");

/***/ }),

/***/ "./client/helpers/actions/api.js":
/*!***************************************!*\
  !*** ./client/helpers/actions/api.js ***!
  \***************************************/
/*! exports provided: getAllCourses, getAllLessons, addCourse, addLesson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllCourses\", function() { return getAllCourses; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllLessons\", function() { return getAllLessons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCourse\", function() { return addCourse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addLesson\", function() { return addLesson; });\n/* harmony import */ var _reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/reducerConstants */ \"./client/helpers/reducers/reducerConstants.js\");\n/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cookies */ \"./client/helpers/cookies.js\");\n// import store from \"../store/store\";\n\n\n\nconst getAllCourses = async store => {\n    try {\n        let endpoint = \"/api/courses\";\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"getAllCoursesStartAction\"], {});\n\n        const response = await fetch(endpoint, {\n            method: \"get\",\n            headers: {Authorization: \"bearer \" + Object(_cookies__WEBPACK_IMPORTED_MODULE_1__[\"get_token\"])()}\n        });\n        const data = await response.json();\n\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"getAllCoursesSuccessAction\"], data);\n    } catch (err) {\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"getAllCoursesErrorAction\"], err);\n    }\n};\n\nconst getAllLessons = async store => {\n    try {\n        let endpoint = \"/api/lessons\";\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"getAllLessonsStartAction\"], {});\n\n        const response = await fetch(endpoint, {\n            method: \"get\",\n            headers: {Authorization: \"bearer \" + Object(_cookies__WEBPACK_IMPORTED_MODULE_1__[\"get_token\"])()}\n        });\n        const data = await response.json();\n\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"getAllLessonsSuccessAction\"], data);\n    } catch (err) {\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"getAllLessonsErrorAction\"], err);\n    }\n};\n\n\nconst addCourse = async (data) => {\n    try {\n        let endpoint = \"/api/courses\";\n        const response = await fetch(endpoint, {\n            method: \"post\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\",\n                Authorization: \"bearer \" + Object(_cookies__WEBPACK_IMPORTED_MODULE_1__[\"get_token\"])()\n            },\n            body: JSON.stringify(data)\n        });\n        const res = await response.json();\n        location.reload();\n\n    } catch (err) {\n        console.log(err);\n        // store.dispatch(getAllCoursesErrorAction, err);\n\n    }\n};\n\nconst addLesson= async (data) => {\n    try {\n        let endpoint = \"/api/lessons\";\n        const response = await fetch(endpoint, {\n            method: \"post\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\",\n                Authorization: \"bearer \" + Object(_cookies__WEBPACK_IMPORTED_MODULE_1__[\"get_token\"])()\n            },\n            body: JSON.stringify(data)\n        });\n        const res = await response.json();\n        location.reload();\n\n    } catch (err) {\n        console.log(err);\n        // store.dispatch(getAllCoursesErrorAction, err);\n\n    }\n};\n\n//# sourceURL=webpack:///./client/helpers/actions/api.js?");

/***/ }),

/***/ "./client/helpers/actions/auth.js":
/*!****************************************!*\
  !*** ./client/helpers/actions/auth.js ***!
  \****************************************/
/*! exports provided: getAllUsers, login, registrate, getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllUsers\", function() { return getAllUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registrate\", function() { return registrate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUser\", function() { return getUser; });\n/* harmony import */ var _reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/reducerConstants */ \"./client/helpers/reducers/reducerConstants.js\");\n/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cookies */ \"./client/helpers/cookies.js\");\n\n\n\nconst getAllUsers = async store => {\n    try {\n        let endpoint = \"/auth/users\";\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"getAllUsersStartAction\"], {});\n        const response = await fetch(endpoint, {\n            method: \"get\",\n            headers: {Authorization: \"bearer \" + Object(_cookies__WEBPACK_IMPORTED_MODULE_1__[\"get_token\"])()}\n        });\n        const data = await response.json();\n\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"getAllUsersSuccessAction\"], data);\n    } catch (err) {\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"getAllUsersErrorAction\"], err);\n    }\n};\n\nconst login = async (store, post_data) => {\n    try {\n        let endpoint = \"/auth/login\";\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"userLoginStartAction\"], {});\n        const response = await fetch(endpoint, {\n            method: \"post\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(post_data)\n        });\n        const data = await response.json();\n\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"userLoginSuccessAction\"], data);\n    } catch (err) {\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"userLoginErrorAction\"], err);\n    }\n};\n\nconst registrate = async (store,post_data) => {\n\n\n    try {\n        let endpoint = \"/auth/users\";\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"userRegistrationStartAction\"], {});\n        const response = await fetch(endpoint, {\n            method: \"post\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(post_data)\n        });\n        const data = await response.json();\n\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"userRegistrationSuccessAction\"], data);\n    } catch (err) {\n        console.log(err,\"Err\");\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"userRegistrationErrorAction\"], err);\n    }\n};\n\n\nconst getUser = async (store, user_id, post_data = false) => {\n    try {\n        let endpoint = \"/auth/users/\" + user_id;\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"userLoginStartAction\"], {});\n        const method = post_data ? \"post\" : \"get\";\n        const body = post_data ? JSON.stringify(post_data) : null;\n        const response = await fetch(endpoint, {\n            method: method,\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\",\n                Authorization: \"bearer \" + Object(_cookies__WEBPACK_IMPORTED_MODULE_1__[\"get_token\"])()\n            },\n            body: body\n        });\n        const data = await response.json();\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"userLoginSuccessAction\"], data);\n    } catch (err) {\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"userLoginErrorAction\"], err);\n    }\n    try {\n        let endpoint = \"/auth/users\";\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"userRegistrationStartAction\"], {});\n\n        const response = await fetch(endpoint, {\n            method: \"post\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const data = await response.json();\n\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"userRegistrationSuccessAction\"], data);\n    } catch (err) {\n        store.dispatch(_reducers_reducerConstants__WEBPACK_IMPORTED_MODULE_0__[\"userRegistrationErrorAction\"], err);\n    }\n};\n\n\n//# sourceURL=webpack:///./client/helpers/actions/auth.js?");

/***/ }),

/***/ "./client/helpers/bem.js":
/*!*******************************!*\
  !*** ./client/helpers/bem.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ELEMENT_SEPARATOR = \"__\",\n  MODIFIER_SEPARATOR = \"--\";\n\nfunction getBEMPAth({ b, e, m }) {\n  const base = e ? [b, e].join(ELEMENT_SEPARATOR) : b;\n\n  return [base, ...m.map(modifier => [base, modifier].join(MODIFIER_SEPARATOR))]\n    .join(\" \")\n    .trim();\n}\n\nconst b = b => (elementName, modifiers = {}) => {\n  let e, m;\n\n  if (typeof elementName === \"string\") {\n    e = elementName;\n  } else {\n    modifiers = elementName || {};\n  }\n\n  if (Array.isArray(modifiers)) {\n    m = modifiers;\n  } else {\n    m = Object.keys(modifiers).filter(modifier => modifiers[modifier]) || [];\n  }\n\n  return getBEMPAth({ b, e, m });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (b);\n\n\n//# sourceURL=webpack:///./client/helpers/bem.js?");

/***/ }),

/***/ "./client/helpers/cookies.js":
/*!***********************************!*\
  !*** ./client/helpers/cookies.js ***!
  \***********************************/
/*! exports provided: set_cookie, get_cookie, get_token, decode_token */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set_cookie\", function() { return set_cookie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_cookie\", function() { return get_cookie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_token\", function() { return get_token; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decode_token\", function() { return decode_token; });\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/lib/index.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst set_cookie = (cookie_name, data) =>\n    (document.cookie = `${cookie_name}=${data}`);\nconst get_cookie = cookie_name =>\n    document.cookie\n        .split(\";\")\n        .filter(item => item.split(\"=\")[0].trim() === cookie_name);\nconst get_token = () =>\n    get_cookie(\"access_token\").length\n        ? get_cookie(\"access_token\")[0].split(\"=\")[1]\n        : null;\n\n\nconst decode_token = () => jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(get_token());\n\n\n//# sourceURL=webpack:///./client/helpers/cookies.js?");

/***/ }),

/***/ "./client/helpers/lib/component.js":
/*!*****************************************!*\
  !*** ./client/helpers/lib/component.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/store.js */ \"./client/helpers/store/store.js\");\n// We're importing the store Class here so we can test against it in the constructor\n\n\nclass Component {\n  constructor(props = {}) {\n    this.render = this.render || function() {};\n\n    if (props.store instanceof _store_store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      props.store.events.subscribe(\"stateChange\", () => this.render());\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./client/helpers/lib/component.js?");

/***/ }),

/***/ "./client/helpers/lib/pubsub.js":
/*!**************************************!*\
  !*** ./client/helpers/lib/pubsub.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PubSub; });\nclass PubSub {\n  constructor() {\n    this.events = {};\n  }\n\n  subscribe(event, callback) {\n    let self = this;\n\n    if (!self.events.hasOwnProperty(event)) {\n      self.events[event] = [];\n    }\n\n    return self.events[event].push(callback);\n  }\n\n  publish(event, data = {}) {\n    let self = this;\n\n    if (!self.events.hasOwnProperty(event)) {\n      return [];\n    }\n\n    return self.events[event].map(callback => callback(data));\n  }\n}\n\n\n//# sourceURL=webpack:///./client/helpers/lib/pubsub.js?");

/***/ }),

/***/ "./client/helpers/reducers/AllCoursesReducer.js":
/*!******************************************************!*\
  !*** ./client/helpers/reducers/AllCoursesReducer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst AllCoursesReducer = {\n  getAllCoursesStart(state, payload) {\n    state.allCourses.fetching = true;\n    return state;\n  },\n  getAllCoursesSuccess(state, payload) {\n    state.allCourses.data = payload;\n    state.allCourses.fetching = false;\n    state.allCourses.fetched = true;\n    return state;\n  },\n  getAllCoursesError(state, payload) {\n    state.allCourses.error = payload;\n    state.allCourses.fetching = false;\n    return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllCoursesReducer);\n\n\n//# sourceURL=webpack:///./client/helpers/reducers/AllCoursesReducer.js?");

/***/ }),

/***/ "./client/helpers/reducers/AllLessonsReducer.js":
/*!******************************************************!*\
  !*** ./client/helpers/reducers/AllLessonsReducer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst AllLessonsReducer = {\n  getAllLessonsStart(state, payload) {\n    state.allLessons.fetching = true;\n    return state;\n  },\n  getAllLessonsSuccess(state, payload) {\n    state.allLessons.data = payload;\n    state.allLessons.fetching = false;\n    state.allLessons.fetched = true;\n    return state;\n  },\n  getAllLessonsError(state, payload) {\n    state.allLessons.error = payload;\n    state.allLessons.fetching = false;\n    return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllLessonsReducer);\n\n\n//# sourceURL=webpack:///./client/helpers/reducers/AllLessonsReducer.js?");

/***/ }),

/***/ "./client/helpers/reducers/AllUsersReducer.js":
/*!****************************************************!*\
  !*** ./client/helpers/reducers/AllUsersReducer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst AllUsersReducer = {\n  getAllUsersStart(state, payload) {\n    state.allUsers.fetching = true;\n    return state;\n  },\n  getAllUsersSuccess(state, payload) {\n    state.allUsers.data = payload;\n    state.allUsers.fetching = false;\n    state.allUsers.fetched = true;\n    return state;\n  },\n  getAllUsersError(state, payload) {\n    state.allUsers.error = payload;\n    state.allUsers.fetching = false;\n    return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllUsersReducer);\n\n\n//# sourceURL=webpack:///./client/helpers/reducers/AllUsersReducer.js?");

/***/ }),

/***/ "./client/helpers/reducers/LoginReducer.js":
/*!*************************************************!*\
  !*** ./client/helpers/reducers/LoginReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst UserLoginReducer = {\n  userLoginStart(state, payload) {\n    state.loggedUser.fetching = true;\n    return state;\n  },\n  userLoginSuccess(state, payload) {\n    state.loggedUser.data = payload;\n    state.loggedUser.fetching = false;\n    state.loggedUser.fetched = true;\n    state.loggedUser.loggedIn = true;\n    return state;\n  },\n  userLoginError(state, payload) {\n    state.loggedUser.error = payload;\n    state.loggedUser.fetching = false;\n    return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserLoginReducer);\n\n\n//# sourceURL=webpack:///./client/helpers/reducers/LoginReducer.js?");

/***/ }),

/***/ "./client/helpers/reducers/RegistrationReducer.js":
/*!********************************************************!*\
  !*** ./client/helpers/reducers/RegistrationReducer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst UserRegistrationReducer = {\n  userRegistrationStart(state, payload) {\n    state.registrationState.fetching = true;\n    return state;\n  },\n  userRegistrationSuccess(state, payload) {\n    state.registrationState.data = payload;\n    state.registrationState.fetching = false;\n    state.registrationState.fetched = true;\n    return state;\n  },\n  userRegistrationError(state, payload) {\n    state.registrationState.error = payload;\n    state.registrationState.fetching = false;\n    return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserRegistrationReducer);\n\n\n//# sourceURL=webpack:///./client/helpers/reducers/RegistrationReducer.js?");

/***/ }),

/***/ "./client/helpers/reducers/reducerConstants.js":
/*!*****************************************************!*\
  !*** ./client/helpers/reducers/reducerConstants.js ***!
  \*****************************************************/
/*! exports provided: getAllCoursesStartAction, getAllCoursesSuccessAction, getAllCoursesErrorAction, getAllLessonsStartAction, getAllLessonsSuccessAction, getAllLessonsErrorAction, getAllUsersErrorAction, getAllUsersStartAction, getAllUsersSuccessAction, userLoginStartAction, userLoginSuccessAction, userLoginErrorAction, userRegistrationStartAction, userRegistrationSuccessAction, userRegistrationErrorAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllCoursesStartAction\", function() { return getAllCoursesStartAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllCoursesSuccessAction\", function() { return getAllCoursesSuccessAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllCoursesErrorAction\", function() { return getAllCoursesErrorAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllLessonsStartAction\", function() { return getAllLessonsStartAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllLessonsSuccessAction\", function() { return getAllLessonsSuccessAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllLessonsErrorAction\", function() { return getAllLessonsErrorAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllUsersErrorAction\", function() { return getAllUsersErrorAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllUsersStartAction\", function() { return getAllUsersStartAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllUsersSuccessAction\", function() { return getAllUsersSuccessAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userLoginStartAction\", function() { return userLoginStartAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userLoginSuccessAction\", function() { return userLoginSuccessAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userLoginErrorAction\", function() { return userLoginErrorAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userRegistrationStartAction\", function() { return userRegistrationStartAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userRegistrationSuccessAction\", function() { return userRegistrationSuccessAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userRegistrationErrorAction\", function() { return userRegistrationErrorAction; });\n//COURSES\nconst getAllCoursesStartAction = \"getAllCoursesStart\";\nconst getAllCoursesSuccessAction = \"getAllCoursesSuccess\";\nconst getAllCoursesErrorAction = \"getAllCoursesError\";\n\n//LESSONS\nconst getAllLessonsStartAction = \"getAllLessonsStart\";\nconst getAllLessonsSuccessAction = \"getAllLessonsSuccess\";\nconst getAllLessonsErrorAction = \"getAllLessonsError\";\n\n//USERS\nconst getAllUsersErrorAction = \"getAllUsersError\";\nconst getAllUsersStartAction = \"getAllUsersStart\";\nconst getAllUsersSuccessAction = \"getAllUsersSuccess\";\n\n//LOGIN\n\nconst userLoginStartAction = \"userLoginStart\";\nconst userLoginSuccessAction = \"userLoginSuccess\";\nconst userLoginErrorAction = \"userLoginError\";\n\n//REGISTER\nconst userRegistrationStartAction = \"userRegistrationStart\";\nconst userRegistrationSuccessAction = \"userRegistrationSuccess\";\nconst userRegistrationErrorAction = \"userRegistrationError\";\n\n\n//# sourceURL=webpack:///./client/helpers/reducers/reducerConstants.js?");

/***/ }),

/***/ "./client/helpers/store/commits.js":
/*!*****************************************!*\
  !*** ./client/helpers/store/commits.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getAllCoursesStart(context, payload) {\n    context.commit(\"getAllCoursesStart\", payload);\n  },\n  getAllCoursesSuccess(context, payload) {\n    context.commit(\"getAllCoursesSuccess\", payload);\n  },\n  getAllCoursesError(context, payload) {\n    context.commit(\"getAllCoursesError\", payload);\n  },\n\n  getAllLessonsStart(context, payload) {\n    context.commit(\"getAllLessonsStart\", payload);\n  },\n  getAllLessonsSuccess(context, payload) {\n    context.commit(\"getAllLessonsSuccess\", payload);\n  },\n  getAllLessonsError(context, payload) {\n    context.commit(\"getAllLessonsError\", payload);\n  },\n\n  getAllUsersStart(context, payload) {\n    context.commit(\"getAllUsersStart\", payload);\n  },\n  getAllUsersSuccess(context, payload) {\n    context.commit(\"getAllUsersSuccess\", payload);\n  },\n  getAllUsersError(context, payload) {\n    context.commit(\"getAllUsersError\", payload);\n  },\n\n  userLoginStart(context, payload) {\n    context.commit(\"userLoginStart\", payload);\n  },\n  userLoginSuccess(context, payload) {\n    context.commit(\"userLoginSuccess\", payload);\n  },\n  userLoginError(context, payload) {\n    context.commit(\"userLoginError\", payload);\n  },\n\n  userRegistrationStart(context, payload) {\n    context.commit(\"userRegistrationStart\", payload);\n  },\n  userRegistrationSuccess(context, payload) {\n    context.commit(\"userRegistrationSuccess\", payload);\n  },\n  userRegistrationError(context, payload) {\n    context.commit(\"userRegistrationError\", payload);\n  }\n});\n\n\n//# sourceURL=webpack:///./client/helpers/store/commits.js?");

/***/ }),

/***/ "./client/helpers/store/index.js":
/*!***************************************!*\
  !*** ./client/helpers/store/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _commits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commits.js */ \"./client/helpers/store/commits.js\");\n/* harmony import */ var _reducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers.js */ \"./client/helpers/store/reducers.js\");\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.js */ \"./client/helpers/store/state.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.js */ \"./client/helpers/store/store.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _store_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n  actions: _commits_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  mutations: _reducers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  state: _state_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n\n//# sourceURL=webpack:///./client/helpers/store/index.js?");

/***/ }),

/***/ "./client/helpers/store/reducers.js":
/*!******************************************!*\
  !*** ./client/helpers/store/reducers.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducers_AllCoursesReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/AllCoursesReducer */ \"./client/helpers/reducers/AllCoursesReducer.js\");\n/* harmony import */ var _reducers_AllLessonsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/AllLessonsReducer */ \"./client/helpers/reducers/AllLessonsReducer.js\");\n/* harmony import */ var _reducers_AllUsersReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/AllUsersReducer */ \"./client/helpers/reducers/AllUsersReducer.js\");\n/* harmony import */ var _reducers_LoginReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/LoginReducer */ \"./client/helpers/reducers/LoginReducer.js\");\n/* harmony import */ var _reducers_RegistrationReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/RegistrationReducer */ \"./client/helpers/reducers/RegistrationReducer.js\");\n\n\n\n\n\n\n// concatenation of ALL reducers\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  ..._reducers_AllCoursesReducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  ..._reducers_AllLessonsReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  ..._reducers_AllUsersReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  ..._reducers_LoginReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  ..._reducers_RegistrationReducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n\n\n//# sourceURL=webpack:///./client/helpers/store/reducers.js?");

/***/ }),

/***/ "./client/helpers/store/state.js":
/*!***************************************!*\
  !*** ./client/helpers/store/state.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst allCourses = {\n  allCourses: {\n    fetching: false,\n    fetched: false,\n    error: false,\n    data: []\n  }\n};\n\nconst allLessons = {\n  allLessons: {\n    fetching: false,\n    fetched: false,\n    error: false,\n    data: []\n  }\n};\n\nconst allUsers = {\n  allUsers: {\n    fetching: false,\n    fetched: false,\n    error: false,\n    data: []\n  }\n};\nconst loggedUser = {\n  loggedUser: {\n    fetching: false,\n    fetched: false,\n    loggedIn: false,\n    data: {}\n  }\n};\nconst registrationState = {\n  registrationState: {\n    fetching: false,\n    fetched: false,\n    loggedIn: false,\n    data: {}\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  ...allCourses,\n  ...allLessons,\n  ...allUsers,\n  ...loggedUser,\n  ...registrationState\n});\n\n\n//# sourceURL=webpack:///./client/helpers/store/state.js?");

/***/ }),

/***/ "./client/helpers/store/store.js":
/*!***************************************!*\
  !*** ./client/helpers/store/store.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Store; });\n/* harmony import */ var _lib_pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/pubsub.js */ \"./client/helpers/lib/pubsub.js\");\n\n\nclass Store {\n  constructor(params) {\n    let self = this;\n\n    // Add some default objects to hold our actions, mutations and state\n    self.actions = {};\n    self.mutations = {};\n    self.state = {};\n\n    // A status enum to set during actions and mutations\n    self.status = \"resting\";\n\n    // Attach our PubSub module as an `events` element\n    self.events = new _lib_pubsub_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    if (params.hasOwnProperty(\"actions\")) {\n      self.actions = params.actions;\n    }\n\n    if (params.hasOwnProperty(\"mutations\")) {\n      self.mutations = params.mutations;\n    }\n\n    self.state = new Proxy(params.state || {}, {\n      set: function(state, key, value) {\n        // Set the value as we would normally\n        state[key] = value;\n\n        // Trace out to the console. This will be grouped by the related action\n        console.log(`stateChange: ${key}: ${value}`);\n\n        // Publish the change event for the components that are listening\n        self.events.publish(\"stateChange\", self.state);\n\n        // Reset the status ready for the next operation\n        self.status = \"resting\";\n\n        return true;\n      }\n    });\n  }\n\n  dispatch(actionKey, payload) {\n    let self = this;\n\n    if (typeof self.actions[actionKey] !== \"function\") {\n      console.error(`Action \"${actionKey} doesn't exist.`);\n      return false;\n    }\n\n    console.groupCollapsed(`ACTION: ${actionKey}`);\n\n    // Let anything that's watching the status know that we're dispatching an action\n    self.status = \"action\";\n\n    // Actually call the action and pass it the Store context and whatever payload was passed\n    self.actions[actionKey](self, payload);\n\n    // Close our console group to keep things nice and neat\n    console.groupEnd();\n\n    return true;\n  }\n\n  commit(mutationKey, payload) {\n    let self = this;\n\n    // Run a quick check to see if this mutation actually exists\n    // before trying to run it\n    if (typeof self.mutations[mutationKey] !== \"function\") {\n      console.log(`Mutation \"${mutationKey}\" doesn't exist`);\n      return false;\n    }\n\n    // Let anything that's watching the status know that we're mutating state\n    self.status = \"mutation\";\n\n    // Get a new version of the state by running the mutation and storing the result of it\n    let newState = self.mutations[mutationKey](self.state, payload);\n\n    // Merge the old and new together to create a new state and set it\n    self.state = Object.assign(self.state, newState);\n\n    return true;\n  }\n}\n\n\n//# sourceURL=webpack:///./client/helpers/store/store.js?");

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes_routePaths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/routePaths */ \"./client/routes/routePaths.js\");\n/* harmony import */ var _routes_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/home */ \"./client/routes/home.js\");\n/* harmony import */ var _routes_errorPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/errorPage */ \"./client/routes/errorPage.js\");\n/* harmony import */ var _routes_registration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/registration */ \"./client/routes/registration.js\");\n/* harmony import */ var _routes_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/login */ \"./client/routes/login.js\");\n/* harmony import */ var _helpers_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/cookies */ \"./client/helpers/cookies.js\");\n/* harmony import */ var _routes_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/profile */ \"./client/routes/profile.js\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/main.scss */ \"./client/css/main.scss\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _css_media_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/media.scss */ \"./client/css/media.scss\");\n/* harmony import */ var _css_media_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_media_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nlet app = document.getElementById(\"root\");\nconst path_current = window.location.pathname;\nconst private_route = (component, app) =>\n  Object(_helpers_cookies__WEBPACK_IMPORTED_MODULE_5__[\"get_token\"])() ? component(app) : Object(_routes_login__WEBPACK_IMPORTED_MODULE_4__[\"login_route\"])(app);\n\nconst redirect_route = (component, app) =>\n  Object(_helpers_cookies__WEBPACK_IMPORTED_MODULE_5__[\"get_token\"])() ? Object(_routes_home__WEBPACK_IMPORTED_MODULE_1__[\"home_route\"])(app) : component(app);\n\nswitch (path_current) {\n  case _routes_routePaths__WEBPACK_IMPORTED_MODULE_0__[\"home_url\"]:\n    private_route(_routes_home__WEBPACK_IMPORTED_MODULE_1__[\"home_route\"], app);\n    break;\n  case _routes_routePaths__WEBPACK_IMPORTED_MODULE_0__[\"login_url\"]:\n    redirect_route(_routes_login__WEBPACK_IMPORTED_MODULE_4__[\"login_route\"], app);\n    break;\n  case _routes_routePaths__WEBPACK_IMPORTED_MODULE_0__[\"registration_url\"]:\n    redirect_route(_routes_registration__WEBPACK_IMPORTED_MODULE_3__[\"registration_route\"], app);\n    break;\n  case _routes_routePaths__WEBPACK_IMPORTED_MODULE_0__[\"profile_url\"]:\n    Object(_routes_profile__WEBPACK_IMPORTED_MODULE_6__[\"profile_route\"])(app);\n    break;\n  default:\n    Object(_routes_errorPage__WEBPACK_IMPORTED_MODULE_2__[\"errorPage\"])(app);\n}\n\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ }),

/***/ "./client/routes/errorPage.js":
/*!************************************!*\
  !*** ./client/routes/errorPage.js ***!
  \************************************/
/*! exports provided: errorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"errorPage\", function() { return errorPage; });\n/* harmony import */ var _components_NavBar___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/NavBar/ */ \"./client/components/NavBar/index.js\");\n\n\nconst errorPage = app => new _components_NavBar___WEBPACK_IMPORTED_MODULE_0__[\"default\"](app);\n\n\n//# sourceURL=webpack:///./client/routes/errorPage.js?");

/***/ }),

/***/ "./client/routes/home.js":
/*!*******************************!*\
  !*** ./client/routes/home.js ***!
  \*******************************/
/*! exports provided: home_route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"home_route\", function() { return home_route; });\n/* harmony import */ var _components_StatsAndRemainders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/StatsAndRemainders */ \"./client/components/StatsAndRemainders/index.js\");\n/* harmony import */ var _components_NavBar___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar/ */ \"./client/components/NavBar/index.js\");\n/* harmony import */ var _components_Publishments___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Publishments/ */ \"./client/components/Publishments/index.js\");\n/* harmony import */ var _components_ListOfCarts___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ListOfCarts/ */ \"./client/components/ListOfCarts/index.js\");\n/* harmony import */ var _components_CourseBigBlock___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CourseBigBlock/ */ \"./client/components/CourseBigBlock/index.js\");\n/* harmony import */ var _components_Footer___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer/ */ \"./client/components/Footer/index.js\");\n\n\n\n\n\n\n\nconst home_route = app => {\n  new _components_NavBar___WEBPACK_IMPORTED_MODULE_1__[\"default\"](app);\n  new _components_StatsAndRemainders__WEBPACK_IMPORTED_MODULE_0__[\"default\"](app);\n  new _components_Publishments___WEBPACK_IMPORTED_MODULE_2__[\"default\"](app);\n  new _components_ListOfCarts___WEBPACK_IMPORTED_MODULE_3__[\"default\"](app);\n};\n\n\n//# sourceURL=webpack:///./client/routes/home.js?");

/***/ }),

/***/ "./client/routes/login.js":
/*!********************************!*\
  !*** ./client/routes/login.js ***!
  \********************************/
/*! exports provided: login_route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login_route\", function() { return login_route; });\n/* harmony import */ var _components_NavBar___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/NavBar/ */ \"./client/components/NavBar/index.js\");\n/* harmony import */ var _components_Login___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Login/ */ \"./client/components/Login/index.js\");\n\n\n\nconst login_route = app => {\n  new _components_NavBar___WEBPACK_IMPORTED_MODULE_0__[\"default\"](app);\n  new _components_Login___WEBPACK_IMPORTED_MODULE_1__[\"default\"](app);\n};\n\n\n//# sourceURL=webpack:///./client/routes/login.js?");

/***/ }),

/***/ "./client/routes/profile.js":
/*!**********************************!*\
  !*** ./client/routes/profile.js ***!
  \**********************************/
/*! exports provided: profile_route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"profile_route\", function() { return profile_route; });\n/* harmony import */ var _components_StatsAndRemainders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/StatsAndRemainders */ \"./client/components/StatsAndRemainders/index.js\");\n/* harmony import */ var _components_NavBar___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar/ */ \"./client/components/NavBar/index.js\");\n/* harmony import */ var _components_Publishments___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Publishments/ */ \"./client/components/Publishments/index.js\");\n/* harmony import */ var _components_ListOfCarts___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ListOfCarts/ */ \"./client/components/ListOfCarts/index.js\");\n/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Profile */ \"./client/components/Profile/index.js\");\n\n\n\n\n\n\nconst profile_route = app => {\n    new _components_NavBar___WEBPACK_IMPORTED_MODULE_1__[\"default\"](app);\n    new _components_Profile__WEBPACK_IMPORTED_MODULE_4__[\"default\"](app);\n};\n\n\n//# sourceURL=webpack:///./client/routes/profile.js?");

/***/ }),

/***/ "./client/routes/registration.js":
/*!***************************************!*\
  !*** ./client/routes/registration.js ***!
  \***************************************/
/*! exports provided: registration_route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registration_route\", function() { return registration_route; });\n/* harmony import */ var _components_NavBar___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/NavBar/ */ \"./client/components/NavBar/index.js\");\n/* harmony import */ var _components_Registration_Registration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Registration/Registration */ \"./client/components/Registration/Registration.js\");\n\n\nconst registration_route = app => {\n  new _components_NavBar___WEBPACK_IMPORTED_MODULE_0__[\"default\"](app);\n  new _components_Registration_Registration__WEBPACK_IMPORTED_MODULE_1__[\"default\"](app);\n};\n\n\n//# sourceURL=webpack:///./client/routes/registration.js?");

/***/ }),

/***/ "./client/routes/routePaths.js":
/*!*************************************!*\
  !*** ./client/routes/routePaths.js ***!
  \*************************************/
/*! exports provided: home_url, login_url, registration_url, profile_url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"home_url\", function() { return home_url; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login_url\", function() { return login_url; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registration_url\", function() { return registration_url; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"profile_url\", function() { return profile_url; });\nconst home_url = \"/\";\nconst login_url = \"/login\";\nconst registration_url = \"/registration\";\nconst profile_url = \"/profile\";\n\n\n//# sourceURL=webpack:///./client/routes/routePaths.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/CourseBigBlock/main.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/CourseBigBlock/main.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".course-big-block {\\n  flex: 1;\\n  display: flex;\\n  flex-direction: column;\\n  margin-right: 40px; }\\n  .course-big-block__wrapper {\\n    background-color: #fff;\\n    overflow: hidden;\\n    border-radius: 5px; }\\n  .course-big-block__course-header {\\n    align-items: center;\\n    width: 100%; }\\n  .course-big-block__course-header-wrapper {\\n    height: 100px;\\n    display: flex;\\n    justify-items: center;\\n    align-items: center; }\\n  .course-big-block__image {\\n    width: 100%;\\n    max-width: 420px;\\n    height: 100%; }\\n  .course-big-block__image-wrapper {\\n    max-width: 264px;\\n    padding: 20px 0;\\n    margin: auto; }\\n  .course-big-block__wrap-content {\\n    text-align: center; }\\n  .course-big-block__course-overview {\\n    flex: 1;\\n    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);\\n    height: 500px;\\n    color: black; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/CourseBigBlock/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/CourseCart/main.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/CourseCart/main.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".course_cart {\\n  flex: 1;\\n  display: inline-block;\\n  box-sizing: content-box;\\n  color: black; }\\n  .course_cart__shadow {\\n    flex: 1;\\n    display: flex;\\n    border-radius: 5px;\\n    overflow: hidden;\\n    background-color: #fff;\\n    justify-content: center;\\n    flex-direction: column;\\n    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);\\n    height: 500px; }\\n  .course_cart--space_between_inline {\\n    padding: 1rem 1rem;\\n    box-sizing: border-box; }\\n  .course_cart__wrapper {\\n    flex: 1;\\n    display: flex;\\n    flex-direction: column;\\n    text-align: center;\\n    background-color: #fff; }\\n  .course_cart__header {\\n    align-items: center;\\n    word-break: break-all;\\n    padding: 0 20px;\\n    width: 100%; }\\n  .course_cart__header-wrapper {\\n    height: 100px;\\n    display: flex;\\n    justify-items: center;\\n    align-items: center; }\\n  .course_cart__image {\\n    vertical-align: middle;\\n    width: 100%;\\n    max-width: 420px;\\n    height: 100%; }\\n  .course_cart__image-wrapper {\\n    max-width: 264px;\\n    padding: 20px 0;\\n    margin: auto; }\\n  .course_cart__wrap-content {\\n    text-align: center; }\\n  .course_cart__course-overview {\\n    flex: 1;\\n    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);\\n    height: 500px;\\n    color: black; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/CourseCart/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/CourseLitsCart/main.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/CourseLitsCart/main.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".course-list-cart {\\n  width: 100%;\\n  margin-bottom: 1rem;\\n  border-radius: 0.25rem;\\n  background-color: #fff; }\\n  .course-list-cart__wrapper {\\n    min-height: 100px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 0 1.25rem; }\\n  .course-list-cart__icon-text-share {\\n    color: rgba(0, 0, 0, 0.7);\\n    font-size: 13px;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    display: flex; }\\n  .course-list-cart__text-share-content {\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    padding-left: 10px; }\\n  .course-list-cart__description {\\n    display: flex;\\n    align-items: center;\\n    padding: 2rem 0; }\\n  .course-list-cart__time_script {\\n    padding-right: 30px;\\n    width: 100px; }\\n  .course-list-cart__title-author {\\n    padding-left: 2rem; }\\n  .course-list-cart__header {\\n    word-break: break-all;\\n    font-size: 1.25rem;\\n    font-weight: 500; }\\n\\n.profile-minimal {\\n  display: flex;\\n  align-items: center; }\\n  .profile-minimal__author {\\n    font-size: 15px;\\n    transition: color 0.15s;\\n    color: rgba(0, 0, 0, 0.7);\\n    text-transform: capitalize;\\n    cursor: pointer; }\\n  .profile-minimal__extra {\\n    padding-left: 1rem;\\n    font-size: 0.875rem;\\n    font-weight: 400;\\n    opacity: 0.6;\\n    color: #000; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/CourseLitsCart/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Footer/main.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Footer/main.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"* {\\n  padding: 0;\\n  margin: 0; }\\n\\n.footer {\\n  color: #ffffff;\\n  background-color: #141618; }\\n  .footer-block {\\n    margin-left: auto;\\n    margin-right: auto;\\n    max-width: 83.75rem;\\n    padding-bottom: 1rem; }\\n    .footer-block__logo {\\n      padding-right: 2rem;\\n      padding-left: 2rem; }\\n    .footer-block__content {\\n      display: flex;\\n      flex-direction: row;\\n      padding-right: 2rem;\\n      padding-left: 2rem; }\\n      .footer-block__content-list {\\n        display: flex;\\n        flex-direction: row; }\\n        .footer-block__content-list-block {\\n          margin-right: 2rem;\\n          color: #63768d; }\\n        .footer-block__content-list-ulist {\\n          list-style: none; }\\n        .footer-block__content-list-header {\\n          margin-bottom: 1rem;\\n          color: #63768d; }\\n    .footer-block__terms {\\n      color: #63768d;\\n      margin-top: 0.5rem; }\\n      .footer-block__terms-list {\\n        display: flex;\\n        flex-direction: row;\\n        list-style: none; }\\n      .footer-block__terms-list a {\\n        text-decoration: none;\\n        color: #63768d;\\n        margin-right: 2rem; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/Footer/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/ListOfCarts/main.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/ListOfCarts/main.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".cart_list_combination {\\n  background-color: #f4f7f9; }\\n  .cart_list_combination__padding {\\n    padding: 0 1rem;\\n    border: 1px solid transparent; }\\n  .cart_list_combination__wrapper {\\n    margin: auto; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/ListOfCarts/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Login/main.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Login/main.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".log-in {\\n  padding-left: 15px;\\n  padding-right: 15px;\\n  margin: 50px auto 50px;\\n  width: 1170px; }\\n  .log-in__title {\\n    text-align: center;\\n    margin-bottom: 50px;\\n    color: #363636;\\n    font-size: 40px; }\\n  .log-in__grey-box {\\n    background-color: #f2f2f2;\\n    max-width: 500px;\\n    margin-right: auto;\\n    margin-left: auto; }\\n  .log-in__input-block {\\n    margin-bottom: 20px; }\\n    .log-in__input-block-info {\\n      text-align: center;\\n      color: #555555;\\n      line-height: 22px;\\n      font-size: 20px;\\n      font-weight: 400; }\\n    .log-in__input-block-info a {\\n      color: #2e618d;\\n      text-decoration: underline; }\\n    .log-in__input-block-info a:hover {\\n      color: #428bca;\\n      text-decoration: none; }\\n  .log-in__form {\\n    padding: 40px; }\\n  .log-in__email-label {\\n    font-size: 16px;\\n    line-height: 22px;\\n    color: #898989;\\n    font-weight: normal; }\\n  .log-in__email-text {\\n    padding: 0 0 0 10px;\\n    color: #555555;\\n    box-sizing: border-box;\\n    font-size: 16px;\\n    line-height: 28px;\\n    height: 44px;\\n    width: 100%;\\n    border: 1px solid #c6c6c6; }\\n  .log-in__remember-label {\\n    overflow: hidden;\\n    font-size: 16px;\\n    line-height: 20px; }\\n  .log-in__btn-log-in {\\n    color: #ffffff;\\n    font-size: 18px;\\n    line-height: 18px;\\n    padding: 12px 25px;\\n    font-weight: 700;\\n    background: #579edb;\\n    transition: 150ms;\\n    display: inline-block;\\n    border-style: solid;\\n    border-width: 0 0 4px 0;\\n    border-color: #3d6e99;\\n    border-radius: 3px;\\n    text-decoration: none;\\n    box-shadow: none; }\\n  .log-in__btn-log-in:hover {\\n    cursor: pointer;\\n    background: #428bca;\\n    color: #ffffff;\\n    border-color: #2e618d;\\n    text-decoration: none;\\n    box-shadow: none; }\\n  .log-in__btn-log-in-github {\\n    font-size: 18px;\\n    line-height: 18px;\\n    padding: 12px 25px;\\n    font-weight: 700;\\n    transition: 150ms;\\n    display: inline-block;\\n    background: #898989;\\n    color: #ffffff;\\n    border-style: solid;\\n    border-width: 0 0 4px 0;\\n    border-color: #606060;\\n    border-radius: 3px;\\n    text-decoration: none;\\n    box-shadow: none; }\\n  .log-in__btn-log-in-github:hover {\\n    cursor: pointer;\\n    background: #646464;\\n    color: #ffffff;\\n    border-color: #454545;\\n    text-decoration: none;\\n    box-shadow: none; }\\n  .log-in__buttons {\\n    display: flex;\\n    justify-content: space-between; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/Login/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/NavBar/main.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/NavBar/main.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".nav-bar {\\n  background-color: #141618; }\\n  .nav-bar__login-link {\\n    text-decoration: none;\\n    color: #fff;\\n    padding-left: 10px; }\\n  .nav-bar__feadback-button {\\n    background-color: transparent;\\n    color: #fff;\\n    height: 34px;\\n    border: 1px solid rgba(255, 255, 255, 0.1);\\n    border-radius: 5px;\\n    padding: 0 6px;\\n    font-size: 14px;\\n    margin-left: 15px;\\n    font-weight: 300;\\n    font-family: sans-serif;\\n    transition: background 150ms ease 0s;\\n    cursor: pointer; }\\n  .nav-bar__profile-avatar {\\n    width: 32px;\\n    height: 32px;\\n    border-radius: 999px;\\n    margin-left: 15px; }\\n  .nav-bar__profile {\\n    display: flex;\\n    align-items: center;\\n    text-decoration: none;\\n    color: #fff;\\n    border: none;\\n    margin-left: 20px;\\n    background-color: transparent; }\\n    .nav-bar__profile-user {\\n      white-space: nowrap;\\n      max-width: 200px;\\n      overflow: hidden;\\n      text-overflow: ellipsis; }\\n  .nav-bar__feadback-button:hover {\\n    background: #232c3b; }\\n  .nav-bar__form {\\n    height: 34px;\\n    display: flex;\\n    border-radius: 0.4rem;\\n    background-color: #21252d; }\\n  .nav-bar__form-button {\\n    background-color: transparent;\\n    padding: 0 9px;\\n    border-bottom-right-radius: 0.4rem;\\n    border-top-right-radius: 0.4rem;\\n    border: none;\\n    height: 100%;\\n    cursor: pointer;\\n    transition: background-color 0.15s ease-in-out; }\\n  .nav-bar__form-button:hover {\\n    background-color: #316aff; }\\n  .nav-bar__input {\\n    background-color: #21252d;\\n    color: #fff;\\n    font-size: 14px;\\n    padding: 10px 4px;\\n    border: none;\\n    width: 250px;\\n    border-radius: 0.4rem; }\\n  .nav-bar__input:focus {\\n    border: none; }\\n  .nav-bar__padding-wrapper {\\n    padding: 0 2rem;\\n    display: flex;\\n    justify-content: space-between;\\n    height: 100%;\\n    align-items: center; }\\n  .nav-bar__wrapper {\\n    height: 60px; }\\n  .nav-bar__headers {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center; }\\n    .nav-bar__headers-logo {\\n      margin-right: 25px; }\\n      .nav-bar__headers-logo-small {\\n        margin-right: 10px;\\n        display: none; }\\n    .nav-bar__headers-content {\\n      padding-left: 0.5rem;\\n      cursor: pointer;\\n      height: 60px;\\n      display: flex;\\n      align-items: center;\\n      opacity: 0.9; }\\n      .nav-bar__headers-content-icon {\\n        margin-right: 0.7rem; }\\n      .nav-bar__headers-content-link {\\n        text-transform: none;\\n        text-decoration: none;\\n        color: rgba(255, 255, 255, 0.9);\\n        font-size: 14px;\\n        padding-left: 10px;\\n        font-family: sans-serif;\\n        font-weight: 400; }\\n  .nav-bar__navigation {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/NavBar/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Profile/main.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Profile/main.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".profile {\\n  padding: 50px 0 150px;\\n  box-sizing: border-box; }\\n  .profile__greetings {\\n    margin-bottom: 40px; }\\n    .profile__greetings h3 {\\n      font-weight: 400;\\n      color: #4a4a4a;\\n      font-size: 22px;\\n      line-height: 1.2; }\\n  .profile__wrapper {\\n    box-sizing: border-box;\\n    width: 100%;\\n    max-width: 1100px;\\n    margin: 0 auto;\\n    padding: 0 50px; }\\n  .profile__content {\\n    display: flex; }\\n  .profile__choice-panel {\\n    padding-right: 30px;\\n    width: 248px;\\n    box-sizing: border-box; }\\n    .profile__choice-panel-wrapper {\\n      border-radius: 6px;\\n      border: 1px solid #e7e7e7;\\n      overflow: hidden; }\\n    .profile__choice-panel-item {\\n      font-size: 18px;\\n      line-height: 20px;\\n      padding: 28px 20px;\\n      background: #fcfcfc;\\n      display: block;\\n      color: #a3a3a3;\\n      border-bottom: 1px solid #e7e7e7;\\n      cursor: pointer;\\n      position: relative; }\\n      .profile__choice-panel-item--active {\\n        background-color: #fff;\\n        color: #4a4a4a;\\n        font-weight: 600; }\\n      .profile__choice-panel-item--active::before {\\n        content: '';\\n        width: 7px;\\n        height: 100%;\\n        position: absolute;\\n        top: 0;\\n        right: -1px;\\n        background-image: linear-gradient(to right, #545163 0%, #484556 100%) !important;\\n        background-repeat: repeat-x; }\\n    .profile__choice-panel-item:before {\\n      content: '';\\n      width: 7px;\\n      height: 100%;\\n      position: absolute;\\n      top: 0;\\n      right: -1px;\\n      background: transparent; }\\n    .profile__choice-panel-item:hover {\\n      background-color: #fff;\\n      color: #4a4a4a;\\n      font-weight: 600; }\\n      .profile__choice-panel-item:hover:before {\\n        background-image: linear-gradient(to right, #545163 0%, #484556 100%);\\n        background-repeat: repeat-x; }\\n  .profile__tab {\\n    flex: 1;\\n    background: white;\\n    border-radius: 6px;\\n    overflow: hidden;\\n    box-shadow: 0 1px 2px #e7e7e7; }\\n    .profile__tab-load-file-wrapper {\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: space-between; }\\n      .profile__tab-load-file-wrapper button {\\n        display: inline-block;\\n        text-align: center;\\n        border: 1px solid #94d0f0;\\n        border-radius: 3px;\\n        background: white;\\n        font-weight: 700;\\n        font-size: 16px;\\n        line-height: 1.2;\\n        padding: 12px 15px;\\n        color: #4e4f54;\\n        cursor: pointer;\\n        min-width: 108px; }\\n    .profile__tab-avatar {\\n      border-radius: 50%; }\\n    .profile__tab-header {\\n      padding: 10px 25px;\\n      font-weight: 700;\\n      color: white;\\n      font-size: 18px;\\n      background-image: -webkit-linear-gradient(left, #545163 0%, #2b2b38 100%);\\n      background-image: linear-gradient(to right, #545163 0%, #2b2b38 100%);\\n      background-repeat: repeat-x; }\\n    .profile__tab-icon-modification {\\n      padding: 10px 25px;\\n      display: flex;\\n      justify-content: space-between; }\\n    .profile__tab-fields {\\n      padding: 30px 25px 95px 25px; }\\n    .profile__tab-footer {\\n      display: flex;\\n      justify-content: space-between;\\n      padding: 0 40px;\\n      border-top: 1px solid #d6d6d6; }\\n      .profile__tab-footer-button {\\n        font-size: 20px;\\n        line-height: 1.1px;\\n        padding: 30px 10px 26px 10px;\\n        border-style: solid;\\n        color: #31a3e2;\\n        box-sizing: border-box;\\n        border-width: 0 0 4px 0;\\n        border-color: #e9e9e9;\\n        cursor: pointer;\\n        transition: 150ms;\\n        transition-property: all;\\n        transition-duration: 150ms;\\n        transition-timing-function: ease;\\n        transition-delay: 0s; }\\n      .profile__tab-footer-button:hover {\\n        background: rgba(233, 233, 233, 0.3);\\n        padding-left: 30px;\\n        padding-right: 30px; }\\n\\n.input-block {\\n  display: flex;\\n  justify-content: space-between;\\n  border-bottom: 1px solid #d2d2d2;\\n  align-items: center;\\n  padding: 20px 0; }\\n  .input-block__label {\\n    flex-basis: 210px;\\n    margin-left: 20px;\\n    color: #4a4a4a;\\n    font-weight: 400;\\n    font-size: 18px; }\\n  .input-block__input {\\n    font-size: 18px;\\n    padding: 20px;\\n    background: #eaecef;\\n    border-radius: 6px;\\n    border: 1px solid #eaecef;\\n    width: 100%;\\n    box-sizing: border-box;\\n    -webkit-transition: 150ms;\\n    transition: 150ms; }\\n    .input-block__input-wrapper {\\n      flex: 1; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/Profile/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Publishments/main.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/Publishments/main.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".publications {\\n  background-color: #f4f7f9; }\\n  .publications__wrapper {\\n    padding: 4rem 1rem 2rem;\\n    box-sizing: border-box; }\\n  .publications__header-label {\\n    display: flex;\\n    flex-direction: column; }\\n  .publications__header-label-title {\\n    color: #141618;\\n    font-size: 2.25rem;\\n    padding-bottom: 10px;\\n    font-weight: 400; }\\n  .publications__header-label-sub-title {\\n    color: rgba(0, 0, 0, 0.6);\\n    font-size: 1rem; }\\n  .publications__header {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center; }\\n  .publications__button {\\n    padding: 16px 24px;\\n    border: 1px #316aff;\\n    background-color: #316aff;\\n    color: #fff;\\n    text-transform: uppercase;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    cursor: pointer;\\n    font-size: 0.875rem;\\n    border-radius: 5px;\\n    box-sizing: border-box; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/Publishments/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/StatsAndRemainders/main.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/StatsAndRemainders/main.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".stats_and_remainders {\\n  background-color: #141618;\\n  padding: 50px 0; }\\n  .stats_and_remainders__header {\\n    padding-bottom: 15px;\\n    color: #f8f8f8;\\n    font-weight: 400; }\\n  .stats_and_remainders__wrapper {\\n    display: flex;\\n    margin-top: 10px;\\n    box-sizing: border-box;\\n    padding-left: 2rem;\\n    padding-right: 2rem;\\n    color: #fff; }\\n\\n.stats-block {\\n  display: flex;\\n  flex-direction: column;\\n  width: 450px; }\\n  .stats-block__single-stat {\\n    padding-top: 20px;\\n    height: 90px;\\n    padding-bottom: 20px;\\n    flex: 1;\\n    background-color: #21252d;\\n    display: flex;\\n    justify-content: center;\\n    flex-direction: column;\\n    align-items: center; }\\n  .stats-block__space {\\n    margin-right: 10px; }\\n  .stats-block__block-header {\\n    letter-spacing: 0.1em;\\n    text-transform: uppercase;\\n    padding-top: 20px;\\n    color: rgba(255, 255, 255, 0.6);\\n    font-size: 0.75rem; }\\n  .stats-block__count {\\n    font-size: 2.25rem; }\\n  .stats-block__rect-stat {\\n    font-size: 0.75rem;\\n    width: 100%;\\n    color: #fff;\\n    border: none;\\n    background-color: #21252d;\\n    padding: 1rem 1rem;\\n    color: rgba(255, 255, 255, 0.6);\\n    letter-spacing: 0.1em;\\n    margin-top: 10px;\\n    display: flex;\\n    justify-content: space-between; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/StatsAndRemainders/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/css/main.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/css/main.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"* {\\n  padding: 0;\\n  margin: 0; }\\n\\nbody {\\n  font-family: BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif; }\\n\\n.website-layout-width {\\n  max-width: 83.75rem; }\\n\\n.flex-join {\\n  display: flex; }\\n\\n.website-layout-position {\\n  margin-right: auto;\\n  margin-left: auto; }\\n\\n.course-content-regular {\\n  flex: 1;\\n  color: black;\\n  box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);\\n  background-color: #fff;\\n  overflow: scroll;\\n  border-left: 1px solid #f4f7f9;\\n  height: 500px; }\\n  .course-content-regular__list-item-title {\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    flex: 1;\\n    font-size: 14px;\\n    color: rgba(0, 0, 0, 0.6); }\\n  .course-content-regular__list-item-time {\\n    font-size: 12px;\\n    width: 40px;\\n    color: rgba(0, 0, 0, 0.6);\\n    opacity: 0.6; }\\n  .course-content-regular__list-item {\\n    display: flex;\\n    word-break: break-all;\\n    align-items: center;\\n    justify-content: space-between;\\n    color: rgba(0, 0, 0, 0.6);\\n    padding: 1rem 1rem 1rem 2rem;\\n    cursor: pointer;\\n    font-size: 0.875rem;\\n    list-style-type: none; }\\n  .course-content-regular__list-item:hover {\\n    background-color: #f4f7f9; }\\n\\n.dotted-header {\\n  justify-content: center;\\n  color: #141618;\\n  opacity: 0.6;\\n  align-items: center;\\n  word-break: break-all;\\n  font-weight: 400;\\n  padding: 0 20px;\\n  font-size: 13px;\\n  display: flex;\\n  text-transform: uppercase; }\\n  .dotted-header__dot {\\n    margin-right: 0.25rem;\\n    margin-left: 0.25rem; }\\n\\n.mini-profile {\\n  align-items: center;\\n  background-color: #fff;\\n  word-break: break-all;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 1rem 1rem 15px; }\\n  .mini-profile__content-wrapper {\\n    align-items: center;\\n    display: flex;\\n    overflow: hidden;\\n    flex: 1; }\\n  .mini-profile__content {\\n    padding-left: 0.5rem;\\n    display: flex;\\n    overflow: hidden;\\n    justify-content: space-between;\\n    flex-direction: column; }\\n    .mini-profile__content-header {\\n      flex: 1;\\n      overflow: hidden;\\n      font-size: 15px;\\n      font-weight: 400;\\n      opacity: 0.7;\\n      white-space: nowrap;\\n      text-overflow: ellipsis; }\\n    .mini-profile__content-sub_header {\\n      white-space: nowrap;\\n      overflow: hidden;\\n      text-overflow: ellipsis;\\n      font-weight: 400;\\n      font-size: 12px;\\n      color: rgba(0, 0, 0, 0.6); }\\n\\n.icon {\\n  display: block;\\n  border-radius: 99999px; }\\n  .icon--small {\\n    width: 35px;\\n    height: 35px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/css/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/css/media.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/css/media.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"@media screen and (max-width: 1000px) {\\n  .stats_and_remainders__wrapper {\\n    flex-direction: column; }\\n  .stats_and_remainders__header {\\n    text-align: center; }\\n  .course-content-regular {\\n    max-height: 300px; }\\n  .course-big-block {\\n    margin-right: 0; }\\n    .course-big-block__wrapper {\\n      flex-direction: column; }\\n  .stats-block {\\n    padding-top: 50px;\\n    text-align: center;\\n    width: 100%; }\\n  .course_cart {\\n    width: 100% !important; }\\n  .nav-bar__headers-content {\\n    display: none; }\\n  .nav-bar__headers-logo {\\n    display: none; }\\n    .nav-bar__headers-logo-small {\\n      display: block; }\\n  .nav-bar__profile-user {\\n    max-width: 50px; }\\n  .nav-bar__form {\\n    flex: 1; }\\n  .nav-bar__navigation {\\n    flex: 1; }\\n  .nav-bar__input {\\n    width: 100%; }\\n  .nav-bar__feadback-button {\\n    display: none; }\\n  .profile__choice-panel {\\n    display: none; }\\n  .course-list-cart__time_script {\\n    display: none; }\\n  .publications__header {\\n    text-align: center;\\n    flex-direction: column; }\\n  .publications__button {\\n    margin-top: 10px; }\\n  .input-block__label {\\n    flex-basis: 70px; }\\n  .profile__tab-load-file-wrapper {\\n    display: none; } }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/css/media.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/jwt-decode/lib/atob.js":
/*!*********************************************!*\
  !*** ./node_modules/jwt-decode/lib/atob.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The code was extracted from:\n * https://github.com/davidchambers/Base64.js\n */\n\nvar chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\nfunction InvalidCharacterError(message) {\n  this.message = message;\n}\n\nInvalidCharacterError.prototype = new Error();\nInvalidCharacterError.prototype.name = 'InvalidCharacterError';\n\nfunction polyfill (input) {\n  var str = String(input).replace(/=+$/, '');\n  if (str.length % 4 == 1) {\n    throw new InvalidCharacterError(\"'atob' failed: The string to be decoded is not correctly encoded.\");\n  }\n  for (\n    // initialize result and counters\n    var bc = 0, bs, buffer, idx = 0, output = '';\n    // get next character\n    buffer = str.charAt(idx++);\n    // character found in table? initialize bit storage and add its ascii value;\n    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,\n      // and if not first of each 4 characters,\n      // convert the first 8 bits to one ascii character\n      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0\n  ) {\n    // try to find character in table (0-63, not found => -1)\n    buffer = chars.indexOf(buffer);\n  }\n  return output;\n}\n\n\nmodule.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;\n\n\n//# sourceURL=webpack:///./node_modules/jwt-decode/lib/atob.js?");

/***/ }),

/***/ "./node_modules/jwt-decode/lib/base64_url_decode.js":
/*!**********************************************************!*\
  !*** ./node_modules/jwt-decode/lib/base64_url_decode.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var atob = __webpack_require__(/*! ./atob */ \"./node_modules/jwt-decode/lib/atob.js\");\n\nfunction b64DecodeUnicode(str) {\n  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {\n    var code = p.charCodeAt(0).toString(16).toUpperCase();\n    if (code.length < 2) {\n      code = '0' + code;\n    }\n    return '%' + code;\n  }));\n}\n\nmodule.exports = function(str) {\n  var output = str.replace(/-/g, \"+\").replace(/_/g, \"/\");\n  switch (output.length % 4) {\n    case 0:\n      break;\n    case 2:\n      output += \"==\";\n      break;\n    case 3:\n      output += \"=\";\n      break;\n    default:\n      throw \"Illegal base64url string!\";\n  }\n\n  try{\n    return b64DecodeUnicode(output);\n  } catch (err) {\n    return atob(output);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/jwt-decode/lib/base64_url_decode.js?");

/***/ }),

/***/ "./node_modules/jwt-decode/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/jwt-decode/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar base64_url_decode = __webpack_require__(/*! ./base64_url_decode */ \"./node_modules/jwt-decode/lib/base64_url_decode.js\");\n\nfunction InvalidTokenError(message) {\n  this.message = message;\n}\n\nInvalidTokenError.prototype = new Error();\nInvalidTokenError.prototype.name = 'InvalidTokenError';\n\nmodule.exports = function (token,options) {\n  if (typeof token !== 'string') {\n    throw new InvalidTokenError('Invalid token specified');\n  }\n\n  options = options || {};\n  var pos = options.header === true ? 0 : 1;\n  try {\n    return JSON.parse(base64_url_decode(token.split('.')[pos]));\n  } catch (e) {\n    throw new InvalidTokenError('Invalid token specified: ' + e.message);\n  }\n};\n\nmodule.exports.InvalidTokenError = InvalidTokenError;\n\n\n//# sourceURL=webpack:///./node_modules/jwt-decode/lib/index.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ })

/******/ });