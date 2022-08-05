/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/mj.svg */ "./src/assets/mj.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --cardGreen: #80d980;\n  --veryLightGreen: #ccf0cc;\n  --mjLightGreen: #00b200;\n  --mjDarkGreen: #009700;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--veryLightGreen);\n}\n\n#tabNavigation {\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  gap: 5px;\n  min-height: 8vh;\n  justify-content: center;\n\n  position: sticky;\n  top: 0;\n  background-color: var(--mjDarkGreen);\n  color: #000800;\n  font-family: \"Permanent Marker\", sans-serif;\n}\n.tabNav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  padding: 0 16px;\n  cursor: pointer;\n}\n.tabNav:hover {\n  background-color: var(--mjLightGreen);\n  color: black;\n}\n#footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  min-height: 6.5vh;\n\n  background-color: var(--mjDarkGreen);\n  font-family: \"Permanent Marker\", sans-serif;\n  padding: 5px;\n}\n.currentTab {\n  background-color: var(--mjLightGreen);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n}\n#contentContainer {\n  font-family: \"Roboto Flex\";\n  font-weight: 400;\n  min-height: 84vh;\n}\n.content {\n  width: 80%;\n  margin: 10px auto;\n  text-align: center;\n  background-color: var(--cardGreen);\n  border-radius: 10px;\n  border: 2px double #000800;\n  padding: 20px;\n}\n.restHeader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.restName {\n  font-family: \"Permanent Marker\", sans-serif;\n}\n.logo {\n  max-height: 3em;\n}\n.about p,\n.about h3 {\n  margin: 10px;\n}\n.about,\n.menuItem,\n.contactItem {\n  background-color: var(--veryLightGreen);\n  border: 2px double #000800;\n  border-radius: 10px;\n  margin: 10px;\n}\n.contactItem {\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  border: 2px solid black;\n  gap: 10px;\n}\n.tradingHrs {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.tradingList {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  text-align: start;\n  list-style: none;\n  margin-bottom: 5px;\n}\n.foodHeader,\n.beverageHeader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Permanent Marker\", sans-serif;\n  gap: 10px;\n}\n\n.foodSection,\n.beverageSection {\n  background-color: var(--mjLightGreen);\n  padding: 10px;\n  border-radius: 10px;\n}\n.menuItem {\n  display: flex;\n  padding: 2vw;\n  gap: 2rem;\n  text-align: left;\n}\n.itemDescription {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: center;\n}\n.imgSection {\n  width: 50%;\n\n  /* border: 2px solid black; */\n}\n.itemImg {\n  border-radius: 10px;\n  border: 5px solid var(--mjDarkGreen);\n  width: 100%;\n  height: 100%;\n  box-shadow: 2px 2px 2px black, -2px -2px 2px #004700;\n}\n.itemSet,\n.beverageItemSet {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: 1fr 0.3fr;\n}\n.gridHeading {\n  grid-column: 1/-1;\n}\n.menuContent {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;AACxB;AAGA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,QAAQ;EACR,eAAe;EACf,uBAAuB;;EAEvB,gBAAgB;EAChB,MAAM;EACN,oCAAoC;EACpC,cAAc;EACd,2CAA2C;AAC7C;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;AACA;EACE,qCAAqC;EACrC,YAAY;AACd;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,iBAAiB;;EAEjB,oCAAoC;EACpC,2CAA2C;EAC3C,YAAY;AACd;AACA;EACE,qCAAqC;EACrC,yDAAyC;EACzC,4BAA4B;EAC5B,2BAA2B;AAC7B;AACA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,kCAAkC;EAClC,mBAAmB;EACnB,0BAA0B;EAC1B,aAAa;AACf;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,2CAA2C;AAC7C;AACA;EACE,eAAe;AACjB;AACA;;EAEE,YAAY;AACd;AACA;;;EAGE,uCAAuC;EACvC,0BAA0B;EAC1B,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;AACA;;EAEE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,2CAA2C;EAC3C,SAAS;AACX;;AAEA;;EAEE,qCAAqC;EACrC,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,YAAY;EACZ,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,uBAAuB;AACzB;AACA;EACE,UAAU;;EAEV,6BAA6B;AAC/B;AACA;EACE,mBAAmB;EACnB,oCAAoC;EACpC,WAAW;EACX,YAAY;EACZ,oDAAoD;AACtD;AACA;;EAEE,aAAa;EACb,SAAS;EACT,gCAAgC;AAClC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX","sourcesContent":[":root {\n  --cardGreen: #80d980;\n  --veryLightGreen: #ccf0cc;\n  --mjLightGreen: #00b200;\n  --mjDarkGreen: #009700;\n}\n@import url(\"https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--veryLightGreen);\n}\n\n#tabNavigation {\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  gap: 5px;\n  min-height: 8vh;\n  justify-content: center;\n\n  position: sticky;\n  top: 0;\n  background-color: var(--mjDarkGreen);\n  color: #000800;\n  font-family: \"Permanent Marker\", sans-serif;\n}\n.tabNav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  padding: 0 16px;\n  cursor: pointer;\n}\n.tabNav:hover {\n  background-color: var(--mjLightGreen);\n  color: black;\n}\n#footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  min-height: 6.5vh;\n\n  background-color: var(--mjDarkGreen);\n  font-family: \"Permanent Marker\", sans-serif;\n  padding: 5px;\n}\n.currentTab {\n  background-color: var(--mjLightGreen);\n  background-image: url(\"../assets/mj.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n}\n#contentContainer {\n  font-family: \"Roboto Flex\";\n  font-weight: 400;\n  min-height: 84vh;\n}\n.content {\n  width: 80%;\n  margin: 10px auto;\n  text-align: center;\n  background-color: var(--cardGreen);\n  border-radius: 10px;\n  border: 2px double #000800;\n  padding: 20px;\n}\n.restHeader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.restName {\n  font-family: \"Permanent Marker\", sans-serif;\n}\n.logo {\n  max-height: 3em;\n}\n.about p,\n.about h3 {\n  margin: 10px;\n}\n.about,\n.menuItem,\n.contactItem {\n  background-color: var(--veryLightGreen);\n  border: 2px double #000800;\n  border-radius: 10px;\n  margin: 10px;\n}\n.contactItem {\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  border: 2px solid black;\n  gap: 10px;\n}\n.tradingHrs {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.tradingList {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  text-align: start;\n  list-style: none;\n  margin-bottom: 5px;\n}\n.foodHeader,\n.beverageHeader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Permanent Marker\", sans-serif;\n  gap: 10px;\n}\n\n.foodSection,\n.beverageSection {\n  background-color: var(--mjLightGreen);\n  padding: 10px;\n  border-radius: 10px;\n}\n.menuItem {\n  display: flex;\n  padding: 2vw;\n  gap: 2rem;\n  text-align: left;\n}\n.itemDescription {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: center;\n}\n.imgSection {\n  width: 50%;\n\n  /* border: 2px solid black; */\n}\n.itemImg {\n  border-radius: 10px;\n  border: 5px solid var(--mjDarkGreen);\n  width: 100%;\n  height: 100%;\n  box-shadow: 2px 2px 2px black, -2px -2px 2px #004700;\n}\n.itemSet,\n.beverageItemSet {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: 1fr 0.3fr;\n}\n.gridHeading {\n  grid-column: 1/-1;\n}\n.menuContent {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_mjLogo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/mjLogo.svg */ "./src/assets/mjLogo.svg");


function contact() {
  //main container
  const content = document.createElement("div");
  content.setAttribute("class", "content");
  //contact header
  const contactHeader = document.createElement("div");
  contactHeader.classList.add("restHeader");
  const headLogo = document.createElement("img");
  headLogo.classList.add("logo");
  headLogo.src = _assets_mjLogo_svg__WEBPACK_IMPORTED_MODULE_0__;
  contactHeader.appendChild(headLogo);
  const restName = document.createElement("h1");
  restName.classList.add("restName");
  restName.textContent = "Get in Touch";
  contactHeader.appendChild(restName);
  content.appendChild(contactHeader);

  //contact item
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("contactItem");
  const callUs = document.createElement("h3");
  callUs.textContent = "Call us on:";
  infoDiv.appendChild(callUs);

  const number = document.createElement("h3");
  number.textContent = "123-456-7890";
  infoDiv.appendChild(number);

  const emailUs = document.createElement("h3");
  emailUs.textContent = "Email us at:";
  infoDiv.appendChild(emailUs);

  const emailAddress = document.createElement("h3");
  emailAddress.textContent = "thojaz@mail.com";
  infoDiv.appendChild(emailAddress);

  content.appendChild(infoDiv);

  return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_mjLogo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/mjLogo.svg */ "./src/assets/mjLogo.svg");

function index() {
  //main container
  const content = document.createElement("div");
  content.setAttribute("class", "content");
  //restaurant name
  const restHeader = document.createElement("div");
  restHeader.classList.add("restHeader");

  const headLogo = document.createElement("img");
  headLogo.classList.add("logo");
  headLogo.src = _assets_mjLogo_svg__WEBPACK_IMPORTED_MODULE_0__;
  restHeader.appendChild(headLogo);

  const restName = document.createElement("h1");
  restName.classList.add("restName");
  restName.textContent = "The House of Jol and Zol";
  restHeader.appendChild(restName);

  content.appendChild(restHeader);

  //who are we div content
  const whoAreWeDiv = document.createElement("div");
  whoAreWeDiv.classList.add("about");
  //who are we heading
  const whoAreWeHeading = document.createElement("h3");
  whoAreWeHeading.textContent = "Who are we?";
  whoAreWeDiv.appendChild(whoAreWeHeading);
  //who are we content
  const whoAreWeContent = document.createElement("p");
  whoAreWeContent.textContent =
    "The House of Jol and Zol, is an establishment that specializes in the art of using cannabis. We were formed in 2010 as a mere dream but since the decriminalization of the plant in 2018 we have established ourselves as the most exquisite eatery in South Africa.";
  whoAreWeDiv.appendChild(whoAreWeContent);
  content.appendChild(whoAreWeDiv);

  //what we do section
  const whatWeDoDiv = document.createElement("div");
  whatWeDoDiv.classList.add("about");
  //what do we do heading
  const whatWeDoHeading = document.createElement("h3");
  whatWeDoHeading.textContent = "What We Do?";
  whatWeDoDiv.appendChild(whatWeDoHeading);
  //what We Do content
  const whatWeDoContent = document.createElement("p");
  whatWeDoContent.textContent =
    "We provide our customers access to our private space, where they can order some of the best cbd/thc infused cuisine in the southern hemisphere.";
  whatWeDoDiv.appendChild(whatWeDoContent);
  content.appendChild(whatWeDoDiv);

  //why us section
  const whyUsDiv = document.createElement("div");
  whyUsDiv.classList.add("about");
  //why us heading
  const whyUsHeading = document.createElement("h3");
  whyUsHeading.textContent = "Why us?";
  whyUsDiv.appendChild(whyUsHeading);
  //why us content
  const whyUsContent = document.createElement("p");
  whyUsContent.textContent =
    "We provide our customers with a safe place where they can relax and enjoy our services";
  whyUsDiv.appendChild(whyUsContent);
  content.appendChild(whyUsDiv);

  //trading hours
  const tradingDiv = document.createElement("div");
  tradingDiv.classList.add("about");
  tradingDiv.classList.add("tradingHrs");

  //trading heading
  const tradingHeading = document.createElement("h3");
  tradingHeading.textContent = "Trading Hours";
  tradingDiv.appendChild(tradingHeading);
  //trading content
  const tradingList = document.createElement("ul");
  tradingList.classList.add("tradingList");
  const mon = document.createElement("li");
  mon.textContent = "Monday: 08:00 - 22:00";
  tradingList.appendChild(mon);
  const tue = document.createElement("li");
  tue.textContent = "Tuesday: 08:00 - 22:00";
  tradingList.appendChild(tue);
  const wed = document.createElement("li");
  wed.textContent = "Wednesday: 08:00 - 22:00";
  tradingList.appendChild(wed);
  const thurs = document.createElement("li");
  thurs.textContent = "Thursday: 08:00 - 22:00";
  tradingList.appendChild(thurs);
  const fri = document.createElement("li");
  fri.textContent = "Friday: 08:00 - 22:00";
  tradingList.appendChild(fri);
  const sat = document.createElement("li");
  sat.textContent = "Saturday: 09:00 - 22:00";
  tradingList.appendChild(sat);
  const sun = document.createElement("li");
  sun.textContent = "Sunday: 12:00 - 22:00";
  tradingList.appendChild(sun);
  tradingDiv.appendChild(tradingList);
  content.appendChild(tradingDiv);

  return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_mjLogo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/mjLogo.svg */ "./src/assets/mjLogo.svg");
/* harmony import */ var _assets_food_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/food.svg */ "./src/assets/food.svg");
/* harmony import */ var _assets_beverages_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/beverages.svg */ "./src/assets/beverages.svg");
/* harmony import */ var _assets_burger_eiliv_sonas_aceron_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/burger-eiliv-sonas-aceron.jpg */ "./src/assets/burger-eiliv-sonas-aceron.jpg");
/* harmony import */ var _assets_wine_justin_aikin_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/wine-justin-aikin.jpg */ "./src/assets/wine-justin-aikin.jpg");






