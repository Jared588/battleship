/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Caveat&family=Croissant+One&family=Delicious+Handrawn&family=Fjalla+One&family=Oswald&family=Roboto&family=Young+Serif&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Caveat&family=Croissant+One&family=Delicious+Handrawn&family=Fjalla+One&family=Oswald&family=Roboto&family=Young+Serif&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body {
    display: flex;
    flex-direction: column;
    flex: auto;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    background-color: rgb(17, 17, 17, 0.85);
}

header {
    background-color: rgb(17, 17, 17, 0.5);
    border-bottom: 1px solid rgb(85, 85, 85);
    font-family: 'Black Ops One', 'sans-serif';
    font-size: 64px;
    color: rgb(60, 255, 0);
    text-align: center;
    padding: 1rem;
}

.main {
    display: flex;
    flex: auto;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.gameboard {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    border: 1px solid white;
    height: 30rem;
    width: 30rem;
    margin: 0.5rem;
}

.cell {
    border: 1px solid #a3a3a3;
    color: rgb(148, 148, 148);
    font-family: 'Roboto', 'sans-serif';
}

@media (max-width: 1000px) {
    .gameboard {
        height: 25rem;
        width: 25rem;
    }
}

@media (max-width: 860px) {
    .gameboard {
        height: 20rem;
        min-height: 20rem;
        width: 20rem;
        min-width: 20rem;
    }
}

footer {
    font-family: 'Roboto', 'sans-serif';
    background-color: rgb(17, 17, 17, 0.5);
    border-top: 1px solid rgb(85, 85, 85);
    color: rgb(214, 214, 214);
    text-align: center;
    padding: 0.5rem;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}


.modal-content {
    background-color: rgb(31, 31, 31, 0.98);
    margin: 5% auto;
    padding: 10px;
    border: 1.5px solid #4cd174;
    height: fit-content;
    width: 60%;
}

#welcome-text {
    font-family: 'Black Ops One', 'sans-serif';
    font-size: 46px;
    color: rgb(60, 255, 0);
    text-align: center;
    padding: 1rem;
    margin: 0;
}

#placement-text,
#game-over-text {
    font-family: 'Black Ops One', 'sans-serif';
    font-size: 24px;
    color: rgb(41, 145, 9);
    text-align: center;
    padding: 1rem;
    margin: 0;
}

#modal-container {
    display: flex;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
    border: 1px solid white;
}

#modal-board {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    border: 1px solid white;
    height: 30rem;
    width: 30rem;
    margin: 0.5rem;
}

@media (max-width: 860px) {
    #modal-board {
        height: 25rem;
        min-height: 25rem;
        width: 25rem;
        min-width: 25rem;
    }
}

@media (max-width: 720px) {
    #modal-board {
        height: 20rem;
        min-height: 20rem;
        width: 20rem;
        min-width: 20rem;
    }
    .modal-content {
        padding: 0;
        width: 80%;
    }
}

@media (max-width: 630px) {
    .modal-content {
        border-left: none;
        padding: 0;
        width: 100%;
        height: 100%;
    }
    #modal-container {
        margin: 1rem;
    }
}

#modal-info-container {
    display: flex;
    flex: auto;
    width: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#ship-name {
    font-family: 'Black Ops One', 'sans-serif';
    font-size: clamp(20px, 4vw, 24px);
    color: rgb(56, 194, 14);
}

#dir-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    color: #4e8551;
    bottom: 8rem;
}

/* End game */
#game-over-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.game-over-content {
    background-color: rgb(31, 31, 31, 0.98);
    margin: 15% auto;
    padding: 10px;
    border: 1.5px solid #4cd174;
    height: fit-content;
    width: 25%;
    text-align: center;
}

#game-over-text {
    font-size: 34px;
}

#retry-btn {
    font-family: 'Black Ops One', 'sans-serif';
    font-size: 24px;
    color: rgb(189, 189, 189);
    text-align: center;
    padding: 1rem;
    margin: 0;
    cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAGA;;IAEI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;IACT,UAAU;IACV,aAAa;IACb,WAAW;IACX,uCAAuC;AAC3C;;AAEA;IACI,sCAAsC;IACtC,wCAAwC;IACxC,0CAA0C;IAC1C,eAAe;IACf,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,eAAe;IACf,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,mCAAmC;AACvC;;AAEA;IACI;QACI,aAAa;QACb,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,aAAa;QACb,iBAAiB;QACjB,YAAY;QACZ,gBAAgB;IACpB;AACJ;;AAEA;IACI,mCAAmC;IACnC,sCAAsC;IACtC,qCAAqC;IACrC,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;AACxC;;;AAGA;IACI,uCAAuC;IACvC,eAAe;IACf,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,0CAA0C;IAC1C,eAAe;IACf,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;;AAEA;;IAEI,0CAA0C;IAC1C,eAAe;IACf,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,OAAO;IACP,uBAAuB;IACvB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI;QACI,aAAa;QACb,iBAAiB;QACjB,YAAY;QACZ,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,aAAa;QACb,iBAAiB;QACjB,YAAY;QACZ,gBAAgB;IACpB;IACA;QACI,UAAU;QACV,UAAU;IACd;AACJ;;AAEA;IACI;QACI,iBAAiB;QACjB,UAAU;QACV,WAAW;QACX,YAAY;IAChB;IACA;QACI,YAAY;IAChB;AACJ;;AAEA;IACI,aAAa;IACb,UAAU;IACV,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,0CAA0C;IAC1C,iCAAiC;IACjC,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,UAAU;IACV,eAAe;IACf,WAAW;IACX,YAAY;IACZ,cAAc;IACd,YAAY;AAChB;;AAEA,aAAa;AACb;IACI,aAAa;IACb,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,uCAAuC;IACvC,gBAAgB;IAChB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,0CAA0C;IAC1C,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,SAAS;IACT,eAAe;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Caveat&family=Croissant+One&family=Delicious+Handrawn&family=Fjalla+One&family=Oswald&family=Roboto&family=Young+Serif&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Caveat&family=Croissant+One&family=Delicious+Handrawn&family=Fjalla+One&family=Oswald&family=Roboto&family=Young+Serif&display=swap');\n\nhtml,\nbody {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    width: 100%;\n    background-color: rgb(17, 17, 17, 0.85);\n}\n\nheader {\n    background-color: rgb(17, 17, 17, 0.5);\n    border-bottom: 1px solid rgb(85, 85, 85);\n    font-family: 'Black Ops One', 'sans-serif';\n    font-size: 64px;\n    color: rgb(60, 255, 0);\n    text-align: center;\n    padding: 1rem;\n}\n\n.main {\n    display: flex;\n    flex: auto;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.gameboard {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    border: 1px solid white;\n    height: 30rem;\n    width: 30rem;\n    margin: 0.5rem;\n}\n\n.cell {\n    border: 1px solid #a3a3a3;\n    color: rgb(148, 148, 148);\n    font-family: 'Roboto', 'sans-serif';\n}\n\n@media (max-width: 1000px) {\n    .gameboard {\n        height: 25rem;\n        width: 25rem;\n    }\n}\n\n@media (max-width: 860px) {\n    .gameboard {\n        height: 20rem;\n        min-height: 20rem;\n        width: 20rem;\n        min-width: 20rem;\n    }\n}\n\nfooter {\n    font-family: 'Roboto', 'sans-serif';\n    background-color: rgb(17, 17, 17, 0.5);\n    border-top: 1px solid rgb(85, 85, 85);\n    color: rgb(214, 214, 214);\n    text-align: center;\n    padding: 0.5rem;\n}\n\n.modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n\n.modal-content {\n    background-color: rgb(31, 31, 31, 0.98);\n    margin: 5% auto;\n    padding: 10px;\n    border: 1.5px solid #4cd174;\n    height: fit-content;\n    width: 60%;\n}\n\n#welcome-text {\n    font-family: 'Black Ops One', 'sans-serif';\n    font-size: 46px;\n    color: rgb(60, 255, 0);\n    text-align: center;\n    padding: 1rem;\n    margin: 0;\n}\n\n#placement-text,\n#game-over-text {\n    font-family: 'Black Ops One', 'sans-serif';\n    font-size: 24px;\n    color: rgb(41, 145, 9);\n    text-align: center;\n    padding: 1rem;\n    margin: 0;\n}\n\n#modal-container {\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    flex-wrap: wrap;\n    border: 1px solid white;\n}\n\n#modal-board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    border: 1px solid white;\n    height: 30rem;\n    width: 30rem;\n    margin: 0.5rem;\n}\n\n@media (max-width: 860px) {\n    #modal-board {\n        height: 25rem;\n        min-height: 25rem;\n        width: 25rem;\n        min-width: 25rem;\n    }\n}\n\n@media (max-width: 720px) {\n    #modal-board {\n        height: 20rem;\n        min-height: 20rem;\n        width: 20rem;\n        min-width: 20rem;\n    }\n    .modal-content {\n        padding: 0;\n        width: 80%;\n    }\n}\n\n@media (max-width: 630px) {\n    .modal-content {\n        border-left: none;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n    }\n    #modal-container {\n        margin: 1rem;\n    }\n}\n\n#modal-info-container {\n    display: flex;\n    flex: auto;\n    width: fit-content;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#ship-name {\n    font-family: 'Black Ops One', 'sans-serif';\n    font-size: clamp(20px, 4vw, 24px);\n    color: rgb(56, 194, 14);\n}\n\n#dir-btn {\n    background: none;\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    width: 2rem;\n    height: 2rem;\n    color: #4e8551;\n    bottom: 8rem;\n}\n\n/* End game */\n#game-over-modal {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.game-over-content {\n    background-color: rgb(31, 31, 31, 0.98);\n    margin: 15% auto;\n    padding: 10px;\n    border: 1.5px solid #4cd174;\n    height: fit-content;\n    width: 25%;\n    text-align: center;\n}\n\n#game-over-text {\n    font-size: 34px;\n}\n\n#retry-btn {\n    font-family: 'Black Ops One', 'sans-serif';\n    font-size: 24px;\n    color: rgb(189, 189, 189);\n    text-align: center;\n    padding: 1rem;\n    margin: 0;\n    cursor: pointer;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/game-over.js":
