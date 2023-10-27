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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;;;EAGE,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EAEA,yCAAA;EACA,eAAA;EAEA,oBAAA;EACA,sBAAA;EACA,oBAAA;AAHF;;AAMA;EACE,WAAA;EACA,YAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAJF;;AASA;EACE,UAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAPF;AASE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAPJ;AASI;EACE,mCAAA;EACA,UAAA;EAEA,eAAA;AARN;AAWI;EACE,aAAA;EACA,qDAAA;EACA,wDAAA;EACA,qBAAA;EACA,mBAAA;AATN;AAWM;EACE,4BAAA;EACA,6BAAA;EAEA,2BAAA;EAEA,uBAAA;EACA,mCAAA;AAXR;AAaQ;EACE,0BAAA;AAXV;AAcQ;EACE,uBAAA;AAZV;AAeQ;EACE,qBAAA;AAbV;AAgBQ;EACE,sBAAA;AAdV;AAiBQ;EACE,wBAAA;AAfV","sourcesContent":["// ROOT STYLES\n\n:root,\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n\n  --border-radius: 2px;\n  --grid-cell-size: 30px;\n  --grid-cell-gap: 5px;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n// BOARDS\n\n.boards {\n  width: 80%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n\n  .board {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n\n    .title {\n      margin: 0 0 0 var(--grid-cell-size);\n      padding: 0;\n\n      font-size: 3rem;\n    }\n\n    .grid {\n      display: grid;\n      grid-template-rows: repeat(11, var(--grid-cell-size));\n      grid-template-columns: repeat(11, var(--grid-cell-size));\n      justify-items: center;\n      align-items: center;\n\n      .grid-cell {\n        width: var(--grid-cell-size);\n        height: var(--grid-cell-size);\n\n        background-color: lightgrey;\n\n        border: black solid 1px;\n        border-radius: var(--border-radius);\n\n        &:hover {\n          background-color: darkgrey;\n        }\n\n        &:active {\n          background-color: black;\n        }\n\n        &.hit {\n          background-color: red;\n        }\n\n        &.miss {\n          background-color: blue;\n        }\n\n        &.ship {\n          background-color: yellow;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

  const attackClickHandler = (e) => {
    const x = e.target.dataset.col;
    const y = e.target.dataset.row;

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
          (shipHit ? " hit" : spaceHit ? " miss" : isShip ? " ship" : "");
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
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(container, "h1", "status").textContent = "Placeholder";
    const boards = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(container, "div", "boards");
    const player1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(boards, "div", "board player-1");
    const player2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(boards, "div", "board player-2");

    const player1Title = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(player1, "h2", "title");
    player1Title.textContent = "Player 1";
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(player1, "div", "grid");

    const player2Title = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(player2, "h2", "title");
    player2Title.textContent = "Player 2";
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(player2, "div", "grid");

    renderGrids();
  };

  return {
    setStatus,
    addGridListener,
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




const printBoards = (player1, player2) => {
  console.log("----------");
  player1.getBoard().printBoard();
  player2.getBoard().printBoard();
  console.log("----------");
};

const requestCoordinates = (msg) => {
  const coordList = [];
  let coords = [];
  let promptMsg = msg;

  for (;;) {
    const coordsRaw = prompt(promptMsg);
    if (!coordsRaw) return [[]];

    coords = coordsRaw
      .replace("[", "")
      .replace("]", "")
      .replace(" ", "")
      .split(",")
      .map((coord) => Number(coord));

    let retry = coords.length % 2 !== 0;
    for (let value of coords) {
      if (typeof value !== "number" || isNaN(value)) {
        retry = true;
        promptMsg = "Invalid format. Try again!\n" + msg;
        break;
      }
    }

    if (retry) continue;

    break;
  }

  for (let i = 0; i < coords.length; i += 2) {
    coordList.push([coords[i], coords[i + 1]]);
  }

  return coordList;
};

const placeAllShips = (player) => {
  const availableShips = [2, 3, 3, 4, 5];

  for (let shipLength of availableShips) {
    for (;;) {
      const coords = requestCoordinates(
        `Enter coordinates for a ship of length ${shipLength} in format [[x1,y1],[x2,y2]]`
      );

      if (!coords) continue;

      const minX = Math.min(coords[0][0], coords[1][0]);
      const maxX = Math.max(coords[0][0], coords[1][0]);
      const minY = Math.min(coords[0][1], coords[1][1]);
      const maxY = Math.max(coords[0][1], coords[1][1]);

      if (maxX - minX + (maxY - minY) != shipLength) continue;
      if (!player.getBoard().placeShip(...coords)) continue;

      console.log(
        `Ship of length ${shipLength} placed at ${coords[0]}, ${coords[1]}`
      );

      break;
    }
  }
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
    // placeAllShips(player);
    placeAllShipsAuto(player1);
    placeAllShipsAuto(player2);

    _ui_ui__WEBPACK_IMPORTED_MODULE_2__.UI.renderGrids();
    _ui_ui__WEBPACK_IMPORTED_MODULE_2__.UI.addGridListener(player2, _ui_ui__WEBPACK_IMPORTED_MODULE_2__.UI.attackClickHandler);
  };

  return { getPlayer1, getPlayer2, init, play };
})();