function menu() {
  //main container
  const content = document.createElement("div");
  content.setAttribute("class", "content");
  content.classList.add("menuContent");
  //menu Header
  const restHeader = document.createElement("div");
  restHeader.classList.add("restHeader");
  const headLogo = document.createElement("img");
  headLogo.classList.add("logo");
  headLogo.src = _assets_mjLogo_svg__WEBPACK_IMPORTED_MODULE_0__;
  restHeader.appendChild(headLogo);
  const restName = document.createElement("h1");
  restName.classList.add("restName");
  restName.textContent = "The Menu";
  restHeader.appendChild(restName);
  content.appendChild(restHeader);

  //food
  const foodItems = document.createElement("div");
  foodItems.classList.add("foodSection");

  const foodHeader = document.createElement("div");
  foodHeader.classList.add("foodHeader");

  const foodL = document.createElement("img");
  foodL.classList.add("logo");
  foodL.src = _assets_food_svg__WEBPACK_IMPORTED_MODULE_1__;
  foodHeader.appendChild(foodL);

  const foodHeading = document.createElement("h2");
  foodHeading.textContent = "Meals";
  foodHeader.appendChild(foodHeading);

  foodItems.appendChild(foodHeader);
  //menuItem
  //item one
  const foodItemList = document.createElement("div");
  foodItemList.classList.add("menuItem");

  //description side
  const foodType = document.createElement("div");
  foodType.classList.add("itemDescription");
  //make a grid
  const itemSet = document.createElement("div");
  itemSet.classList.add("itemSet");
  //foodType Heading
  const foodTypeHeadingOne = document.createElement("h3");
  foodTypeHeadingOne.textContent = "Burgers";
  foodTypeHeadingOne.classList.add("gridHeading");
  itemSet.appendChild(foodTypeHeadingOne);
  //item one
  const itemOneDes = document.createElement("h4");
  itemOneDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemOneDes);

  const itemOnePrice = document.createElement("h4");
  itemOnePrice.textContent = "lorem";
  itemSet.appendChild(itemOnePrice);
  //item two
  const itemTwoDes = document.createElement("h4");
  itemTwoDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemTwoDes);

  const itemTwoPrice = document.createElement("h4");
  itemTwoPrice.textContent = "lorem";
  itemSet.appendChild(itemTwoPrice);
  //item three
  const itemThreeDes = document.createElement("h4");
  itemThreeDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemThreeDes);

  const itemThreePrice = document.createElement("h4");
  itemThreePrice.textContent = "lorem";
  itemSet.appendChild(itemThreePrice);

  //item four
  const itemFourDes = document.createElement("h4");
  itemFourDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemFourDes);

  const itemFourPrice = document.createElement("h4");
  itemFourPrice.textContent = "lorem";
  itemSet.appendChild(itemFourPrice);

  //foodType Heading
  const foodTypeHeadingTwo = document.createElement("h3");
  foodTypeHeadingTwo.textContent = "Pizza";
  foodTypeHeadingTwo.classList.add("gridHeading");
  itemSet.appendChild(foodTypeHeadingTwo);
  //item five
  const itemFiveDes = document.createElement("h4");
  itemFiveDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemFiveDes);

  const itemFivePrice = document.createElement("h4");
  itemFivePrice.textContent = "lorem";
  itemSet.appendChild(itemFivePrice);

  //item six
  const itemSixDes = document.createElement("h4");
  itemSixDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemSixDes);

  const itemSixPrice = document.createElement("h4");
  itemSixPrice.textContent = "lorem";
  itemSet.appendChild(itemSixPrice);
  //item seven
  const itemSevenDes = document.createElement("h4");
  itemSevenDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemSevenDes);

  const itemSevenPrice = document.createElement("h4");
  itemSevenPrice.textContent = "lorem";
  itemSet.appendChild(itemSevenPrice);

  //item eight
  const itemEightDes = document.createElement("h4");
  itemEightDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemEightDes);

  const itemEightPrice = document.createElement("h4");
  itemEightPrice.textContent = "lorem";
  itemSet.appendChild(itemEightPrice);

  //append grid
  foodType.appendChild(itemSet);

  //append item list
  foodItemList.appendChild(foodType);
  //item picture
  const itemOneImgSection = document.createElement("div");
  itemOneImgSection.classList.add("imgSection");

  const itemOnePic = document.createElement("img");
  itemOnePic.classList.add("itemImg");
  itemOnePic.src = _assets_burger_eiliv_sonas_aceron_jpg__WEBPACK_IMPORTED_MODULE_3__;
  itemOneImgSection.appendChild(itemOnePic);
  foodItemList.appendChild(itemOneImgSection);
  // item list
  foodItems.appendChild(foodItemList);

  //append all food items
  content.appendChild(foodItems);
  //beverage
  const beverageItems = document.createElement("div");
  beverageItems.classList.add("beverageSection");

  const beverageHeader = document.createElement("div");
  beverageHeader.classList.add("beverageHeader");

  const beverageL = document.createElement("img");
  beverageL.classList.add("logo");
  beverageL.src = _assets_beverages_svg__WEBPACK_IMPORTED_MODULE_2__;
  beverageHeader.appendChild(beverageL);

  const beverageHeading = document.createElement("h2");
  beverageHeading.textContent = "Beverages";
  beverageHeader.appendChild(beverageHeading);

  beverageItems.appendChild(beverageHeader);
  //menuItem
  //item one
  const beverageItemList = document.createElement("div");
  beverageItemList.classList.add("menuItem");

  //description side
  const beverageType = document.createElement("div");
  beverageType.classList.add("itemDescription");
  //make a grid
  const beverageItemSet = document.createElement("div");
  beverageItemSet.classList.add("beverageItemSet");
  //beverageType Heading
  const beverageTypeHeadingOne = document.createElement("h3");
  beverageTypeHeadingOne.textContent = "Beers";
  beverageTypeHeadingOne.classList.add("gridHeading");
  beverageItemSet.appendChild(beverageTypeHeadingOne);
  //item Nine
  const itemNineDes = document.createElement("h4");
  itemNineDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemNineDes);

  const itemNinePrice = document.createElement("h4");
  itemNinePrice.textContent = "lorem";
  beverageItemSet.appendChild(itemNinePrice);
  //item Ten
  const itemTenDes = document.createElement("h4");
  itemTenDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemTenDes);

  const itemTenPrice = document.createElement("h4");
  itemTenPrice.textContent = "lorem";
  beverageItemSet.appendChild(itemTenPrice);
  //item Eleven
  const itemElevenDes = document.createElement("h4");
  itemElevenDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemElevenDes);

  const itemElevenPrice = document.createElement("h4");
  itemElevenPrice.textContent = "lorem";
  beverageItemSet.appendChild(itemElevenPrice);

  //item Twelve
  const itemTwelveDes = document.createElement("h4");
  itemTwelveDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemTwelveDes);

  const itemTwelvePrice = document.createElement("h4");
  itemTwelvePrice.textContent = "lorem";
  beverageItemSet.appendChild(itemTwelvePrice);

  //beverageType Heading
  const beverageTypeHeadingTwo = document.createElement("h3");
  beverageTypeHeadingTwo.textContent = "Wine";
  beverageTypeHeadingTwo.classList.add("gridHeading");
  beverageItemSet.appendChild(beverageTypeHeadingTwo);
  //item Thirteen
  const itemThirteenDes = document.createElement("h4");
  itemThirteenDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemThirteenDes);

  const itemThirteenPrice = document.createElement("h4");
  itemThirteenPrice.textContent = "lorem";
  beverageItemSet.appendChild(itemThirteenPrice);

  //item Fourteen
  const itemFourteenDes = document.createElement("h4");
  itemFourteenDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemFourteenDes);

  const itemFourteenPrice = document.createElement("h4");
  itemFourteenPrice.textContent = "lorem";
  beverageItemSet.appendChild(itemFourteenPrice);
  //item Fifteen
  const itemFifteenDes = document.createElement("h4");
  itemFifteenDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemFifteenDes);

  const itemFifteenPrice = document.createElement("h4");
  itemFifteenPrice.textContent = "lorem";
  beverageItemSet.appendChild(itemFifteenPrice);

  //item Sixteen
  const itemSixteenDes = document.createElement("h4");
  itemSixteenDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemSixteenDes);

  const itemSixteenPrice = document.createElement("h4");
  itemSixteenPrice.textContent = "lorem";
  beverageItemSet.appendChild(itemSixteenPrice);

  //append grid
  beverageType.appendChild(beverageItemSet);

  //append item list
  beverageItemList.appendChild(beverageType);
  //item picture
  const itemTwoImgSection = document.createElement("div");
  itemTwoImgSection.classList.add("imgSection");

  const itemTwoPic = document.createElement("img");
  itemTwoPic.classList.add("itemImg");
  itemTwoPic.src = _assets_wine_justin_aikin_jpg__WEBPACK_IMPORTED_MODULE_4__;
  itemTwoImgSection.appendChild(itemTwoPic);
  beverageItemList.appendChild(itemTwoImgSection);
  // item list
  beverageItems.appendChild(beverageItemList);

  //append all beverage items
  content.appendChild(beverageItems);
  return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/assets/beverages.svg":