/*!**************************!*\
  !*** ./src/game-over.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameOver)
/* harmony export */ });
function gameOver(outcome) {
    const modal = document.getElementById('game-over-modal');
    const text = document.getElementById('game-over-text');
    const retryBtn = document.getElementById('retry-btn');

    // Display Modal
    modal.style.display = 'grid';

    // Display Outcome
    if (outcome === 'win') {
        text.innerText = 'You Win!';
    } else {
        text.innerText = 'You Lose!'
    }

    // Retry Button reactivity
    retryBtn.addEventListener('mouseenter', () => {
        retryBtn.style.color = 'white';
    })
    retryBtn.addEventListener('mouseleave', () => {
        retryBtn.style.color = 'gray';
    })

    // Restart
    retryBtn.addEventListener('click', () => {
        // Reload the current page
        window.location.reload();
    });
}

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameboard)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/ships.js");


function gameboard() {
  // Board
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  let grid = [];
  let numberOfHits = 0;
  const hitShots = [];
  const missedShots = [];

  // Ships
  let Carrier;
  let Battleship;
  let Destroyer;
  let Submarine;
  let PatrolBoat;

  return {
    initialize() {
      grid = [];
      for (let i = 0; i < 10; i += 1) {
        for (let j = 1; j <= 10; j += 1) {
          grid.push({
            position: columns[i] + j,
            occupied: false,
            ship: null,
          });
        }
      }
    },

    getGrid() {
      return grid;
    },

    placeShip(ship, position) {
      let carrierCount = 0;
      let BattleshipCount = 0;
      let DestroyerCount = 0;
      let SubmarineCount = 0;
      let PatrolBoatCount = 0;

      // Check that the points are unoccupied
      position.forEach((point) => {
        const gridPoint = grid.find((cell) => cell.position === point);
        if (gridPoint && gridPoint.occupied === true) {
          // eslint-disable-next-line no-useless-return
          return;
        }
      });

      // Create the ship
      let newShip;
      if (ship === 'Carrier' && carrierCount < 1) {
        Carrier = (0,_ships__WEBPACK_IMPORTED_MODULE_0__["default"])('Carrier', 5, 0, false);
        newShip = Carrier;
        carrierCount += 1;
      } else if (ship === 'Battleship' && BattleshipCount < 1) {
        Battleship = (0,_ships__WEBPACK_IMPORTED_MODULE_0__["default"])('Battleship', 4, 0, false);
        newShip = Battleship;
        BattleshipCount += 1;
      } else if (ship === 'Destroyer' && DestroyerCount < 1) {
        Destroyer = (0,_ships__WEBPACK_IMPORTED_MODULE_0__["default"])('Destroyer', 3, 0, false);
        newShip = Destroyer;
        DestroyerCount += 1;
      } else if (ship === 'Submarine' && SubmarineCount < 1) {
        Submarine = (0,_ships__WEBPACK_IMPORTED_MODULE_0__["default"])('Submarine', 3, 0, false);
        newShip = Submarine;
        SubmarineCount += 1;
      } else if (ship === 'PatrolBoat' && PatrolBoatCount < 1) {
        PatrolBoat = (0,_ships__WEBPACK_IMPORTED_MODULE_0__["default"])('PatrolBoat', 2, 0, false);
        newShip = PatrolBoat;
        PatrolBoatCount += 1;
      } else return;

      // Add the ship
      position.forEach((point) => {
        const gridPoint = grid.find((cell) => cell.position === point);
        if (gridPoint) {
          gridPoint.occupied = true;
          gridPoint.ship = newShip.name;
        }
      });
    },

    // eslint-disable-next-line consistent-return
    receiveAttack(position) {
      const gridPoint = grid.find((cell) => cell.position === position);
      if (gridPoint.occupied === true) {
        if (gridPoint.ship === 'Carrier') {
          Carrier.hit();
          hitShots.push(position);
          numberOfHits += 1;
          this.checkEndGame(numberOfHits);
        } else if (gridPoint.ship === 'Battleship') {
          Battleship.hit();
          hitShots.push(position);
          numberOfHits += 1;
          this.checkEndGame(numberOfHits);
        } else if (gridPoint.ship === 'Destroyer') {
          Destroyer.hit();
          hitShots.push(position);
          numberOfHits += 1;
          this.checkEndGame(numberOfHits);
        } else if (gridPoint.ship === 'Submarine') {
          Submarine.hit();
          hitShots.push(position);
          numberOfHits += 1;
          this.checkEndGame(numberOfHits);
        } else if (gridPoint.ship === 'PatrolBoat') {
          PatrolBoat.hit();
          hitShots.push(position);
          numberOfHits += 1;
          this.checkEndGame(numberOfHits);
        }
      } else {
        missedShots.push(position);
        return null;
      }
    },

    getShipInfo(ship) {
      if (ship === 'Carrier') {
        return Carrier;
      }
      if (ship === 'Battleship') {
        return Battleship;
      }
      if (ship === 'Destroyer') {
        return Destroyer;
      }
      if (ship === 'Submarine') {
        return Submarine;
      }
      if (ship === 'PatrolBoat') {
        return PatrolBoat;
      }
      return null;
    },

    getMissedShots() {
      return missedShots;
    },

    getHitShots() {
      return hitShots;
    },

    getNumberOfHits() {
      return numberOfHits;
    },

    getAllShots() {
      return missedShots.concat(hitShots);
    },

    checkEndGame(hits) {
      return hits === 17;
    },
  };
}


/***/ }),

/***/ "./src/gameloop.js":
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameloop)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _game_over__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-over */ "./src/game-over.js");



function gameloop() {
  const player = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const playerBoard = player.getPlayerGameboard();
  const compBoard = player.getCompGameBoard();

  return {
    player,
    playerBoard,
    compBoard,

    updateBoard() {
      const playerDisplay = document.getElementById('player-board');
      playerDisplay.innerHTML = '';

      const compDisplay = document.getElementById('comp-board');
      compDisplay.innerHTML = '';

      // Player board
      for (let i = 0; i < playerBoard.getGrid().length; i += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        if (playerBoard.getGrid()[i].occupied === true) {
          cell.style.backgroundColor = 'green';
        }

        if (
          playerBoard.getHitShots().includes(playerBoard.getGrid()[i].position)
        ) {
          cell.style.backgroundColor = 'red';
        }

        if (
          playerBoard
            .getMissedShots()
            .includes(playerBoard.getGrid()[i].position)
        ) {
          cell.style.background = 'rgba(155, 155, 155, 0.5)';
        }

        cell.textContent = playerBoard.getGrid()[i].position;

        playerDisplay.appendChild(cell);
      }

      // Computer Board
      for (let i = 0; i < compBoard.getGrid().length; i += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => {
          player.playerAttack(compBoard.getGrid()[i].position);
          this.updateBoard();
          if (playerBoard.checkEndGame(compBoard.getNumberOfHits())) {
            (0,_game_over__WEBPACK_IMPORTED_MODULE_1__["default"])('win');
            return;
          }
          setTimeout(() => {
            player.compAttack();
            this.updateBoard();
            if (playerBoard.checkEndGame(playerBoard.getNumberOfHits())) {
              (0,_game_over__WEBPACK_IMPORTED_MODULE_1__["default"])('lose');
            }
          }, 800);
        });

        if (compBoard.getHitShots().includes(compBoard.getGrid()[i].position)) {
          cell.style.backgroundColor = 'red';
        }

        if (
          compBoard.getMissedShots().includes(compBoard.getGrid()[i].position)
        ) {
          cell.style.background = 'rgba(155, 155, 155, 0.5)';
        }
        cell.textContent = compBoard.getGrid()[i].position;

        compDisplay.appendChild(cell);
      }
    },

    placeEnemyShip(name, len, game) {
      const randomNum = Math.round(Math.random()); // Get random value to decide x-axis or y-axis
      const grid = game.compBoard.getGrid();
      const shipPositions = [];
      let valid = true;

      if (randomNum === 0) {
        // x-axis
        const randomX = Math.floor(Math.random() * (len + 1));
        const randomY = Math.floor(Math.random() * 10);
        const randomLetter = String.fromCharCode(randomY + 65);

        // Check for occupation
        for (let i = 0; i < len; i += 1) {
          /* console.log(grid[(randomY * 10) + (randomX + i)].position) */
          if (grid[randomY * 10 + (randomX + i)].occupied) {
            valid = false;
            break;
          }
        }

        if (valid === true) {
          // Place if valid
          for (let i = 0; i < len; i += 1) {
            shipPositions.push(`${randomLetter + (randomX + i + 1)}`);
          }
        } else {
          // Repeat process if invalid
          this.placeEnemyShip(name, len, game);
        }
      } else if (randomNum === 1) {
        // y-axis
        const randomX = Math.floor(Math.random() * 10);
        const randomY = Math.floor(Math.random() * (len + 1));
        const randomLetter = String.fromCharCode(randomY + 65);

        // Check for occupation
        for (let i = 0; i < len; i += 1) {
          /* console.log(grid[((randomY + i) * 10) + randomX].position) */
          if (grid[(randomY + i) * 10 + randomX].occupied) {
            valid = false;
            break;
          }
        }

        if (valid === true) {
          // Place if valid
          for (let i = 0; i < len; i += 1) {
            const currentLetterAscii = randomLetter.charCodeAt(0) + i;
            const currentLetter = String.fromCharCode(currentLetterAscii);
            shipPositions.push(`${currentLetter}${randomX + 1}`);
          }
        } else {
          // Repeat process if invalid
          this.placeEnemyShip(name, len, game);
        }
      }

      // Placement
      /* console.log(shipPositions); */
      game.compBoard.placeShip(name, shipPositions);
    },
  };
}


