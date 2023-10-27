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
  text-align: center;
}

.boards {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.boards .board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;;;EAGE,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EAEA,yCAAA;EACA,eAAA;EAEA,oBAAA;EACA,sBAAA;EACA,oBAAA;AAHF;;AAMA;EACE,WAAA;EACA,YAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAJF;;AASA;EACE,UAAA;EAEA,kBAAA;AAPF;;AAYA;EACE,UAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAVF;AAYE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAVJ;AAYI;EACE,mCAAA;EACA,UAAA;EAEA,eAAA;AAXN;AAcI;EACE,aAAA;EACA,qDAAA;EACA,wDAAA;EACA,qBAAA;EACA,mBAAA;AAZN;AAcM;EACE,4BAAA;EACA,6BAAA;EAEA,2BAAA;EAEA,uBAAA;EACA,mCAAA;AAdR;AAgBQ;EACE,0BAAA;AAdV;AAiBQ;EACE,uBAAA;AAfV;AAkBQ;EACE,qBAAA;AAhBV;AAmBQ;EACE,sBAAA;AAjBV;AAoBQ;EACE,wBAAA;AAlBV","sourcesContent":["// ROOT STYLES\n\n:root,\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n\n  --border-radius: 2px;\n  --grid-cell-size: 30px;\n  --grid-cell-gap: 5px;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n// STATUS\n\n.status {\n  width: 80%;\n\n  text-align: center;\n}\n\n// BOARDS\n\n.boards {\n  width: 80%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n\n  .board {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n\n    .title {\n      margin: 0 0 0 var(--grid-cell-size);\n      padding: 0;\n\n      font-size: 3rem;\n    }\n\n    .grid {\n      display: grid;\n      grid-template-rows: repeat(11, var(--grid-cell-size));\n      grid-template-columns: repeat(11, var(--grid-cell-size));\n      justify-items: center;\n      align-items: center;\n\n      .grid-cell {\n        width: var(--grid-cell-size);\n        height: var(--grid-cell-size);\n\n        background-color: lightgrey;\n\n        border: black solid 1px;\n        border-radius: var(--border-radius);\n\n        &:hover {\n          background-color: darkgrey;\n        }\n\n        &:active {\n          background-color: black;\n        }\n\n        &.hit {\n          background-color: red;\n        }\n\n        &.miss {\n          background-color: blue;\n        }\n\n        &.ship {\n          background-color: yellow;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
        const grid = document.querySelector(
          `.board:nth-of-type(${index + 1}) .grid`
        );
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

  const renderGrids = () => {
    [player1Obj, player2Obj].forEach((player, index) => {
      const grid = document.querySelector(
        `.board:nth-of-type(${index + 1}) .grid`
      );
      grid.replaceChildren();
      buildGrid(grid, player);
    });
  };

  const render = (gamePlayer1, gamePlayer2) => {
    player1Obj = gamePlayer1;
    player2Obj = gamePlayer2;

    const container = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.prependChild)(body, "div", "container");

    // Create status message and boards
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(container, "h1", "status");
    const boards = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(container, "div", "boards");
    const player1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(boards, "div", "board player-1");
    const player2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(boards, "div", "board player-2");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSjtBQUNBLElBQUksc0NBQUU7O0FBRU4sSUFBSSxzQ0FBRTtBQUNOLElBQUksc0NBQUUsMkJBQTJCLHNDQUFFO0FBQ25DOztBQUVBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBLHdEQUF3RCxZQUFZO0FBQ3BFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsWUFBWSxZQUFZLFVBQVUsSUFBSSxVQUFVO0FBQ2hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLHNEQUFNO0FBQ3BCLGNBQWMsa0RBQUU7QUFDaEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxzQ0FBRTtBQUNGOztBQUVnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3QsXG5odG1sLFxuYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAycHg7XG4gIC0tZ3JpZC1jZWxsLXNpemU6IDMwcHg7XG4gIC0tZ3JpZC1jZWxsLWdhcDogNXB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdGF0dXMge1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2FyZHMge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0MHB4O1xufVxuLmJvYXJkcyAuYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuLmJvYXJkcyAuYm9hcmQgLnRpdGxlIHtcbiAgbWFyZ2luOiAwIDAgMCB2YXIoLS1ncmlkLWNlbGwtc2l6ZSk7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cbi5ib2FyZHMgLmJvYXJkIC5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIHZhcigtLWdyaWQtY2VsbC1zaXplKSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCB2YXIoLS1ncmlkLWNlbGwtc2l6ZSkpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm9hcmRzIC5ib2FyZCAuZ3JpZCAuZ3JpZC1jZWxsIHtcbiAgd2lkdGg6IHZhcigtLWdyaWQtY2VsbC1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1ncmlkLWNlbGwtc2l6ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuLmJvYXJkcyAuYm9hcmQgLmdyaWQgLmdyaWQtY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xufVxuLmJvYXJkcyAuYm9hcmQgLmdyaWQgLmdyaWQtY2VsbDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi5ib2FyZHMgLmJvYXJkIC5ncmlkIC5ncmlkLWNlbGwuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLmJvYXJkcyAuYm9hcmQgLmdyaWQgLmdyaWQtY2VsbC5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5ib2FyZHMgLmJvYXJkIC5ncmlkIC5ncmlkLWNlbGwuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEseUNBQUE7RUFDQSxlQUFBO0VBRUEsb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFTQTtFQUNFLFVBQUE7RUFFQSxrQkFBQTtBQVBGOztBQVlBO0VBQ0UsVUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBVkY7QUFZRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBVko7QUFZSTtFQUNFLG1DQUFBO0VBQ0EsVUFBQTtFQUVBLGVBQUE7QUFYTjtBQWNJO0VBQ0UsYUFBQTtFQUNBLHFEQUFBO0VBQ0Esd0RBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBWk47QUFjTTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFFQSwyQkFBQTtFQUVBLHVCQUFBO0VBQ0EsbUNBQUE7QUFkUjtBQWdCUTtFQUNFLDBCQUFBO0FBZFY7QUFpQlE7RUFDRSx1QkFBQTtBQWZWO0FBa0JRO0VBQ0UscUJBQUE7QUFoQlY7QUFtQlE7RUFDRSxzQkFBQTtBQWpCVjtBQW9CUTtFQUNFLHdCQUFBO0FBbEJWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIFJPT1QgU1RZTEVTXFxuXFxuOnJvb3QsXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcblxcbiAgLS1ib3JkZXItcmFkaXVzOiAycHg7XFxuICAtLWdyaWQtY2VsbC1zaXplOiAzMHB4O1xcbiAgLS1ncmlkLWNlbGwtZ2FwOiA1cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLy8gU1RBVFVTXFxuXFxuLnN0YXR1cyB7XFxuICB3aWR0aDogODAlO1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vLyBCT0FSRFNcXG5cXG4uYm9hcmRzIHtcXG4gIHdpZHRoOiA4MCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNDBweDtcXG5cXG4gIC5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIC50aXRsZSB7XFxuICAgICAgbWFyZ2luOiAwIDAgMCB2YXIoLS1ncmlkLWNlbGwtc2l6ZSk7XFxuICAgICAgcGFkZGluZzogMDtcXG5cXG4gICAgICBmb250LXNpemU6IDNyZW07XFxuICAgIH1cXG5cXG4gICAgLmdyaWQge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIHZhcigtLWdyaWQtY2VsbC1zaXplKSk7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIHZhcigtLWdyaWQtY2VsbC1zaXplKSk7XFxuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgLmdyaWQtY2VsbCB7XFxuICAgICAgICB3aWR0aDogdmFyKC0tZ3JpZC1jZWxsLXNpemUpO1xcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1ncmlkLWNlbGwtc2l6ZSk7XFxuXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuXFxuICAgICAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuaGl0IHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5taXNzIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuc2hpcCB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4uL3NoaXAvc2hpcFwiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgIGJvYXJkW2ldID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBoZWlnaHQ7IGorKykge1xuICAgICAgYm9hcmRbaV1bal0gPSB7IGhpdDogZmFsc2UsIHNoaXA6IG51bGwgfTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRXaWR0aCA9ICgpID0+IHdpZHRoO1xuICBjb25zdCBnZXRIZWlnaHQgPSAoKSA9PiBoZWlnaHQ7XG4gIGNvbnN0IGdldFNoaXBzID0gKCkgPT4gc2hpcHM7XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkMSwgY29vcmQyKSA9PiB7XG4gICAgY29uc3QgbWluWCA9IE1hdGgubWluKGNvb3JkMVswXSwgY29vcmQyWzBdKTtcbiAgICBjb25zdCBtYXhYID0gTWF0aC5tYXgoY29vcmQxWzBdLCBjb29yZDJbMF0pO1xuICAgIGNvbnN0IG1pblkgPSBNYXRoLm1pbihjb29yZDFbMV0sIGNvb3JkMlsxXSk7XG4gICAgY29uc3QgbWF4WSA9IE1hdGgubWF4KGNvb3JkMVsxXSwgY29vcmQyWzFdKTtcblxuICAgIC8vIE91dCBvZiBib3VuZHNcbiAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+PSB3aWR0aCB8fCBtaW5ZIDwgMCB8fCBtYXhZID49IGhlaWdodCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIERpYWdvbmFsXG4gICAgaWYgKCEobWluWCA9PT0gbWF4WCB8fCBtaW5ZID09PSBtYXhZKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIE92ZXJsYXBcbiAgICBmb3IgKGxldCB4ID0gbWluWDsgeCA8PSBtYXhYOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSBtaW5ZOyB5IDw9IG1heFk7IHkrKykge1xuICAgICAgICBpZiAoYm9hcmRbeF1beV0uc2hpcCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNoaXAgPSBTaGlwKG1heFggLSBtaW5YICsgKG1heFkgLSBtaW5ZKSArIDEpO1xuICAgIHNoaXBzLnB1c2goc2hpcCk7XG5cbiAgICBmb3IgKGxldCB4ID0gbWluWDsgeCA8PSBtYXhYOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSBtaW5ZOyB5IDw9IG1heFk7IHkrKykge1xuICAgICAgICBib2FyZFt4XVt5XS5zaGlwID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgbGV0IHggPSBjb29yZFswXTtcbiAgICBsZXQgeSA9IGNvb3JkWzFdO1xuXG4gICAgLy8gT3V0IG9mIGJvdW5kc1xuICAgIGlmICh4IDwgMCB8fCB4ID49IHdpZHRoIHx8IHkgPCAwIHx8IHkgPj0gaGVpZ2h0KSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBBbHJlYWR5IGhpdFxuICAgIGlmIChib2FyZFt4XVt5XS5oaXQpIHJldHVybiBmYWxzZTtcblxuICAgIGJvYXJkW3hdW3ldLmhpdCA9IHRydWU7XG5cbiAgICBpZiAoYm9hcmRbeF1beV0uc2hpcCkge1xuICAgICAgYm9hcmRbeF1beV0uc2hpcC5oaXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjaGVja0Nvb3JkaW5hdGUgPSAoY29vcmQsIGZ1bmMpID0+IHtcbiAgICBsZXQgeCA9IGNvb3JkWzBdO1xuICAgIGxldCB5ID0gY29vcmRbMV07XG5cbiAgICBpZiAoeCA8IDAgfHwgeCA+PSB3aWR0aCB8fCB5IDwgMCB8fCB5ID49IGhlaWdodCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIGZ1bmMoY29vcmQpO1xuICB9O1xuXG4gIGNvbnN0IGlzU2hpcCA9IChjb29yZCkgPT4ge1xuICAgIHJldHVybiBjaGVja0Nvb3JkaW5hdGUoY29vcmQsIChjb29yZCkgPT4gISFib2FyZFtjb29yZFswXV1bY29vcmRbMV1dLnNoaXApO1xuICB9O1xuXG4gIGNvbnN0IGlzU3BhY2VIaXQgPSAoY29vcmQpID0+IHtcbiAgICByZXR1cm4gY2hlY2tDb29yZGluYXRlKGNvb3JkLCAoY29vcmQpID0+IGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0uaGl0KTtcbiAgfTtcblxuICBjb25zdCBpc1NoaXBIaXQgPSAoY29vcmQpID0+IHtcbiAgICByZXR1cm4gaXNTcGFjZUhpdChjb29yZCkgJiYgaXNTaGlwKGNvb3JkKTtcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBzLnJlZHVjZSgoYWxsU3Vuaywgc2hpcCkgPT4gYWxsU3VuayAmJiBzaGlwLmlzU3VuaygpLCB0cnVlKTtcbiAgfTtcblxuICBjb25zdCBwcmludEJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IG91dHB1dCA9IFtdO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgb3V0cHV0LnB1c2goaGVpZ2h0IC0geSAtIDEpO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgIG91dHB1dC5wdXNoKFxuICAgICAgICAgIGJvYXJkW3hdW2hlaWdodCAtIHkgLSAxXS5oaXRcbiAgICAgICAgICAgID8gXCJYXCJcbiAgICAgICAgICAgIDogYm9hcmRbeF1baGVpZ2h0IC0geSAtIDFdLnNoaXBcbiAgICAgICAgICAgID8gXCJPXCJcbiAgICAgICAgICAgIDogXCIgXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIG91dHB1dC5wdXNoKFwiXFxuXCIpO1xuICAgIH1cblxuICAgIG91dHB1dC5wdXNoKFwiIFwiKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIG91dHB1dC5wdXNoKHgpO1xuXG4gICAgY29uc29sZS5sb2cob3V0cHV0LmpvaW4oXCJcIikpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0V2lkdGgsXG4gICAgZ2V0SGVpZ2h0LFxuICAgIGdldFNoaXBzLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGlzU2hpcCxcbiAgICBpc1NwYWNlSGl0LFxuICAgIGlzU2hpcEhpdCxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgcHJpbnRCb2FyZCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiY29uc3QgY3JlYXRlQ2hpbGQgPSAocGFyZW50T2JqLCBjaGlsZFR5cGUsIGNoaWxkQ2xhc3MpID0+IHtcbiAgY29uc3QgY2hpbGRPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNoaWxkVHlwZSk7XG5cbiAgbGV0IGNsYXNzZXMgPVxuICAgIHR5cGVvZiBjaGlsZENsYXNzID09PSBcInN0cmluZ1wiID8gY2hpbGRDbGFzcy5zcGxpdCgvXFxzKy8pIDogY2hpbGRDbGFzcztcblxuICBjbGFzc2VzLmZvckVhY2goKGNscykgPT4ge1xuICAgIGlmIChjbHMubGVuZ3RoID4gMCkge1xuICAgICAgY2hpbGRPYmouY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkT2JqO1xufTtcblxuY29uc3QgcHJlcGVuZENoaWxkID0gKHBhcmVudE9iaiwgY2hpbGRUeXBlLCBjaGlsZENsYXNzID0gXCJcIikgPT4ge1xuICBjb25zdCBjaGlsZE9iaiA9IGNyZWF0ZUNoaWxkKHBhcmVudE9iaiwgY2hpbGRUeXBlLCBjaGlsZENsYXNzKTtcbiAgcGFyZW50T2JqLnByZXBlbmQoY2hpbGRPYmopO1xuICByZXR1cm4gY2hpbGRPYmo7XG59O1xuXG5jb25zdCBhcHBlbmRDaGlsZCA9IChwYXJlbnRPYmosIGNoaWxkVHlwZSwgY2hpbGRDbGFzcyA9IFwiXCIpID0+IHtcbiAgY29uc3QgY2hpbGRPYmogPSBjcmVhdGVDaGlsZChwYXJlbnRPYmosIGNoaWxkVHlwZSwgY2hpbGRDbGFzcyk7XG4gIHBhcmVudE9iai5hcHBlbmRDaGlsZChjaGlsZE9iaik7XG4gIHJldHVybiBjaGlsZE9iajtcbn07XG5cbmV4cG9ydCB7IHByZXBlbmRDaGlsZCwgYXBwZW5kQ2hpbGQgfTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuLi9nYW1lYm9hcmQvZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IGJvYXJkU2l6ZSA9IDEwO1xuXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gIC8vIFVzZSAxMHgxMCBib2FyZFxuICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoYm9hcmRTaXplLCBib2FyZFNpemUpO1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gZ2FtZWJvYXJkO1xuICBjb25zdCBhdHRhY2tQbGF5ZXIgPSAocGxheWVyLCBjb29yZCkgPT4ge1xuICAgIGlmIChjb29yZC5sZW5ndGggIT09IDIpIHJldHVybiBmYWxzZTtcblxuICAgIHBsYXllci5nZXRCb2FyZCgpLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICAgIHJldHVybiBwbGF5ZXIuZ2V0Qm9hcmQoKS5pc1NwYWNlSGl0KGNvb3JkKTtcbiAgfTtcblxuICByZXR1cm4geyBhdHRhY2tQbGF5ZXIsIGdldEJvYXJkIH07XG59O1xuXG5jb25zdCBBSSA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyID0gUGxheWVyKCk7XG5cbiAgY29uc3QgZ2VuZXJhdGVDb29yZGluYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgIHJldHVybiBbeCwgeV07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZW5lcmF0ZUNvb3JkaW5hdGUsXG4gICAgYXR0YWNrUGxheWVyOiBwbGF5ZXIuYXR0YWNrUGxheWVyLFxuICAgIGdldEJvYXJkOiBwbGF5ZXIuZ2V0Qm9hcmQsXG4gIH07XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIsIEFJIH07XG4iLCJjb25zdCBTaGlwID0gKGluaXRpYWxIcCkgPT4ge1xuICBsZXQgaHAgPSBpbml0aWFsSHA7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGlmIChocCA+IDApIHtcbiAgICAgIGhwLS07XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGhwIDw9IDA7XG5cbiAgcmV0dXJuIHsgaGl0LCBpc1N1bmsgfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsImltcG9ydCB7IHByZXBlbmRDaGlsZCwgYXBwZW5kQ2hpbGQgfSBmcm9tIFwiLi4vaGVscGVyXCI7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgY29uc3QgYm9hcmRTaXplID0gMTA7IC8vIFdpZHRoIGFuZCBoZWlnaHQgb2YgZ2FtZSBib2FyZFxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGxldCBwbGF5ZXIxT2JqID0gbnVsbDtcbiAgbGV0IHBsYXllcjJPYmogPSBudWxsO1xuICBsZXQgc2F2ZWRDb29yZGluYXRlID0gbnVsbDtcblxuICBjb25zdCBzZXRTdGF0dXMgPSAobXNnKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGF0dXNcIikudGV4dENvbnRlbnQgPSBtc2c7XG4gIH07XG5cbiAgY29uc3QgZ2FtZU92ZXIgPSAocGxheWVyTnVtYmVyKSA9PiB7XG4gICAgc2V0U3RhdHVzKGBQbGF5ZXIgJHtwbGF5ZXJOdW1iZXJ9IFdpbnMhYCk7XG4gIH07XG5cbiAgY29uc3QgYWRkR3JpZExpc3RlbmVyID0gKHBsYXllciwgaGFuZGxlcikgPT4ge1xuICAgIFtwbGF5ZXIxT2JqLCBwbGF5ZXIyT2JqXS5mb3JFYWNoKChwLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHAgPT09IHBsYXllcikge1xuICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLmJvYXJkOm50aC1vZi10eXBlKCR7aW5kZXggKyAxfSkgLmdyaWRgXG4gICAgICAgICk7XG4gICAgICAgIGdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLWNlbGxcIikuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBDbGlja0hhbmRsZXIgPSAoZSwgcGxheWVyLCBzaGlwTGVuZ3RoLCBjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IHggPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5jb2wpO1xuICAgIGNvbnN0IHkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5yb3cpO1xuXG4gICAgaWYgKCFzYXZlZENvb3JkaW5hdGUpIHtcbiAgICAgIHNhdmVkQ29vcmRpbmF0ZSA9IFt4LCB5XTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29vcmQxID0gc2F2ZWRDb29yZGluYXRlO1xuICAgICAgY29uc3QgY29vcmQyID0gW3gsIHldO1xuICAgICAgc2F2ZWRDb29yZGluYXRlID0gbnVsbDtcblxuICAgICAgY29uc3QgbWluWCA9IE1hdGgubWluKGNvb3JkMVswXSwgY29vcmQyWzBdKTtcbiAgICAgIGNvbnN0IG1heFggPSBNYXRoLm1heChjb29yZDFbMF0sIGNvb3JkMlswXSk7XG4gICAgICBjb25zdCBtaW5ZID0gTWF0aC5taW4oY29vcmQxWzFdLCBjb29yZDJbMV0pO1xuICAgICAgY29uc3QgbWF4WSA9IE1hdGgubWF4KGNvb3JkMVsxXSwgY29vcmQyWzFdKTtcblxuICAgICAgaWYgKG1heFggLSBtaW5YICsgKG1heFkgLSBtaW5ZKSArIDEgPT09IHNoaXBMZW5ndGgpIHtcbiAgICAgICAgcGxheWVyLmdldEJvYXJkKCkucGxhY2VTaGlwKGNvb3JkMSwgY29vcmQyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2FsbGJhY2soKTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tDbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHggPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5jb2wpO1xuICAgIGNvbnN0IHkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5yb3cpO1xuXG4gICAgLy8gQWxyZWFkeSBoaXRcbiAgICBpZiAocGxheWVyMk9iai5nZXRCb2FyZCgpLmlzU3BhY2VIaXQoW3gsIHldKSkgcmV0dXJuO1xuXG4gICAgLy8gQ2hlY2sgZm9yIGludmFsaWQgYXR0YWNrXG4gICAgaWYgKCFwbGF5ZXIxT2JqLmF0dGFja1BsYXllcihwbGF5ZXIyT2JqLCBbeCwgeV0pKSByZXR1cm47XG5cbiAgICAvLyBSZWxvYWQgZ3JpZFxuICAgIFVJLnJlbmRlckdyaWRzKCk7XG5cbiAgICAvLyBDaGVjayBpZiBwbGF5ZXIgMSB3b25cbiAgICBpZiAocGxheWVyMk9iai5nZXRCb2FyZCgpLmFsbFNoaXBzU3VuaygpKSByZXR1cm4gZ2FtZU92ZXIoMSk7XG5cbiAgICAvLyBSZS1hZGQgYXR0YWNrIGNsaWNrIGhhbmRsZXJzIHRvIGdyaWRcbiAgICBhZGRHcmlkTGlzdGVuZXIocGxheWVyMk9iaiwgYXR0YWNrQ2xpY2tIYW5kbGVyKTtcblxuICAgIC8vIEdpdmUgcGxheWVyIDEgYW5vdGhlciBzaG90IGlmIHN1Y2Nlc3NmdWwgaGl0XG4gICAgaWYgKHBsYXllcjJPYmouZ2V0Qm9hcmQoKS5pc1NoaXBIaXQoW3gsIHldKSkgcmV0dXJuO1xuXG4gICAgLy8gUGxheWVyIDIncyB0dXJuXG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgY29vcmQgPSBwbGF5ZXIyT2JqLmdlbmVyYXRlQ29vcmRpbmF0ZSgpO1xuXG4gICAgICAvLyBBbHJlYWR5IGhpdFxuICAgICAgaWYgKHBsYXllcjFPYmouZ2V0Qm9hcmQoKS5pc1NwYWNlSGl0KGNvb3JkKSkgY29udGludWU7XG5cbiAgICAgIC8vIENoZWNrIGZvciBpbnZhbGlkIGF0dGFja1xuICAgICAgaWYgKCFwbGF5ZXIyT2JqLmF0dGFja1BsYXllcihwbGF5ZXIxT2JqLCBjb29yZCkpIGNvbnRpbnVlO1xuXG4gICAgICAvLyBSZWxvYWQgZ3JpZFxuICAgICAgVUkucmVuZGVyR3JpZHMoKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgcGxheWVyIDIgd29uXG4gICAgICBpZiAocGxheWVyMU9iai5nZXRCb2FyZCgpLmFsbFNoaXBzU3VuaygpKSByZXR1cm4gZ2FtZU92ZXIoMik7XG5cbiAgICAgIC8vIFJlLWFkZCBhdHRhY2sgY2xpY2sgaGFuZGxlcnMgdG8gZ3JpZFxuICAgICAgYWRkR3JpZExpc3RlbmVyKHBsYXllcjJPYmosIGF0dGFja0NsaWNrSGFuZGxlcik7XG5cbiAgICAgIC8vIEdpdmUgcGxheWVyIDIgYW5vdGhlciBzaG90IGlmIHN1Y2Nlc3NmdWwgaGl0XG4gICAgICBpZiAocGxheWVyMU9iai5nZXRCb2FyZCgpLmlzU2hpcEhpdChjb29yZCkpIGNvbnRpbnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYnVpbGRHcmlkID0gKHBhcmVudCwgcGxheWVyKSA9PiB7XG4gICAgZm9yIChsZXQgeSA9IGJvYXJkU2l6ZSAtIDE7IHkgPj0gMDsgeS0tKSB7XG4gICAgICBhcHBlbmRDaGlsZChwYXJlbnQsIFwicFwiLCBcImdyaWQteS1pbmRleFwiKS50ZXh0Q29udGVudCA9IHk7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJvYXJkU2l6ZTsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGlzU2hpcCA9IHBsYXllci5nZXRCb2FyZCgpLmlzU2hpcChbeCwgeV0pO1xuICAgICAgICBjb25zdCBzcGFjZUhpdCA9IHBsYXllci5nZXRCb2FyZCgpLmlzU3BhY2VIaXQoW3gsIHldKTtcbiAgICAgICAgY29uc3Qgc2hpcEhpdCA9IHBsYXllci5nZXRCb2FyZCgpLmlzU2hpcEhpdChbeCwgeV0pO1xuICAgICAgICBjb25zdCBjbGFzc2VzID1cbiAgICAgICAgICBcImdyaWQtY2VsbFwiICtcbiAgICAgICAgICAoc2hpcEhpdFxuICAgICAgICAgICAgPyBcIiBoaXRcIlxuICAgICAgICAgICAgOiBzcGFjZUhpdFxuICAgICAgICAgICAgPyBcIiBtaXNzXCJcbiAgICAgICAgICAgIDogaXNTaGlwICYmIHBsYXllciAhPSBwbGF5ZXIyT2JqXG4gICAgICAgICAgICA/IFwiIHNoaXBcIlxuICAgICAgICAgICAgOiBcIlwiKTtcbiAgICAgICAgY29uc3Qgc3BhY2UgPSBhcHBlbmRDaGlsZChwYXJlbnQsIFwiYnV0dG9uXCIsIGNsYXNzZXMpO1xuICAgICAgICBzcGFjZS5kYXRhc2V0LmNvbCA9IHg7XG4gICAgICAgIHNwYWNlLmRhdGFzZXQucm93ID0geTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcHBlbmRDaGlsZChwYXJlbnQsIFwicFwiLCBcImdyaWQteC1pbmRleFwiKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJvYXJkU2l6ZTsgeCsrKSB7XG4gICAgICBhcHBlbmRDaGlsZChwYXJlbnQsIFwicFwiLCBcImdyaWQteC1pbmRleFwiKS50ZXh0Q29udGVudCA9IHg7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckdyaWRzID0gKCkgPT4ge1xuICAgIFtwbGF5ZXIxT2JqLCBwbGF5ZXIyT2JqXS5mb3JFYWNoKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5ib2FyZDpudGgtb2YtdHlwZSgke2luZGV4ICsgMX0pIC5ncmlkYFxuICAgICAgKTtcbiAgICAgIGdyaWQucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICBidWlsZEdyaWQoZ3JpZCwgcGxheWVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXIgPSAoZ2FtZVBsYXllcjEsIGdhbWVQbGF5ZXIyKSA9PiB7XG4gICAgcGxheWVyMU9iaiA9IGdhbWVQbGF5ZXIxO1xuICAgIHBsYXllcjJPYmogPSBnYW1lUGxheWVyMjtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHByZXBlbmRDaGlsZChib2R5LCBcImRpdlwiLCBcImNvbnRhaW5lclwiKTtcblxuICAgIC8vIENyZWF0ZSBzdGF0dXMgbWVzc2FnZSBhbmQgYm9hcmRzXG4gICAgYXBwZW5kQ2hpbGQoY29udGFpbmVyLCBcImgxXCIsIFwic3RhdHVzXCIpO1xuICAgIGNvbnN0IGJvYXJkcyA9IGFwcGVuZENoaWxkKGNvbnRhaW5lciwgXCJkaXZcIiwgXCJib2FyZHNcIik7XG4gICAgY29uc3QgcGxheWVyMSA9IGFwcGVuZENoaWxkKGJvYXJkcywgXCJkaXZcIiwgXCJib2FyZCBwbGF5ZXItMVwiKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gYXBwZW5kQ2hpbGQoYm9hcmRzLCBcImRpdlwiLCBcImJvYXJkIHBsYXllci0yXCIpO1xuXG4gICAgY29uc3QgcGxheWVyMVRpdGxlID0gYXBwZW5kQ2hpbGQocGxheWVyMSwgXCJoMlwiLCBcInRpdGxlXCIpO1xuICAgIHBsYXllcjFUaXRsZS50ZXh0Q29udGVudCA9IFwiUGxheWVyXCI7XG4gICAgYXBwZW5kQ2hpbGQocGxheWVyMSwgXCJkaXZcIiwgXCJncmlkXCIpO1xuXG4gICAgY29uc3QgcGxheWVyMlRpdGxlID0gYXBwZW5kQ2hpbGQocGxheWVyMiwgXCJoMlwiLCBcInRpdGxlXCIpO1xuICAgIHBsYXllcjJUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXJcIjtcbiAgICBhcHBlbmRDaGlsZChwbGF5ZXIyLCBcImRpdlwiLCBcImdyaWRcIik7XG5cbiAgICByZW5kZXJHcmlkcygpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0U3RhdHVzLFxuICAgIGFkZEdyaWRMaXN0ZW5lcixcbiAgICBwbGFjZVNoaXBDbGlja0hhbmRsZXIsXG4gICAgYXR0YWNrQ2xpY2tIYW5kbGVyLFxuICAgIHJlbmRlckdyaWRzLFxuICAgIHJlbmRlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFVJIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IEFJLCBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXIvcGxheWVyXCI7XG5pbXBvcnQgeyBVSSB9IGZyb20gXCIuL3VpL3VpXCI7XG5cbi8vIGNvbnN0IHByaW50Qm9hcmRzID0gKHBsYXllcjEsIHBsYXllcjIpID0+IHtcbi8vICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tXCIpO1xuLy8gICBwbGF5ZXIxLmdldEJvYXJkKCkucHJpbnRCb2FyZCgpO1xuLy8gICBwbGF5ZXIyLmdldEJvYXJkKCkucHJpbnRCb2FyZCgpO1xuLy8gICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS1cIik7XG4vLyB9O1xuXG5jb25zdCBwbGFjZUFsbFNoaXBzID0gKHBsYXllciwgb3Bwb25lbnQsIHNlY29uZENvb3JkID0gZmFsc2UpID0+IHtcbiAgY29uc3QgYXZhaWxhYmxlU2hpcHMgPSBbMiwgMywgMywgNCwgNV07XG4gIFVJLnJlbmRlckdyaWRzKCk7XG5cbiAgaWYgKHBsYXllci5nZXRCb2FyZCgpLmdldFNoaXBzKCkubGVuZ3RoIDwgYXZhaWxhYmxlU2hpcHMubGVuZ3RoKSB7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IGF2YWlsYWJsZVNoaXBzW3BsYXllci5nZXRCb2FyZCgpLmdldFNoaXBzKCkubGVuZ3RoXTtcbiAgICBVSS5zZXRTdGF0dXMoXG4gICAgICBgQ2xpY2sgdGhlIFBsYXllciBib2FyZCB0byBzZWxlY3QgdGhlICR7XG4gICAgICAgIHNlY29uZENvb3JkID8gXCJlbmRcIiA6IFwic3RhcnRcIlxuICAgICAgfSBjb29yZGluYXRlIGZvciBhIHNoaXAgb2YgbGVuZ3RoICR7c2hpcExlbmd0aH1gXG4gICAgKTtcblxuICAgIFVJLmFkZEdyaWRMaXN0ZW5lcihwbGF5ZXIsIChlKSA9PlxuICAgICAgVUkucGxhY2VTaGlwQ2xpY2tIYW5kbGVyKGUsIHBsYXllciwgc2hpcExlbmd0aCwgKCkgPT5cbiAgICAgICAgcGxhY2VBbGxTaGlwcyhwbGF5ZXIsIG9wcG9uZW50LCAhc2Vjb25kQ29vcmQpXG4gICAgICApXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBwbGFjZUFsbFNoaXBzQXV0byhvcHBvbmVudCk7XG4gICAgVUkucmVuZGVyR3JpZHMoKTtcblxuICAgIFVJLnNldFN0YXR1cyhcIkNsaWNrIHRoZSBlbmVteSBncmlkIHRvIGZpcmUgYSBtaXNzaWxlXCIpO1xuICAgIFVJLmFkZEdyaWRMaXN0ZW5lcihvcHBvbmVudCwgVUkuYXR0YWNrQ2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIC8vIGZvciAobGV0IHNoaXBMZW5ndGggb2YgYXZhaWxhYmxlU2hpcHMpIHtcbiAgLy8gICBmb3IgKDs7KSB7XG5cbiAgLy8gICAgIC8vIGNvbnN0IGNvb3JkcyA9IHJlcXVlc3RDb29yZGluYXRlcyhcbiAgLy8gICAgIC8vICAgYEVudGVyIGNvb3JkaW5hdGVzIGZvciBhIHNoaXAgb2YgbGVuZ3RoICR7c2hpcExlbmd0aH0gaW4gZm9ybWF0IFtbeDEseTFdLFt4Mix5Ml1dYFxuICAvLyAgICAgLy8gKTtcblxuICAvLyAgICAgLy8gaWYgKCFjb29yZHMpIGNvbnRpbnVlO1xuXG4gIC8vICAgICAvLyBjb25zdCBtaW5YID0gTWF0aC5taW4oY29vcmRzWzBdWzBdLCBjb29yZHNbMV1bMF0pO1xuICAvLyAgICAgLy8gY29uc3QgbWF4WCA9IE1hdGgubWF4KGNvb3Jkc1swXVswXSwgY29vcmRzWzFdWzBdKTtcbiAgLy8gICAgIC8vIGNvbnN0IG1pblkgPSBNYXRoLm1pbihjb29yZHNbMF1bMV0sIGNvb3Jkc1sxXVsxXSk7XG4gIC8vICAgICAvLyBjb25zdCBtYXhZID0gTWF0aC5tYXgoY29vcmRzWzBdWzFdLCBjb29yZHNbMV1bMV0pO1xuXG4gIC8vICAgICAvLyBpZiAobWF4WCAtIG1pblggKyAobWF4WSAtIG1pblkpICE9IHNoaXBMZW5ndGgpIGNvbnRpbnVlO1xuICAvLyAgICAgLy8gaWYgKCFwbGF5ZXIuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoLi4uY29vcmRzKSkgY29udGludWU7XG5cbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFxuICAvLyAgICAgLy8gICBgU2hpcCBvZiBsZW5ndGggJHtzaGlwTGVuZ3RofSBwbGFjZWQgYXQgJHtjb29yZHNbMF19LCAke2Nvb3Jkc1sxXX1gXG4gIC8vICAgICAvLyApO1xuXG4gIC8vICAgICAvLyBicmVhaztcbiAgLy8gICB9XG4gIC8vIH1cbn07XG5cbmNvbnN0IHBsYWNlQWxsU2hpcHNBdXRvID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBhdmFpbGFibGVTaGlwcyA9IFsyLCAzLCAzLCA0LCA1XTtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBwbGF5ZXIuZ2V0Qm9hcmQoKTtcblxuICBmb3IgKGxldCBzaGlwTGVuZ3RoIG9mIGF2YWlsYWJsZVNoaXBzKSB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgaXNIb3Jpem9udGFsID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcblxuICAgICAgbGV0IHggPSAtMTtcbiAgICAgIGxldCB5ID0gLTE7XG4gICAgICBsZXQgc2hpcFBsYWNlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAocGxheWVyQm9hcmQuZ2V0V2lkdGgoKSAtIHNoaXBMZW5ndGgpKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBsYXllckJvYXJkLmdldEhlaWdodCgpKTtcbiAgICAgICAgc2hpcFBsYWNlZCA9IHBsYXllckJvYXJkLnBsYWNlU2hpcChbeCwgeV0sIFt4ICsgc2hpcExlbmd0aCAtIDEsIHldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwbGF5ZXJCb2FyZC5nZXRXaWR0aCgpKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChwbGF5ZXJCb2FyZC5nZXRIZWlnaHQoKSAtIHNoaXBMZW5ndGgpKTtcbiAgICAgICAgc2hpcFBsYWNlZCA9IHBsYXllckJvYXJkLnBsYWNlU2hpcChbeCwgeV0sIFt4LCB5ICsgc2hpcExlbmd0aCAtIDFdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzaGlwUGxhY2VkKSBjb250aW51ZTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBHYW1lID0gKCgpID0+IHtcbiAgbGV0IHBsYXllcjEgPSBudWxsO1xuICBsZXQgcGxheWVyMiA9IG51bGw7XG5cbiAgY29uc3QgZ2V0UGxheWVyMSA9ICgpID0+IHBsYXllcjE7XG4gIGNvbnN0IGdldFBsYXllcjIgPSAoKSA9PiBwbGF5ZXIyO1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgcGxheWVyMSA9IFBsYXllcigpO1xuICAgIHBsYXllcjIgPSBBSSgpO1xuICB9O1xuXG4gIGNvbnN0IHBsYXkgPSAoKSA9PiB7XG4gICAgcGxhY2VBbGxTaGlwcyhwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRQbGF5ZXIxLCBnZXRQbGF5ZXIyLCBpbml0LCBwbGF5IH07XG59KSgpO1xuXG4vLyBHYW1lLnBsYXkoKTtcbkdhbWUuaW5pdCgpO1xuVUkucmVuZGVyKEdhbWUuZ2V0UGxheWVyMSgpLCBHYW1lLmdldFBsYXllcjIoKSk7XG5HYW1lLnBsYXkoKTtcblxuZXhwb3J0IHsgR2FtZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9