/*!**********************************!*\
  !*** ./src/assets/beverages.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "beverages.svg";

/***/ }),

/***/ "./src/assets/burger-eiliv-sonas-aceron.jpg":
/*!**************************************************!*\
  !*** ./src/assets/burger-eiliv-sonas-aceron.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "burger-eiliv-sonas-aceron.jpg";

/***/ }),

/***/ "./src/assets/food.svg":
/*!*****************************!*\
  !*** ./src/assets/food.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "food.svg";

/***/ }),

/***/ "./src/assets/mj.svg":
/*!***************************!*\
  !*** ./src/assets/mj.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mj.svg";

/***/ }),

/***/ "./src/assets/mjLogo.svg":
/*!*******************************!*\
  !*** ./src/assets/mjLogo.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mjLogo.svg";

/***/ }),

/***/ "./src/assets/wine-justin-aikin.jpg":
/*!******************************************!*\
  !*** ./src/assets/wine-justin-aikin.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "wine-justin-aikin.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_mj_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/mj.svg */ "./src/assets/mj.svg");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
// imports






///get the main dom element #container
const pageContainer = document.getElementById("container");

//tab navigation section

const tabSelect = document.createElement("div");
tabSelect.setAttribute("id", "tabNavigation");
const homeTab = document.createElement("div");
homeTab.setAttribute("id", "homeTab");
homeTab.classList.add("tabNav");
homeTab.innerText = "Home";
const menuTab = document.createElement("div");
menuTab.setAttribute("id", "menuTab");
menuTab.classList.add("tabNav");
menuTab.textContent = "Menu";
const contactTab = document.createElement("div");
contactTab.setAttribute("id", "contactTab");
contactTab.classList.add("tabNav");
contactTab.textContent = "Contact";
tabSelect.appendChild(homeTab);
tabSelect.appendChild(menuTab);
tabSelect.appendChild(contactTab);
pageContainer.appendChild(tabSelect);

