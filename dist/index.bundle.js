/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root,
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  --border-radius: 2px;
  --grid-cell-size: 30px;
  --grid-cell-gap: 5px;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.status {
  width: 80%;
  height: 5rem;
  text-align: center;
}

.boards {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.boards .ship-count {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.boards .ship-count .count-title {
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  text-align: center;
  text-wrap: nowrap;
}
.boards .ship-count .count-value {
  margin: 0;
  padding: 0;
  font-size: 5rem;
}
.boards .board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.boards .board.player-1 {
  margin-right: 40px;
}
.boards .board .title {
  margin: 0 0 0 var(--grid-cell-size);
  padding: 0;
  font-size: 3rem;
}
.boards .board .grid {
  display: grid;
  grid-template-rows: repeat(11, var(--grid-cell-size));
  grid-template-columns: repeat(11, var(--grid-cell-size));
  justify-items: center;
  align-items: center;
}
.boards .board .grid .grid-cell {
  width: var(--grid-cell-size);
  height: var(--grid-cell-size);
  background-color: lightgrey;
  border: black solid 1px;
  border-radius: var(--border-radius);
}
.boards .board .grid .grid-cell:hover {
  background-color: darkgrey;
}
.boards .board .grid .grid-cell:active {
  background-color: black;
}
.boards .board .grid .grid-cell.hit {
  background-color: red;
}
.boards .board .grid .grid-cell.miss {
  background-color: blue;
}
.boards .board .grid .grid-cell.ship {
  background-color: yellow;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;;;EAGE,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EAEA,yCAAA;EACA,eAAA;EAEA,oBAAA;EACA,sBAAA;EACA,oBAAA;AAHF;;AAMA;EACE,WAAA;EACA,YAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAJF;;AASA;EACE,UAAA;EACA,YAAA;EAEA,kBAAA;AAPF;;AAYA;EACE,UAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAVF;AAYE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAVJ;AAYI;EACE,SAAA;EACA,UAAA;EAEA,iBAAA;EACA,kBAAA;EACA,iBAAA;AAXN;AAcI;EACE,SAAA;EACA,UAAA;EAEA,eAAA;AAbN;AAiBE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAfJ;AAiBI;EACE,kBAAA;AAfN;AAkBI;EACE,mCAAA;EACA,UAAA;EAEA,eAAA;AAjBN;AAoBI;EACE,aAAA;EACA,qDAAA;EACA,wDAAA;EACA,qBAAA;EACA,mBAAA;AAlBN;AAoBM;EACE,4BAAA;EACA,6BAAA;EAEA,2BAAA;EAEA,uBAAA;EACA,mCAAA;AApBR;AAsBQ;EACE,0BAAA;AApBV;AAuBQ;EACE,uBAAA;AArBV;AAwBQ;EACE,qBAAA;AAtBV;AAyBQ;EACE,sBAAA;AAvBV;AA0BQ;EACE,wBAAA;AAxBV","sourcesContent":["// ROOT STYLES\n\n:root,\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n\n  --border-radius: 2px;\n  --grid-cell-size: 30px;\n  --grid-cell-gap: 5px;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n// STATUS\n\n.status {\n  width: 80%;\n  height: 5rem;\n\n  text-align: center;\n}\n\n// BOARDS\n\n.boards {\n  width: 80%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n\n  .ship-count {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    .count-title {\n      margin: 0;\n      padding: 0;\n\n      font-size: 1.5rem;\n      text-align: center;\n      text-wrap: nowrap;\n    }\n\n    .count-value {\n      margin: 0;\n      padding: 0;\n\n      font-size: 5rem;\n    }\n  }\n\n  .board {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n\n    &.player-1 {\n      margin-right: 40px;\n    }\n\n    .title {\n      margin: 0 0 0 var(--grid-cell-size);\n      padding: 0;\n\n      font-size: 3rem;\n    }\n\n    .grid {\n      display: grid;\n      grid-template-rows: repeat(11, var(--grid-cell-size));\n      grid-template-columns: repeat(11, var(--grid-cell-size));\n      justify-items: center;\n      align-items: center;\n\n      .grid-cell {\n        width: var(--grid-cell-size);\n        height: var(--grid-cell-size);\n\n        background-color: lightgrey;\n\n        border: black solid 1px;\n        border-radius: var(--border-radius);\n\n        &:hover {\n          background-color: darkgrey;\n        }\n\n        &:active {\n          background-color: black;\n        }\n\n        &.hit {\n          background-color: red;\n        }\n\n        &.miss {\n          background-color: blue;\n        }\n\n        &.ship {\n          background-color: yellow;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/gameboard/gameboard.js":
/*!************************************!*\
  !*** ./src/gameboard/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ship/ship */ "./src/ship/ship.js");


const Gameboard = (width, height) => {
  const board = [];
  const ships = [];

  for (let i = 0; i < width; i++) {
    board[i] = [];
    for (let j = 0; j < height; j++) {
      board[i][j] = { hit: false, ship: null };
    }
  }

  const getWidth = () => width;
  const getHeight = () => height;
  const getShips = () => ships;

  const placeShip = (coord1, coord2) => {
    const minX = Math.min(coord1[0], coord2[0]);
    const maxX = Math.max(coord1[0], coord2[0]);
    const minY = Math.min(coord1[1], coord2[1]);
    const maxY = Math.max(coord1[1], coord2[1]);

    // Out of bounds
    if (minX < 0 || maxX >= width || minY < 0 || maxY >= height) {
      return false;
    }

    // Diagonal
    if (!(minX === maxX || minY === maxY)) {
      return false;
    }

    // Overlap
    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        if (board[x][y].ship) return false;
      }
    }

    const ship = (0,_ship_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(maxX - minX + (maxY - minY) + 1);
    ships.push(ship);

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        board[x][y].ship = ship;
      }
    }

    return true;
  };

  const receiveAttack = (coord) => {
    let x = coord[0];
    let y = coord[1];

    // Out of bounds
    if (x < 0 || x >= width || y < 0 || y >= height) return false;

    // Already hit
    if (board[x][y].hit) return false;

    board[x][y].hit = true;

    if (board[x][y].ship) {
      board[x][y].ship.hit();
      return true;
    }

    return false;
  };

  const checkCoordinate = (coord, func) => {
    let x = coord[0];
    let y = coord[1];

    if (x < 0 || x >= width || y < 0 || y >= height) return false;

    return func(coord);
  };

  const isShip = (coord) => {
    return checkCoordinate(coord, (coord) => !!board[coord[0]][coord[1]].ship);
  };

  const isSpaceHit = (coord) => {
    return checkCoordinate(coord, (coord) => board[coord[0]][coord[1]].hit);
  };

  const isShipHit = (coord) => {
    return isSpaceHit(coord) && isShip(coord);
  };

  const allShipsSunk = () => {
    return ships.reduce((allSunk, ship) => allSunk && ship.isSunk(), true);
  };

  const printBoard = () => {
    const output = [];

    for (let y = 0; y < height; y++) {
      output.push(height - y - 1);
      for (let x = 0; x < width; x++) {
        output.push(
          board[x][height - y - 1].hit
            ? "X"
            : board[x][height - y - 1].ship
            ? "O"
            : " "
        );
      }
      output.push("\n");
    }

    output.push(" ");
    for (let x = 0; x < width; x++) output.push(x);

    console.log(output.join(""));
  };

  return {
    getWidth,
    getHeight,
    getShips,
    placeShip,
    receiveAttack,
    isShip,
    isSpaceHit,
    isShipHit,
    allShipsSunk,
    printBoard,
  };
};




