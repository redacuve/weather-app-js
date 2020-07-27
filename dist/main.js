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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./weather-icons/freezing_rain_heavy.svg */ \"./src/weather-icons/freezing_rain_heavy.svg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./weather-icons/freezing_rain.svg */ \"./src/weather-icons/freezing_rain.svg\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./weather-icons/freezing_rain_light.svg */ \"./src/weather-icons/freezing_rain_light.svg\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./weather-icons/freezing_drizzle.svg */ \"./src/weather-icons/freezing_drizzle.svg\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ./weather-icons/ice_pellets_heavy.svg */ \"./src/weather-icons/ice_pellets_heavy.svg\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ./weather-icons/ice_pellets.svg */ \"./src/weather-icons/ice_pellets.svg\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ./weather-icons/ice_pellets_light.svg */ \"./src/weather-icons/ice_pellets_light.svg\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ./weather-icons/snow_heavy.svg */ \"./src/weather-icons/snow_heavy.svg\");\nvar ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ./weather-icons/snow.svg */ \"./src/weather-icons/snow.svg\");\nvar ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ./weather-icons/snow_light.svg */ \"./src/weather-icons/snow_light.svg\");\nvar ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ./weather-icons/flurries.svg */ \"./src/weather-icons/flurries.svg\");\nvar ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ./weather-icons/tstorm.svg */ \"./src/weather-icons/tstorm.svg\");\nvar ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! ./weather-icons/rain_heavy.svg */ \"./src/weather-icons/rain_heavy.svg\");\nvar ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(/*! ./weather-icons/rain.svg */ \"./src/weather-icons/rain.svg\");\nvar ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(/*! ./weather-icons/rain_light.svg */ \"./src/weather-icons/rain_light.svg\");\nvar ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(/*! ./weather-icons/drizzle.svg */ \"./src/weather-icons/drizzle.svg\");\nvar ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(/*! ./weather-icons/fog_light.svg */ \"./src/weather-icons/fog_light.svg\");\nvar ___CSS_LOADER_URL_IMPORT_17___ = __webpack_require__(/*! ./weather-icons/fog.svg */ \"./src/weather-icons/fog.svg\");\nvar ___CSS_LOADER_URL_IMPORT_18___ = __webpack_require__(/*! ./weather-icons/cloudy.svg */ \"./src/weather-icons/cloudy.svg\");\nvar ___CSS_LOADER_URL_IMPORT_19___ = __webpack_require__(/*! ./weather-icons/mostly_cloudy.svg */ \"./src/weather-icons/mostly_cloudy.svg\");\nvar ___CSS_LOADER_URL_IMPORT_20___ = __webpack_require__(/*! ./weather-icons/partly_cloudy_day.svg */ \"./src/weather-icons/partly_cloudy_day.svg\");\nvar ___CSS_LOADER_URL_IMPORT_21___ = __webpack_require__(/*! ./weather-icons/mostly_clear_day.svg */ \"./src/weather-icons/mostly_clear_day.svg\");\nvar ___CSS_LOADER_URL_IMPORT_22___ = __webpack_require__(/*! ./weather-icons/clear_day.svg */ \"./src/weather-icons/clear_day.svg\");\nvar ___CSS_LOADER_URL_IMPORT_23___ = __webpack_require__(/*! ./weather-photos/freezing_rain_heavy.jpg */ \"./src/weather-photos/freezing_rain_heavy.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_24___ = __webpack_require__(/*! ./weather-photos/freezing_rain.jpg */ \"./src/weather-photos/freezing_rain.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_25___ = __webpack_require__(/*! ./weather-photos/freezing_rain_light.jpg */ \"./src/weather-photos/freezing_rain_light.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_26___ = __webpack_require__(/*! ./weather-photos/freezing_drizzle.jpg */ \"./src/weather-photos/freezing_drizzle.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_27___ = __webpack_require__(/*! ./weather-photos/ice_pellets_heavy.jpg */ \"./src/weather-photos/ice_pellets_heavy.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_28___ = __webpack_require__(/*! ./weather-photos/ice_pellets.jpg */ \"./src/weather-photos/ice_pellets.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_29___ = __webpack_require__(/*! ./weather-photos/ice_pellets_light.jpg */ \"./src/weather-photos/ice_pellets_light.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_30___ = __webpack_require__(/*! ./weather-photos/snow_heavy.jpg */ \"./src/weather-photos/snow_heavy.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_31___ = __webpack_require__(/*! ./weather-photos/snow.jpg */ \"./src/weather-photos/snow.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_32___ = __webpack_require__(/*! ./weather-photos/snow_light.jpg */ \"./src/weather-photos/snow_light.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_33___ = __webpack_require__(/*! ./weather-photos/flurries.jpg */ \"./src/weather-photos/flurries.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_34___ = __webpack_require__(/*! ./weather-photos/tstorm.jpg */ \"./src/weather-photos/tstorm.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_35___ = __webpack_require__(/*! ./weather-photos/rain_heavy.jpg */ \"./src/weather-photos/rain_heavy.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_36___ = __webpack_require__(/*! ./weather-photos/rain.jpg */ \"./src/weather-photos/rain.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_37___ = __webpack_require__(/*! ./weather-photos/rain_light.jpg */ \"./src/weather-photos/rain_light.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_38___ = __webpack_require__(/*! ./weather-photos/drizzle.jpg */ \"./src/weather-photos/drizzle.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_39___ = __webpack_require__(/*! ./weather-photos/fog_light.jpg */ \"./src/weather-photos/fog_light.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_40___ = __webpack_require__(/*! ./weather-photos/fog.jpg */ \"./src/weather-photos/fog.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_41___ = __webpack_require__(/*! ./weather-photos/cloudy.jpg */ \"./src/weather-photos/cloudy.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_42___ = __webpack_require__(/*! ./weather-photos/mostly_cloudy.jpg */ \"./src/weather-photos/mostly_cloudy.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_43___ = __webpack_require__(/*! ./weather-photos/partly_cloudy_day.jpg */ \"./src/weather-photos/partly_cloudy_day.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_44___ = __webpack_require__(/*! ./weather-photos/mostly_clear_day.jpg */ \"./src/weather-photos/mostly_clear_day.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_45___ = __webpack_require__(/*! ./weather-photos/clear_day.jpg */ \"./src/weather-photos/clear_day.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_46___ = __webpack_require__(/*! ./weather-photos/main.jpg */ \"./src/weather-photos/main.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);\nvar ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_17___);\nvar ___CSS_LOADER_URL_REPLACEMENT_18___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_18___);\nvar ___CSS_LOADER_URL_REPLACEMENT_19___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_19___);\nvar ___CSS_LOADER_URL_REPLACEMENT_20___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_20___);\nvar ___CSS_LOADER_URL_REPLACEMENT_21___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_21___);\nvar ___CSS_LOADER_URL_REPLACEMENT_22___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_22___);\nvar ___CSS_LOADER_URL_REPLACEMENT_23___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_23___);\nvar ___CSS_LOADER_URL_REPLACEMENT_24___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_24___);\nvar ___CSS_LOADER_URL_REPLACEMENT_25___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_25___);\nvar ___CSS_LOADER_URL_REPLACEMENT_26___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_26___);\nvar ___CSS_LOADER_URL_REPLACEMENT_27___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_27___);\nvar ___CSS_LOADER_URL_REPLACEMENT_28___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_28___);\nvar ___CSS_LOADER_URL_REPLACEMENT_29___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_29___);\nvar ___CSS_LOADER_URL_REPLACEMENT_30___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_30___);\nvar ___CSS_LOADER_URL_REPLACEMENT_31___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_31___);\nvar ___CSS_LOADER_URL_REPLACEMENT_32___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_32___);\nvar ___CSS_LOADER_URL_REPLACEMENT_33___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_33___);\nvar ___CSS_LOADER_URL_REPLACEMENT_34___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_34___);\nvar ___CSS_LOADER_URL_REPLACEMENT_35___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_35___);\nvar ___CSS_LOADER_URL_REPLACEMENT_36___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_36___);\nvar ___CSS_LOADER_URL_REPLACEMENT_37___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_37___);\nvar ___CSS_LOADER_URL_REPLACEMENT_38___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_38___);\nvar ___CSS_LOADER_URL_REPLACEMENT_39___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_39___);\nvar ___CSS_LOADER_URL_REPLACEMENT_40___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_40___);\nvar ___CSS_LOADER_URL_REPLACEMENT_41___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_41___);\nvar ___CSS_LOADER_URL_REPLACEMENT_42___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_42___);\nvar ___CSS_LOADER_URL_REPLACEMENT_43___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_43___);\nvar ___CSS_LOADER_URL_REPLACEMENT_44___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_44___);\nvar ___CSS_LOADER_URL_REPLACEMENT_45___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_45___);\nvar ___CSS_LOADER_URL_REPLACEMENT_46___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_46___);\n// Module\nexports.push([module.i, \"* {\\n  box-sizing: border-box;\\n  color: black;\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Cabin\\\", sans-serif;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n.container {\\n  text-align: center;\\n  position: relative;\\n  height: 100vh;\\n  max-height: fit-content;\\n}\\n\\n.notification {\\n  position: relative;\\n  padding: 1rem 2.5rem 1rem 1.25rem;\\n  border-radius: 5px;\\n}\\n\\n.delete {\\n  position: absolute;\\n  right: 0.5rem;\\n  top: 0.5rem;\\n  cursor: pointer;\\n  pointer-events: auto;\\n  background-color: rgba(10, 10, 10, 0.2);\\n  border: none;\\n  border-radius: 100%;\\n  color: white;\\n  padding: 0.5rem;\\n  width: 30px;\\n  height: 30px;\\n}\\n\\n#date,\\n#weather-code,\\nh3,\\n#temperature,\\n.t-scale,\\np,\\np span,\\nli,\\nli span {\\n  color: white;\\n}\\n\\n.notification p {\\n  color: inherit;\\n  font-weight: bold;\\n}\\n\\n.success {\\n  background-color: green;\\n  color: white;\\n}\\n\\n.warning {\\n  background-color: yellow;\\n  color: black;\\n}\\n\\n.error {\\n  background-color: red;\\n  color: white;\\n}\\n\\n.weather-container {\\n  display: inline-block;\\n  border: 1px solid gray;\\n  border-radius: 5px;\\n  width: 100%;\\n  max-width: 390px;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  color: white;\\n  margin-top: 3rem;\\n}\\n\\n.weather-header {\\n  background-color: rgba(255, 255, 255, 0.7);\\n  border-radius: 5px;\\n  margin-bottom: 0.4rem;\\n}\\n\\nh1 {\\n  padding: 1rem 0;\\n  font-family: \\\"Roboto Condensed\\\", sans-serif;\\n}\\n\\n.weather-info {\\n  margin-top: 0.5rem;\\n}\\n\\n.city-search {\\n  text-align: center;\\n}\\n\\n#city-name {\\n  padding: 0.5rem 0;\\n  color: white;\\n}\\n\\n#weather-icon {\\n  width: 5rem;\\n  height: 5rem;\\n  display: inline-block;\\n}\\n\\n.switch {\\n  position: relative;\\n  display: inline-block;\\n  width: 60px;\\n  height: 34px;\\n}\\n\\n.switch input {\\n  opacity: 0;\\n  width: 0;\\n  height: 0;\\n}\\n\\n.slider {\\n  position: absolute;\\n  cursor: pointer;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  background-color: #ccc;\\n  transition: 400ms;\\n}\\n\\n.slider::before {\\n  position: absolute;\\n  content: \\\"\\\";\\n  height: 26px;\\n  width: 26px;\\n  left: 4px;\\n  bottom: 4px;\\n  background-color: #fff;\\n  transition: 400ms;\\n}\\n\\ninput:checked + .slider {\\n  background-color: #167cc0;\\n}\\n\\ninput:checked + .slider::before {\\n  transform: translateX(26px);\\n}\\n\\n.city-search-wrapper {\\n  position: relative;\\n}\\n\\n.city-search-wrapper input {\\n  font-size: 1.5rem;\\n  padding: 0 15px;\\n  width: 100%;\\n}\\n\\n#city-list {\\n  width: 100%;\\n  position: absolute;\\n  background-color: white;\\n  z-index: 100;\\n}\\n\\n.city:hover {\\n  background-color: gainsboro;\\n}\\n\\n.spinner {\\n  width: 100%;\\n  text-align: center;\\n}\\n\\n.spinner > div {\\n  width: 18px;\\n  height: 18px;\\n  background-color: #ccc;\\n  border-radius: 100%;\\n  display: inline-block;\\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\\n}\\n\\n.spinner .bounce1 {\\n  animation-delay: -0.32s;\\n}\\n\\n.spinner .bounce2 {\\n  animation-delay: -0.16s;\\n}\\n\\n@keyframes sk-bouncedelay {\\n  0%, 80%, 100% { \\n    transform: scale(0);\\n  } 40% { \\n    transform: scale(1.0);\\n  }\\n}\\n\\n.freezing_rain_heavy {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n.freezing_rain {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n.freezing_rain_light {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n\\n.freezing_drizzle {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\\n\\n.ice_pellets_heavy {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n}\\n\\n.ice_pellets {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n}\\n\\n.ice_pellets_light {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n}\\n\\n.snow_heavy {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\n}\\n\\n.snow {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n}\\n\\n.snow_light {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \");\\n}\\n\\n.flurries {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n}\\n\\n.tstorm {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \");\\n}\\n\\n.rain_heavy {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \");\\n}\\n\\n.rain {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \");\\n}\\n\\n.rain_light {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \");\\n}\\n\\n.drizzle {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \");\\n}\\n\\n.fog_light {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_16___ + \");\\n}\\n\\n.fog {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_17___ + \");\\n}\\n\\n.cloudy {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_18___ + \");\\n}\\n\\n.mostly_cloudy {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_19___ + \");\\n}\\n\\n.partly_cloudy {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_20___ + \");\\n}\\n\\n.mostly_clear {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_21___ + \");\\n}\\n\\n.clear {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_22___ + \");\\n}\\n\\n.freezing_rain_heavy_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_23___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.freezing_rain_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_24___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.freezing_rain_light_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_25___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.freezing_drizzle_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_26___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.ice_pellets_heavy_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_27___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.ice_pellets_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_28___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.ice_pellets_light_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_29___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.snow_heavy_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_30___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.snow_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_31___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.snow_light_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_32___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.flurries_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_33___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.tstorm_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_34___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.rain_heavy_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_35___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.rain_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_36___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.rain_light_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_37___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.drizzle_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_38___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.fog_light_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_39___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.fog_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_40___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.cloudy_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_41___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.mostly_cloudy_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_42___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.partly_cloudy_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_43___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.mostly_clear_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_44___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.clear_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_45___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n.main_weather {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_46___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/changeUnits.js":
/*!****************************!*\
  !*** ./src/changeUnits.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return changeUnits; });\n/* harmony import */ var _convertHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertHelper */ \"./src/convertHelper.js\");\n\n\nfunction setScales(scale) {\n  const tempUnit = document.querySelectorAll('.t-scale');\n  const si = (scale === 'si');\n  tempUnit.forEach((elem) => {\n    elem.textContent = si ? '°C' : '°F';\n  });\n  document.querySelector('.p-scale').textContent = si ? 'mm/hr' : 'in/hr';\n  document.querySelector('.w-scale').textContent = si ? 'm/s' : 'mph';\n  document.querySelector('.v-scale').textContent = si ? 'km' : 'mi';\n}\n\nfunction changeUnits() {\n  const tempNode = document.getElementById('temperature');\n  const realFeelNode = document.getElementById('real-feel');\n  const precipitationNode = document.getElementById('precipitation');\n  const windSpeedNode = document.getElementById('wind-speed');\n  const visibilityNode = document.getElementById('visibility');\n\n  let temp = tempNode.textContent;\n  let realFeel = realFeelNode.textContent;\n  let precipitation = precipitationNode.textContent;\n  let windSpeed = windSpeedNode.textContent;\n  let visibility = visibilityNode.textContent;\n\n  if (temp !== '--.-' && realFeel !== '--.-') {\n    if (document.getElementById('units-toggler').checked) {\n      temp = Object(_convertHelper__WEBPACK_IMPORTED_MODULE_0__[\"fahrenheitToCelsius\"])(temp);\n      realFeel = Object(_convertHelper__WEBPACK_IMPORTED_MODULE_0__[\"fahrenheitToCelsius\"])(realFeel);\n      precipitation = Object(_convertHelper__WEBPACK_IMPORTED_MODULE_0__[\"inHrTommHr\"])(precipitation);\n      windSpeed = Object(_convertHelper__WEBPACK_IMPORTED_MODULE_0__[\"mphToms\"])(windSpeed);\n      visibility = Object(_convertHelper__WEBPACK_IMPORTED_MODULE_0__[\"miTokm\"])(visibility);\n    } else {\n      temp = Object(_convertHelper__WEBPACK_IMPORTED_MODULE_0__[\"celsiusToFahrenheit\"])(temp);\n      realFeel = Object(_convertHelper__WEBPACK_IMPORTED_MODULE_0__[\"celsiusToFahrenheit\"])(realFeel);\n      precipitation = Object(_convertHelper__WEBPACK_IMPORTED_MODULE_0__[\"mmHrToinHr\"])(precipitation);\n      windSpeed = Object(_convertHelper__WEBPACK_IMPORTED_MODULE_0__[\"msTomph\"])(windSpeed);\n      visibility = Object(_convertHelper__WEBPACK_IMPORTED_MODULE_0__[\"kmTomi\"])(visibility);\n    }\n    tempNode.textContent = temp;\n    realFeelNode.textContent = realFeel;\n    precipitationNode.textContent = precipitation;\n    windSpeedNode.textContent = windSpeed;\n    visibilityNode.textContent = visibility;\n  }\n\n  if (document.getElementById('units-toggler').checked) {\n    setScales('si');\n  } else {\n    setScales('us');\n  }\n}\n\n//# sourceURL=webpack:///./src/changeUnits.js?");

