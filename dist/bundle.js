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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styl_main_styl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styl_main_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styl_main_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_main__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_main__);




/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/stylus-loader/index.js??ref--1-2!./main.styl", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/stylus-loader/index.js??ref--1-2!./main.styl");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(3);
exports = module.exports = __webpack_require__(4)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,800,900,1000);", ""]);

// module
exports.push([module.i, "html {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nfigcaption,\nfigure,\nmain {\n  display: block;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\npre {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\na:active,\na:hover {\n  outline-width: 0;\n}\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\nb,\nstrong {\n  font-weight: inherit;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\ndfn {\n  font-style: italic;\n}\nmark {\n  background-color: #ff0;\n  color: #000;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\naudio,\nvideo {\n  display: inline-block;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nimg {\n  border-style: none;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n}\nbutton,\ninput {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  box-sizing: border-box;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal;\n}\nprogress {\n  display: inline-block;\n  vertical-align: baseline;\n}\ntextarea {\n  overflow: auto;\n}\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\ndetails,\nmenu {\n  display: block;\n}\nsummary {\n  display: list-item;\n}\ncanvas {\n  display: inline-block;\n}\ntemplate {\n  display: none;\n}\n[hidden] {\n  display: none;\n}\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n*,\n*:after,\n*:before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  opacity: 0;\n  background-color: #fafafa;\n  -webkit-animation: appear 0.5s ease-in-out forwards;\n  animation: appear 0.5s ease-in-out forwards;\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n.wrapper {\n  max-width: 1250px;\n  width: 100%;\n  padding: 0 15px;\n  margin: auto;\n}\n.row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.column {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.flex-end {\n  -webkit-justify-content: flex-end;\n  -ms-justify-content: flex-end;\n  justify-content: flex-end;\n}\nsection {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  padding-top: 30px;\n}\n#home {\n  margin-top: 50px;\n  background-color: #484ba0;\n}\n#home .wrapper.row {\n  -webkit-justify-content: space-between;\n  -ms-justify-content: space-between;\n  justify-content: space-between;\n  width: 100%;\n}\n#home .featured {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-align-items: center;\n  align-items: center;\n  -webkit-justify-content: center;\n  -ms-justify-content: center;\n  justify-content: center;\n}\n#home .featured .title {\n  font-size: 3rem;\n}\n#home .featured .title,\n#home .featured .description {\n  color: #fafafa;\n  text-align: center;\n}\n#home .featured .description {\n  font-size: 2rem;\n  margin-top: 10px;\n}\n#home .featured .btn {\n  margin-top: 30px;\n}\n#home img {\n  height: 100%;\n  display: none;\n}\n@media screen and (min-width: 481px) {\n  #home {\n    margin-top: 0;\n  }\n  #home img {\n    display: block;\n    width: 50%;\n  }\n  #home .featured {\n    max-width: 40%;\n  }\n  #home .featured .title {\n    max-width: 528px;\n    font-size: 3.5rem;\n  }\n  #home .featured .description {\n    max-width: 650px;\n    font-size: 2.2rem;\n  }\n  #home .featured .title,\n  #home .featured .description {\n    color: #fafafa;\n    text-align: initial;\n  }\n}\n.btn {\n  display: inline-block;\n  font-size: 0.9rem;\n  letter-spacing: 2px;\n  color: #fafafa;\n  background: #ff73b4;\n  padding: 20px 38px;\n  border-radius: 50px;\n  border: none;\n  cursor: pointer;\n  width: fit-content;\n}\n.btn:hover {\n  color: #fff;\n  box-shadow: 0px 10px 60px rgba(228,110,148,0.5);\n}\n.btn:focus {\n  outline: none;\n}\nfooter {\n  margin-top: 50px;\n  background-color: #212121;\n  padding: 20px 0;\n}\nfooter .column {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-align-items: center;\n  align-items: center;\n}\nfooter .author {\n  color: #fafafa;\n}\nfooter .author a {\n  color: #fafafa;\n}\nfooter .socialmedia {\n  margin-top: 1rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\nfooter .socialmedia li {\n  padding-right: 15px;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n  filter: alpha(opacity=50);\n  opacity: 0.5;\n}\nfooter .socialmedia li:hover {\n  -ms-filter: none;\n  filter: none;\n  opacity: 1;\n}\n@media screen and (min-width: 481px) {\n  footer .column {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-justify-content: space-between;\n    -ms-justify-content: space-between;\n    justify-content: space-between;\n  }\n  footer .socialmedia {\n    margin-top: 0;\n  }\n}\nheader {\n  width: 100%;\n  padding: 25px 0 20px 0;\n  position: fixed;\n  top: 0;\n  z-index: 100;\n  background-color: #484ba0;\n}\nheader .row {\n  padding: 0 30px;\n  height: 100%;\n}\nheader nav {\n  width: 100%;\n  height: 100vh;\n  background-color: #484ba0;\n  text-align: center;\n  padding-top: 50px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transform: translateY(-10px);\n  -ms-transform: translateY(-10px);\n  transform: translateY(-10px);\n  -webkit-transition: 0.1s ease-in;\n  transition: 0.1s ease-in;\n}\nheader nav .menu {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\nheader .logo {\n  -webkit-transform: scale(1.3);\n  -ms-transform: scale(1.3);\n  transform: scale(1.3);\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  height: 50px;\n  padding: 0.2rem;\n  text-indent: -9999px;\n  background: url(" + escape(__webpack_require__(5)) + ") no-repeat;\n  background-size: contain;\n  -webkit-transform-origin: left;\n  -ms-transform-origin: left;\n  transform-origin: left;\n  -webkit-transition: 0.2s ease-in;\n  transition: 0.2s ease-in;\n}\nheader .toggle-menu {\n  width: 60px;\n  height: 40px;\n  -webkit-transform: rotate(0deg) scale(0.7);\n  -ms-transform: rotate(0deg) scale(0.7);\n  transform: rotate(0deg) scale(0.7);\n  -webkit-transition: 0.5s ease-in-out;\n  transition: 0.5s ease-in-out;\n  cursor: pointer;\n}\nheader .toggle-menu span {\n  display: block;\n  position: absolute;\n  height: 5px;\n  width: 50%;\n  background: #fafafa;\n  -ms-filter: none;\n  filter: none;\n  opacity: 1;\n  -webkit-transform: rotate(0deg);\n  -ms-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: 0.25s ease-in-out;\n  transition: 0.25s ease-in-out;\n}\nheader .toggle-menu span:nth-child(even) {\n  left: 50%;\n  border-radius: 0 9px 9px 0;\n}\nheader .toggle-menu span:nth-child(odd) {\n  left: 0px;\n  border-radius: 9px 0 0 9px;\n}\nheader .toggle-menu span:nth-child(1),\nheader .toggle-menu span:nth-child(2) {\n  top: 0px;\n}\nheader .toggle-menu span:nth-child(3),\nheader .toggle-menu span:nth-child(4) {\n  top: -webkit-calc(50% - 1px);\n  top: calc(50% - 1px);\n}\nheader .toggle-menu span:nth-child(5),\nheader .toggle-menu span:nth-child(6) {\n  top: 100%;\n}\nheader.active nav {\n  -ms-filter: none;\n  filter: none;\n  opacity: 1;\n  -webkit-transform: none;\n  -ms-transform: none;\n  transform: none;\n  pointer-events: all;\n  margin-top: 90px;\n}\nheader.active .toggle-menu span:nth-child(1),\nheader.active .toggle-menu span:nth-child(6) {\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\nheader.active .toggle-menu span:nth-child(2),\nheader.active .toggle-menu span:nth-child(5) {\n  -webkit-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\nheader.active .toggle-menu span:nth-child(1) {\n  left: 7px;\n  top: 10px;\n}\nheader.active .toggle-menu span:nth-child(2) {\n  left: 27px;\n  top: 10px;\n}\nheader.active .toggle-menu span:nth-child(3) {\n  left: -50%;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  opacity: 0;\n  background-color: #ff73b4;\n}\nheader.active .toggle-menu span:nth-child(4) {\n  left: 100%;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  opacity: 0;\n  background-color: #ff73b4;\n}\nheader.active .toggle-menu span:nth-child(5) {\n  left: 7px;\n  top: 30px;\n}\nheader.active .toggle-menu span:nth-child(6) {\n  left: 27px;\n  top: 30px;\n}\nheader .menu__link {\n  padding: 18px 0.8rem;\n  color: #fff;\n  display: block;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  font-weight: 500;\n}\nheader .menu__link.active {\n  color: #ff73b4;\n}\n@media screen and (min-width: 481px) {\n  header {\n    width: 100%;\n    padding: 25px 0 20px 0;\n    position: fixed;\n    top: 0;\n    z-index: 100;\n    -webkit-transition: 0.1s ease-in;\n    transition: 0.1s ease-in;\n  }\n  header.active nav {\n    margin: 0;\n  }\n  header.scrolled {\n    box-shadow: 0 2px 15px 3px rgba(0,0,0,0.3);\n  }\n  header.scrolled .logo {\n    -webkit-transform: scale(1.5);\n    -ms-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n  header nav {\n    margin: 0;\n    pointer-events: auto;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-align-items: center;\n    align-items: center;\n    height: 100%;\n    -ms-filter: none;\n    filter: none;\n    opacity: 1;\n    top: initial;\n    left: initial;\n    -webkit-transform: initial;\n    -ms-transform: initial;\n    transform: initial;\n    position: initial;\n    width: auto;\n    padding: 0;\n  }\n  header nav .menu {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  header .toggle-menu {\n    display: none;\n  }\n}\n#more .column {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-align-items: center;\n  align-items: center;\n}\n#more .more__video,\n#more .more__content {\n  width: 95%;\n}\n#more .more__content {\n  margin: 20px;\n}\n#more .more__content .title {\n  text-align: center;\n}\n#more .more__content p {\n  color: #666;\n  margin: 10px 0;\n}\n@media screen and (min-width: 481px) {\n  #more .column {\n    -webkit-justify-content: space-between;\n    -ms-justify-content: space-between;\n    justify-content: space-between;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-align: normal;\n    -webkit-align-items: normal;\n    -ms-align-items: normal;\n    align-items: normal;\n  }\n  #more .more__video {\n    min-height: 350px;\n  }\n  #more .more__video,\n  #more .more__content {\n    width: 45%;\n  }\n  #more .more__content p {\n    margin: 30px 0;\n  }\n}\n#schedule .column {\n  margin: 20px auto 0 auto;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-align-items: center;\n  align-items: center;\n}\n#schedule .schedule__table {\n  width: 100%;\n  margin-top: 30px;\n}\n#schedule .schedule__table thead tr {\n  background-color: #212121;\n}\n#schedule .schedule__table thead th {\n  color: #fafafa;\n  padding: 20px 0;\n}\n#schedule .schedule__table tbody tr {\n  border: 1px solid #212121;\n}\n#schedule .schedule__table tbody tr td {\n  padding: 10px 5px;\n}\n#schedule .schedule__table tbody tr td:before {\n  content: \"\";\n  background-size: contain;\n  padding: 13px;\n  margin-right: 10px;\n  display: inline-block;\n}\n#schedule .schedule__table tbody tr td.date:before {\n  background: url(" + escape(__webpack_require__(6)) + ") no-repeat;\n}\n#schedule .schedule__table tbody tr td.local:before {\n  background: url(" + escape(__webpack_require__(7)) + ") no-repeat;\n}\n#schedule .btn {\n  margin-top: 5%;\n}\n@media screen and (min-width: 481px) {\n  #schedule .schedule__table {\n    width: 75%;\n  }\n  #schedule .schedule__table tr {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-align-items: center;\n    align-items: center;\n    -webkit-justify-content: space-around;\n    -ms-justify-content: space-around;\n    justify-content: space-around;\n  }\n  #schedule .schedule__table tbody tr {\n    border-top-color: transparent;\n  }\n  #schedule .schedule__table tbody tr td {\n    width: 50%;\n    text-align: center;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-align-items: center;\n    align-items: center;\n    -webkit-justify-content: center;\n    -ms-justify-content: center;\n    justify-content: center;\n    padding: 10px;\n  }\n}\n#speaker .column {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-align-items: center;\n  align-items: center;\n}\n#speaker .title {\n  text-align: center;\n}\n#speaker .description {\n  width: 100%;\n  text-align: center;\n}\n#speaker .speaker__content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n  -ms-justify-content: center;\n  justify-content: center;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-top: 50px;\n}\n#speaker .speaker__content .speaker-card {\n  width: 80%;\n}\n#speaker .speaker__content .speaker-card + .speaker-card {\n  margin-top: 40px;\n}\n#speaker .speaker__content .speaker-card .speaker-card__img {\n  width: 100%;\n  border-radius: 50%;\n}\n#speaker .speaker__content .speaker-card .speaker-card__description {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n#speaker .speaker__content .speaker-card .speaker-card__description .speaker-card__name {\n  text-align: center;\n  color: #484ba0;\n  margin-top: 10px;\n  font-size: 1.4rem;\n  font-weight: 600;\n}\n#speaker .speaker__content .speaker-card .speaker-card__description .speaker-card__office {\n  text-align: end;\n  margin-top: 5px;\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n#speaker .speaker__content .speaker-card .speaker-card__description .speaker-card__bio {\n  text-align: justify;\n  margin-top: 5px;\n  font-weight: 200;\n  font-size: 1rem;\n}\n@media screen and (min-width: 481px) {\n  #speaker .speaker__content {\n    -webkit-justify-content: space-between;\n    -ms-justify-content: space-between;\n    justify-content: space-between;\n  }\n  #speaker .speaker__content .speaker-card {\n    width: 30%;\n    min-width: 225px;\n    max-width: 350px;\n    margin-top: 25px;\n    margin-right: 15px;\n  }\n  #speaker .speaker__content .speaker-card + .speaker-card {\n    margin-top: 25px;\n    margin-right: 15px;\n  }\n}\nhtml {\n  color: #212121;\n  font-family: \"Montserrat\", sans-serif;\n}\n.title {\n  color: #212121;\n  font-size: 2rem;\n  font-weight: 800;\n}\n.title.line {\n  margin-bottom: 10px;\n}\n.title.line:after {\n  content: \"\";\n  display: block;\n  margin: -webkit-calc(50% - 50px);\n  margin: 10px calc(50% - 50px);\n  width: 100px;\n  height: 8px;\n  background-color: #ff73b4;\n}\np {\n  font-size: 1rem;\n  font-weight: 200;\n}\n.description {\n  font-size: 1.3rem;\n  font-weight: 400;\n}\na {\n  text-decoration: none;\n}\n@media screen and (min-width: 481px) {\n  .title {\n    font-size: 3rem;\n  }\n  .description {\n    font-size: 1.2rem;\n  }\n}\n@media screen and (min-width: 481px) and (max-width: 720px) {\n  .title {\n    font-size: 2.5rem;\n  }\n  .description {\n    font-size: 1.2rem;\n  }\n}\n@-moz-keyframes appear {\n  0% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n  }\n  10% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)\";\n    filter: alpha(opacity=10);\n    opacity: 0.1;\n  }\n  20% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n    filter: alpha(opacity=20);\n    opacity: 0.2;\n  }\n  30% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)\";\n    filter: alpha(opacity=30);\n    opacity: 0.3;\n  }\n  40% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)\";\n    filter: alpha(opacity=40);\n    opacity: 0.4;\n  }\n  50% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n    filter: alpha(opacity=50);\n    opacity: 0.5;\n  }\n  60% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=60)\";\n    filter: alpha(opacity=60);\n    opacity: 0.6;\n  }\n  70% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)\";\n    filter: alpha(opacity=70);\n    opacity: 0.7;\n  }\n  80% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n    filter: alpha(opacity=80);\n    opacity: 0.8;\n  }\n  90% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n    filter: alpha(opacity=90);\n    opacity: 0.9;\n  }\n  100% {\n    -ms-filter: none;\n    filter: none;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes appear {\n  0% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n  }\n  10% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)\";\n    filter: alpha(opacity=10);\n    opacity: 0.1;\n  }\n  20% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n    filter: alpha(opacity=20);\n    opacity: 0.2;\n  }\n  30% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)\";\n    filter: alpha(opacity=30);\n    opacity: 0.3;\n  }\n  40% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)\";\n    filter: alpha(opacity=40);\n    opacity: 0.4;\n  }\n  50% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n    filter: alpha(opacity=50);\n    opacity: 0.5;\n  }\n  60% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=60)\";\n    filter: alpha(opacity=60);\n    opacity: 0.6;\n  }\n  70% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)\";\n    filter: alpha(opacity=70);\n    opacity: 0.7;\n  }\n  80% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n    filter: alpha(opacity=80);\n    opacity: 0.8;\n  }\n  90% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n    filter: alpha(opacity=90);\n    opacity: 0.9;\n  }\n  100% {\n    -ms-filter: none;\n    filter: none;\n    opacity: 1;\n  }\n}\n@-o-keyframes appear {\n  0% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n  }\n  10% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)\";\n    filter: alpha(opacity=10);\n    opacity: 0.1;\n  }\n  20% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n    filter: alpha(opacity=20);\n    opacity: 0.2;\n  }\n  30% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)\";\n    filter: alpha(opacity=30);\n    opacity: 0.3;\n  }\n  40% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)\";\n    filter: alpha(opacity=40);\n    opacity: 0.4;\n  }\n  50% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n    filter: alpha(opacity=50);\n    opacity: 0.5;\n  }\n  60% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=60)\";\n    filter: alpha(opacity=60);\n    opacity: 0.6;\n  }\n  70% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)\";\n    filter: alpha(opacity=70);\n    opacity: 0.7;\n  }\n  80% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n    filter: alpha(opacity=80);\n    opacity: 0.8;\n  }\n  90% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n    filter: alpha(opacity=90);\n    opacity: 0.9;\n  }\n  100% {\n    -ms-filter: none;\n    filter: none;\n    opacity: 1;\n  }\n}\n@keyframes appear {\n  0% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n  }\n  10% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)\";\n    filter: alpha(opacity=10);\n    opacity: 0.1;\n  }\n  20% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n    filter: alpha(opacity=20);\n    opacity: 0.2;\n  }\n  30% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)\";\n    filter: alpha(opacity=30);\n    opacity: 0.3;\n  }\n  40% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)\";\n    filter: alpha(opacity=40);\n    opacity: 0.4;\n  }\n  50% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n    filter: alpha(opacity=50);\n    opacity: 0.5;\n  }\n  60% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=60)\";\n    filter: alpha(opacity=60);\n    opacity: 0.6;\n  }\n  70% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)\";\n    filter: alpha(opacity=70);\n    opacity: 0.7;\n  }\n  80% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n    filter: alpha(opacity=80);\n    opacity: 0.8;\n  }\n  90% {\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n    filter: alpha(opacity=90);\n    opacity: 0.9;\n  }\n  100% {\n    -ms-filter: none;\n    filter: none;\n    opacity: 1;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c789535504b88e5ad492802d10fb02ab.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4c5ba47d1ce8c6e79a3641c27288e6fc.svg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2d718fced26427f3bf3427b44d71f627.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

let header = document.querySelector('header'),
    toggleMenu = document.querySelector('.toggle-menu'),
    menu = document.querySelector('header'),
    sections = document.querySelectorAll("body > section");

toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})