/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendChild: () => (/* binding */ appendChild),
/* harmony export */   prependChild: () => (/* binding */ prependChild)
/* harmony export */ });
const createChild = (parentObj, childType, childClass) => {
  const childObj = document.createElement(childType);

  let classes =
    typeof childClass === "string" ? childClass.split(/\s+/) : childClass;

  classes.forEach((cls) => {
    if (cls.length > 0) {
      childObj.classList.add(cls);
    }
  });

  return childObj;
};

const prependChild = (parentObj, childType, childClass = "") => {
  const childObj = createChild(parentObj, childType, childClass);
  parentObj.prepend(childObj);
  return childObj;
};

const appendChild = (parentObj, childType, childClass = "") => {
  const childObj = createChild(parentObj, childType, childClass);
  parentObj.appendChild(childObj);
  return childObj;
};




/***/ }),

/***/ "./src/player/player.js":
/*!******************************!*\
  !*** ./src/player/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AI: () => (/* binding */ AI),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard/gameboard */ "./src/gameboard/gameboard.js");


const boardSize = 10;

const Player = () => {
  // Use 10x10 board
  const gameboard = (0,_gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(boardSize, boardSize);

  const getBoard = () => gameboard;
  const attackPlayer = (player, coord) => {
    if (coord.length !== 2) return false;

    player.getBoard().receiveAttack(coord);
    return player.getBoard().isSpaceHit(coord);
  };

  return { attackPlayer, getBoard };
};

const AI = () => {
  const player = Player();

  const generateCoordinate = () => {
    const x = Math.floor(Math.random() * boardSize);
    const y = Math.floor(Math.random() * boardSize);
    return [x, y];
  };

  return {
    generateCoordinate,
    attackPlayer: player.attackPlayer,
    getBoard: player.getBoard,
  };
};




/***/ }),

/***/ "./src/ship/ship.js":
/*!**************************!*\
  !*** ./src/ship/ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (initialHp) => {
  let hp = initialHp;

  const hit = () => {
    if (hp > 0) {
      hp--;
      return true;
    }
    return false;
  };

  const isSunk = () => hp <= 0;

  return { hit, isSunk };
};




/***/ }),

/***/ "./src/ui/ui.js":
/*!**********************!*\
  !*** ./src/ui/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/helper.js");


const UI = (() => {
  const boardSize = 10; // Width and height of game board
  const body = document.querySelector("body");
  let player1Obj = null;
  let player2Obj = null;
  let savedCoordinate = null;

  const setStatus = (msg) => {
    document.querySelector(".status").textContent = msg;
  };

  const gameOver = (playerNumber) => {
    setStatus(`Player ${playerNumber} Wins!`);
  };

  const addGridListener = (player, handler) => {
    [player1Obj, player2Obj].forEach((p, index) => {
      if (p === player) {
        const grid = document.querySelector(`.board.player-${index + 1} .grid`);
        grid.querySelectorAll(".grid-cell").forEach((cell) => {
          cell.addEventListener("click", handler);
        });
      }
    });
  };

  const placeShipClickHandler = (e, player, shipLength, callback) => {
    const x = Number(e.target.dataset.col);
    const y = Number(e.target.dataset.row);

    if (!savedCoordinate) {
      savedCoordinate = [x, y];
    } else {
      const coord1 = savedCoordinate;
      const coord2 = [x, y];
      savedCoordinate = null;

      const minX = Math.min(coord1[0], coord2[0]);
      const maxX = Math.max(coord1[0], coord2[0]);
      const minY = Math.min(coord1[1], coord2[1]);
      const maxY = Math.max(coord1[1], coord2[1]);

      if (maxX - minX + (maxY - minY) + 1 === shipLength) {
        player.getBoard().placeShip(coord1, coord2);
      }
    }
    callback();
  };

  const attackClickHandler = (e) => {
    const x = Number(e.target.dataset.col);
    const y = Number(e.target.dataset.row);

    // Already hit
    if (player2Obj.getBoard().isSpaceHit([x, y])) return;

    // Check for invalid attack
    if (!player1Obj.attackPlayer(player2Obj, [x, y])) return;

    // Reload grid
    UI.renderGrids();

    // Check if player 1 won
    if (player2Obj.getBoard().allShipsSunk()) return gameOver(1);

    // Re-add attack click handlers to grid
    addGridListener(player2Obj, attackClickHandler);

    // Give player 1 another shot if successful hit
    if (player2Obj.getBoard().isShipHit([x, y])) return;

    // Player 2's turn
    for (;;) {
      const coord = player2Obj.generateCoordinate();

      // Already hit
      if (player1Obj.getBoard().isSpaceHit(coord)) continue;

      // Check for invalid attack
      if (!player2Obj.attackPlayer(player1Obj, coord)) continue;

      // Reload grid
      UI.renderGrids();

      // Check if player 2 won
      if (player1Obj.getBoard().allShipsSunk()) return gameOver(2);

      // Re-add attack click handlers to grid
      addGridListener(player2Obj, attackClickHandler);

      // Give player 2 another shot if successful hit
      if (player1Obj.getBoard().isShipHit(coord)) continue;

      break;
    }
  };

  const buildGrid = (parent, player) => {
    for (let y = boardSize - 1; y >= 0; y--) {
      (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(parent, "p", "grid-y-index").textContent = y;
      for (let x = 0; x < boardSize; x++) {
        const isShip = player.getBoard().isShip([x, y]);
        const spaceHit = player.getBoard().isSpaceHit([x, y]);
        const shipHit = player.getBoard().isShipHit([x, y]);
        const classes =
          "grid-cell" +
          (shipHit
            ? " hit"
            : spaceHit
            ? " miss"
            : isShip && player != player2Obj
            ? " ship"
            : "");
        const space = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(parent, "button", classes);
        space.dataset.col = x;
        space.dataset.row = y;
      }
    }

    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(parent, "p", "grid-x-index");
    for (let x = 0; x < boardSize; x++) {
      (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(parent, "p", "grid-x-index").textContent = x;
    }
  };

  const updateShipCount = (player, index) => {
    const opponent = index === 0 ? player2Obj : player1Obj;
    const value = document.querySelector(
      `.ship-count.player-${index + 1} .count-value`
    );

    value.textContent = opponent
      .getBoard()
      .getShips()
      .reduce((sunkCount, ship) => sunkCount + (ship.isSunk() ? 1 : 0), 0);
  };

  const renderGrids = () => {
    [player1Obj, player2Obj].forEach((player, index) => {
      const grid = document.querySelector(`.board.player-${index + 1} .grid`);
      grid.replaceChildren();
      buildGrid(grid, player);
      updateShipCount(player, index);
    });
  };

  const render = (gamePlayer1, gamePlayer2) => {
    player1Obj = gamePlayer1;
    player2Obj = gamePlayer2;

    const container = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.prependChild)(body, "div", "container");

    // Create status message and boards
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(container, "h1", "status");
    const boards = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(container, "div", "boards");

    const player1Count = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(boards, "div", "ship-count player-1");
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(player1Count, "h3", "count-title").textContent = "Ships Sunk";
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(player1Count, "p", "count-value").textContent = 0;

    const player1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(boards, "div", "board player-1");
    const player2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(boards, "div", "board player-2");

    const player2Count = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(boards, "div", "ship-count player-2");
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(player2Count, "h3", "count-title").textContent = "Ships Sunk";
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(player2Count, "p", "count-value").textContent = 0;

    const player1Title = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(player1, "h2", "title");
    player1Title.textContent = "Player";
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(player1, "div", "grid");

    const player2Title = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(player2, "h2", "title");
    player2Title.textContent = "Computer";
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(player2, "div", "grid");

    renderGrids();
  };

  return {
    setStatus,
    addGridListener,
    placeShipClickHandler,
    attackClickHandler,
    renderGrids,
    render,
  };
})();




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/player */ "./src/player/player.js");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/ui */ "./src/ui/ui.js");