/***/ }),

/***/ "./src/convertHelper.js":
/*!******************************!*\
  !*** ./src/convertHelper.js ***!
  \******************************/
/*! exports provided: celsiusToFahrenheit, fahrenheitToCelsius, mmHrToinHr, inHrTommHr, msTomph, mphToms, kmTomi, miTokm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"celsiusToFahrenheit\", function() { return celsiusToFahrenheit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fahrenheitToCelsius\", function() { return fahrenheitToCelsius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mmHrToinHr\", function() { return mmHrToinHr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inHrTommHr\", function() { return inHrTommHr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"msTomph\", function() { return msTomph; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mphToms\", function() { return mphToms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"kmTomi\", function() { return kmTomi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"miTokm\", function() { return miTokm; });\nfunction celsiusToFahrenheit(temp) {\n  return ((temp * 9) / 5 + 32).toFixed(2);\n}\n\nfunction fahrenheitToCelsius(temp) {\n  return (((temp - 32) * 5) / 9).toFixed(2);\n}\n\nfunction mmHrToinHr(speed) {\n  return (speed / 25.4).toFixed(4);\n}\n\nfunction inHrTommHr(speed) {\n  return (speed * 25.4).toFixed(2);\n}\n\nfunction msTomph(speed) {\n  return (speed * 2.237).toFixed(2);\n}\n\nfunction mphToms(speed) {\n  return (speed / 2.237).toFixed(2);\n}\n\nfunction kmTomi(distance) {\n  return (distance / 1.609).toFixed(2);\n}\n\nfunction miTokm(distance) {\n  return (distance * 1.609).toFixed(1);\n}\n\n\n//# sourceURL=webpack:///./src/convertHelper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _changeUnits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeUnits */ \"./src/changeUnits.js\");\n/* harmony import */ var _notificationHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notificationHandler */ \"./src/notificationHandler.js\");\n\n\n\n\nconst wKey = 'UJkWsapTKh6XOfJS2Ru41FaJxw91Rs6Q';\nconst query = (lat, lon, apiKey, unit) => `https://api.climacell.co/v3/weather/realtime?apikey=${apiKey}&lat=${lat}&lon=${lon}&unit_system=${unit}&fields=temp,feels_like,precipitation,wind_speed,visibility,weather_code`;\nconst city = document.querySelector('#city-name');\nlet lat;\nlet long;\n\nconst citySearch = document.getElementById('city');\nconst cityList = document.getElementById('city-list');\nlet arr = [];\n\nlet cities;\nwindow.onload = async () => {\n  const resp = await fetch('./JSON/city.list.json');\n  cities = await resp.json();\n  document.querySelector('.spinner').classList.add('hide');\n  citySearch.classList.remove('hide');\n};\n\ndocument\n  .getElementById('units-toggler')\n  .addEventListener('change', _changeUnits__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ndocument.getElementById('city-list').addEventListener('click', (e) => {\n  cityList.innerHTML = '';\n  const indx = e.target.closest('div').id.match(/\\d+/)[0];\n  city.textContent = arr[indx].name;\n  lat = arr[indx].coord.lat;\n  long = arr[indx].coord.lon;\n  let units = 'si';\n  if (!document.getElementById('units-toggler').checked) {\n    units = 'us';\n  }\n\n  fetch(query(lat, long, wKey, units), { mode: 'cors' })\n    .then((response) => response.json())\n    .catch((error) => Object(_notificationHandler__WEBPACK_IMPORTED_MODULE_2__[\"openNotification\"])(\n      `The server has problems, please try again later ${error.toString()}`,\n      'error',\n    ))\n    .then((response) => {\n      document.getElementById('weather-icon').classList = response.weather_code.value;\n      document.querySelector(\n        'body',\n      ).classList = `${response.weather_code.value}_weather`;\n      document.getElementById('date').textContent = new Date(\n        response.observation_time.value,\n      ).toDateString();\n      document.getElementById(\n        'weather-code',\n      ).textContent = response.weather_code.value.replace('_', ' ');\n      document.getElementById('temperature').textContent = response.temp.value;\n      document.getElementById('real-feel').textContent = response.feels_like.value;\n      document.getElementById('precipitation').textContent = response.precipitation.value;\n      document.getElementById('wind-speed').textContent = response.wind_speed.value;\n      document.getElementById('visibility').textContent = response.visibility.value;\n    })\n    .catch((error) => Object(_notificationHandler__WEBPACK_IMPORTED_MODULE_2__[\"openNotification\"])(\n      `This is taking time, please try again later, error: ${error.toString()}`,\n      'warning',\n    ));\n});\n\nObject(_notificationHandler__WEBPACK_IMPORTED_MODULE_2__[\"addDeleteEvent\"])();\n\nfunction domResults(resultAr) {\n  if (resultAr.length > 0 && resultAr.length > 7) {\n    arr = resultAr.slice(0, 7);\n  } else if (resultAr.length > 0) {\n    arr = [...resultAr];\n  } else {\n    arr = [];\n  }\n  const innerCities = arr.map(\n    (city, index) => `\n    <div class=\"city\" id=\"city-${index}\">\n      <h4>${city.name}</h4>\n      <small>Lat: ${city.coord.lat} / Lon: ${city.coord.lon} / Country: ${city.country}</small>\n      <hr>\n    </div>\n    `,\n  );\n\n  cityList.innerHTML = innerCities.join('');\n}\n\nfunction searchCity(query) {\n  let result = [];\n  if (query.length > 0) {\n    result = cities.cities.filter((city) => {\n      const regex = new RegExp(`^${query}`, 'gi');\n      return city.name.match(regex);\n    });\n  }\n  if (query.length > 2){\n    result.sort((a,b) => {\n      let nameA = a.name.toUpperCase();\n      let nameB = b.name.toUpperCase();\n      if (nameA < nameB){\n        return -1;\n      }\n      if (nameA > nameB){\n        return 1;\n      }\n      return 0;\n    });\n  }\n  domResults(result);\n}\n\ncitySearch.addEventListener('input', () => searchCity(citySearch.value));\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/notificationHandler.js":
/*!************************************!*\
  !*** ./src/notificationHandler.js ***!
  \************************************/