// Game.play();
Game.init();
_ui_ui__WEBPACK_IMPORTED_MODULE_2__.UI.render(Game.getPlayer1(), Game.getPlayer2());
Game.play();

// UI.setStatus("Select positions for ship of length 2");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLHNEQUFNO0FBQ3BCLGNBQWMsa0RBQUU7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxzQ0FBRTtBQUNOLElBQUksc0NBQUUsMEJBQTBCLHNDQUFFO0FBQ2xDOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxzQ0FBRTtBQUNGOztBQUVBOztBQUVnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3QsXG5odG1sLFxuYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAycHg7XG4gIC0tZ3JpZC1jZWxsLXNpemU6IDMwcHg7XG4gIC0tZ3JpZC1jZWxsLWdhcDogNXB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib2FyZHMge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0MHB4O1xufVxuLmJvYXJkcyAuYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuLmJvYXJkcyAuYm9hcmQgLnRpdGxlIHtcbiAgbWFyZ2luOiAwIDAgMCB2YXIoLS1ncmlkLWNlbGwtc2l6ZSk7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cbi5ib2FyZHMgLmJvYXJkIC5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIHZhcigtLWdyaWQtY2VsbC1zaXplKSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCB2YXIoLS1ncmlkLWNlbGwtc2l6ZSkpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm9hcmRzIC5ib2FyZCAuZ3JpZCAuZ3JpZC1jZWxsIHtcbiAgd2lkdGg6IHZhcigtLWdyaWQtY2VsbC1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1ncmlkLWNlbGwtc2l6ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuLmJvYXJkcyAuYm9hcmQgLmdyaWQgLmdyaWQtY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xufVxuLmJvYXJkcyAuYm9hcmQgLmdyaWQgLmdyaWQtY2VsbDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi5ib2FyZHMgLmJvYXJkIC5ncmlkIC5ncmlkLWNlbGwuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLmJvYXJkcyAuYm9hcmQgLmdyaWQgLmdyaWQtY2VsbC5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5ib2FyZHMgLmJvYXJkIC5ncmlkIC5ncmlkLWNlbGwuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEseUNBQUE7RUFDQSxlQUFBO0VBRUEsb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFTQTtFQUNFLFVBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQVBGO0FBU0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQVBKO0FBU0k7RUFDRSxtQ0FBQTtFQUNBLFVBQUE7RUFFQSxlQUFBO0FBUk47QUFXSTtFQUNFLGFBQUE7RUFDQSxxREFBQTtFQUNBLHdEQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQVROO0FBV007RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBRUEsMkJBQUE7RUFFQSx1QkFBQTtFQUNBLG1DQUFBO0FBWFI7QUFhUTtFQUNFLDBCQUFBO0FBWFY7QUFjUTtFQUNFLHVCQUFBO0FBWlY7QUFlUTtFQUNFLHFCQUFBO0FBYlY7QUFnQlE7RUFDRSxzQkFBQTtBQWRWO0FBaUJRO0VBQ0Usd0JBQUE7QUFmVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBST09UIFNUWUxFU1xcblxcbjpyb290LFxcbmh0bWwsXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG5cXG4gIC0tYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgLS1ncmlkLWNlbGwtc2l6ZTogMzBweDtcXG4gIC0tZ3JpZC1jZWxsLWdhcDogNXB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8vIEJPQVJEU1xcblxcbi5ib2FyZHMge1xcbiAgd2lkdGg6IDgwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcblxcbiAgLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgLnRpdGxlIHtcXG4gICAgICBtYXJnaW46IDAgMCAwIHZhcigtLWdyaWQtY2VsbC1zaXplKTtcXG4gICAgICBwYWRkaW5nOiAwO1xcblxcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgfVxcblxcbiAgICAuZ3JpZCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgdmFyKC0tZ3JpZC1jZWxsLXNpemUpKTtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgdmFyKC0tZ3JpZC1jZWxsLXNpemUpKTtcXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAuZ3JpZC1jZWxsIHtcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1ncmlkLWNlbGwtc2l6ZSk7XFxuICAgICAgICBoZWlnaHQ6IHZhcigtLWdyaWQtY2VsbC1zaXplKTtcXG5cXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG5cXG4gICAgICAgIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5oaXQge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLm1pc3Mge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5zaGlwIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi4vc2hpcC9zaGlwXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gW107XG4gIGNvbnN0IHNoaXBzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgYm9hcmRbaV0gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKSB7XG4gICAgICBib2FyZFtpXVtqXSA9IHsgaGl0OiBmYWxzZSwgc2hpcDogbnVsbCB9O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldFdpZHRoID0gKCkgPT4gd2lkdGg7XG4gIGNvbnN0IGdldEhlaWdodCA9ICgpID0+IGhlaWdodDtcbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiBzaGlwcztcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoY29vcmQxLCBjb29yZDIpID0+IHtcbiAgICBjb25zdCBtaW5YID0gTWF0aC5taW4oY29vcmQxWzBdLCBjb29yZDJbMF0pO1xuICAgIGNvbnN0IG1heFggPSBNYXRoLm1heChjb29yZDFbMF0sIGNvb3JkMlswXSk7XG4gICAgY29uc3QgbWluWSA9IE1hdGgubWluKGNvb3JkMVsxXSwgY29vcmQyWzFdKTtcbiAgICBjb25zdCBtYXhZID0gTWF0aC5tYXgoY29vcmQxWzFdLCBjb29yZDJbMV0pO1xuXG4gICAgLy8gT3V0IG9mIGJvdW5kc1xuICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID49IHdpZHRoIHx8IG1pblkgPCAwIHx8IG1heFkgPj0gaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gRGlhZ29uYWxcbiAgICBpZiAoIShtaW5YID09PSBtYXhYIHx8IG1pblkgPT09IG1heFkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gT3ZlcmxhcFxuICAgIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgeSsrKSB7XG4gICAgICAgIGlmIChib2FyZFt4XVt5XS5zaGlwKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcCA9IFNoaXAobWF4WCAtIG1pblggKyAobWF4WSAtIG1pblkpICsgMSk7XG4gICAgc2hpcHMucHVzaChzaGlwKTtcblxuICAgIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgeSsrKSB7XG4gICAgICAgIGJvYXJkW3hdW3ldLnNoaXAgPSBzaGlwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmQpID0+IHtcbiAgICBsZXQgeCA9IGNvb3JkWzBdO1xuICAgIGxldCB5ID0gY29vcmRbMV07XG5cbiAgICAvLyBPdXQgb2YgYm91bmRzXG4gICAgaWYgKHggPCAwIHx8IHggPj0gd2lkdGggfHwgeSA8IDAgfHwgeSA+PSBoZWlnaHQpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIEFscmVhZHkgaGl0XG4gICAgaWYgKGJvYXJkW3hdW3ldLmhpdCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgYm9hcmRbeF1beV0uaGl0ID0gdHJ1ZTtcblxuICAgIGlmIChib2FyZFt4XVt5XS5zaGlwKSB7XG4gICAgICBib2FyZFt4XVt5XS5zaGlwLmhpdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrQ29vcmRpbmF0ZSA9IChjb29yZCwgZnVuYykgPT4ge1xuICAgIGxldCB4ID0gY29vcmRbMF07XG4gICAgbGV0IHkgPSBjb29yZFsxXTtcblxuICAgIGlmICh4IDwgMCB8fCB4ID49IHdpZHRoIHx8IHkgPCAwIHx8IHkgPj0gaGVpZ2h0KSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gZnVuYyhjb29yZCk7XG4gIH07XG5cbiAgY29uc3QgaXNTaGlwID0gKGNvb3JkKSA9PiB7XG4gICAgcmV0dXJuIGNoZWNrQ29vcmRpbmF0ZShjb29yZCwgKGNvb3JkKSA9PiAhIWJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0uc2hpcCk7XG4gIH07XG5cbiAgY29uc3QgaXNTcGFjZUhpdCA9IChjb29yZCkgPT4ge1xuICAgIHJldHVybiBjaGVja0Nvb3JkaW5hdGUoY29vcmQsIChjb29yZCkgPT4gYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXS5oaXQpO1xuICB9O1xuXG4gIGNvbnN0IGlzU2hpcEhpdCA9IChjb29yZCkgPT4ge1xuICAgIHJldHVybiBpc1NwYWNlSGl0KGNvb3JkKSAmJiBpc1NoaXAoY29vcmQpO1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcHMucmVkdWNlKChhbGxTdW5rLCBzaGlwKSA9PiBhbGxTdW5rICYmIHNoaXAuaXNTdW5rKCksIHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IHByaW50Qm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3V0cHV0ID0gW107XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICBvdXRwdXQucHVzaChoZWlnaHQgLSB5IC0gMSk7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgb3V0cHV0LnB1c2goXG4gICAgICAgICAgYm9hcmRbeF1baGVpZ2h0IC0geSAtIDFdLmhpdFxuICAgICAgICAgICAgPyBcIlhcIlxuICAgICAgICAgICAgOiBib2FyZFt4XVtoZWlnaHQgLSB5IC0gMV0uc2hpcFxuICAgICAgICAgICAgPyBcIk9cIlxuICAgICAgICAgICAgOiBcIiBcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgb3V0cHV0LnB1c2goXCJcXG5cIik7XG4gICAgfVxuXG4gICAgb3V0cHV0LnB1c2goXCIgXCIpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykgb3V0cHV0LnB1c2goeCk7XG5cbiAgICBjb25zb2xlLmxvZyhvdXRwdXQuam9pbihcIlwiKSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRXaWR0aCxcbiAgICBnZXRIZWlnaHQsXG4gICAgZ2V0U2hpcHMsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgaXNTaGlwLFxuICAgIGlzU3BhY2VIaXQsXG4gICAgaXNTaGlwSGl0LFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICBwcmludEJvYXJkLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJjb25zdCBjcmVhdGVDaGlsZCA9IChwYXJlbnRPYmosIGNoaWxkVHlwZSwgY2hpbGRDbGFzcykgPT4ge1xuICBjb25zdCBjaGlsZE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY2hpbGRUeXBlKTtcblxuICBsZXQgY2xhc3NlcyA9XG4gICAgdHlwZW9mIGNoaWxkQ2xhc3MgPT09IFwic3RyaW5nXCIgPyBjaGlsZENsYXNzLnNwbGl0KC9cXHMrLykgOiBjaGlsZENsYXNzO1xuXG4gIGNsYXNzZXMuZm9yRWFjaCgoY2xzKSA9PiB7XG4gICAgaWYgKGNscy5sZW5ndGggPiAwKSB7XG4gICAgICBjaGlsZE9iai5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGRPYmo7XG59O1xuXG5jb25zdCBwcmVwZW5kQ2hpbGQgPSAocGFyZW50T2JqLCBjaGlsZFR5cGUsIGNoaWxkQ2xhc3MgPSBcIlwiKSA9PiB7XG4gIGNvbnN0IGNoaWxkT2JqID0gY3JlYXRlQ2hpbGQocGFyZW50T2JqLCBjaGlsZFR5cGUsIGNoaWxkQ2xhc3MpO1xuICBwYXJlbnRPYmoucHJlcGVuZChjaGlsZE9iaik7XG4gIHJldHVybiBjaGlsZE9iajtcbn07XG5cbmNvbnN0IGFwcGVuZENoaWxkID0gKHBhcmVudE9iaiwgY2hpbGRUeXBlLCBjaGlsZENsYXNzID0gXCJcIikgPT4ge1xuICBjb25zdCBjaGlsZE9iaiA9IGNyZWF0ZUNoaWxkKHBhcmVudE9iaiwgY2hpbGRUeXBlLCBjaGlsZENsYXNzKTtcbiAgcGFyZW50T2JqLmFwcGVuZENoaWxkKGNoaWxkT2JqKTtcbiAgcmV0dXJuIGNoaWxkT2JqO1xufTtcblxuZXhwb3J0IHsgcHJlcGVuZENoaWxkLCBhcHBlbmRDaGlsZCB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4uL2dhbWVib2FyZC9nYW1lYm9hcmRcIjtcblxuY29uc3QgYm9hcmRTaXplID0gMTA7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcbiAgLy8gVXNlIDEweDEwIGJvYXJkXG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZChib2FyZFNpemUsIGJvYXJkU2l6ZSk7XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBnYW1lYm9hcmQ7XG4gIGNvbnN0IGF0dGFja1BsYXllciA9IChwbGF5ZXIsIGNvb3JkKSA9PiB7XG4gICAgaWYgKGNvb3JkLmxlbmd0aCAhPT0gMikgcmV0dXJuIGZhbHNlO1xuXG4gICAgcGxheWVyLmdldEJvYXJkKCkucmVjZWl2ZUF0dGFjayhjb29yZCk7XG4gICAgcmV0dXJuIHBsYXllci5nZXRCb2FyZCgpLmlzU3BhY2VIaXQoY29vcmQpO1xuICB9O1xuXG4gIHJldHVybiB7IGF0dGFja1BsYXllciwgZ2V0Qm9hcmQgfTtcbn07XG5cbmNvbnN0IEFJID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIoKTtcblxuICBjb25zdCBnZW5lcmF0ZUNvb3JkaW5hdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdlbmVyYXRlQ29vcmRpbmF0ZSxcbiAgICBhdHRhY2tQbGF5ZXI6IHBsYXllci5hdHRhY2tQbGF5ZXIsXG4gICAgZ2V0Qm9hcmQ6IHBsYXllci5nZXRCb2FyZCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXllciwgQUkgfTtcbiIsImNvbnN0IFNoaXAgPSAoaW5pdGlhbEhwKSA9PiB7XG4gIGxldCBocCA9IGluaXRpYWxIcDtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaWYgKGhwID4gMCkge1xuICAgICAgaHAtLTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gaHAgPD0gMDtcblxuICByZXR1cm4geyBoaXQsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiaW1wb3J0IHsgcHJlcGVuZENoaWxkLCBhcHBlbmRDaGlsZCB9IGZyb20gXCIuLi9oZWxwZXJcIjtcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICBjb25zdCBib2FyZFNpemUgPSAxMDsgLy8gV2lkdGggYW5kIGhlaWdodCBvZiBnYW1lIGJvYXJkXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgbGV0IHBsYXllcjFPYmogPSBudWxsO1xuICBsZXQgcGxheWVyMk9iaiA9IG51bGw7XG5cbiAgY29uc3Qgc2V0U3RhdHVzID0gKG1zZykgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdHVzXCIpLnRleHRDb250ZW50ID0gbXNnO1xuICB9O1xuXG4gIGNvbnN0IGdhbWVPdmVyID0gKHBsYXllck51bWJlcikgPT4ge1xuICAgIHNldFN0YXR1cyhgUGxheWVyICR7cGxheWVyTnVtYmVyfSBXaW5zIWApO1xuICB9O1xuXG4gIGNvbnN0IGFkZEdyaWRMaXN0ZW5lciA9IChwbGF5ZXIsIGhhbmRsZXIpID0+IHtcbiAgICBbcGxheWVyMU9iaiwgcGxheWVyMk9ial0uZm9yRWFjaCgocCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChwID09PSBwbGF5ZXIpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5ib2FyZDpudGgtb2YtdHlwZSgke2luZGV4ICsgMX0pIC5ncmlkYFxuICAgICAgICApO1xuICAgICAgICBncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZC1jZWxsXCIpLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrQ2xpY2tIYW5kbGVyID0gKGUpID0+IHtcbiAgICBjb25zdCB4ID0gZS50YXJnZXQuZGF0YXNldC5jb2w7XG4gICAgY29uc3QgeSA9IGUudGFyZ2V0LmRhdGFzZXQucm93O1xuXG4gICAgLy8gQWxyZWFkeSBoaXRcbiAgICBpZiAocGxheWVyMk9iai5nZXRCb2FyZCgpLmlzU3BhY2VIaXQoW3gsIHldKSkgcmV0dXJuO1xuXG4gICAgLy8gQ2hlY2sgZm9yIGludmFsaWQgYXR0YWNrXG4gICAgaWYgKCFwbGF5ZXIxT2JqLmF0dGFja1BsYXllcihwbGF5ZXIyT2JqLCBbeCwgeV0pKSByZXR1cm47XG5cbiAgICAvLyBSZWxvYWQgZ3JpZFxuICAgIFVJLnJlbmRlckdyaWRzKCk7XG5cbiAgICAvLyBDaGVjayBpZiBwbGF5ZXIgMSB3b25cbiAgICBpZiAocGxheWVyMk9iai5nZXRCb2FyZCgpLmFsbFNoaXBzU3VuaygpKSByZXR1cm4gZ2FtZU92ZXIoMSk7XG5cbiAgICAvLyBSZS1hZGQgYXR0YWNrIGNsaWNrIGhhbmRsZXJzIHRvIGdyaWRcbiAgICBhZGRHcmlkTGlzdGVuZXIocGxheWVyMk9iaiwgYXR0YWNrQ2xpY2tIYW5kbGVyKTtcblxuICAgIC8vIEdpdmUgcGxheWVyIDEgYW5vdGhlciBzaG90IGlmIHN1Y2Nlc3NmdWwgaGl0XG4gICAgaWYgKHBsYXllcjJPYmouZ2V0Qm9hcmQoKS5pc1NoaXBIaXQoW3gsIHldKSkgcmV0dXJuO1xuXG4gICAgLy8gUGxheWVyIDIncyB0dXJuXG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgY29vcmQgPSBwbGF5ZXIyT2JqLmdlbmVyYXRlQ29vcmRpbmF0ZSgpO1xuXG4gICAgICAvLyBBbHJlYWR5IGhpdFxuICAgICAgaWYgKHBsYXllcjFPYmouZ2V0Qm9hcmQoKS5pc1NwYWNlSGl0KGNvb3JkKSkgY29udGludWU7XG5cbiAgICAgIC8vIENoZWNrIGZvciBpbnZhbGlkIGF0dGFja1xuICAgICAgaWYgKCFwbGF5ZXIyT2JqLmF0dGFja1BsYXllcihwbGF5ZXIxT2JqLCBjb29yZCkpIGNvbnRpbnVlO1xuXG4gICAgICAvLyBSZWxvYWQgZ3JpZFxuICAgICAgVUkucmVuZGVyR3JpZHMoKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgcGxheWVyIDIgd29uXG4gICAgICBpZiAocGxheWVyMU9iai5nZXRCb2FyZCgpLmFsbFNoaXBzU3VuaygpKSByZXR1cm4gZ2FtZU92ZXIoMik7XG5cbiAgICAgIC8vIFJlLWFkZCBhdHRhY2sgY2xpY2sgaGFuZGxlcnMgdG8gZ3JpZFxuICAgICAgYWRkR3JpZExpc3RlbmVyKHBsYXllcjJPYmosIGF0dGFja0NsaWNrSGFuZGxlcik7XG5cbiAgICAgIC8vIEdpdmUgcGxheWVyIDIgYW5vdGhlciBzaG90IGlmIHN1Y2Nlc3NmdWwgaGl0XG4gICAgICBpZiAocGxheWVyMU9iai5nZXRCb2FyZCgpLmlzU2hpcEhpdChjb29yZCkpIGNvbnRpbnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYnVpbGRHcmlkID0gKHBhcmVudCwgcGxheWVyKSA9PiB7XG4gICAgZm9yIChsZXQgeSA9IGJvYXJkU2l6ZSAtIDE7IHkgPj0gMDsgeS0tKSB7XG4gICAgICBhcHBlbmRDaGlsZChwYXJlbnQsIFwicFwiLCBcImdyaWQteS1pbmRleFwiKS50ZXh0Q29udGVudCA9IHk7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJvYXJkU2l6ZTsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGlzU2hpcCA9IHBsYXllci5nZXRCb2FyZCgpLmlzU2hpcChbeCwgeV0pO1xuICAgICAgICBjb25zdCBzcGFjZUhpdCA9IHBsYXllci5nZXRCb2FyZCgpLmlzU3BhY2VIaXQoW3gsIHldKTtcbiAgICAgICAgY29uc3Qgc2hpcEhpdCA9IHBsYXllci5nZXRCb2FyZCgpLmlzU2hpcEhpdChbeCwgeV0pO1xuICAgICAgICBjb25zdCBjbGFzc2VzID1cbiAgICAgICAgICBcImdyaWQtY2VsbFwiICtcbiAgICAgICAgICAoc2hpcEhpdCA/IFwiIGhpdFwiIDogc3BhY2VIaXQgPyBcIiBtaXNzXCIgOiBpc1NoaXAgPyBcIiBzaGlwXCIgOiBcIlwiKTtcbiAgICAgICAgY29uc3Qgc3BhY2UgPSBhcHBlbmRDaGlsZChwYXJlbnQsIFwiYnV0dG9uXCIsIGNsYXNzZXMpO1xuICAgICAgICBzcGFjZS5kYXRhc2V0LmNvbCA9IHg7XG4gICAgICAgIHNwYWNlLmRhdGFzZXQucm93ID0geTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcHBlbmRDaGlsZChwYXJlbnQsIFwicFwiLCBcImdyaWQteC1pbmRleFwiKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJvYXJkU2l6ZTsgeCsrKSB7XG4gICAgICBhcHBlbmRDaGlsZChwYXJlbnQsIFwicFwiLCBcImdyaWQteC1pbmRleFwiKS50ZXh0Q29udGVudCA9IHg7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckdyaWRzID0gKCkgPT4ge1xuICAgIFtwbGF5ZXIxT2JqLCBwbGF5ZXIyT2JqXS5mb3JFYWNoKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5ib2FyZDpudGgtb2YtdHlwZSgke2luZGV4ICsgMX0pIC5ncmlkYFxuICAgICAgKTtcbiAgICAgIGdyaWQucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICBidWlsZEdyaWQoZ3JpZCwgcGxheWVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXIgPSAoZ2FtZVBsYXllcjEsIGdhbWVQbGF5ZXIyKSA9PiB7XG4gICAgcGxheWVyMU9iaiA9IGdhbWVQbGF5ZXIxO1xuICAgIHBsYXllcjJPYmogPSBnYW1lUGxheWVyMjtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHByZXBlbmRDaGlsZChib2R5LCBcImRpdlwiLCBcImNvbnRhaW5lclwiKTtcblxuICAgIC8vIENyZWF0ZSBzdGF0dXMgbWVzc2FnZSBhbmQgYm9hcmRzXG4gICAgYXBwZW5kQ2hpbGQoY29udGFpbmVyLCBcImgxXCIsIFwic3RhdHVzXCIpLnRleHRDb250ZW50ID0gXCJQbGFjZWhvbGRlclwiO1xuICAgIGNvbnN0IGJvYXJkcyA9IGFwcGVuZENoaWxkKGNvbnRhaW5lciwgXCJkaXZcIiwgXCJib2FyZHNcIik7XG4gICAgY29uc3QgcGxheWVyMSA9IGFwcGVuZENoaWxkKGJvYXJkcywgXCJkaXZcIiwgXCJib2FyZCBwbGF5ZXItMVwiKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gYXBwZW5kQ2hpbGQoYm9hcmRzLCBcImRpdlwiLCBcImJvYXJkIHBsYXllci0yXCIpO1xuXG4gICAgY29uc3QgcGxheWVyMVRpdGxlID0gYXBwZW5kQ2hpbGQocGxheWVyMSwgXCJoMlwiLCBcInRpdGxlXCIpO1xuICAgIHBsYXllcjFUaXRsZS50ZXh0Q29udGVudCA9IFwiUGxheWVyIDFcIjtcbiAgICBhcHBlbmRDaGlsZChwbGF5ZXIxLCBcImRpdlwiLCBcImdyaWRcIik7XG5cbiAgICBjb25zdCBwbGF5ZXIyVGl0bGUgPSBhcHBlbmRDaGlsZChwbGF5ZXIyLCBcImgyXCIsIFwidGl0bGVcIik7XG4gICAgcGxheWVyMlRpdGxlLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMlwiO1xuICAgIGFwcGVuZENoaWxkKHBsYXllcjIsIFwiZGl2XCIsIFwiZ3JpZFwiKTtcblxuICAgIHJlbmRlckdyaWRzKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRTdGF0dXMsXG4gICAgYWRkR3JpZExpc3RlbmVyLFxuICAgIGF0dGFja0NsaWNrSGFuZGxlcixcbiAgICByZW5kZXJHcmlkcyxcbiAgICByZW5kZXIsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBVSSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBBSSwgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyL3BsYXllclwiO1xuaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi91aS91aVwiO1xuXG5jb25zdCBwcmludEJvYXJkcyA9IChwbGF5ZXIxLCBwbGF5ZXIyKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLVwiKTtcbiAgcGxheWVyMS5nZXRCb2FyZCgpLnByaW50Qm9hcmQoKTtcbiAgcGxheWVyMi5nZXRCb2FyZCgpLnByaW50Qm9hcmQoKTtcbiAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tXCIpO1xufTtcblxuY29uc3QgcmVxdWVzdENvb3JkaW5hdGVzID0gKG1zZykgPT4ge1xuICBjb25zdCBjb29yZExpc3QgPSBbXTtcbiAgbGV0IGNvb3JkcyA9IFtdO1xuICBsZXQgcHJvbXB0TXNnID0gbXNnO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBjb29yZHNSYXcgPSBwcm9tcHQocHJvbXB0TXNnKTtcbiAgICBpZiAoIWNvb3Jkc1JhdykgcmV0dXJuIFtbXV07XG5cbiAgICBjb29yZHMgPSBjb29yZHNSYXdcbiAgICAgIC5yZXBsYWNlKFwiW1wiLCBcIlwiKVxuICAgICAgLnJlcGxhY2UoXCJdXCIsIFwiXCIpXG4gICAgICAucmVwbGFjZShcIiBcIiwgXCJcIilcbiAgICAgIC5zcGxpdChcIixcIilcbiAgICAgIC5tYXAoKGNvb3JkKSA9PiBOdW1iZXIoY29vcmQpKTtcblxuICAgIGxldCByZXRyeSA9IGNvb3Jkcy5sZW5ndGggJSAyICE9PSAwO1xuICAgIGZvciAobGV0IHZhbHVlIG9mIGNvb3Jkcykge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIiB8fCBpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgcmV0cnkgPSB0cnVlO1xuICAgICAgICBwcm9tcHRNc2cgPSBcIkludmFsaWQgZm9ybWF0LiBUcnkgYWdhaW4hXFxuXCIgKyBtc2c7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXRyeSkgY29udGludWU7XG5cbiAgICBicmVhaztcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgY29vcmRMaXN0LnB1c2goW2Nvb3Jkc1tpXSwgY29vcmRzW2kgKyAxXV0pO1xuICB9XG5cbiAgcmV0dXJuIGNvb3JkTGlzdDtcbn07XG5cbmNvbnN0IHBsYWNlQWxsU2hpcHMgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IGF2YWlsYWJsZVNoaXBzID0gWzIsIDMsIDMsIDQsIDVdO1xuXG4gIGZvciAobGV0IHNoaXBMZW5ndGggb2YgYXZhaWxhYmxlU2hpcHMpIHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCBjb29yZHMgPSByZXF1ZXN0Q29vcmRpbmF0ZXMoXG4gICAgICAgIGBFbnRlciBjb29yZGluYXRlcyBmb3IgYSBzaGlwIG9mIGxlbmd0aCAke3NoaXBMZW5ndGh9IGluIGZvcm1hdCBbW3gxLHkxXSxbeDIseTJdXWBcbiAgICAgICk7XG5cbiAgICAgIGlmICghY29vcmRzKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgbWluWCA9IE1hdGgubWluKGNvb3Jkc1swXVswXSwgY29vcmRzWzFdWzBdKTtcbiAgICAgIGNvbnN0IG1heFggPSBNYXRoLm1heChjb29yZHNbMF1bMF0sIGNvb3Jkc1sxXVswXSk7XG4gICAgICBjb25zdCBtaW5ZID0gTWF0aC5taW4oY29vcmRzWzBdWzFdLCBjb29yZHNbMV1bMV0pO1xuICAgICAgY29uc3QgbWF4WSA9IE1hdGgubWF4KGNvb3Jkc1swXVsxXSwgY29vcmRzWzFdWzFdKTtcblxuICAgICAgaWYgKG1heFggLSBtaW5YICsgKG1heFkgLSBtaW5ZKSAhPSBzaGlwTGVuZ3RoKSBjb250aW51ZTtcbiAgICAgIGlmICghcGxheWVyLmdldEJvYXJkKCkucGxhY2VTaGlwKC4uLmNvb3JkcykpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYFNoaXAgb2YgbGVuZ3RoICR7c2hpcExlbmd0aH0gcGxhY2VkIGF0ICR7Y29vcmRzWzBdfSwgJHtjb29yZHNbMV19YFxuICAgICAgKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBwbGFjZUFsbFNoaXBzQXV0byA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgYXZhaWxhYmxlU2hpcHMgPSBbMiwgMywgMywgNCwgNV07XG4gIGNvbnN0IHBsYXllckJvYXJkID0gcGxheWVyLmdldEJvYXJkKCk7XG5cbiAgZm9yIChsZXQgc2hpcExlbmd0aCBvZiBhdmFpbGFibGVTaGlwcykge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XG5cbiAgICAgIGxldCB4ID0gLTE7XG4gICAgICBsZXQgeSA9IC0xO1xuICAgICAgbGV0IHNoaXBQbGFjZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHBsYXllckJvYXJkLmdldFdpZHRoKCkgLSBzaGlwTGVuZ3RoKSk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwbGF5ZXJCb2FyZC5nZXRIZWlnaHQoKSk7XG4gICAgICAgIHNoaXBQbGFjZWQgPSBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoW3gsIHldLCBbeCArIHNoaXBMZW5ndGggLSAxLCB5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxheWVyQm9hcmQuZ2V0V2lkdGgoKSk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAocGxheWVyQm9hcmQuZ2V0SGVpZ2h0KCkgLSBzaGlwTGVuZ3RoKSk7XG4gICAgICAgIHNoaXBQbGFjZWQgPSBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoW3gsIHldLCBbeCwgeSArIHNoaXBMZW5ndGggLSAxXSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2hpcFBsYWNlZCkgY29udGludWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgR2FtZSA9ICgoKSA9PiB7XG4gIGxldCBwbGF5ZXIxID0gbnVsbDtcbiAgbGV0IHBsYXllcjIgPSBudWxsO1xuXG4gIGNvbnN0IGdldFBsYXllcjEgPSAoKSA9PiBwbGF5ZXIxO1xuICBjb25zdCBnZXRQbGF5ZXIyID0gKCkgPT4gcGxheWVyMjtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIHBsYXllcjEgPSBQbGF5ZXIoKTtcbiAgICBwbGF5ZXIyID0gQUkoKTtcbiAgfTtcblxuICBjb25zdCBwbGF5ID0gKCkgPT4ge1xuICAgIC8vIHBsYWNlQWxsU2hpcHMocGxheWVyKTtcbiAgICBwbGFjZUFsbFNoaXBzQXV0byhwbGF5ZXIxKTtcbiAgICBwbGFjZUFsbFNoaXBzQXV0byhwbGF5ZXIyKTtcblxuICAgIFVJLnJlbmRlckdyaWRzKCk7XG4gICAgVUkuYWRkR3JpZExpc3RlbmVyKHBsYXllcjIsIFVJLmF0dGFja0NsaWNrSGFuZGxlcik7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0UGxheWVyMSwgZ2V0UGxheWVyMiwgaW5pdCwgcGxheSB9O1xufSkoKTtcblxuLy8gR2FtZS5wbGF5KCk7XG5HYW1lLmluaXQoKTtcblVJLnJlbmRlcihHYW1lLmdldFBsYXllcjEoKSwgR2FtZS5nZXRQbGF5ZXIyKCkpO1xuR2FtZS5wbGF5KCk7XG5cbi8vIFVJLnNldFN0YXR1cyhcIlNlbGVjdCBwb3NpdGlvbnMgZm9yIHNoaXAgb2YgbGVuZ3RoIDJcIik7XG5cbmV4cG9ydCB7IEdhbWUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==