// const printBoards = (player1, player2) => {
//   console.log("----------");
//   player1.getBoard().printBoard();
//   player2.getBoard().printBoard();
//   console.log("----------");
// };

const placeAllShips = (player, opponent, secondCoord = false) => {
  const availableShips = [2, 3, 3, 4, 5];
  _ui_ui__WEBPACK_IMPORTED_MODULE_2__.UI.renderGrids();

  if (player.getBoard().getShips().length < availableShips.length) {
    const shipLength = availableShips[player.getBoard().getShips().length];
    _ui_ui__WEBPACK_IMPORTED_MODULE_2__.UI.setStatus(
      `Click the Player board to select the ${
        secondCoord ? "end" : "start"
      } coordinate for a ship of length ${shipLength}`
    );

    _ui_ui__WEBPACK_IMPORTED_MODULE_2__.UI.addGridListener(player, (e) =>
      _ui_ui__WEBPACK_IMPORTED_MODULE_2__.UI.placeShipClickHandler(e, player, shipLength, () =>
        placeAllShips(player, opponent, !secondCoord)
      )
    );
  } else {
    placeAllShipsAuto(opponent);
    _ui_ui__WEBPACK_IMPORTED_MODULE_2__.UI.renderGrids();

    _ui_ui__WEBPACK_IMPORTED_MODULE_2__.UI.setStatus("Click the enemy grid to fire a missile");
    _ui_ui__WEBPACK_IMPORTED_MODULE_2__.UI.addGridListener(opponent, _ui_ui__WEBPACK_IMPORTED_MODULE_2__.UI.attackClickHandler);
  }

  // for (let shipLength of availableShips) {
  //   for (;;) {

  //     // const coords = requestCoordinates(
  //     //   `Enter coordinates for a ship of length ${shipLength} in format [[x1,y1],[x2,y2]]`
  //     // );

  //     // if (!coords) continue;

  //     // const minX = Math.min(coords[0][0], coords[1][0]);
  //     // const maxX = Math.max(coords[0][0], coords[1][0]);
  //     // const minY = Math.min(coords[0][1], coords[1][1]);
  //     // const maxY = Math.max(coords[0][1], coords[1][1]);

  //     // if (maxX - minX + (maxY - minY) != shipLength) continue;
  //     // if (!player.getBoard().placeShip(...coords)) continue;

  //     // console.log(
  //     //   `Ship of length ${shipLength} placed at ${coords[0]}, ${coords[1]}`
  //     // );

  //     // break;
  //   }
  // }
};

const placeAllShipsAuto = (player) => {
  const availableShips = [2, 3, 3, 4, 5];
  const playerBoard = player.getBoard();

  for (let shipLength of availableShips) {
    for (;;) {
      const isHorizontal = Math.random() < 0.5;

      let x = -1;
      let y = -1;
      let shipPlaced = false;

      if (isHorizontal) {
        x = Math.floor(Math.random() * (playerBoard.getWidth() - shipLength));
        y = Math.floor(Math.random() * playerBoard.getHeight());
        shipPlaced = playerBoard.placeShip([x, y], [x + shipLength - 1, y]);
      } else {
        x = Math.floor(Math.random() * playerBoard.getWidth());
        y = Math.floor(Math.random() * (playerBoard.getHeight() - shipLength));
        shipPlaced = playerBoard.placeShip([x, y], [x, y + shipLength - 1]);
      }

      if (!shipPlaced) continue;

      break;
    }
  }
};

const Game = (() => {
  let player1 = null;
  let player2 = null;

  const getPlayer1 = () => player1;
  const getPlayer2 = () => player2;

  const init = () => {
    player1 = (0,_player_player__WEBPACK_IMPORTED_MODULE_1__.Player)();
    player2 = (0,_player_player__WEBPACK_IMPORTED_MODULE_1__.AI)();
  };

  const play = () => {
    placeAllShips(player1, player2);
  };

  return { getPlayer1, getPlayer2, init, play };
})();