/*! exports provided: addDeleteEvent, openNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addDeleteEvent\", function() { return addDeleteEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openNotification\", function() { return openNotification; });\nfunction closeNotification() {\n  document.querySelector('#notification').classList.add('hide');\n}\n\nfunction addDeleteEvent() {\n  document.querySelector('.delete').addEventListener('click', closeNotification);\n}\n\nfunction openNotification(text, nClss) {\n  document.querySelector('#text-notification').textContent = text;\n  document.querySelector('#notidication').classList = `notification ${nClss}`;\n}\n\n//# sourceURL=webpack:///./src/notificationHandler.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/weather-icons/clear_day.svg":
/*!*****************************************!*\
  !*** ./src/weather-icons/clear_day.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ead9013174262c77b562dbf508623135.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/clear_day.svg?");

/***/ }),

/***/ "./src/weather-icons/cloudy.svg":
/*!**************************************!*\
  !*** ./src/weather-icons/cloudy.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"cf1bf27d0d1e3ec3bb88d2bc9531c043.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/cloudy.svg?");

/***/ }),

/***/ "./src/weather-icons/drizzle.svg":
/*!***************************************!*\
  !*** ./src/weather-icons/drizzle.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9115cb327c5b6d2641bb2260d351d832.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/drizzle.svg?");

/***/ }),