/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var _images_Carrier_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Carrier.png */ "./src/images/Carrier.png");
/* harmony import */ var _images_Battleship_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Battleship.png */ "./src/images/Battleship.png");
/* harmony import */ var _images_Destroyer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Destroyer.png */ "./src/images/Destroyer.png");
/* harmony import */ var _images_Submarine_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/Submarine.png */ "./src/images/Submarine.png");
/* harmony import */ var _images_PatrolBoat_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/PatrolBoat.png */ "./src/images/PatrolBoat.png");






function modal() {
  const myModal = document.getElementById('myModal');
  const modalBoard = document.getElementById('modal-board');
  let Dir = 'x';
  let currentShip = 'Carrier';

  return {
    initialize(board) {
      modalBoard.innerHTML = '';
      // Place cells
      for (let i = 0; i < board.getGrid().length; i += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = board.getGrid()[i].position;

        modalBoard.appendChild(cell);
        if (board.getGrid()[i].occupied) {
          cell.style.backgroundColor = 'green';
        }
      }
    },

    startPlaceSequence(board, ship, len, dir, game) {
      // listen for and update any direction changes
      const dirBtn = document.getElementById('dir-btn');
      const clickHandler = () => {
        Dir = Dir === 'x' ? 'y' : 'x';
        this.initialize(board);

        const shipLengths = {
          Carrier: 5,
          Battleship: 4,
          Destroyer: 3,
          Submarine: 3,
          PatrolBoat: 2,
        };

        this.startPlaceSequence(
          board,
          currentShip,
          shipLengths[currentShip],
          Dir,
          game,
        );
        
        dirBtn.removeEventListener('click', clickHandler);
      };
      dirBtn.addEventListener('click', clickHandler);

      // Placement
      const grid = board.getGrid();
      const cells = modalBoard.children;
      let dirOffSet; // Adjustments for placement direction
      if (dir === 'x') {
        dirOffSet = 1;
      } else dirOffSet = 10; // *10 for y-axis placement

      // Add visual listeners
      for (let i = 0; i < cells.length; i += 1) {
        cells[i].addEventListener('mouseover', () => {
          for (let j = 0; j < len; j += 1) {
            if (cells[i + j]) {
              cells[i + j * dirOffSet].style.backgroundColor = 'green';
            }
          }
        });
        cells[i].addEventListener('mouseleave', () => {
          for (let j = 0; j < len; j += 1) {
            if (cells[i + j * dirOffSet] && !grid[i + j * dirOffSet].occupied) {
              cells[i + j * dirOffSet].style.backgroundColor = '';
            }
          }
        });

        // Add placement listeners
        cells[i].addEventListener('click', () => {
          // Check for occupation
          for (let j = 0; j < len; j += 1) {
            if (!cells[i + j * dirOffSet] || grid[i + j * dirOffSet].occupied) {
              return;
            }
          }

          // Carrier
          if (ship === 'Carrier') {
            board.placeShip('Carrier', [
              `${grid[i].position}`,
              `${grid[i + 1 * dirOffSet].position}`,
              `${grid[i + 2 * dirOffSet].position}`,
              `${grid[i + 3 * dirOffSet].position}`,
              `${grid[i + 4 * dirOffSet].position}`,
            ]);
            // Update board
            setTimeout(() => {
              this.initialize(board);
              this.startPlaceSequence(board, 'Battleship', 4, dir, game);
              this.displayInfo('Battleship');
              this.nextShip();
              dirBtn.removeEventListener('click', clickHandler);
            }, 100);
          }

          // Battleship
          else if (ship === 'Battleship') {
            board.placeShip('Battleship', [
              `${grid[i].position}`,
              `${grid[i + 1 * dirOffSet].position}`,
              `${grid[i + 2 * dirOffSet].position}`,
              `${grid[i + 3 * dirOffSet].position}`,
            ]);
            // Update board
            setTimeout(() => {
              this.initialize(board);
              this.startPlaceSequence(board, 'Destroyer', 3, dir, game);
              this.displayInfo('Destroyer');
              this.nextShip();
              dirBtn.removeEventListener('click', clickHandler);
            }, 100);
          }

          // Destroyer
          else if (ship === 'Destroyer') {
            board.placeShip('Destroyer', [
              `${grid[i].position}`,
              `${grid[i + 1 * dirOffSet].position}`,
              `${grid[i + 2 * dirOffSet].position}`,
            ]);
            // Update board
            setTimeout(() => {
              this.initialize(board);
              this.startPlaceSequence(board, 'Submarine', 3, dir, game);
              this.displayInfo('Submarine');
              this.nextShip();
              dirBtn.removeEventListener('click', clickHandler);
            }, 100);
          }

          // Submarine
          else if (ship === 'Submarine') {
            board.placeShip('Submarine', [
              `${grid[i].position}`,
              `${grid[i + 1 * dirOffSet].position}`,
              `${grid[i + 2 * dirOffSet].position}`,
            ]);
            // Update board
            setTimeout(() => {
              this.initialize(board);
              this.startPlaceSequence(board, 'PatrolBoat', 2, dir, game);
              this.displayInfo('PatrolBoat');
              this.nextShip();
              dirBtn.removeEventListener('click', clickHandler);
            }, 100);
          }

          // Patrol Boat
          else if (ship === 'PatrolBoat') {
            board.placeShip('PatrolBoat', [
              `${grid[i].position}`,
              `${grid[i + 1 * dirOffSet].position}`,
            ]);
            // Update board
            setTimeout(() => {
              this.initialize(board);
              this.closeModal();
              game.updateBoard();
            }, 200);
          }

          // Flash for confirmation
          for (let k = 0; k < len; k += 1) {
            cells[i + k * dirOffSet].style.backgroundColor = 'rgb(0, 170, 0)';
            setTimeout(() => {
              cells[i + k * dirOffSet].style.backgroundColor = 'green';
            }, 200);
          }
        });
      }
    },

    displayInfo(ship) {
      const name = document.getElementById('ship-name');
      const imageContainer = document.getElementById('ship-image');
      const image = document.createElement('img');
    
      // Change ship name
      name.innerText = `Place Your ${ship}...`;
    
      // Change ship image
      const shipImages = {
        'Carrier': _images_Carrier_png__WEBPACK_IMPORTED_MODULE_0__,
        'Battleship': _images_Battleship_png__WEBPACK_IMPORTED_MODULE_1__,
        'Destroyer': _images_Destroyer_png__WEBPACK_IMPORTED_MODULE_2__,
        'Submarine': _images_Submarine_png__WEBPACK_IMPORTED_MODULE_3__,
        'PatrolBoat': _images_PatrolBoat_png__WEBPACK_IMPORTED_MODULE_4__,
      };
      
      imageContainer.innerHTML = '';
      image.src = shipImages[ship];
      image.style.width = '300px';
      imageContainer.appendChild(image);
    },

    nextShip() {
      if(currentShip === 'Carrier') {
        currentShip = 'Battleship';
      }else if(currentShip === 'Battleship') {
        currentShip = 'Destroyer';
      }else if(currentShip === 'Destroyer') {
        currentShip = 'Submarine';
      }else if(currentShip === 'Submarine') {
        currentShip = 'PatrolBoat';
      }
    },

    closeModal() {
      myModal.style.display = 'none';
    }
  };
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


function createPlayer() {
  function generateRandomPosition(array) {
    for (;;) {
      // for (;;) creates an infinite loop
      const i = Math.floor(Math.random() * 10) + 65; // Random ASCII code for A to J
      const j = Math.floor(Math.random() * 10) + 1; // Random number from 1 to 10
      const result = String.fromCharCode(i) + j;

      if (!array.includes(result)) {
        array.push(result);
        return result; // Return the generated position
      }
    }
  }

  const playerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  playerGameboard.initialize();
  const compGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  compGameboard.initialize();

  return {
    playerAttack(position) {
      compGameboard.receiveAttack(position);
    },

    compAttack() {
      playerGameboard.receiveAttack(
        generateRandomPosition(playerGameboard.getAllShots()),
      );
    },

    getPlayerGameboard() {
      return playerGameboard;
    },

    getCompGameBoard() {
      return compGameboard;
    },
  };
}


/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createShip)
/* harmony export */ });
function createShip(name, length, hits, sunk) {
  return {
    name,
    length,
    hits,
    sunk,

    hit() {
      this.hits += 1;
    },

    isSunk() {
      return this.hits === this.length;
    },

    displayInfo() {
      console.log(
        `${this.name} length:${this.length} hits:${this.hits} sunk:${this.sunk}`,
      );
    },
  };
}