///content section
const contentContainer = document.createElement("div");
contentContainer.setAttribute("id", "contentContainer");
pageContainer.appendChild(contentContainer);

///footer
const footer = document.createElement("div");
footer.setAttribute("id", "footer");
const footerContent = document.createElement("p");
footerContent.textContent = "created by Timothy";
footer.appendChild(footerContent);
pageContainer.appendChild(footer);
//event listeners
homeTab.addEventListener("click", homePage);
menuTab.addEventListener("click", menuPage);
contactTab.addEventListener("click", contactPage);

contactPage();
function homePage() {
  setFocus(homeTab);
  removeFocus(menuTab);
  removeFocus(contactTab);
  if (contentContainer.childElementCount > 0) {
    const content = document.querySelector(".content");
    contentContainer.removeChild(content);
  }
  contentContainer.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
}

function menuPage() {
  setFocus(menuTab);
  removeFocus(homeTab);
  removeFocus(contactTab);
  if (contentContainer.childElementCount > 0) {
    const content = document.querySelector(".content");
    contentContainer.removeChild(content);
  }
  contentContainer.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
}

function contactPage() {
  setFocus(contactTab);
  removeFocus(menuTab);
  removeFocus(homeTab);
  if (contentContainer.childElementCount > 0) {
    const content = document.querySelector(".content");
    contentContainer.removeChild(content);
  }
  contentContainer.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
}

function setFocus(tab) {
  tab.classList.add("currentTab");
}
function removeFocus(tab) {
  tab.classList.remove("currentTab");
}

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map