/***/ "./src/weather-icons/flurries.svg":
/*!****************************************!*\
  !*** ./src/weather-icons/flurries.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6255badc996689f981946100dd17e9e5.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/flurries.svg?");

/***/ }),

/***/ "./src/weather-icons/fog.svg":
/*!***********************************!*\
  !*** ./src/weather-icons/fog.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e75170b4eedf934bba20305cc4310926.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/fog.svg?");

/***/ }),

/***/ "./src/weather-icons/fog_light.svg":
/*!*****************************************!*\
  !*** ./src/weather-icons/fog_light.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1dacf2f677225621c51c876e72ba9999.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/fog_light.svg?");

/***/ }),

/***/ "./src/weather-icons/freezing_drizzle.svg":
/*!************************************************!*\
  !*** ./src/weather-icons/freezing_drizzle.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6ef1e0d260af9a5cf254ec807fc5f924.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/freezing_drizzle.svg?");

/***/ }),

/***/ "./src/weather-icons/freezing_rain.svg":
/*!*********************************************!*\
  !*** ./src/weather-icons/freezing_rain.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"42d0c8cfff73e674dc456f08efa2c2ef.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/freezing_rain.svg?");

/***/ }),

/***/ "./src/weather-icons/freezing_rain_heavy.svg":
/*!***************************************************!*\
  !*** ./src/weather-icons/freezing_rain_heavy.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"18cf8e4c92a46451ee848882a775ced9.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/freezing_rain_heavy.svg?");

/***/ }),