// Game.play();
Game.init();
_ui_ui__WEBPACK_IMPORTED_MODULE_2__.UI.render(Game.getPlayer1(), Game.getPlayer2());
Game.play();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBLGNBQWMsc0RBQU07QUFDcEIsY0FBYyxrREFBRTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHNDQUFFO0FBQ0Y7O0FBRWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCxcbmh0bWwsXG5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLS1ncmlkLWNlbGwtc2l6ZTogMzBweDtcbiAgLS1ncmlkLWNlbGwtZ2FwOiA1cHg7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN0YXR1cyB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9hcmRzIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cbi5ib2FyZHMgLnNoaXAtY291bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib2FyZHMgLnNoaXAtY291bnQgLmNvdW50LXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbn1cbi5ib2FyZHMgLnNoaXAtY291bnQgLmNvdW50LXZhbHVlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDVyZW07XG59XG4uYm9hcmRzIC5ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG4uYm9hcmRzIC5ib2FyZC5wbGF5ZXItMSB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbi5ib2FyZHMgLmJvYXJkIC50aXRsZSB7XG4gIG1hcmdpbjogMCAwIDAgdmFyKC0tZ3JpZC1jZWxsLXNpemUpO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDNyZW07XG59XG4uYm9hcmRzIC5ib2FyZCAuZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCB2YXIoLS1ncmlkLWNlbGwtc2l6ZSkpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgdmFyKC0tZ3JpZC1jZWxsLXNpemUpKTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJvYXJkcyAuYm9hcmQgLmdyaWQgLmdyaWQtY2VsbCB7XG4gIHdpZHRoOiB2YXIoLS1ncmlkLWNlbGwtc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tZ3JpZC1jZWxsLXNpemUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cbi5ib2FyZHMgLmJvYXJkIC5ncmlkIC5ncmlkLWNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcbn1cbi5ib2FyZHMgLmJvYXJkIC5ncmlkIC5ncmlkLWNlbGw6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uYm9hcmRzIC5ib2FyZCAuZ3JpZCAuZ3JpZC1jZWxsLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5ib2FyZHMgLmJvYXJkIC5ncmlkIC5ncmlkLWNlbGwubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4uYm9hcmRzIC5ib2FyZCAuZ3JpZCAuZ3JpZC1jZWxsLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0VBR0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUVBLHlDQUFBO0VBQ0EsZUFBQTtFQUVBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBU0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0FBUEY7O0FBWUE7RUFDRSxVQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFWRjtBQVlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVZKO0FBWUk7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVhOO0FBY0k7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUVBLGVBQUE7QUFiTjtBQWlCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBZko7QUFpQkk7RUFDRSxrQkFBQTtBQWZOO0FBa0JJO0VBQ0UsbUNBQUE7RUFDQSxVQUFBO0VBRUEsZUFBQTtBQWpCTjtBQW9CSTtFQUNFLGFBQUE7RUFDQSxxREFBQTtFQUNBLHdEQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWxCTjtBQW9CTTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFFQSwyQkFBQTtFQUVBLHVCQUFBO0VBQ0EsbUNBQUE7QUFwQlI7QUFzQlE7RUFDRSwwQkFBQTtBQXBCVjtBQXVCUTtFQUNFLHVCQUFBO0FBckJWO0FBd0JRO0VBQ0UscUJBQUE7QUF0QlY7QUF5QlE7RUFDRSxzQkFBQTtBQXZCVjtBQTBCUTtFQUNFLHdCQUFBO0FBeEJWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIFJPT1QgU1RZTEVTXFxuXFxuOnJvb3QsXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcblxcbiAgLS1ib3JkZXItcmFkaXVzOiAycHg7XFxuICAtLWdyaWQtY2VsbC1zaXplOiAzMHB4O1xcbiAgLS1ncmlkLWNlbGwtZ2FwOiA1cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLy8gU1RBVFVTXFxuXFxuLnN0YXR1cyB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vLyBCT0FSRFNcXG5cXG4uYm9hcmRzIHtcXG4gIHdpZHRoOiA4MCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG5cXG4gIC5zaGlwLWNvdW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC5jb3VudC10aXRsZSB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHRleHQtd3JhcDogbm93cmFwO1xcbiAgICB9XFxuXFxuICAgIC5jb3VudC12YWx1ZSB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICAuYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICAmLnBsYXllci0xIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRpdGxlIHtcXG4gICAgICBtYXJnaW46IDAgMCAwIHZhcigtLWdyaWQtY2VsbC1zaXplKTtcXG4gICAgICBwYWRkaW5nOiAwO1xcblxcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgfVxcblxcbiAgICAuZ3JpZCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgdmFyKC0tZ3JpZC1jZWxsLXNpemUpKTtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgdmFyKC0tZ3JpZC1jZWxsLXNpemUpKTtcXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAuZ3JpZC1jZWxsIHtcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1ncmlkLWNlbGwtc2l6ZSk7XFxuICAgICAgICBoZWlnaHQ6IHZhcigtLWdyaWQtY2VsbC1zaXplKTtcXG5cXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG5cXG4gICAgICAgIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5oaXQge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLm1pc3Mge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5zaGlwIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi4vc2hpcC9zaGlwXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gW107XG4gIGNvbnN0IHNoaXBzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgYm9hcmRbaV0gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKSB7XG4gICAgICBib2FyZFtpXVtqXSA9IHsgaGl0OiBmYWxzZSwgc2hpcDogbnVsbCB9O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldFdpZHRoID0gKCkgPT4gd2lkdGg7XG4gIGNvbnN0IGdldEhlaWdodCA9ICgpID0+IGhlaWdodDtcbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiBzaGlwcztcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoY29vcmQxLCBjb29yZDIpID0+IHtcbiAgICBjb25zdCBtaW5YID0gTWF0aC5taW4oY29vcmQxWzBdLCBjb29yZDJbMF0pO1xuICAgIGNvbnN0IG1heFggPSBNYXRoLm1heChjb29yZDFbMF0sIGNvb3JkMlswXSk7XG4gICAgY29uc3QgbWluWSA9IE1hdGgubWluKGNvb3JkMVsxXSwgY29vcmQyWzFdKTtcbiAgICBjb25zdCBtYXhZID0gTWF0aC5tYXgoY29vcmQxWzFdLCBjb29yZDJbMV0pO1xuXG4gICAgLy8gT3V0IG9mIGJvdW5kc1xuICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID49IHdpZHRoIHx8IG1pblkgPCAwIHx8IG1heFkgPj0gaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gRGlhZ29uYWxcbiAgICBpZiAoIShtaW5YID09PSBtYXhYIHx8IG1pblkgPT09IG1heFkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gT3ZlcmxhcFxuICAgIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgeSsrKSB7XG4gICAgICAgIGlmIChib2FyZFt4XVt5XS5zaGlwKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcCA9IFNoaXAobWF4WCAtIG1pblggKyAobWF4WSAtIG1pblkpICsgMSk7XG4gICAgc2hpcHMucHVzaChzaGlwKTtcblxuICAgIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgeSsrKSB7XG4gICAgICAgIGJvYXJkW3hdW3ldLnNoaXAgPSBzaGlwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmQpID0+IHtcbiAgICBsZXQgeCA9IGNvb3JkWzBdO1xuICAgIGxldCB5ID0gY29vcmRbMV07XG5cbiAgICAvLyBPdXQgb2YgYm91bmRzXG4gICAgaWYgKHggPCAwIHx8IHggPj0gd2lkdGggfHwgeSA8IDAgfHwgeSA+PSBoZWlnaHQpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIEFscmVhZHkgaGl0XG4gICAgaWYgKGJvYXJkW3hdW3ldLmhpdCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgYm9hcmRbeF1beV0uaGl0ID0gdHJ1ZTtcblxuICAgIGlmIChib2FyZFt4XVt5XS5zaGlwKSB7XG4gICAgICBib2FyZFt4XVt5XS5zaGlwLmhpdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrQ29vcmRpbmF0ZSA9IChjb29yZCwgZnVuYykgPT4ge1xuICAgIGxldCB4ID0gY29vcmRbMF07XG4gICAgbGV0IHkgPSBjb29yZFsxXTtcblxuICAgIGlmICh4IDwgMCB8fCB4ID49IHdpZHRoIHx8IHkgPCAwIHx8IHkgPj0gaGVpZ2h0KSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gZnVuYyhjb29yZCk7XG4gIH07XG5cbiAgY29uc3QgaXNTaGlwID0gKGNvb3JkKSA9PiB7XG4gICAgcmV0dXJuIGNoZWNrQ29vcmRpbmF0ZShjb29yZCwgKGNvb3JkKSA9PiAhIWJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0uc2hpcCk7XG4gIH07XG5cbiAgY29uc3QgaXNTcGFjZUhpdCA9IChjb29yZCkgPT4ge1xuICAgIHJldHVybiBjaGVja0Nvb3JkaW5hdGUoY29vcmQsIChjb29yZCkgPT4gYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXS5oaXQpO1xuICB9O1xuXG4gIGNvbnN0IGlzU2hpcEhpdCA9IChjb29yZCkgPT4ge1xuICAgIHJldHVybiBpc1NwYWNlSGl0KGNvb3JkKSAmJiBpc1NoaXAoY29vcmQpO1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcHMucmVkdWNlKChhbGxTdW5rLCBzaGlwKSA9PiBhbGxTdW5rICYmIHNoaXAuaXNTdW5rKCksIHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IHByaW50Qm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3V0cHV0ID0gW107XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICBvdXRwdXQucHVzaChoZWlnaHQgLSB5IC0gMSk7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgb3V0cHV0LnB1c2goXG4gICAgICAgICAgYm9hcmRbeF1baGVpZ2h0IC0geSAtIDFdLmhpdFxuICAgICAgICAgICAgPyBcIlhcIlxuICAgICAgICAgICAgOiBib2FyZFt4XVtoZWlnaHQgLSB5IC0gMV0uc2hpcFxuICAgICAgICAgICAgPyBcIk9cIlxuICAgICAgICAgICAgOiBcIiBcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgb3V0cHV0LnB1c2goXCJcXG5cIik7XG4gICAgfVxuXG4gICAgb3V0cHV0LnB1c2goXCIgXCIpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykgb3V0cHV0LnB1c2goeCk7XG5cbiAgICBjb25zb2xlLmxvZyhvdXRwdXQuam9pbihcIlwiKSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRXaWR0aCxcbiAgICBnZXRIZWlnaHQsXG4gICAgZ2V0U2hpcHMsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgaXNTaGlwLFxuICAgIGlzU3BhY2VIaXQsXG4gICAgaXNTaGlwSGl0LFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICBwcmludEJvYXJkLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJjb25zdCBjcmVhdGVDaGlsZCA9IChwYXJlbnRPYmosIGNoaWxkVHlwZSwgY2hpbGRDbGFzcykgPT4ge1xuICBjb25zdCBjaGlsZE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY2hpbGRUeXBlKTtcblxuICBsZXQgY2xhc3NlcyA9XG4gICAgdHlwZW9mIGNoaWxkQ2xhc3MgPT09IFwic3RyaW5nXCIgPyBjaGlsZENsYXNzLnNwbGl0KC9cXHMrLykgOiBjaGlsZENsYXNzO1xuXG4gIGNsYXNzZXMuZm9yRWFjaCgoY2xzKSA9PiB7XG4gICAgaWYgKGNscy5sZW5ndGggPiAwKSB7XG4gICAgICBjaGlsZE9iai5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGRPYmo7XG59O1xuXG5jb25zdCBwcmVwZW5kQ2hpbGQgPSAocGFyZW50T2JqLCBjaGlsZFR5cGUsIGNoaWxkQ2xhc3MgPSBcIlwiKSA9PiB7XG4gIGNvbnN0IGNoaWxkT2JqID0gY3JlYXRlQ2hpbGQocGFyZW50T2JqLCBjaGlsZFR5cGUsIGNoaWxkQ2xhc3MpO1xuICBwYXJlbnRPYmoucHJlcGVuZChjaGlsZE9iaik7XG4gIHJldHVybiBjaGlsZE9iajtcbn07XG5cbmNvbnN0IGFwcGVuZENoaWxkID0gKHBhcmVudE9iaiwgY2hpbGRUeXBlLCBjaGlsZENsYXNzID0gXCJcIikgPT4ge1xuICBjb25zdCBjaGlsZE9iaiA9IGNyZWF0ZUNoaWxkKHBhcmVudE9iaiwgY2hpbGRUeXBlLCBjaGlsZENsYXNzKTtcbiAgcGFyZW50T2JqLmFwcGVuZENoaWxkKGNoaWxkT2JqKTtcbiAgcmV0dXJuIGNoaWxkT2JqO1xufTtcblxuZXhwb3J0IHsgcHJlcGVuZENoaWxkLCBhcHBlbmRDaGlsZCB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4uL2dhbWVib2FyZC9nYW1lYm9hcmRcIjtcblxuY29uc3QgYm9hcmRTaXplID0gMTA7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcbiAgLy8gVXNlIDEweDEwIGJvYXJkXG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZChib2FyZFNpemUsIGJvYXJkU2l6ZSk7XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBnYW1lYm9hcmQ7XG4gIGNvbnN0IGF0dGFja1BsYXllciA9IChwbGF5ZXIsIGNvb3JkKSA9PiB7XG4gICAgaWYgKGNvb3JkLmxlbmd0aCAhPT0gMikgcmV0dXJuIGZhbHNlO1xuXG4gICAgcGxheWVyLmdldEJvYXJkKCkucmVjZWl2ZUF0dGFjayhjb29yZCk7XG4gICAgcmV0dXJuIHBsYXllci5nZXRCb2FyZCgpLmlzU3BhY2VIaXQoY29vcmQpO1xuICB9O1xuXG4gIHJldHVybiB7IGF0dGFja1BsYXllciwgZ2V0Qm9hcmQgfTtcbn07XG5cbmNvbnN0IEFJID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIoKTtcblxuICBjb25zdCBnZW5lcmF0ZUNvb3JkaW5hdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdlbmVyYXRlQ29vcmRpbmF0ZSxcbiAgICBhdHRhY2tQbGF5ZXI6IHBsYXllci5hdHRhY2tQbGF5ZXIsXG4gICAgZ2V0Qm9hcmQ6IHBsYXllci5nZXRCb2FyZCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXllciwgQUkgfTtcbiIsImNvbnN0IFNoaXAgPSAoaW5pdGlhbEhwKSA9PiB7XG4gIGxldCBocCA9IGluaXRpYWxIcDtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaWYgKGhwID4gMCkge1xuICAgICAgaHAtLTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gaHAgPD0gMDtcblxuICByZXR1cm4geyBoaXQsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiaW1wb3J0IHsgcHJlcGVuZENoaWxkLCBhcHBlbmRDaGlsZCB9IGZyb20gXCIuLi9oZWxwZXJcIjtcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICBjb25zdCBib2FyZFNpemUgPSAxMDsgLy8gV2lkdGggYW5kIGhlaWdodCBvZiBnYW1lIGJvYXJkXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgbGV0IHBsYXllcjFPYmogPSBudWxsO1xuICBsZXQgcGxheWVyMk9iaiA9IG51bGw7XG4gIGxldCBzYXZlZENvb3JkaW5hdGUgPSBudWxsO1xuXG4gIGNvbnN0IHNldFN0YXR1cyA9IChtc2cpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXR1c1wiKS50ZXh0Q29udGVudCA9IG1zZztcbiAgfTtcblxuICBjb25zdCBnYW1lT3ZlciA9IChwbGF5ZXJOdW1iZXIpID0+IHtcbiAgICBzZXRTdGF0dXMoYFBsYXllciAke3BsYXllck51bWJlcn0gV2lucyFgKTtcbiAgfTtcblxuICBjb25zdCBhZGRHcmlkTGlzdGVuZXIgPSAocGxheWVyLCBoYW5kbGVyKSA9PiB7XG4gICAgW3BsYXllcjFPYmosIHBsYXllcjJPYmpdLmZvckVhY2goKHAsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocCA9PT0gcGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQucGxheWVyLSR7aW5kZXggKyAxfSAuZ3JpZGApO1xuICAgICAgICBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZC1jZWxsXCIpLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwQ2xpY2tIYW5kbGVyID0gKGUsIHBsYXllciwgc2hpcExlbmd0aCwgY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCB4ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuY29sKTtcbiAgICBjb25zdCB5ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQucm93KTtcblxuICAgIGlmICghc2F2ZWRDb29yZGluYXRlKSB7XG4gICAgICBzYXZlZENvb3JkaW5hdGUgPSBbeCwgeV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvb3JkMSA9IHNhdmVkQ29vcmRpbmF0ZTtcbiAgICAgIGNvbnN0IGNvb3JkMiA9IFt4LCB5XTtcbiAgICAgIHNhdmVkQ29vcmRpbmF0ZSA9IG51bGw7XG5cbiAgICAgIGNvbnN0IG1pblggPSBNYXRoLm1pbihjb29yZDFbMF0sIGNvb3JkMlswXSk7XG4gICAgICBjb25zdCBtYXhYID0gTWF0aC5tYXgoY29vcmQxWzBdLCBjb29yZDJbMF0pO1xuICAgICAgY29uc3QgbWluWSA9IE1hdGgubWluKGNvb3JkMVsxXSwgY29vcmQyWzFdKTtcbiAgICAgIGNvbnN0IG1heFkgPSBNYXRoLm1heChjb29yZDFbMV0sIGNvb3JkMlsxXSk7XG5cbiAgICAgIGlmIChtYXhYIC0gbWluWCArIChtYXhZIC0gbWluWSkgKyAxID09PSBzaGlwTGVuZ3RoKSB7XG4gICAgICAgIHBsYXllci5nZXRCb2FyZCgpLnBsYWNlU2hpcChjb29yZDEsIGNvb3JkMik7XG4gICAgICB9XG4gICAgfVxuICAgIGNhbGxiYWNrKCk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrQ2xpY2tIYW5kbGVyID0gKGUpID0+IHtcbiAgICBjb25zdCB4ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuY29sKTtcbiAgICBjb25zdCB5ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQucm93KTtcblxuICAgIC8vIEFscmVhZHkgaGl0XG4gICAgaWYgKHBsYXllcjJPYmouZ2V0Qm9hcmQoKS5pc1NwYWNlSGl0KFt4LCB5XSkpIHJldHVybjtcblxuICAgIC8vIENoZWNrIGZvciBpbnZhbGlkIGF0dGFja1xuICAgIGlmICghcGxheWVyMU9iai5hdHRhY2tQbGF5ZXIocGxheWVyMk9iaiwgW3gsIHldKSkgcmV0dXJuO1xuXG4gICAgLy8gUmVsb2FkIGdyaWRcbiAgICBVSS5yZW5kZXJHcmlkcygpO1xuXG4gICAgLy8gQ2hlY2sgaWYgcGxheWVyIDEgd29uXG4gICAgaWYgKHBsYXllcjJPYmouZ2V0Qm9hcmQoKS5hbGxTaGlwc1N1bmsoKSkgcmV0dXJuIGdhbWVPdmVyKDEpO1xuXG4gICAgLy8gUmUtYWRkIGF0dGFjayBjbGljayBoYW5kbGVycyB0byBncmlkXG4gICAgYWRkR3JpZExpc3RlbmVyKHBsYXllcjJPYmosIGF0dGFja0NsaWNrSGFuZGxlcik7XG5cbiAgICAvLyBHaXZlIHBsYXllciAxIGFub3RoZXIgc2hvdCBpZiBzdWNjZXNzZnVsIGhpdFxuICAgIGlmIChwbGF5ZXIyT2JqLmdldEJvYXJkKCkuaXNTaGlwSGl0KFt4LCB5XSkpIHJldHVybjtcblxuICAgIC8vIFBsYXllciAyJ3MgdHVyblxuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IGNvb3JkID0gcGxheWVyMk9iai5nZW5lcmF0ZUNvb3JkaW5hdGUoKTtcblxuICAgICAgLy8gQWxyZWFkeSBoaXRcbiAgICAgIGlmIChwbGF5ZXIxT2JqLmdldEJvYXJkKCkuaXNTcGFjZUhpdChjb29yZCkpIGNvbnRpbnVlO1xuXG4gICAgICAvLyBDaGVjayBmb3IgaW52YWxpZCBhdHRhY2tcbiAgICAgIGlmICghcGxheWVyMk9iai5hdHRhY2tQbGF5ZXIocGxheWVyMU9iaiwgY29vcmQpKSBjb250aW51ZTtcblxuICAgICAgLy8gUmVsb2FkIGdyaWRcbiAgICAgIFVJLnJlbmRlckdyaWRzKCk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHBsYXllciAyIHdvblxuICAgICAgaWYgKHBsYXllcjFPYmouZ2V0Qm9hcmQoKS5hbGxTaGlwc1N1bmsoKSkgcmV0dXJuIGdhbWVPdmVyKDIpO1xuXG4gICAgICAvLyBSZS1hZGQgYXR0YWNrIGNsaWNrIGhhbmRsZXJzIHRvIGdyaWRcbiAgICAgIGFkZEdyaWRMaXN0ZW5lcihwbGF5ZXIyT2JqLCBhdHRhY2tDbGlja0hhbmRsZXIpO1xuXG4gICAgICAvLyBHaXZlIHBsYXllciAyIGFub3RoZXIgc2hvdCBpZiBzdWNjZXNzZnVsIGhpdFxuICAgICAgaWYgKHBsYXllcjFPYmouZ2V0Qm9hcmQoKS5pc1NoaXBIaXQoY29vcmQpKSBjb250aW51ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJ1aWxkR3JpZCA9IChwYXJlbnQsIHBsYXllcikgPT4ge1xuICAgIGZvciAobGV0IHkgPSBib2FyZFNpemUgLSAxOyB5ID49IDA7IHktLSkge1xuICAgICAgYXBwZW5kQ2hpbGQocGFyZW50LCBcInBcIiwgXCJncmlkLXktaW5kZXhcIikudGV4dENvbnRlbnQgPSB5O1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBib2FyZFNpemU7IHgrKykge1xuICAgICAgICBjb25zdCBpc1NoaXAgPSBwbGF5ZXIuZ2V0Qm9hcmQoKS5pc1NoaXAoW3gsIHldKTtcbiAgICAgICAgY29uc3Qgc3BhY2VIaXQgPSBwbGF5ZXIuZ2V0Qm9hcmQoKS5pc1NwYWNlSGl0KFt4LCB5XSk7XG4gICAgICAgIGNvbnN0IHNoaXBIaXQgPSBwbGF5ZXIuZ2V0Qm9hcmQoKS5pc1NoaXBIaXQoW3gsIHldKTtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9XG4gICAgICAgICAgXCJncmlkLWNlbGxcIiArXG4gICAgICAgICAgKHNoaXBIaXRcbiAgICAgICAgICAgID8gXCIgaGl0XCJcbiAgICAgICAgICAgIDogc3BhY2VIaXRcbiAgICAgICAgICAgID8gXCIgbWlzc1wiXG4gICAgICAgICAgICA6IGlzU2hpcCAmJiBwbGF5ZXIgIT0gcGxheWVyMk9ialxuICAgICAgICAgICAgPyBcIiBzaGlwXCJcbiAgICAgICAgICAgIDogXCJcIik7XG4gICAgICAgIGNvbnN0IHNwYWNlID0gYXBwZW5kQ2hpbGQocGFyZW50LCBcImJ1dHRvblwiLCBjbGFzc2VzKTtcbiAgICAgICAgc3BhY2UuZGF0YXNldC5jb2wgPSB4O1xuICAgICAgICBzcGFjZS5kYXRhc2V0LnJvdyA9IHk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXBwZW5kQ2hpbGQocGFyZW50LCBcInBcIiwgXCJncmlkLXgtaW5kZXhcIik7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBib2FyZFNpemU7IHgrKykge1xuICAgICAgYXBwZW5kQ2hpbGQocGFyZW50LCBcInBcIiwgXCJncmlkLXgtaW5kZXhcIikudGV4dENvbnRlbnQgPSB4O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVTaGlwQ291bnQgPSAocGxheWVyLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG9wcG9uZW50ID0gaW5kZXggPT09IDAgPyBwbGF5ZXIyT2JqIDogcGxheWVyMU9iajtcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLnNoaXAtY291bnQucGxheWVyLSR7aW5kZXggKyAxfSAuY291bnQtdmFsdWVgXG4gICAgKTtcblxuICAgIHZhbHVlLnRleHRDb250ZW50ID0gb3Bwb25lbnRcbiAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAuZ2V0U2hpcHMoKVxuICAgICAgLnJlZHVjZSgoc3Vua0NvdW50LCBzaGlwKSA9PiBzdW5rQ291bnQgKyAoc2hpcC5pc1N1bmsoKSA/IDEgOiAwKSwgMCk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyR3JpZHMgPSAoKSA9PiB7XG4gICAgW3BsYXllcjFPYmosIHBsYXllcjJPYmpdLmZvckVhY2goKHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQucGxheWVyLSR7aW5kZXggKyAxfSAuZ3JpZGApO1xuICAgICAgZ3JpZC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgIGJ1aWxkR3JpZChncmlkLCBwbGF5ZXIpO1xuICAgICAgdXBkYXRlU2hpcENvdW50KHBsYXllciwgaW5kZXgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlciA9IChnYW1lUGxheWVyMSwgZ2FtZVBsYXllcjIpID0+IHtcbiAgICBwbGF5ZXIxT2JqID0gZ2FtZVBsYXllcjE7XG4gICAgcGxheWVyMk9iaiA9IGdhbWVQbGF5ZXIyO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gcHJlcGVuZENoaWxkKGJvZHksIFwiZGl2XCIsIFwiY29udGFpbmVyXCIpO1xuXG4gICAgLy8gQ3JlYXRlIHN0YXR1cyBtZXNzYWdlIGFuZCBib2FyZHNcbiAgICBhcHBlbmRDaGlsZChjb250YWluZXIsIFwiaDFcIiwgXCJzdGF0dXNcIik7XG4gICAgY29uc3QgYm9hcmRzID0gYXBwZW5kQ2hpbGQoY29udGFpbmVyLCBcImRpdlwiLCBcImJvYXJkc1wiKTtcblxuICAgIGNvbnN0IHBsYXllcjFDb3VudCA9IGFwcGVuZENoaWxkKGJvYXJkcywgXCJkaXZcIiwgXCJzaGlwLWNvdW50IHBsYXllci0xXCIpO1xuICAgIGFwcGVuZENoaWxkKHBsYXllcjFDb3VudCwgXCJoM1wiLCBcImNvdW50LXRpdGxlXCIpLnRleHRDb250ZW50ID0gXCJTaGlwcyBTdW5rXCI7XG4gICAgYXBwZW5kQ2hpbGQocGxheWVyMUNvdW50LCBcInBcIiwgXCJjb3VudC12YWx1ZVwiKS50ZXh0Q29udGVudCA9IDA7XG5cbiAgICBjb25zdCBwbGF5ZXIxID0gYXBwZW5kQ2hpbGQoYm9hcmRzLCBcImRpdlwiLCBcImJvYXJkIHBsYXllci0xXCIpO1xuICAgIGNvbnN0IHBsYXllcjIgPSBhcHBlbmRDaGlsZChib2FyZHMsIFwiZGl2XCIsIFwiYm9hcmQgcGxheWVyLTJcIik7XG5cbiAgICBjb25zdCBwbGF5ZXIyQ291bnQgPSBhcHBlbmRDaGlsZChib2FyZHMsIFwiZGl2XCIsIFwic2hpcC1jb3VudCBwbGF5ZXItMlwiKTtcbiAgICBhcHBlbmRDaGlsZChwbGF5ZXIyQ291bnQsIFwiaDNcIiwgXCJjb3VudC10aXRsZVwiKS50ZXh0Q29udGVudCA9IFwiU2hpcHMgU3Vua1wiO1xuICAgIGFwcGVuZENoaWxkKHBsYXllcjJDb3VudCwgXCJwXCIsIFwiY291bnQtdmFsdWVcIikudGV4dENvbnRlbnQgPSAwO1xuXG4gICAgY29uc3QgcGxheWVyMVRpdGxlID0gYXBwZW5kQ2hpbGQocGxheWVyMSwgXCJoMlwiLCBcInRpdGxlXCIpO1xuICAgIHBsYXllcjFUaXRsZS50ZXh0Q29udGVudCA9IFwiUGxheWVyXCI7XG4gICAgYXBwZW5kQ2hpbGQocGxheWVyMSwgXCJkaXZcIiwgXCJncmlkXCIpO1xuXG4gICAgY29uc3QgcGxheWVyMlRpdGxlID0gYXBwZW5kQ2hpbGQocGxheWVyMiwgXCJoMlwiLCBcInRpdGxlXCIpO1xuICAgIHBsYXllcjJUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXJcIjtcbiAgICBhcHBlbmRDaGlsZChwbGF5ZXIyLCBcImRpdlwiLCBcImdyaWRcIik7XG5cbiAgICByZW5kZXJHcmlkcygpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0U3RhdHVzLFxuICAgIGFkZEdyaWRMaXN0ZW5lcixcbiAgICBwbGFjZVNoaXBDbGlja0hhbmRsZXIsXG4gICAgYXR0YWNrQ2xpY2tIYW5kbGVyLFxuICAgIHJlbmRlckdyaWRzLFxuICAgIHJlbmRlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFVJIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IEFJLCBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXIvcGxheWVyXCI7XG5pbXBvcnQgeyBVSSB9IGZyb20gXCIuL3VpL3VpXCI7XG5cbi8vIGNvbnN0IHByaW50Qm9hcmRzID0gKHBsYXllcjEsIHBsYXllcjIpID0+IHtcbi8vICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tXCIpO1xuLy8gICBwbGF5ZXIxLmdldEJvYXJkKCkucHJpbnRCb2FyZCgpO1xuLy8gICBwbGF5ZXIyLmdldEJvYXJkKCkucHJpbnRCb2FyZCgpO1xuLy8gICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS1cIik7XG4vLyB9O1xuXG5jb25zdCBwbGFjZUFsbFNoaXBzID0gKHBsYXllciwgb3Bwb25lbnQsIHNlY29uZENvb3JkID0gZmFsc2UpID0+IHtcbiAgY29uc3QgYXZhaWxhYmxlU2hpcHMgPSBbMiwgMywgMywgNCwgNV07XG4gIFVJLnJlbmRlckdyaWRzKCk7XG5cbiAgaWYgKHBsYXllci5nZXRCb2FyZCgpLmdldFNoaXBzKCkubGVuZ3RoIDwgYXZhaWxhYmxlU2hpcHMubGVuZ3RoKSB7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IGF2YWlsYWJsZVNoaXBzW3BsYXllci5nZXRCb2FyZCgpLmdldFNoaXBzKCkubGVuZ3RoXTtcbiAgICBVSS5zZXRTdGF0dXMoXG4gICAgICBgQ2xpY2sgdGhlIFBsYXllciBib2FyZCB0byBzZWxlY3QgdGhlICR7XG4gICAgICAgIHNlY29uZENvb3JkID8gXCJlbmRcIiA6IFwic3RhcnRcIlxuICAgICAgfSBjb29yZGluYXRlIGZvciBhIHNoaXAgb2YgbGVuZ3RoICR7c2hpcExlbmd0aH1gXG4gICAgKTtcblxuICAgIFVJLmFkZEdyaWRMaXN0ZW5lcihwbGF5ZXIsIChlKSA9PlxuICAgICAgVUkucGxhY2VTaGlwQ2xpY2tIYW5kbGVyKGUsIHBsYXllciwgc2hpcExlbmd0aCwgKCkgPT5cbiAgICAgICAgcGxhY2VBbGxTaGlwcyhwbGF5ZXIsIG9wcG9uZW50LCAhc2Vjb25kQ29vcmQpXG4gICAgICApXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBwbGFjZUFsbFNoaXBzQXV0byhvcHBvbmVudCk7XG4gICAgVUkucmVuZGVyR3JpZHMoKTtcblxuICAgIFVJLnNldFN0YXR1cyhcIkNsaWNrIHRoZSBlbmVteSBncmlkIHRvIGZpcmUgYSBtaXNzaWxlXCIpO1xuICAgIFVJLmFkZEdyaWRMaXN0ZW5lcihvcHBvbmVudCwgVUkuYXR0YWNrQ2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIC8vIGZvciAobGV0IHNoaXBMZW5ndGggb2YgYXZhaWxhYmxlU2hpcHMpIHtcbiAgLy8gICBmb3IgKDs7KSB7XG5cbiAgLy8gICAgIC8vIGNvbnN0IGNvb3JkcyA9IHJlcXVlc3RDb29yZGluYXRlcyhcbiAgLy8gICAgIC8vICAgYEVudGVyIGNvb3JkaW5hdGVzIGZvciBhIHNoaXAgb2YgbGVuZ3RoICR7c2hpcExlbmd0aH0gaW4gZm9ybWF0IFtbeDEseTFdLFt4Mix5Ml1dYFxuICAvLyAgICAgLy8gKTtcblxuICAvLyAgICAgLy8gaWYgKCFjb29yZHMpIGNvbnRpbnVlO1xuXG4gIC8vICAgICAvLyBjb25zdCBtaW5YID0gTWF0aC5taW4oY29vcmRzWzBdWzBdLCBjb29yZHNbMV1bMF0pO1xuICAvLyAgICAgLy8gY29uc3QgbWF4WCA9IE1hdGgubWF4KGNvb3Jkc1swXVswXSwgY29vcmRzWzFdWzBdKTtcbiAgLy8gICAgIC8vIGNvbnN0IG1pblkgPSBNYXRoLm1pbihjb29yZHNbMF1bMV0sIGNvb3Jkc1sxXVsxXSk7XG4gIC8vICAgICAvLyBjb25zdCBtYXhZID0gTWF0aC5tYXgoY29vcmRzWzBdWzFdLCBjb29yZHNbMV1bMV0pO1xuXG4gIC8vICAgICAvLyBpZiAobWF4WCAtIG1pblggKyAobWF4WSAtIG1pblkpICE9IHNoaXBMZW5ndGgpIGNvbnRpbnVlO1xuICAvLyAgICAgLy8gaWYgKCFwbGF5ZXIuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoLi4uY29vcmRzKSkgY29udGludWU7XG5cbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFxuICAvLyAgICAgLy8gICBgU2hpcCBvZiBsZW5ndGggJHtzaGlwTGVuZ3RofSBwbGFjZWQgYXQgJHtjb29yZHNbMF19LCAke2Nvb3Jkc1sxXX1gXG4gIC8vICAgICAvLyApO1xuXG4gIC8vICAgICAvLyBicmVhaztcbiAgLy8gICB9XG4gIC8vIH1cbn07XG5cbmNvbnN0IHBsYWNlQWxsU2hpcHNBdXRvID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBhdmFpbGFibGVTaGlwcyA9IFsyLCAzLCAzLCA0LCA1XTtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBwbGF5ZXIuZ2V0Qm9hcmQoKTtcblxuICBmb3IgKGxldCBzaGlwTGVuZ3RoIG9mIGF2YWlsYWJsZVNoaXBzKSB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgaXNIb3Jpem9udGFsID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcblxuICAgICAgbGV0IHggPSAtMTtcbiAgICAgIGxldCB5ID0gLTE7XG4gICAgICBsZXQgc2hpcFBsYWNlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAocGxheWVyQm9hcmQuZ2V0V2lkdGgoKSAtIHNoaXBMZW5ndGgpKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBsYXllckJvYXJkLmdldEhlaWdodCgpKTtcbiAgICAgICAgc2hpcFBsYWNlZCA9IHBsYXllckJvYXJkLnBsYWNlU2hpcChbeCwgeV0sIFt4ICsgc2hpcExlbmd0aCAtIDEsIHldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwbGF5ZXJCb2FyZC5nZXRXaWR0aCgpKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChwbGF5ZXJCb2FyZC5nZXRIZWlnaHQoKSAtIHNoaXBMZW5ndGgpKTtcbiAgICAgICAgc2hpcFBsYWNlZCA9IHBsYXllckJvYXJkLnBsYWNlU2hpcChbeCwgeV0sIFt4LCB5ICsgc2hpcExlbmd0aCAtIDFdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzaGlwUGxhY2VkKSBjb250aW51ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBHYW1lID0gKCgpID0+IHtcbiAgbGV0IHBsYXllcjEgPSBudWxsO1xuICBsZXQgcGxheWVyMiA9IG51bGw7XG5cbiAgY29uc3QgZ2V0UGxheWVyMSA9ICgpID0+IHBsYXllcjE7XG4gIGNvbnN0IGdldFBsYXllcjIgPSAoKSA9PiBwbGF5ZXIyO1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgcGxheWVyMSA9IFBsYXllcigpO1xuICAgIHBsYXllcjIgPSBBSSgpO1xuICB9O1xuXG4gIGNvbnN0IHBsYXkgPSAoKSA9PiB7XG4gICAgcGxhY2VBbGxTaGlwcyhwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRQbGF5ZXIxLCBnZXRQbGF5ZXIyLCBpbml0LCBwbGF5IH07XG59KSgpO1xuXG4vLyBHYW1lLnBsYXkoKTtcbkdhbWUuaW5pdCgpO1xuVUkucmVuZGVyKEdhbWUuZ2V0UGxheWVyMSgpLCBHYW1lLmdldFBsYXllcjIoKSk7XG5HYW1lLnBsYXkoKTtcblxuZXhwb3J0IHsgR2FtZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9