toggleMenu.parentNode.querySelectorAll("nav ul a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault()
        let targetElem = document.querySelector(e.currentTarget.hash)
        window.scrollBy({
            top: targetElem.getBoundingClientRect().top - document.querySelector("header").getBoundingClientRect().height,
            behavior: 'smooth'
        })
        menu.classList.toggle('active')
    })
})

function verifySectionsActive() {
    let offsets = [].map.call(sections, section => {
        header.classList.remove(section.id)
        return {id: section.id, y: Math.abs(section.getBoundingClientRect().top)}
    })

    let newOffsets = offsets.sort((a, b) => a.y > b.y)
    header.classList.add(newOffsets[0].id)

    let activeLink = header.querySelector("a.active")
    if (activeLink) activeLink.classList.remove('active')
    let nextLink = header.querySelector("a[href='#" + newOffsets[0].id + "']")
    if (nextLink) nextLink.classList.add('active')
}

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY
    scrollY > header.offsetHeight ? header.classList.add('scrolled') : header.classList.remove('scrolled')
    verifySectionsActive()
})

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjk3ZjI2YjViODgzYTg0ZDFjY2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bC9tYWluLnN0eWw/NjE1MiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bC9tYWluLnN0eWwiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9jYWxlbmRhci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9wbGFjZWhvbGRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7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QUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjk3ZjI2YjViODgzYTg0ZDFjY2MiLCJpbXBvcnQgJy4vc3R5bC9tYWluLnN0eWwnXHJcbmltcG9ydCAnLi9qcy9tYWluJ1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4vbWFpbi5zdHlsXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi9tYWluLnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi9tYWluLnN0eWxcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsL21haW4uc3R5bFxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjIwMCwzMDAsNDAwLDUwMCw4MDAsOTAwLDEwMDApO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XFxufVxcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgb3V0bGluZS13aWR0aDogMDtcXG59XFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxubWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcbmJ1dHRvbixcXG5odG1sIFt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG5wcm9ncmVzcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG59XFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbn1cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcbmRldGFpbHMsXFxubWVudSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcbmNhbnZhcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG4qLFxcbio6YWZ0ZXIsXFxuKjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmh0bWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXFxcIjtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcXG4gIG9wYWNpdHk6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGFwcGVhciAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uOiBhcHBlYXIgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ud3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDEyNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4ucm93IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mbGV4LWVuZCB7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAtbXMtanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG4jaG9tZSB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NGJhMDtcXG59XFxuI2hvbWUgLndyYXBwZXIucm93IHtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLW1zLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jaG9tZSAuZmVhdHVyZWQge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLW1zLWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNob21lIC5mZWF0dXJlZCAudGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4jaG9tZSAuZmVhdHVyZWQgLnRpdGxlLFxcbiNob21lIC5mZWF0dXJlZCAuZGVzY3JpcHRpb24ge1xcbiAgY29sb3I6ICNmYWZhZmE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNob21lIC5mZWF0dXJlZCAuZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuI2hvbWUgLmZlYXR1cmVkIC5idG4ge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuI2hvbWUgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XFxuICAjaG9tZSB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuICAjaG9tZSBpbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG4gICNob21lIC5mZWF0dXJlZCB7XFxuICAgIG1heC13aWR0aDogNDAlO1xcbiAgfVxcbiAgI2hvbWUgLmZlYXR1cmVkIC50aXRsZSB7XFxuICAgIG1heC13aWR0aDogNTI4cHg7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgfVxcbiAgI2hvbWUgLmZlYXR1cmVkIC5kZXNjcmlwdGlvbiB7XFxuICAgIG1heC13aWR0aDogNjUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgfVxcbiAgI2hvbWUgLmZlYXR1cmVkIC50aXRsZSxcXG4gICNob21lIC5mZWF0dXJlZCAuZGVzY3JpcHRpb24ge1xcbiAgICBjb2xvcjogI2ZhZmFmYTtcXG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG4gIGJhY2tncm91bmQ6ICNmZjczYjQ7XFxuICBwYWRkaW5nOiAyMHB4IDM4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG4uYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggNjBweCByZ2JhKDIyOCwxMTAsMTQ4LDAuNSk7XFxufVxcbi5idG46Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbiAgcGFkZGluZzogMjBweCAwO1xcbn1cXG5mb290ZXIgLmNvbHVtbiB7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5mb290ZXIgLmF1dGhvciB7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG59XFxuZm9vdGVyIC5hdXRob3IgYSB7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG59XFxuZm9vdGVyIC5zb2NpYWxtZWRpYSB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbmZvb3RlciAuc29jaWFsbWVkaWEgbGkge1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT01MClcXFwiO1xcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuZm9vdGVyIC5zb2NpYWxtZWRpYSBsaTpob3ZlciB7XFxuICAtbXMtZmlsdGVyOiBub25lO1xcbiAgZmlsdGVyOiBub25lO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcXG4gIGZvb3RlciAuY29sdW1uIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAtbXMtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICBmb290ZXIgLnNvY2lhbG1lZGlhIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG59XFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMjVweCAwIDIwcHggMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODRiYTA7XFxufVxcbmhlYWRlciAucm93IHtcXG4gIHBhZGRpbmc6IDAgMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuaGVhZGVyIG5hdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0YmEwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXFxcIjtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcbn1cXG5oZWFkZXIgbmF2IC5tZW51IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmhlYWRlciAubG9nbyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAtd2Via2l0LWZsZXg6IDE7XFxuICAtbXMtZmxleDogMTtcXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vYXNzZXRzL2xvZ28ucG5nXCIpKSArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcXG59XFxuaGVhZGVyIC50b2dnbGUtbWVudSB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC43KTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwLjcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC43KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmhlYWRlciAudG9nZ2xlLW1lbnUgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogNXB4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICAtbXMtZmlsdGVyOiBub25lO1xcbiAgZmlsdGVyOiBub25lO1xcbiAgb3BhY2l0eTogMTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuaGVhZGVyIC50b2dnbGUtbWVudSBzcGFuOm50aC1jaGlsZChldmVuKSB7XFxuICBsZWZ0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiAwIDlweCA5cHggMDtcXG59XFxuaGVhZGVyIC50b2dnbGUtbWVudSBzcGFuOm50aC1jaGlsZChvZGQpIHtcXG4gIGxlZnQ6IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDlweCAwIDAgOXB4O1xcbn1cXG5oZWFkZXIgLnRvZ2dsZS1tZW51IHNwYW46bnRoLWNoaWxkKDEpLFxcbmhlYWRlciAudG9nZ2xlLW1lbnUgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgdG9wOiAwcHg7XFxufVxcbmhlYWRlciAudG9nZ2xlLW1lbnUgc3BhbjpudGgtY2hpbGQoMyksXFxuaGVhZGVyIC50b2dnbGUtbWVudSBzcGFuOm50aC1jaGlsZCg0KSB7XFxuICB0b3A6IC13ZWJraXQtY2FsYyg1MCUgLSAxcHgpO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XFxufVxcbmhlYWRlciAudG9nZ2xlLW1lbnUgc3BhbjpudGgtY2hpbGQoNSksXFxuaGVhZGVyIC50b2dnbGUtbWVudSBzcGFuOm50aC1jaGlsZCg2KSB7XFxuICB0b3A6IDEwMCU7XFxufVxcbmhlYWRlci5hY3RpdmUgbmF2IHtcXG4gIC1tcy1maWx0ZXI6IG5vbmU7XFxuICBmaWx0ZXI6IG5vbmU7XFxuICBvcGFjaXR5OiAxO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAtbXMtdHJhbnNmb3JtOiBub25lO1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIG1hcmdpbi10b3A6IDkwcHg7XFxufVxcbmhlYWRlci5hY3RpdmUgLnRvZ2dsZS1tZW51IHNwYW46bnRoLWNoaWxkKDEpLFxcbmhlYWRlci5hY3RpdmUgLnRvZ2dsZS1tZW51IHNwYW46bnRoLWNoaWxkKDYpIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuaGVhZGVyLmFjdGl2ZSAudG9nZ2xlLW1lbnUgc3BhbjpudGgtY2hpbGQoMiksXFxuaGVhZGVyLmFjdGl2ZSAudG9nZ2xlLW1lbnUgc3BhbjpudGgtY2hpbGQoNSkge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5oZWFkZXIuYWN0aXZlIC50b2dnbGUtbWVudSBzcGFuOm50aC1jaGlsZCgxKSB7XFxuICBsZWZ0OiA3cHg7XFxuICB0b3A6IDEwcHg7XFxufVxcbmhlYWRlci5hY3RpdmUgLnRvZ2dsZS1tZW51IHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gIGxlZnQ6IDI3cHg7XFxuICB0b3A6IDEwcHg7XFxufVxcbmhlYWRlci5hY3RpdmUgLnRvZ2dsZS1tZW51IHNwYW46bnRoLWNoaWxkKDMpIHtcXG4gIGxlZnQ6IC01MCU7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcXFwiO1xcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xcbiAgb3BhY2l0eTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjczYjQ7XFxufVxcbmhlYWRlci5hY3RpdmUgLnRvZ2dsZS1tZW51IHNwYW46bnRoLWNoaWxkKDQpIHtcXG4gIGxlZnQ6IDEwMCU7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcXFwiO1xcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xcbiAgb3BhY2l0eTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjczYjQ7XFxufVxcbmhlYWRlci5hY3RpdmUgLnRvZ2dsZS1tZW51IHNwYW46bnRoLWNoaWxkKDUpIHtcXG4gIGxlZnQ6IDdweDtcXG4gIHRvcDogMzBweDtcXG59XFxuaGVhZGVyLmFjdGl2ZSAudG9nZ2xlLW1lbnUgc3BhbjpudGgtY2hpbGQoNikge1xcbiAgbGVmdDogMjdweDtcXG4gIHRvcDogMzBweDtcXG59XFxuaGVhZGVyIC5tZW51X19saW5rIHtcXG4gIHBhZGRpbmc6IDE4cHggMC44cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmhlYWRlciAubWVudV9fbGluay5hY3RpdmUge1xcbiAgY29sb3I6ICNmZjczYjQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XFxuICBoZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjVweCAwIDIwcHggMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XFxuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcXG4gIH1cXG4gIGhlYWRlci5hY3RpdmUgbmF2IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgaGVhZGVyLnNjcm9sbGVkIHtcXG4gICAgYm94LXNoYWRvdzogMCAycHggMTVweCAzcHggcmdiYSgwLDAsMCwwLjMpO1xcbiAgfVxcbiAgaGVhZGVyLnNjcm9sbGVkIC5sb2dvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gIH1cXG4gIGhlYWRlciBuYXYge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAtbXMtZmlsdGVyOiBub25lO1xcbiAgICBmaWx0ZXI6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogaW5pdGlhbDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IGluaXRpYWw7XFxuICAgIC1tcy10cmFuc2Zvcm06IGluaXRpYWw7XFxuICAgIHRyYW5zZm9ybTogaW5pdGlhbDtcXG4gICAgcG9zaXRpb246IGluaXRpYWw7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgaGVhZGVyIG5hdiAubWVudSB7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbiAgaGVhZGVyIC50b2dnbGUtbWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbiNtb3JlIC5jb2x1bW4ge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI21vcmUgLm1vcmVfX3ZpZGVvLFxcbiNtb3JlIC5tb3JlX19jb250ZW50IHtcXG4gIHdpZHRoOiA5NSU7XFxufVxcbiNtb3JlIC5tb3JlX19jb250ZW50IHtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuI21vcmUgLm1vcmVfX2NvbnRlbnQgLnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI21vcmUgLm1vcmVfX2NvbnRlbnQgcCB7XFxuICBjb2xvcjogIzY2NjtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xcbiAgI21vcmUgLmNvbHVtbiB7XFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAtbXMtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogbm9ybWFsO1xcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBub3JtYWw7XFxuICAgIC1tcy1hbGlnbi1pdGVtczogbm9ybWFsO1xcbiAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xcbiAgfVxcbiAgI21vcmUgLm1vcmVfX3ZpZGVvIHtcXG4gICAgbWluLWhlaWdodDogMzUwcHg7XFxuICB9XFxuICAjbW9yZSAubW9yZV9fdmlkZW8sXFxuICAjbW9yZSAubW9yZV9fY29udGVudCB7XFxuICAgIHdpZHRoOiA0NSU7XFxuICB9XFxuICAjbW9yZSAubW9yZV9fY29udGVudCBwIHtcXG4gICAgbWFyZ2luOiAzMHB4IDA7XFxuICB9XFxufVxcbiNzY2hlZHVsZSAuY29sdW1uIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNzY2hlZHVsZSAuc2NoZWR1bGVfX3RhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuI3NjaGVkdWxlIC5zY2hlZHVsZV9fdGFibGUgdGhlYWQgdHIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG59XFxuI3NjaGVkdWxlIC5zY2hlZHVsZV9fdGFibGUgdGhlYWQgdGgge1xcbiAgY29sb3I6ICNmYWZhZmE7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcbiNzY2hlZHVsZSAuc2NoZWR1bGVfX3RhYmxlIHRib2R5IHRyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTIxMjE7XFxufVxcbiNzY2hlZHVsZSAuc2NoZWR1bGVfX3RhYmxlIHRib2R5IHRyIHRkIHtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbn1cXG4jc2NoZWR1bGUgLnNjaGVkdWxlX190YWJsZSB0Ym9keSB0ciB0ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBwYWRkaW5nOiAxM3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4jc2NoZWR1bGUgLnNjaGVkdWxlX190YWJsZSB0Ym9keSB0ciB0ZC5kYXRlOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2Fzc2V0cy9pY29ucy9jYWxlbmRhci5zdmdcIikpICsgXCIpIG5vLXJlcGVhdDtcXG59XFxuI3NjaGVkdWxlIC5zY2hlZHVsZV9fdGFibGUgdGJvZHkgdHIgdGQubG9jYWw6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vYXNzZXRzL2ljb25zL3BsYWNlaG9sZGVyLnN2Z1wiKSkgKyBcIikgbm8tcmVwZWF0O1xcbn1cXG4jc2NoZWR1bGUgLmJ0biB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcXG4gICNzY2hlZHVsZSAuc2NoZWR1bGVfX3RhYmxlIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gIH1cXG4gICNzY2hlZHVsZSAuc2NoZWR1bGVfX3RhYmxlIHRyIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuICAjc2NoZWR1bGUgLnNjaGVkdWxlX190YWJsZSB0Ym9keSB0ciB7XFxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgI3NjaGVkdWxlIC5zY2hlZHVsZV9fdGFibGUgdGJvZHkgdHIgdGQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAtbXMtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcbn1cXG4jc3BlYWtlciAuY29sdW1uIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNzcGVha2VyIC50aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNzcGVha2VyIC5kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI3NwZWFrZXIgLnNwZWFrZXJfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLW1zLWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG4jc3BlYWtlciAuc3BlYWtlcl9fY29udGVudCAuc3BlYWtlci1jYXJkIHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbiNzcGVha2VyIC5zcGVha2VyX19jb250ZW50IC5zcGVha2VyLWNhcmQgKyAuc3BlYWtlci1jYXJkIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbiNzcGVha2VyIC5zcGVha2VyX19jb250ZW50IC5zcGVha2VyLWNhcmQgLnNwZWFrZXItY2FyZF9faW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4jc3BlYWtlciAuc3BlYWtlcl9fY29udGVudCAuc3BlYWtlci1jYXJkIC5zcGVha2VyLWNhcmRfX2Rlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNzcGVha2VyIC5zcGVha2VyX19jb250ZW50IC5zcGVha2VyLWNhcmQgLnNwZWFrZXItY2FyZF9fZGVzY3JpcHRpb24gLnNwZWFrZXItY2FyZF9fbmFtZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzQ4NGJhMDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbiNzcGVha2VyIC5zcGVha2VyX19jb250ZW50IC5zcGVha2VyLWNhcmQgLnNwZWFrZXItY2FyZF9fZGVzY3JpcHRpb24gLnNwZWFrZXItY2FyZF9fb2ZmaWNlIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuI3NwZWFrZXIgLnNwZWFrZXJfX2NvbnRlbnQgLnNwZWFrZXItY2FyZCAuc3BlYWtlci1jYXJkX19kZXNjcmlwdGlvbiAuc3BlYWtlci1jYXJkX19iaW8ge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XFxuICAjc3BlYWtlciAuc3BlYWtlcl9fY29udGVudCB7XFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAtbXMtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAjc3BlYWtlciAuc3BlYWtlcl9fY29udGVudCAuc3BlYWtlci1jYXJkIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWluLXdpZHRoOiAyMjVweDtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgfVxcbiAgI3NwZWFrZXIgLnNwZWFrZXJfX2NvbnRlbnQgLnNwZWFrZXItY2FyZCArIC5zcGVha2VyLWNhcmQge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICB9XFxufVxcbmh0bWwge1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4udGl0bGUge1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG4udGl0bGUubGluZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4udGl0bGUubGluZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAtd2Via2l0LWNhbGMoNTAlIC0gNTBweCk7XFxuICBtYXJnaW46IDEwcHggY2FsYyg1MCUgLSA1MHB4KTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzNiNDtcXG59XFxucCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcXG4gIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG4gIC5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XFxuICAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG4gIC5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcbn1cXG5ALW1vei1rZXlmcmFtZXMgYXBwZWFyIHtcXG4gIDAlIHtcXG4gICAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXFxcIjtcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAlIHtcXG4gICAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwKVxcXCI7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMCk7XFxuICAgIG9wYWNpdHk6IDAuMTtcXG4gIH1cXG4gIDIwJSB7XFxuICAgIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0yMClcXFwiO1xcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICB9XFxuICAzMCUge1xcbiAgICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MzApXFxcIjtcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTMwKTtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTQwKVxcXCI7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT01MClcXFwiO1xcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9XFxuICA2MCUge1xcbiAgICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9NjApXFxcIjtcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTYwKTtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgfVxcbiAgNzAlIHtcXG4gICAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTcwKVxcXCI7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG4gIDgwJSB7XFxuICAgIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT04MClcXFwiO1xcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICB9XFxuICA5MCUge1xcbiAgICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9OTApXFxcIjtcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTkwKTtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC1tcy1maWx0ZXI6IG5vbmU7XFxuICAgIGZpbHRlcjogbm9uZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGFwcGVhciB7XFxuICAwJSB7XFxuICAgIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVxcXCI7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwJSB7XFxuICAgIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMClcXFwiO1xcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTApO1xcbiAgICBvcGFjaXR5OiAwLjE7XFxuICB9XFxuICAyMCUge1xcbiAgICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MjApXFxcIjtcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgfVxcbiAgMzAlIHtcXG4gICAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTMwKVxcXCI7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0zMCk7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gIH1cXG4gIDQwJSB7XFxuICAgIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT00MClcXFwiO1xcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NDApO1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxuICB9XFxuICA1MCUge1xcbiAgICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9NTApXFxcIjtcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgfVxcbiAgNjAlIHtcXG4gICAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTYwKVxcXCI7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT02MCk7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gIH1cXG4gIDcwJSB7XFxuICAgIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT03MClcXFwiO1xcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxuICA4MCUge1xcbiAgICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9ODApXFxcIjtcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTgwKTtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgfVxcbiAgOTAlIHtcXG4gICAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTkwKVxcXCI7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT05MCk7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtbXMtZmlsdGVyOiBub25lO1xcbiAgICBmaWx0ZXI6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkAtby1rZXlmcmFtZXMgYXBwZWFyIHtcXG4gIDAlIHtcXG4gICAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXFxcIjtcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAlIHtcXG4gICAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTEwKVxcXCI7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMCk7XFxuICAgIG9wYWNpdHk6IDAuMTtcXG4gIH1cXG4gIDIwJSB7XFxuICAgIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0yMClcXFwiO1xcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICB9XFxuICAzMCUge1xcbiAgICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MzApXFxcIjtcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTMwKTtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTQwKVxcXCI7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT01MClcXFwiO1xcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9XFxuICA2MCUge1xcbiAgICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9NjApXFxcIjtcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTYwKTtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgfVxcbiAgNzAlIHtcXG4gICAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTcwKVxcXCI7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG4gIDgwJSB7XFxuICAgIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT04MClcXFwiO1xcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICB9XFxuICA5MCUge1xcbiAgICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9OTApXFxcIjtcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTkwKTtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC1tcy1maWx0ZXI6IG5vbmU7XFxuICAgIGZpbHRlcjogbm9uZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhcHBlYXIge1xcbiAgMCUge1xcbiAgICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcXFwiO1xcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMCUge1xcbiAgICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTApXFxcIjtcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwKTtcXG4gICAgb3BhY2l0eTogMC4xO1xcbiAgfVxcbiAgMjAlIHtcXG4gICAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTIwKVxcXCI7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0yMCk7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gIH1cXG4gIDMwJSB7XFxuICAgIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0zMClcXFwiO1xcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MzApO1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICB9XFxuICA0MCUge1xcbiAgICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9NDApXFxcIjtcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTUwKVxcXCI7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT02MClcXFwiO1xcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NjApO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICB9XFxuICA3MCUge1xcbiAgICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9NzApXFxcIjtcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcbiAgODAlIHtcXG4gICAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTgwKVxcXCI7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gIH1cXG4gIDkwJSB7XFxuICAgIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT05MClcXFwiO1xcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9OTApO1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLW1zLWZpbHRlcjogbm9uZTtcXG4gICAgZmlsdGVyOiBub25lO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/P3JlZi0tMS0yIS4vc3JjL3N0eWwvbWFpbi5zdHlsXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImM3ODk1MzU1MDRiODhlNWFkNDkyODAyZDEwZmIwMmFiLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9sb2dvLnBuZ1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRjNWJhNDdkMWNlOGM2ZTc5YTM2NDFjMjcyODhlNmZjLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9pY29ucy9jYWxlbmRhci5zdmdcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyZDcxOGZjZWQyNjQyN2YzYmYzNDI3YjQ0ZDcxZjYyNy5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvaWNvbnMvcGxhY2Vob2xkZXIuc3ZnXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKSxcclxuICAgIHRvZ2dsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLW1lbnUnKSxcclxuICAgIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKSxcclxuICAgIHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJvZHkgPiBzZWN0aW9uXCIpO1xyXG5cclxudG9nZ2xlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxufSlcclxuXHJcbnRvZ2dsZU1lbnUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwibmF2IHVsIGFcIikuZm9yRWFjaChsaW5rID0+IHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGxldCB0YXJnZXRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlLmN1cnJlbnRUYXJnZXQuaGFzaClcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoe1xyXG4gICAgICAgICAgICB0b3A6IHRhcmdldEVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgfSlcclxufSlcclxuXHJcbmZ1bmN0aW9uIHZlcmlmeVNlY3Rpb25zQWN0aXZlKCkge1xyXG4gICAgbGV0IG9mZnNldHMgPSBbXS5tYXAuY2FsbChzZWN0aW9ucywgc2VjdGlvbiA9PiB7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoc2VjdGlvbi5pZClcclxuICAgICAgICByZXR1cm4ge2lkOiBzZWN0aW9uLmlkLCB5OiBNYXRoLmFicyhzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCl9XHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBuZXdPZmZzZXRzID0gb2Zmc2V0cy5zb3J0KChhLCBiKSA9PiBhLnkgPiBiLnkpXHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChuZXdPZmZzZXRzWzBdLmlkKVxyXG5cclxuICAgIGxldCBhY3RpdmVMaW5rID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoXCJhLmFjdGl2ZVwiKVxyXG4gICAgaWYgKGFjdGl2ZUxpbmspIGFjdGl2ZUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIGxldCBuZXh0TGluayA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKFwiYVtocmVmPScjXCIgKyBuZXdPZmZzZXRzWzBdLmlkICsgXCInXVwiKVxyXG4gICAgaWYgKG5leHRMaW5rKSBuZXh0TGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgbGV0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWVxyXG4gICAgc2Nyb2xsWSA+IGhlYWRlci5vZmZzZXRIZWlnaHQgPyBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQnKSA6IGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZCcpXHJcbiAgICB2ZXJpZnlTZWN0aW9uc0FjdGl2ZSgpXHJcbn0pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwic291cmNlUm9vdCI6IiJ9