/***/ "./src/weather-icons/freezing_rain_light.svg":
/*!***************************************************!*\
  !*** ./src/weather-icons/freezing_rain_light.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"994c81a3c01bf0f262ddf7edc7eb2843.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/freezing_rain_light.svg?");

/***/ }),

/***/ "./src/weather-icons/ice_pellets.svg":
/*!*******************************************!*\
  !*** ./src/weather-icons/ice_pellets.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7003982c30f9eb22248767d39a553a74.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/ice_pellets.svg?");

/***/ }),

/***/ "./src/weather-icons/ice_pellets_heavy.svg":
/*!*************************************************!*\
  !*** ./src/weather-icons/ice_pellets_heavy.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"663170a3f01e3879151491abfa1c01c4.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/ice_pellets_heavy.svg?");

/***/ }),

/***/ "./src/weather-icons/ice_pellets_light.svg":
/*!*************************************************!*\
  !*** ./src/weather-icons/ice_pellets_light.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d3a475d86061682fd4ec22b24b0ecb48.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/ice_pellets_light.svg?");

/***/ }),

/***/ "./src/weather-icons/mostly_clear_day.svg":
/*!************************************************!*\
  !*** ./src/weather-icons/mostly_clear_day.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a06e1cbf55878de8621cbea5abf17da2.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/mostly_clear_day.svg?");

/***/ }),