/***/ }),

/***/ "./src/images/Battleship.png":
/*!***********************************!*\
  !*** ./src/images/Battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17d99427f4c76b07f3dc.png";

/***/ }),

/***/ "./src/images/Carrier.png":
/*!********************************!*\
  !*** ./src/images/Carrier.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c817937a71f29b7e0c7e.png";

/***/ }),

/***/ "./src/images/Destroyer.png":
/*!**********************************!*\
  !*** ./src/images/Destroyer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d583be5c0fe54b267a38.png";

/***/ }),

/***/ "./src/images/PatrolBoat.png":
/*!***********************************!*\
  !*** ./src/images/PatrolBoat.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "79b3b81d8089597ac056.png";

/***/ }),

/***/ "./src/images/Submarine.png":
/*!**********************************!*\
  !*** ./src/images/Submarine.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06586da97baa5a75665d.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameloop */ "./src/gameloop.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/modal.js");




// Create game
const game = (0,_gameloop__WEBPACK_IMPORTED_MODULE_1__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);
game.updateBoard();

// Setup placement
const welcomeModal = (0,_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
welcomeModal.initialize(game.playerBoard);
welcomeModal.startPlaceSequence(game.playerBoard, 'Carrier', 5, 'x', game);
welcomeModal.displayInfo('Carrier');
game.updateBoard();

// Randomize enemy ship placement
game.placeEnemyShip('Carrier', 5, game);
game.placeEnemyShip('Battleship', 4, game);
game.placeEnemyShip('Destroyer', 3, game);
game.placeEnemyShip('Submarine', 3, game);
game.placeEnemyShip('PatrolBoat', 2, game);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseVBBQXlQO0FBQ3pQLHlQQUF5UDtBQUN6UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtGQUFrRixVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUss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Q0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ1k7QUFDTjs7QUFFNUI7QUFDQSxhQUFhLHFEQUFRO0FBQ3JCLGlFQUFlLElBQUksRUFBQztBQUNwQjs7QUFFQTtBQUNBLHFCQUFxQixrREFBSztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLW92ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZmFtaWx5PUNhdmVhdCZmYW1pbHk9Q3JvaXNzYW50K09uZSZmYW1pbHk9RGVsaWNpb3VzK0hhbmRyYXduJmZhbWlseT1GamFsbGErT25lJmZhbWlseT1Pc3dhbGQmZmFtaWx5PVJvYm90byZmYW1pbHk9WW91bmcrU2VyaWYmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZmYW1pbHk9Q2F2ZWF0JmZhbWlseT1Dcm9pc3NhbnQrT25lJmZhbWlseT1EZWxpY2lvdXMrSGFuZHJhd24mZmFtaWx5PUZqYWxsYStPbmUmZmFtaWx5PU9zd2FsZCZmYW1pbHk9Um9ib3RvJmZhbWlseT1Zb3VuZytTZXJpZiZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogYXV0bztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTcsIDE3LCAwLjg1KTtcbn1cblxuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcsIDE3LCAxNywgMC41KTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDg1LCA4NSwgODUpO1xuICAgIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsICdzYW5zLXNlcmlmJztcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgY29sb3I6IHJnYig2MCwgMjU1LCAwKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogYXV0bztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWVib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBtYXJnaW46IDAuNXJlbTtcbn1cblxuLmNlbGwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XG4gICAgY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsICdzYW5zLXNlcmlmJztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5nYW1lYm9hcmQge1xuICAgICAgICBoZWlnaHQ6IDI1cmVtO1xuICAgICAgICB3aWR0aDogMjVyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODYwcHgpIHtcbiAgICAuZ2FtZWJvYXJkIHtcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTtcbiAgICAgICAgbWluLWhlaWdodDogMjByZW07XG4gICAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICB9XG59XG5cbmZvb3RlciB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnc2Fucy1zZXJpZic7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3LCAxNywgMTcsIDAuNSk7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig4NSwgODUsIDg1KTtcbiAgICBjb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5tb2RhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cblxuLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgMzEsIDMxLCAwLjk4KTtcbiAgICBtYXJnaW46IDUlIGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM0Y2QxNzQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4jd2VsY29tZS10ZXh0IHtcbiAgICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCAnc2Fucy1zZXJpZic7XG4gICAgZm9udC1zaXplOiA0NnB4O1xuICAgIGNvbG9yOiByZ2IoNjAsIDI1NSwgMCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jcGxhY2VtZW50LXRleHQsXG4jZ2FtZS1vdmVyLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsICdzYW5zLXNlcmlmJztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IHJnYig0MSwgMTQ1LCA5KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW46IDA7XG59XG5cbiNtb2RhbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbiNtb2RhbC1ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBtYXJnaW46IDAuNXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg2MHB4KSB7XG4gICAgI21vZGFsLWJvYXJkIHtcbiAgICAgICAgaGVpZ2h0OiAyNXJlbTtcbiAgICAgICAgbWluLWhlaWdodDogMjVyZW07XG4gICAgICAgIHdpZHRoOiAyNXJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAyNXJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICNtb2RhbC1ib2FyZCB7XG4gICAgICAgIGhlaWdodDogMjByZW07XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwcmVtO1xuICAgICAgICB3aWR0aDogMjByZW07XG4gICAgICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgfVxuICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xuICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgICNtb2RhbC1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgfVxufVxuXG4jbW9kYWwtaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogYXV0bztcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jc2hpcC1uYW1lIHtcbiAgICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCAnc2Fucy1zZXJpZic7XG4gICAgZm9udC1zaXplOiBjbGFtcCgyMHB4LCA0dncsIDI0cHgpO1xuICAgIGNvbG9yOiByZ2IoNTYsIDE5NCwgMTQpO1xufVxuXG4jZGlyLWJ0biB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGNvbG9yOiAjNGU4NTUxO1xuICAgIGJvdHRvbTogOHJlbTtcbn1cblxuLyogRW5kIGdhbWUgKi9cbiNnYW1lLW92ZXItbW9kYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5nYW1lLW92ZXItY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAzMSwgMzEsIDAuOTgpO1xuICAgIG1hcmdpbjogMTUlIGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM0Y2QxNzQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogMjUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2dhbWUtb3Zlci10ZXh0IHtcbiAgICBmb250LXNpemU6IDM0cHg7XG59XG5cbiNyZXRyeS1idG4ge1xuICAgIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsICdzYW5zLXNlcmlmJztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IHJnYigxODksIDE4OSwgMTg5KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsV0FBVztJQUNYLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHNDQUFzQztJQUN0Qyx3Q0FBd0M7SUFDeEMsMENBQTBDO0lBQzFDLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDOzs7QUFHQTtJQUNJLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2YsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksMENBQTBDO0lBQzFDLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxpQ0FBaUM7SUFDakMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUEsYUFBYTtBQUNiO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztJQUNULGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZmYW1pbHk9Q2F2ZWF0JmZhbWlseT1Dcm9pc3NhbnQrT25lJmZhbWlseT1EZWxpY2lvdXMrSGFuZHJhd24mZmFtaWx5PUZqYWxsYStPbmUmZmFtaWx5PU9zd2FsZCZmYW1pbHk9Um9ib3RvJmZhbWlseT1Zb3VuZytTZXJpZiZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmZhbWlseT1DYXZlYXQmZmFtaWx5PUNyb2lzc2FudCtPbmUmZmFtaWx5PURlbGljaW91cytIYW5kcmF3biZmYW1pbHk9RmphbGxhK09uZSZmYW1pbHk9T3N3YWxkJmZhbWlseT1Sb2JvdG8mZmFtaWx5PVlvdW5nK1NlcmlmJmRpc3BsYXk9c3dhcCcpO1xcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTcsIDE3LCAwLjg1KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3LCAxNywgMTcsIDAuNSk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoODUsIDg1LCA4NSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsICdzYW5zLXNlcmlmJztcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbiAgICBjb2xvcjogcmdiKDYwLCAyNTUsIDApO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGhlaWdodDogMzByZW07XFxuICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxufVxcblxcbi5jZWxsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcXG4gICAgY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnc2Fucy1zZXJpZic7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmdhbWVib2FyZCB7XFxuICAgICAgICBoZWlnaHQ6IDI1cmVtO1xcbiAgICAgICAgd2lkdGg6IDI1cmVtO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NjBweCkge1xcbiAgICAuZ2FtZWJvYXJkIHtcXG4gICAgICAgIGhlaWdodDogMjByZW07XFxuICAgICAgICBtaW4taGVpZ2h0OiAyMHJlbTtcXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgICAgIG1pbi13aWR0aDogMjByZW07XFxuICAgIH1cXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnc2Fucy1zZXJpZic7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTcsIDE3LCAwLjUpO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDg1LCA4NSwgODUpO1xcbiAgICBjb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDMxLCAzMSwgMC45OCk7XFxuICAgIG1hcmdpbjogNSUgYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNGNkMTc0O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4jd2VsY29tZS10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgJ3NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IDQ2cHg7XFxuICAgIGNvbG9yOiByZ2IoNjAsIDI1NSwgMCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jcGxhY2VtZW50LXRleHQsXFxuI2dhbWUtb3Zlci10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgJ3NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiByZ2IoNDEsIDE0NSwgOSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jbW9kYWwtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbiNtb2RhbC1ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGhlaWdodDogMzByZW07XFxuICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NjBweCkge1xcbiAgICAjbW9kYWwtYm9hcmQge1xcbiAgICAgICAgaGVpZ2h0OiAyNXJlbTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1cmVtO1xcbiAgICAgICAgd2lkdGg6IDI1cmVtO1xcbiAgICAgICAgbWluLXdpZHRoOiAyNXJlbTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcXG4gICAgI21vZGFsLWJvYXJkIHtcXG4gICAgICAgIGhlaWdodDogMjByZW07XFxuICAgICAgICBtaW4taGVpZ2h0OiAyMHJlbTtcXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgICAgIG1pbi13aWR0aDogMjByZW07XFxuICAgIH1cXG4gICAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XFxuICAgIC5tb2RhbC1jb250ZW50IHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgICNtb2RhbC1jb250YWluZXIge1xcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xcbiAgICB9XFxufVxcblxcbiNtb2RhbC1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzaGlwLW5hbWUge1xcbiAgICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCAnc2Fucy1zZXJpZic7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjBweCwgNHZ3LCAyNHB4KTtcXG4gICAgY29sb3I6IHJnYig1NiwgMTk0LCAxNCk7XFxufVxcblxcbiNkaXItYnRuIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGNvbG9yOiAjNGU4NTUxO1xcbiAgICBib3R0b206IDhyZW07XFxufVxcblxcbi8qIEVuZCBnYW1lICovXFxuI2dhbWUtb3Zlci1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5nYW1lLW92ZXItY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgMzEsIDMxLCAwLjk4KTtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNGNkMTc0O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lLW92ZXItdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXG59XFxuXFxuI3JldHJ5LWJ0biB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsICdzYW5zLXNlcmlmJztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogcmdiKDE4OSwgMTg5LCAxODkpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lT3ZlcihvdXRjb21lKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1vdmVyLW1vZGFsJyk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLW92ZXItdGV4dCcpO1xuICAgIGNvbnN0IHJldHJ5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JldHJ5LWJ0bicpO1xuXG4gICAgLy8gRGlzcGxheSBNb2RhbFxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG5cbiAgICAvLyBEaXNwbGF5IE91dGNvbWVcbiAgICBpZiAob3V0Y29tZSA9PT0gJ3dpbicpIHtcbiAgICAgICAgdGV4dC5pbm5lclRleHQgPSAnWW91IFdpbiEnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQuaW5uZXJUZXh0ID0gJ1lvdSBMb3NlISdcbiAgICB9XG5cbiAgICAvLyBSZXRyeSBCdXR0b24gcmVhY3Rpdml0eVxuICAgIHJldHJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIHJldHJ5QnRuLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICB9KVxuICAgIHJldHJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIHJldHJ5QnRuLnN0eWxlLmNvbG9yID0gJ2dyYXknO1xuICAgIH0pXG5cbiAgICAvLyBSZXN0YXJ0XG4gICAgcmV0cnlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIFJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbn0iLCJpbXBvcnQgY3JlYXRlU2hpcCBmcm9tICcuL3NoaXBzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZWJvYXJkKCkge1xuICAvLyBCb2FyZFxuICBjb25zdCBjb2x1bW5zID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gIGxldCBncmlkID0gW107XG4gIGxldCBudW1iZXJPZkhpdHMgPSAwO1xuICBjb25zdCBoaXRTaG90cyA9IFtdO1xuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdO1xuXG4gIC8vIFNoaXBzXG4gIGxldCBDYXJyaWVyO1xuICBsZXQgQmF0dGxlc2hpcDtcbiAgbGV0IERlc3Ryb3llcjtcbiAgbGV0IFN1Ym1hcmluZTtcbiAgbGV0IFBhdHJvbEJvYXQ7XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgZ3JpZCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqICs9IDEpIHtcbiAgICAgICAgICBncmlkLnB1c2goe1xuICAgICAgICAgICAgcG9zaXRpb246IGNvbHVtbnNbaV0gKyBqLFxuICAgICAgICAgICAgb2NjdXBpZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2hpcDogbnVsbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRHcmlkKCkge1xuICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgfSxcblxuICAgIHBsYWNlU2hpcChzaGlwLCBwb3NpdGlvbikge1xuICAgICAgbGV0IGNhcnJpZXJDb3VudCA9IDA7XG4gICAgICBsZXQgQmF0dGxlc2hpcENvdW50ID0gMDtcbiAgICAgIGxldCBEZXN0cm95ZXJDb3VudCA9IDA7XG4gICAgICBsZXQgU3VibWFyaW5lQ291bnQgPSAwO1xuICAgICAgbGV0IFBhdHJvbEJvYXRDb3VudCA9IDA7XG5cbiAgICAgIC8vIENoZWNrIHRoYXQgdGhlIHBvaW50cyBhcmUgdW5vY2N1cGllZFxuICAgICAgcG9zaXRpb24uZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZFBvaW50ID0gZ3JpZC5maW5kKChjZWxsKSA9PiBjZWxsLnBvc2l0aW9uID09PSBwb2ludCk7XG4gICAgICAgIGlmIChncmlkUG9pbnQgJiYgZ3JpZFBvaW50Lm9jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtcmV0dXJuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBzaGlwXG4gICAgICBsZXQgbmV3U2hpcDtcbiAgICAgIGlmIChzaGlwID09PSAnQ2FycmllcicgJiYgY2FycmllckNvdW50IDwgMSkge1xuICAgICAgICBDYXJyaWVyID0gY3JlYXRlU2hpcCgnQ2FycmllcicsIDUsIDAsIGZhbHNlKTtcbiAgICAgICAgbmV3U2hpcCA9IENhcnJpZXI7XG4gICAgICAgIGNhcnJpZXJDb3VudCArPSAxO1xuICAgICAgfSBlbHNlIGlmIChzaGlwID09PSAnQmF0dGxlc2hpcCcgJiYgQmF0dGxlc2hpcENvdW50IDwgMSkge1xuICAgICAgICBCYXR0bGVzaGlwID0gY3JlYXRlU2hpcCgnQmF0dGxlc2hpcCcsIDQsIDAsIGZhbHNlKTtcbiAgICAgICAgbmV3U2hpcCA9IEJhdHRsZXNoaXA7XG4gICAgICAgIEJhdHRsZXNoaXBDb3VudCArPSAxO1xuICAgICAgfSBlbHNlIGlmIChzaGlwID09PSAnRGVzdHJveWVyJyAmJiBEZXN0cm95ZXJDb3VudCA8IDEpIHtcbiAgICAgICAgRGVzdHJveWVyID0gY3JlYXRlU2hpcCgnRGVzdHJveWVyJywgMywgMCwgZmFsc2UpO1xuICAgICAgICBuZXdTaGlwID0gRGVzdHJveWVyO1xuICAgICAgICBEZXN0cm95ZXJDb3VudCArPSAxO1xuICAgICAgfSBlbHNlIGlmIChzaGlwID09PSAnU3VibWFyaW5lJyAmJiBTdWJtYXJpbmVDb3VudCA8IDEpIHtcbiAgICAgICAgU3VibWFyaW5lID0gY3JlYXRlU2hpcCgnU3VibWFyaW5lJywgMywgMCwgZmFsc2UpO1xuICAgICAgICBuZXdTaGlwID0gU3VibWFyaW5lO1xuICAgICAgICBTdWJtYXJpbmVDb3VudCArPSAxO1xuICAgICAgfSBlbHNlIGlmIChzaGlwID09PSAnUGF0cm9sQm9hdCcgJiYgUGF0cm9sQm9hdENvdW50IDwgMSkge1xuICAgICAgICBQYXRyb2xCb2F0ID0gY3JlYXRlU2hpcCgnUGF0cm9sQm9hdCcsIDIsIDAsIGZhbHNlKTtcbiAgICAgICAgbmV3U2hpcCA9IFBhdHJvbEJvYXQ7XG4gICAgICAgIFBhdHJvbEJvYXRDb3VudCArPSAxO1xuICAgICAgfSBlbHNlIHJldHVybjtcblxuICAgICAgLy8gQWRkIHRoZSBzaGlwXG4gICAgICBwb3NpdGlvbi5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgICBjb25zdCBncmlkUG9pbnQgPSBncmlkLmZpbmQoKGNlbGwpID0+IGNlbGwucG9zaXRpb24gPT09IHBvaW50KTtcbiAgICAgICAgaWYgKGdyaWRQb2ludCkge1xuICAgICAgICAgIGdyaWRQb2ludC5vY2N1cGllZCA9IHRydWU7XG4gICAgICAgICAgZ3JpZFBvaW50LnNoaXAgPSBuZXdTaGlwLm5hbWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICByZWNlaXZlQXR0YWNrKHBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBncmlkUG9pbnQgPSBncmlkLmZpbmQoKGNlbGwpID0+IGNlbGwucG9zaXRpb24gPT09IHBvc2l0aW9uKTtcbiAgICAgIGlmIChncmlkUG9pbnQub2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGdyaWRQb2ludC5zaGlwID09PSAnQ2FycmllcicpIHtcbiAgICAgICAgICBDYXJyaWVyLmhpdCgpO1xuICAgICAgICAgIGhpdFNob3RzLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgIG51bWJlck9mSGl0cyArPSAxO1xuICAgICAgICAgIHRoaXMuY2hlY2tFbmRHYW1lKG51bWJlck9mSGl0cyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ3JpZFBvaW50LnNoaXAgPT09ICdCYXR0bGVzaGlwJykge1xuICAgICAgICAgIEJhdHRsZXNoaXAuaGl0KCk7XG4gICAgICAgICAgaGl0U2hvdHMucHVzaChwb3NpdGlvbik7XG4gICAgICAgICAgbnVtYmVyT2ZIaXRzICs9IDE7XG4gICAgICAgICAgdGhpcy5jaGVja0VuZEdhbWUobnVtYmVyT2ZIaXRzKTtcbiAgICAgICAgfSBlbHNlIGlmIChncmlkUG9pbnQuc2hpcCA9PT0gJ0Rlc3Ryb3llcicpIHtcbiAgICAgICAgICBEZXN0cm95ZXIuaGl0KCk7XG4gICAgICAgICAgaGl0U2hvdHMucHVzaChwb3NpdGlvbik7XG4gICAgICAgICAgbnVtYmVyT2ZIaXRzICs9IDE7XG4gICAgICAgICAgdGhpcy5jaGVja0VuZEdhbWUobnVtYmVyT2ZIaXRzKTtcbiAgICAgICAgfSBlbHNlIGlmIChncmlkUG9pbnQuc2hpcCA9PT0gJ1N1Ym1hcmluZScpIHtcbiAgICAgICAgICBTdWJtYXJpbmUuaGl0KCk7XG4gICAgICAgICAgaGl0U2hvdHMucHVzaChwb3NpdGlvbik7XG4gICAgICAgICAgbnVtYmVyT2ZIaXRzICs9IDE7XG4gICAgICAgICAgdGhpcy5jaGVja0VuZEdhbWUobnVtYmVyT2ZIaXRzKTtcbiAgICAgICAgfSBlbHNlIGlmIChncmlkUG9pbnQuc2hpcCA9PT0gJ1BhdHJvbEJvYXQnKSB7XG4gICAgICAgICAgUGF0cm9sQm9hdC5oaXQoKTtcbiAgICAgICAgICBoaXRTaG90cy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgICBudW1iZXJPZkhpdHMgKz0gMTtcbiAgICAgICAgICB0aGlzLmNoZWNrRW5kR2FtZShudW1iZXJPZkhpdHMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtaXNzZWRTaG90cy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGdldFNoaXBJbmZvKHNoaXApIHtcbiAgICAgIGlmIChzaGlwID09PSAnQ2FycmllcicpIHtcbiAgICAgICAgcmV0dXJuIENhcnJpZXI7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcCA9PT0gJ0JhdHRsZXNoaXAnKSB7XG4gICAgICAgIHJldHVybiBCYXR0bGVzaGlwO1xuICAgICAgfVxuICAgICAgaWYgKHNoaXAgPT09ICdEZXN0cm95ZXInKSB7XG4gICAgICAgIHJldHVybiBEZXN0cm95ZXI7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcCA9PT0gJ1N1Ym1hcmluZScpIHtcbiAgICAgICAgcmV0dXJuIFN1Ym1hcmluZTtcbiAgICAgIH1cbiAgICAgIGlmIChzaGlwID09PSAnUGF0cm9sQm9hdCcpIHtcbiAgICAgICAgcmV0dXJuIFBhdHJvbEJvYXQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgZ2V0TWlzc2VkU2hvdHMoKSB7XG4gICAgICByZXR1cm4gbWlzc2VkU2hvdHM7XG4gICAgfSxcblxuICAgIGdldEhpdFNob3RzKCkge1xuICAgICAgcmV0dXJuIGhpdFNob3RzO1xuICAgIH0sXG5cbiAgICBnZXROdW1iZXJPZkhpdHMoKSB7XG4gICAgICByZXR1cm4gbnVtYmVyT2ZIaXRzO1xuICAgIH0sXG5cbiAgICBnZXRBbGxTaG90cygpIHtcbiAgICAgIHJldHVybiBtaXNzZWRTaG90cy5jb25jYXQoaGl0U2hvdHMpO1xuICAgIH0sXG5cbiAgICBjaGVja0VuZEdhbWUoaGl0cykge1xuICAgICAgcmV0dXJuIGhpdHMgPT09IDE3O1xuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBnYW1lT3ZlciBmcm9tICcuL2dhbWUtb3Zlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVsb29wKCkge1xuICBjb25zdCBwbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoKTtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBwbGF5ZXIuZ2V0UGxheWVyR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGNvbXBCb2FyZCA9IHBsYXllci5nZXRDb21wR2FtZUJvYXJkKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXIsXG4gICAgcGxheWVyQm9hcmQsXG4gICAgY29tcEJvYXJkLFxuXG4gICAgdXBkYXRlQm9hcmQoKSB7XG4gICAgICBjb25zdCBwbGF5ZXJEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuICAgICAgcGxheWVyRGlzcGxheS5pbm5lckhUTUwgPSAnJztcblxuICAgICAgY29uc3QgY29tcERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcC1ib2FyZCcpO1xuICAgICAgY29tcERpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgIC8vIFBsYXllciBib2FyZFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJCb2FyZC5nZXRHcmlkKCkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgaWYgKHBsYXllckJvYXJkLmdldEdyaWQoKVtpXS5vY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGF5ZXJCb2FyZC5nZXRIaXRTaG90cygpLmluY2x1ZGVzKHBsYXllckJvYXJkLmdldEdyaWQoKVtpXS5wb3NpdGlvbilcbiAgICAgICAgKSB7XG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGF5ZXJCb2FyZFxuICAgICAgICAgICAgLmdldE1pc3NlZFNob3RzKClcbiAgICAgICAgICAgIC5pbmNsdWRlcyhwbGF5ZXJCb2FyZC5nZXRHcmlkKClbaV0ucG9zaXRpb24pXG4gICAgICAgICkge1xuICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDE1NSwgMTU1LCAxNTUsIDAuNSknO1xuICAgICAgICB9XG5cbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IHBsYXllckJvYXJkLmdldEdyaWQoKVtpXS5wb3NpdGlvbjtcblxuICAgICAgICBwbGF5ZXJEaXNwbGF5LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb21wdXRlciBCb2FyZFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wQm9hcmQuZ2V0R3JpZCgpLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgcGxheWVyLnBsYXllckF0dGFjayhjb21wQm9hcmQuZ2V0R3JpZCgpW2ldLnBvc2l0aW9uKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUJvYXJkKCk7XG4gICAgICAgICAgaWYgKHBsYXllckJvYXJkLmNoZWNrRW5kR2FtZShjb21wQm9hcmQuZ2V0TnVtYmVyT2ZIaXRzKCkpKSB7XG4gICAgICAgICAgICBnYW1lT3Zlcignd2luJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcGxheWVyLmNvbXBBdHRhY2soKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQm9hcmQoKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZC5jaGVja0VuZEdhbWUocGxheWVyQm9hcmQuZ2V0TnVtYmVyT2ZIaXRzKCkpKSB7XG4gICAgICAgICAgICAgIGdhbWVPdmVyKCdsb3NlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgODAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvbXBCb2FyZC5nZXRIaXRTaG90cygpLmluY2x1ZGVzKGNvbXBCb2FyZC5nZXRHcmlkKClbaV0ucG9zaXRpb24pKSB7XG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb21wQm9hcmQuZ2V0TWlzc2VkU2hvdHMoKS5pbmNsdWRlcyhjb21wQm9hcmQuZ2V0R3JpZCgpW2ldLnBvc2l0aW9uKVxuICAgICAgICApIHtcbiAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgxNTUsIDE1NSwgMTU1LCAwLjUpJztcbiAgICAgICAgfVxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY29tcEJvYXJkLmdldEdyaWQoKVtpXS5wb3NpdGlvbjtcblxuICAgICAgICBjb21wRGlzcGxheS5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcGxhY2VFbmVteVNoaXAobmFtZSwgbGVuLCBnYW1lKSB7XG4gICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpOyAvLyBHZXQgcmFuZG9tIHZhbHVlIHRvIGRlY2lkZSB4LWF4aXMgb3IgeS1heGlzXG4gICAgICBjb25zdCBncmlkID0gZ2FtZS5jb21wQm9hcmQuZ2V0R3JpZCgpO1xuICAgICAgY29uc3Qgc2hpcFBvc2l0aW9ucyA9IFtdO1xuICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcblxuICAgICAgaWYgKHJhbmRvbU51bSA9PT0gMCkge1xuICAgICAgICAvLyB4LWF4aXNcbiAgICAgICAgY29uc3QgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsZW4gKyAxKSk7XG4gICAgICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGNvbnN0IHJhbmRvbUxldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUocmFuZG9tWSArIDY1KTtcblxuICAgICAgICAvLyBDaGVjayBmb3Igb2NjdXBhdGlvblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgLyogY29uc29sZS5sb2coZ3JpZFsocmFuZG9tWSAqIDEwKSArIChyYW5kb21YICsgaSldLnBvc2l0aW9uKSAqL1xuICAgICAgICAgIGlmIChncmlkW3JhbmRvbVkgKiAxMCArIChyYW5kb21YICsgaSldLm9jY3VwaWVkKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gUGxhY2UgaWYgdmFsaWRcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICBzaGlwUG9zaXRpb25zLnB1c2goYCR7cmFuZG9tTGV0dGVyICsgKHJhbmRvbVggKyBpICsgMSl9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJlcGVhdCBwcm9jZXNzIGlmIGludmFsaWRcbiAgICAgICAgICB0aGlzLnBsYWNlRW5lbXlTaGlwKG5hbWUsIGxlbiwgZ2FtZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmFuZG9tTnVtID09PSAxKSB7XG4gICAgICAgIC8vIHktYXhpc1xuICAgICAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxlbiArIDEpKTtcbiAgICAgICAgY29uc3QgcmFuZG9tTGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShyYW5kb21ZICsgNjUpO1xuXG4gICAgICAgIC8vIENoZWNrIGZvciBvY2N1cGF0aW9uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAvKiBjb25zb2xlLmxvZyhncmlkWygocmFuZG9tWSArIGkpICogMTApICsgcmFuZG9tWF0ucG9zaXRpb24pICovXG4gICAgICAgICAgaWYgKGdyaWRbKHJhbmRvbVkgKyBpKSAqIDEwICsgcmFuZG9tWF0ub2NjdXBpZWQpIHtcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWQgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBQbGFjZSBpZiB2YWxpZFxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZXR0ZXJBc2NpaSA9IHJhbmRvbUxldHRlci5jaGFyQ29kZUF0KDApICsgaTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGN1cnJlbnRMZXR0ZXJBc2NpaSk7XG4gICAgICAgICAgICBzaGlwUG9zaXRpb25zLnB1c2goYCR7Y3VycmVudExldHRlcn0ke3JhbmRvbVggKyAxfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBSZXBlYXQgcHJvY2VzcyBpZiBpbnZhbGlkXG4gICAgICAgICAgdGhpcy5wbGFjZUVuZW15U2hpcChuYW1lLCBsZW4sIGdhbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFBsYWNlbWVudFxuICAgICAgLyogY29uc29sZS5sb2coc2hpcFBvc2l0aW9ucyk7ICovXG4gICAgICBnYW1lLmNvbXBCb2FyZC5wbGFjZVNoaXAobmFtZSwgc2hpcFBvc2l0aW9ucyk7XG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCBDYXJyaWVyIGZyb20gJy4vaW1hZ2VzL0NhcnJpZXIucG5nJ1xuaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSAnLi9pbWFnZXMvQmF0dGxlc2hpcC5wbmcnXG5pbXBvcnQgRGVzdHJveWVyIGZyb20gJy4vaW1hZ2VzL0Rlc3Ryb3llci5wbmcnXG5pbXBvcnQgU3VibWFyaW5lIGZyb20gJy4vaW1hZ2VzL1N1Ym1hcmluZS5wbmcnXG5pbXBvcnQgUGF0cm9sQm9hdCBmcm9tICcuL2ltYWdlcy9QYXRyb2xCb2F0LnBuZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoKSB7XG4gIGNvbnN0IG15TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuICBjb25zdCBtb2RhbEJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJvYXJkJyk7XG4gIGxldCBEaXIgPSAneCc7XG4gIGxldCBjdXJyZW50U2hpcCA9ICdDYXJyaWVyJztcblxuICByZXR1cm4ge1xuICAgIGluaXRpYWxpemUoYm9hcmQpIHtcbiAgICAgIG1vZGFsQm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAvLyBQbGFjZSBjZWxsc1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5nZXRHcmlkKCkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGJvYXJkLmdldEdyaWQoKVtpXS5wb3NpdGlvbjtcblxuICAgICAgICBtb2RhbEJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICBpZiAoYm9hcmQuZ2V0R3JpZCgpW2ldLm9jY3VwaWVkKSB7XG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0UGxhY2VTZXF1ZW5jZShib2FyZCwgc2hpcCwgbGVuLCBkaXIsIGdhbWUpIHtcbiAgICAgIC8vIGxpc3RlbiBmb3IgYW5kIHVwZGF0ZSBhbnkgZGlyZWN0aW9uIGNoYW5nZXNcbiAgICAgIGNvbnN0IGRpckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXItYnRuJyk7XG4gICAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIERpciA9IERpciA9PT0gJ3gnID8gJ3knIDogJ3gnO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoYm9hcmQpO1xuXG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGhzID0ge1xuICAgICAgICAgIENhcnJpZXI6IDUsXG4gICAgICAgICAgQmF0dGxlc2hpcDogNCxcbiAgICAgICAgICBEZXN0cm95ZXI6IDMsXG4gICAgICAgICAgU3VibWFyaW5lOiAzLFxuICAgICAgICAgIFBhdHJvbEJvYXQ6IDIsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdGFydFBsYWNlU2VxdWVuY2UoXG4gICAgICAgICAgYm9hcmQsXG4gICAgICAgICAgY3VycmVudFNoaXAsXG4gICAgICAgICAgc2hpcExlbmd0aHNbY3VycmVudFNoaXBdLFxuICAgICAgICAgIERpcixcbiAgICAgICAgICBnYW1lLFxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgZGlyQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgIH07XG4gICAgICBkaXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuXG4gICAgICAvLyBQbGFjZW1lbnRcbiAgICAgIGNvbnN0IGdyaWQgPSBib2FyZC5nZXRHcmlkKCk7XG4gICAgICBjb25zdCBjZWxscyA9IG1vZGFsQm9hcmQuY2hpbGRyZW47XG4gICAgICBsZXQgZGlyT2ZmU2V0OyAvLyBBZGp1c3RtZW50cyBmb3IgcGxhY2VtZW50IGRpcmVjdGlvblxuICAgICAgaWYgKGRpciA9PT0gJ3gnKSB7XG4gICAgICAgIGRpck9mZlNldCA9IDE7XG4gICAgICB9IGVsc2UgZGlyT2ZmU2V0ID0gMTA7IC8vICoxMCBmb3IgeS1heGlzIHBsYWNlbWVudFxuXG4gICAgICAvLyBBZGQgdmlzdWFsIGxpc3RlbmVyc1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGogKz0gMSkge1xuICAgICAgICAgICAgaWYgKGNlbGxzW2kgKyBqXSkge1xuICAgICAgICAgICAgICBjZWxsc1tpICsgaiAqIGRpck9mZlNldF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChjZWxsc1tpICsgaiAqIGRpck9mZlNldF0gJiYgIWdyaWRbaSArIGogKiBkaXJPZmZTZXRdLm9jY3VwaWVkKSB7XG4gICAgICAgICAgICAgIGNlbGxzW2kgKyBqICogZGlyT2ZmU2V0XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBwbGFjZW1lbnQgbGlzdGVuZXJzXG4gICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIC8vIENoZWNrIGZvciBvY2N1cGF0aW9uXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGogKz0gMSkge1xuICAgICAgICAgICAgaWYgKCFjZWxsc1tpICsgaiAqIGRpck9mZlNldF0gfHwgZ3JpZFtpICsgaiAqIGRpck9mZlNldF0ub2NjdXBpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENhcnJpZXJcbiAgICAgICAgICBpZiAoc2hpcCA9PT0gJ0NhcnJpZXInKSB7XG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoJ0NhcnJpZXInLCBbXG4gICAgICAgICAgICAgIGAke2dyaWRbaV0ucG9zaXRpb259YCxcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpICsgMSAqIGRpck9mZlNldF0ucG9zaXRpb259YCxcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpICsgMiAqIGRpck9mZlNldF0ucG9zaXRpb259YCxcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpICsgMyAqIGRpck9mZlNldF0ucG9zaXRpb259YCxcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpICsgNCAqIGRpck9mZlNldF0ucG9zaXRpb259YCxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgLy8gVXBkYXRlIGJvYXJkXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKGJvYXJkKTtcbiAgICAgICAgICAgICAgdGhpcy5zdGFydFBsYWNlU2VxdWVuY2UoYm9hcmQsICdCYXR0bGVzaGlwJywgNCwgZGlyLCBnYW1lKTtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5SW5mbygnQmF0dGxlc2hpcCcpO1xuICAgICAgICAgICAgICB0aGlzLm5leHRTaGlwKCk7XG4gICAgICAgICAgICAgIGRpckJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEJhdHRsZXNoaXBcbiAgICAgICAgICBlbHNlIGlmIChzaGlwID09PSAnQmF0dGxlc2hpcCcpIHtcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCgnQmF0dGxlc2hpcCcsIFtcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpXS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgICBgJHtncmlkW2kgKyAxICogZGlyT2ZmU2V0XS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgICBgJHtncmlkW2kgKyAyICogZGlyT2ZmU2V0XS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgICBgJHtncmlkW2kgKyAzICogZGlyT2ZmU2V0XS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgYm9hcmRcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoYm9hcmQpO1xuICAgICAgICAgICAgICB0aGlzLnN0YXJ0UGxhY2VTZXF1ZW5jZShib2FyZCwgJ0Rlc3Ryb3llcicsIDMsIGRpciwgZ2FtZSk7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGxheUluZm8oJ0Rlc3Ryb3llcicpO1xuICAgICAgICAgICAgICB0aGlzLm5leHRTaGlwKCk7XG4gICAgICAgICAgICAgIGRpckJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERlc3Ryb3llclxuICAgICAgICAgIGVsc2UgaWYgKHNoaXAgPT09ICdEZXN0cm95ZXInKSB7XG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoJ0Rlc3Ryb3llcicsIFtcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpXS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgICBgJHtncmlkW2kgKyAxICogZGlyT2ZmU2V0XS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgICBgJHtncmlkW2kgKyAyICogZGlyT2ZmU2V0XS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgYm9hcmRcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoYm9hcmQpO1xuICAgICAgICAgICAgICB0aGlzLnN0YXJ0UGxhY2VTZXF1ZW5jZShib2FyZCwgJ1N1Ym1hcmluZScsIDMsIGRpciwgZ2FtZSk7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGxheUluZm8oJ1N1Ym1hcmluZScpO1xuICAgICAgICAgICAgICB0aGlzLm5leHRTaGlwKCk7XG4gICAgICAgICAgICAgIGRpckJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFN1Ym1hcmluZVxuICAgICAgICAgIGVsc2UgaWYgKHNoaXAgPT09ICdTdWJtYXJpbmUnKSB7XG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoJ1N1Ym1hcmluZScsIFtcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpXS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgICBgJHtncmlkW2kgKyAxICogZGlyT2ZmU2V0XS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgICBgJHtncmlkW2kgKyAyICogZGlyT2ZmU2V0XS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgYm9hcmRcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoYm9hcmQpO1xuICAgICAgICAgICAgICB0aGlzLnN0YXJ0UGxhY2VTZXF1ZW5jZShib2FyZCwgJ1BhdHJvbEJvYXQnLCAyLCBkaXIsIGdhbWUpO1xuICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlJbmZvKCdQYXRyb2xCb2F0Jyk7XG4gICAgICAgICAgICAgIHRoaXMubmV4dFNoaXAoKTtcbiAgICAgICAgICAgICAgZGlyQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUGF0cm9sIEJvYXRcbiAgICAgICAgICBlbHNlIGlmIChzaGlwID09PSAnUGF0cm9sQm9hdCcpIHtcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCgnUGF0cm9sQm9hdCcsIFtcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpXS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgICBgJHtncmlkW2kgKyAxICogZGlyT2ZmU2V0XS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgYm9hcmRcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoYm9hcmQpO1xuICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgICAgZ2FtZS51cGRhdGVCb2FyZCgpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBGbGFzaCBmb3IgY29uZmlybWF0aW9uXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBsZW47IGsgKz0gMSkge1xuICAgICAgICAgICAgY2VsbHNbaSArIGsgKiBkaXJPZmZTZXRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMCwgMTcwLCAwKSc7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY2VsbHNbaSArIGsgKiBkaXJPZmZTZXRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRpc3BsYXlJbmZvKHNoaXApIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1uYW1lJyk7XG4gICAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLWltYWdlJyk7XG4gICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIFxuICAgICAgLy8gQ2hhbmdlIHNoaXAgbmFtZVxuICAgICAgbmFtZS5pbm5lclRleHQgPSBgUGxhY2UgWW91ciAke3NoaXB9Li4uYDtcbiAgICBcbiAgICAgIC8vIENoYW5nZSBzaGlwIGltYWdlXG4gICAgICBjb25zdCBzaGlwSW1hZ2VzID0ge1xuICAgICAgICAnQ2Fycmllcic6IENhcnJpZXIsXG4gICAgICAgICdCYXR0bGVzaGlwJzogQmF0dGxlc2hpcCxcbiAgICAgICAgJ0Rlc3Ryb3llcic6IERlc3Ryb3llcixcbiAgICAgICAgJ1N1Ym1hcmluZSc6IFN1Ym1hcmluZSxcbiAgICAgICAgJ1BhdHJvbEJvYXQnOiBQYXRyb2xCb2F0LFxuICAgICAgfTtcbiAgICAgIFxuICAgICAgaW1hZ2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICBpbWFnZS5zcmMgPSBzaGlwSW1hZ2VzW3NoaXBdO1xuICAgICAgaW1hZ2Uuc3R5bGUud2lkdGggPSAnMzAwcHgnO1xuICAgICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIH0sXG5cbiAgICBuZXh0U2hpcCgpIHtcbiAgICAgIGlmKGN1cnJlbnRTaGlwID09PSAnQ2FycmllcicpIHtcbiAgICAgICAgY3VycmVudFNoaXAgPSAnQmF0dGxlc2hpcCc7XG4gICAgICB9ZWxzZSBpZihjdXJyZW50U2hpcCA9PT0gJ0JhdHRsZXNoaXAnKSB7XG4gICAgICAgIGN1cnJlbnRTaGlwID0gJ0Rlc3Ryb3llcic7XG4gICAgICB9ZWxzZSBpZihjdXJyZW50U2hpcCA9PT0gJ0Rlc3Ryb3llcicpIHtcbiAgICAgICAgY3VycmVudFNoaXAgPSAnU3VibWFyaW5lJztcbiAgICAgIH1lbHNlIGlmKGN1cnJlbnRTaGlwID09PSAnU3VibWFyaW5lJykge1xuICAgICAgICBjdXJyZW50U2hpcCA9ICdQYXRyb2xCb2F0JztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2xvc2VNb2RhbCgpIHtcbiAgICAgIG15TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGxheWVyKCkge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVBvc2l0aW9uKGFycmF5KSB7XG4gICAgZm9yICg7Oykge1xuICAgICAgLy8gZm9yICg7OykgY3JlYXRlcyBhbiBpbmZpbml0ZSBsb29wXG4gICAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgNjU7IC8vIFJhbmRvbSBBU0NJSSBjb2RlIGZvciBBIHRvIEpcbiAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxOyAvLyBSYW5kb20gbnVtYmVyIGZyb20gMSB0byAxMFxuICAgICAgY29uc3QgcmVzdWx0ID0gU3RyaW5nLmZyb21DaGFyQ29kZShpKSArIGo7XG5cbiAgICAgIGlmICghYXJyYXkuaW5jbHVkZXMocmVzdWx0KSkge1xuICAgICAgICBhcnJheS5wdXNoKHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7IC8vIFJldHVybiB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gIHBsYXllckdhbWVib2FyZC5pbml0aWFsaXplKCk7XG4gIGNvbnN0IGNvbXBHYW1lYm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgY29tcEdhbWVib2FyZC5pbml0aWFsaXplKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXJBdHRhY2socG9zaXRpb24pIHtcbiAgICAgIGNvbXBHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XG4gICAgfSxcblxuICAgIGNvbXBBdHRhY2soKSB7XG4gICAgICBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgZ2VuZXJhdGVSYW5kb21Qb3NpdGlvbihwbGF5ZXJHYW1lYm9hcmQuZ2V0QWxsU2hvdHMoKSksXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBnZXRQbGF5ZXJHYW1lYm9hcmQoKSB7XG4gICAgICByZXR1cm4gcGxheWVyR2FtZWJvYXJkO1xuICAgIH0sXG5cbiAgICBnZXRDb21wR2FtZUJvYXJkKCkge1xuICAgICAgcmV0dXJuIGNvbXBHYW1lYm9hcmQ7XG4gICAgfSxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNoaXAobmFtZSwgbGVuZ3RoLCBoaXRzLCBzdW5rKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBsZW5ndGgsXG4gICAgaGl0cyxcbiAgICBzdW5rLFxuXG4gICAgaGl0KCkge1xuICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgfSxcblxuICAgIGlzU3VuaygpIHtcbiAgICAgIHJldHVybiB0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoO1xuICAgIH0sXG5cbiAgICBkaXNwbGF5SW5mbygpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJHt0aGlzLm5hbWV9IGxlbmd0aDoke3RoaXMubGVuZ3RofSBoaXRzOiR7dGhpcy5oaXRzfSBzdW5rOiR7dGhpcy5zdW5rfWAsXG4gICAgICApO1xuICAgIH0sXG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBnYW1lbG9vcCBmcm9tICcuL2dhbWVsb29wJztcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsJztcblxuLy8gQ3JlYXRlIGdhbWVcbmNvbnN0IGdhbWUgPSBnYW1lbG9vcCgpO1xuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcbmdhbWUudXBkYXRlQm9hcmQoKTtcblxuLy8gU2V0dXAgcGxhY2VtZW50XG5jb25zdCB3ZWxjb21lTW9kYWwgPSBtb2RhbCgpO1xud2VsY29tZU1vZGFsLmluaXRpYWxpemUoZ2FtZS5wbGF5ZXJCb2FyZCk7XG53ZWxjb21lTW9kYWwuc3RhcnRQbGFjZVNlcXVlbmNlKGdhbWUucGxheWVyQm9hcmQsICdDYXJyaWVyJywgNSwgJ3gnLCBnYW1lKTtcbndlbGNvbWVNb2RhbC5kaXNwbGF5SW5mbygnQ2FycmllcicpO1xuZ2FtZS51cGRhdGVCb2FyZCgpO1xuXG4vLyBSYW5kb21pemUgZW5lbXkgc2hpcCBwbGFjZW1lbnRcbmdhbWUucGxhY2VFbmVteVNoaXAoJ0NhcnJpZXInLCA1LCBnYW1lKTtcbmdhbWUucGxhY2VFbmVteVNoaXAoJ0JhdHRsZXNoaXAnLCA0LCBnYW1lKTtcbmdhbWUucGxhY2VFbmVteVNoaXAoJ0Rlc3Ryb3llcicsIDMsIGdhbWUpO1xuZ2FtZS5wbGFjZUVuZW15U2hpcCgnU3VibWFyaW5lJywgMywgZ2FtZSk7XG5nYW1lLnBsYWNlRW5lbXlTaGlwKCdQYXRyb2xCb2F0JywgMiwgZ2FtZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=