/***/ "./src/weather-icons/mostly_cloudy.svg":
/*!*********************************************!*\
  !*** ./src/weather-icons/mostly_cloudy.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c4c178c502b4de16b5451d8934eabf3d.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/mostly_cloudy.svg?");

/***/ }),

/***/ "./src/weather-icons/partly_cloudy_day.svg":
/*!*************************************************!*\
  !*** ./src/weather-icons/partly_cloudy_day.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a380af6b60dac049b33502c7d70d5d67.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/partly_cloudy_day.svg?");

/***/ }),

/***/ "./src/weather-icons/rain.svg":
/*!************************************!*\
  !*** ./src/weather-icons/rain.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"feacb68d2749d75ccca2f21a569de8c6.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/rain.svg?");

/***/ }),

/***/ "./src/weather-icons/rain_heavy.svg":
/*!******************************************!*\
  !*** ./src/weather-icons/rain_heavy.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a8f45dd6a6cc20f4088bacc19d15c054.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/rain_heavy.svg?");

/***/ }),

/***/ "./src/weather-icons/rain_light.svg":
/*!******************************************!*\
  !*** ./src/weather-icons/rain_light.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a893b49489eb2fd8dcbfdc0d84895668.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/rain_light.svg?");

/***/ }),

/***/ "./src/weather-icons/snow.svg":
/*!************************************!*\
  !*** ./src/weather-icons/snow.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fffba143419a418d5c576d8e65161515.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/snow.svg?");

/***/ }),

/***/ "./src/weather-icons/snow_heavy.svg":
/*!******************************************!*\
  !*** ./src/weather-icons/snow_heavy.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4cffeb673a0a90b500638c827a7f77d8.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/snow_heavy.svg?");

/***/ }),

/***/ "./src/weather-icons/snow_light.svg":
/*!******************************************!*\
  !*** ./src/weather-icons/snow_light.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"be20d769c5d32f964c67359bfabe0333.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/snow_light.svg?");

/***/ }),

/***/ "./src/weather-icons/tstorm.svg":
/*!**************************************!*\
  !*** ./src/weather-icons/tstorm.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9e52d5b4150228011d3809479b5b3a54.svg\");\n\n//# sourceURL=webpack:///./src/weather-icons/tstorm.svg?");

/***/ }),

/***/ "./src/weather-photos/clear_day.jpg":
/*!******************************************!*\
  !*** ./src/weather-photos/clear_day.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e30db80ff9a7ea9f741c99bb89496c57.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/clear_day.jpg?");

/***/ }),

/***/ "./src/weather-photos/cloudy.jpg":
/*!***************************************!*\
  !*** ./src/weather-photos/cloudy.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c9179614d535fb3e80aa8e48a8260c63.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/cloudy.jpg?");

/***/ }),

/***/ "./src/weather-photos/drizzle.jpg":
/*!****************************************!*\
  !*** ./src/weather-photos/drizzle.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a3d4c46e0d6a8ba44919505e7f7484c6.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/drizzle.jpg?");

/***/ }),

/***/ "./src/weather-photos/flurries.jpg":
/*!*****************************************!*\
  !*** ./src/weather-photos/flurries.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"25fb9893c4f0a6325f63409de1c12490.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/flurries.jpg?");

/***/ }),

/***/ "./src/weather-photos/fog.jpg":
/*!************************************!*\
  !*** ./src/weather-photos/fog.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"bc66d834543a0a2807a26c8412c85d47.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/fog.jpg?");

/***/ }),

/***/ "./src/weather-photos/fog_light.jpg":
/*!******************************************!*\
  !*** ./src/weather-photos/fog_light.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1ffb68860e067c168c5772ee7bece9df.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/fog_light.jpg?");

/***/ }),

/***/ "./src/weather-photos/freezing_drizzle.jpg":
/*!*************************************************!*\
  !*** ./src/weather-photos/freezing_drizzle.jpg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"cc51b76f2a024e1c84bea5a0db378d4a.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/freezing_drizzle.jpg?");

/***/ }),

/***/ "./src/weather-photos/freezing_rain.jpg":
/*!**********************************************!*\
  !*** ./src/weather-photos/freezing_rain.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1960e04c650913435646f04600d33e84.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/freezing_rain.jpg?");

/***/ }),

/***/ "./src/weather-photos/freezing_rain_heavy.jpg":
/*!****************************************************!*\
  !*** ./src/weather-photos/freezing_rain_heavy.jpg ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"844577b2e4a22aee0af832a04c2dfefe.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/freezing_rain_heavy.jpg?");

/***/ }),

/***/ "./src/weather-photos/freezing_rain_light.jpg":
/*!****************************************************!*\
  !*** ./src/weather-photos/freezing_rain_light.jpg ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1ed4de4315ec4f2827eac9052c01a471.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/freezing_rain_light.jpg?");

/***/ }),

/***/ "./src/weather-photos/ice_pellets.jpg":
/*!********************************************!*\
  !*** ./src/weather-photos/ice_pellets.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0e2e4c605ccc3b354c9a09604c8588b6.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/ice_pellets.jpg?");

/***/ }),

/***/ "./src/weather-photos/ice_pellets_heavy.jpg":
/*!**************************************************!*\
  !*** ./src/weather-photos/ice_pellets_heavy.jpg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"72be8eb20368c2ea978892a4cd4896ba.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/ice_pellets_heavy.jpg?");

/***/ }),

/***/ "./src/weather-photos/ice_pellets_light.jpg":
/*!**************************************************!*\
  !*** ./src/weather-photos/ice_pellets_light.jpg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ff75a8a5be22e12567e037ef3afa579b.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/ice_pellets_light.jpg?");

/***/ }),

/***/ "./src/weather-photos/main.jpg":
/*!*************************************!*\
  !*** ./src/weather-photos/main.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f64b73f0299f1e3555018796f71d3a7c.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/main.jpg?");

/***/ }),

/***/ "./src/weather-photos/mostly_clear_day.jpg":
/*!*************************************************!*\
  !*** ./src/weather-photos/mostly_clear_day.jpg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d0da43c3bd91c2bb70d9b1786300f265.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/mostly_clear_day.jpg?");

/***/ }),

/***/ "./src/weather-photos/mostly_cloudy.jpg":
/*!**********************************************!*\
  !*** ./src/weather-photos/mostly_cloudy.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"cb3c4fdfd262ec5fb1e4682990ab879e.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/mostly_cloudy.jpg?");

/***/ }),

/***/ "./src/weather-photos/partly_cloudy_day.jpg":
/*!**************************************************!*\
  !*** ./src/weather-photos/partly_cloudy_day.jpg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0fa4d6eee4a00a193bc95ddc32e21006.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/partly_cloudy_day.jpg?");

/***/ }),

/***/ "./src/weather-photos/rain.jpg":
/*!*************************************!*\
  !*** ./src/weather-photos/rain.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a8550824f9bb0ee4910cd73710938cce.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/rain.jpg?");

/***/ }),

/***/ "./src/weather-photos/rain_heavy.jpg":
/*!*******************************************!*\
  !*** ./src/weather-photos/rain_heavy.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c3a3cb5f7c7b26cf261730c9edc957ce.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/rain_heavy.jpg?");

/***/ }),

/***/ "./src/weather-photos/rain_light.jpg":
/*!*******************************************!*\
  !*** ./src/weather-photos/rain_light.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c409398fa0fc715b347a703d8bda3103.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/rain_light.jpg?");

/***/ }),

/***/ "./src/weather-photos/snow.jpg":
/*!*************************************!*\
  !*** ./src/weather-photos/snow.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4b872bc7c97207962d8752e2c9993669.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/snow.jpg?");

/***/ }),

/***/ "./src/weather-photos/snow_heavy.jpg":
/*!*******************************************!*\
  !*** ./src/weather-photos/snow_heavy.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ed780d28f7a78f271f33ad24b6b6936b.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/snow_heavy.jpg?");

/***/ }),

/***/ "./src/weather-photos/snow_light.jpg":
/*!*******************************************!*\
  !*** ./src/weather-photos/snow_light.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3d08261a124dc1809611ebdbc92dcd21.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/snow_light.jpg?");

/***/ }),

/***/ "./src/weather-photos/tstorm.jpg":
/*!***************************************!*\
  !*** ./src/weather-photos/tstorm.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"45e4fd8d31520ddc83ac5a98f24ffb8e.jpg\");\n\n//# sourceURL=webpack:///./src/weather-photos/tstorm.jpg?");

/***/ })

/******/ });