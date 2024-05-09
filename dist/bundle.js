/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/about.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/about.css ***!
  \*******************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background/home.jpg */ "./src/assets/background/home.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background/tokyo-street.jpg */ "./src/assets/background/tokyo-street.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.about {

    .bg-info {
      margin: 0px;
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
      background-size: cover;
      background-attachment: fixed;
      padding: 15vh 20vw;

      .about-info {
        display: flex;
        background-color: white;
        padding: 10vh 5vw;
        gap: 5vw;

        > div {
          h1 {
            margin: 0px;
            font-size: 4rem;
            font-family: 'MyFont';
          }

          p {
            margin-top: 10px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 1rem;
          }

          button {
            margin-top: 10px;
            cursor: pointer;
            border: none;
            background-color: #2ec4b6;
            font-weight: 700;
            font-size: 1rem;
            color: white;
            width: 45%;
            padding: 8px;
            border-radius: 10px;
          }
        }


        img {
          width: 40%;
        }
      }
    }

    .mission {
      background-color: white;
      height: min(95vh, auto);

      > h1 {
        margin: 10vh auto 5vh;
        font-size: 4rem;
        font-family: 'MyFont';
        text-align: center;
      }

      > p {
        margin: 0vh 20vw 10vh;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.2rem;
        text-align: center;
      }

      > .reasons {
        ul {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;

          li {
            text-align: center;

            width: 300px;
            height: 300px;

            h3 {
              font-size: 1.2rem;  
            }

            img {
              height: 55px;
              width: auto;
            }
          }
        }
      }



    }

    .reviews {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
      background-size: cover;
      background-attachment: fixed;
      padding: 15vh 5vw;
      height: min(90vh, auto);
      display: grid;
      grid-template: 200px auto/ repeat(3, 1fr);
      justify-items: center;


      h1 {
        grid-column: 1/4;
        grid-row: 1;
        color: white;
        font-size: 3.5rem;
        font-family: 'MyFont';
        text-align: center;
      }
      .card {
        background-color: white;
        width: 17vw;
        height: min(40vh, auto);
        flex-grow: 0;
        text-align: center;
        padding: 10px 35px;

        p {
          padding: 10px 5px;
          font-size: 1rem;

        }

        img {
          margin: 20px auto;
          display: block;
          flex-grow: 0;
          height: 80px;
          width: auto;
          border-radius: 50%;
        }

        span {
          font-size: 1.2rem;
        }
      }
    }

  }`, "",{"version":3,"sources":["webpack://./src/pages/about.css"],"names":[],"mappings":"AAAA;;IAEI;MACE,WAAW;MACX,yDAAsD;MACtD,sBAAsB;MACtB,4BAA4B;MAC5B,kBAAkB;;MAElB;QACE,aAAa;QACb,uBAAuB;QACvB,iBAAiB;QACjB,QAAQ;;QAER;UACE;YACE,WAAW;YACX,eAAe;YACf,qBAAqB;UACvB;;UAEA;YACE,gBAAgB;YAChB,6EAA6E;YAC7E,eAAe;UACjB;;UAEA;YACE,gBAAgB;YAChB,eAAe;YACf,YAAY;YACZ,yBAAyB;YACzB,gBAAgB;YAChB,eAAe;YACf,YAAY;YACZ,UAAU;YACV,YAAY;YACZ,mBAAmB;UACrB;QACF;;;QAGA;UACE,UAAU;QACZ;MACF;IACF;;IAEA;MACE,uBAAuB;MACvB,uBAAuB;;MAEvB;QACE,qBAAqB;QACrB,eAAe;QACf,qBAAqB;QACrB,kBAAkB;MACpB;;MAEA;QACE,qBAAqB;QACrB,6EAA6E;QAC7E,iBAAiB;QACjB,kBAAkB;MACpB;;MAEA;QACE;UACE,gBAAgB;UAChB,aAAa;UACb,mBAAmB;UACnB,uBAAuB;UACvB,SAAS;;UAET;YACE,kBAAkB;;YAElB,YAAY;YACZ,aAAa;;YAEb;cACE,iBAAiB;YACnB;;YAEA;cACE,YAAY;cACZ,WAAW;YACb;UACF;QACF;MACF;;;;IAIF;;IAEA;MACE,yDAA4D;MAC5D,sBAAsB;MACtB,4BAA4B;MAC5B,iBAAiB;MACjB,uBAAuB;MACvB,aAAa;MACb,yCAAyC;MACzC,qBAAqB;;;MAGrB;QACE,gBAAgB;QAChB,WAAW;QACX,YAAY;QACZ,iBAAiB;QACjB,qBAAqB;QACrB,kBAAkB;MACpB;MACA;QACE,uBAAuB;QACvB,WAAW;QACX,uBAAuB;QACvB,YAAY;QACZ,kBAAkB;QAClB,kBAAkB;;QAElB;UACE,iBAAiB;UACjB,eAAe;;QAEjB;;QAEA;UACE,iBAAiB;UACjB,cAAc;UACd,YAAY;UACZ,YAAY;UACZ,WAAW;UACX,kBAAkB;QACpB;;QAEA;UACE,iBAAiB;QACnB;MACF;IACF;;EAEF","sourcesContent":[".about {\n\n    .bg-info {\n      margin: 0px;\n      background-image: url(\"../assets/background/home.jpg\");\n      background-size: cover;\n      background-attachment: fixed;\n      padding: 15vh 20vw;\n\n      .about-info {\n        display: flex;\n        background-color: white;\n        padding: 10vh 5vw;\n        gap: 5vw;\n\n        > div {\n          h1 {\n            margin: 0px;\n            font-size: 4rem;\n            font-family: 'MyFont';\n          }\n\n          p {\n            margin-top: 10px;\n            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n            font-size: 1rem;\n          }\n\n          button {\n            margin-top: 10px;\n            cursor: pointer;\n            border: none;\n            background-color: #2ec4b6;\n            font-weight: 700;\n            font-size: 1rem;\n            color: white;\n            width: 45%;\n            padding: 8px;\n            border-radius: 10px;\n          }\n        }\n\n\n        img {\n          width: 40%;\n        }\n      }\n    }\n\n    .mission {\n      background-color: white;\n      height: min(95vh, auto);\n\n      > h1 {\n        margin: 10vh auto 5vh;\n        font-size: 4rem;\n        font-family: 'MyFont';\n        text-align: center;\n      }\n\n      > p {\n        margin: 0vh 20vw 10vh;\n        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n        font-size: 1.2rem;\n        text-align: center;\n      }\n\n      > .reasons {\n        ul {\n          list-style: none;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          gap: 50px;\n\n          li {\n            text-align: center;\n\n            width: 300px;\n            height: 300px;\n\n            h3 {\n              font-size: 1.2rem;  \n            }\n\n            img {\n              height: 55px;\n              width: auto;\n            }\n          }\n        }\n      }\n\n\n\n    }\n\n    .reviews {\n      background-image: url(../assets/background/tokyo-street.jpg);\n      background-size: cover;\n      background-attachment: fixed;\n      padding: 15vh 5vw;\n      height: min(90vh, auto);\n      display: grid;\n      grid-template: 200px auto/ repeat(3, 1fr);\n      justify-items: center;\n\n\n      h1 {\n        grid-column: 1/4;\n        grid-row: 1;\n        color: white;\n        font-size: 3.5rem;\n        font-family: 'MyFont';\n        text-align: center;\n      }\n      .card {\n        background-color: white;\n        width: 17vw;\n        height: min(40vh, auto);\n        flex-grow: 0;\n        text-align: center;\n        padding: 10px 35px;\n\n        p {\n          padding: 10px 5px;\n          font-size: 1rem;\n\n        }\n\n        img {\n          margin: 20px auto;\n          display: block;\n          flex-grow: 0;\n          height: 80px;\n          width: auto;\n          border-radius: 50%;\n        }\n\n        span {\n          font-size: 1.2rem;\n        }\n      }\n    }\n\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/contact.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/contact.css ***!
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background/home.jpg */ "./src/assets/background/home.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.contacts {

    .bg-info {
      margin: 0px;
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
      background-size: cover;
      background-attachment: fixed;
      padding: 15vh 20vw;
      height: min(83vh, auto);

      .contacts-info {
        display: grid;
        grid-template-columns: auto 1fr;
        background-color: white;
        padding: 5vh 5vw;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

        div {
          width: 90%;

          p {
            font-size: 1.3rem;
          }

          img {
            width: 100%;
            height: auto;
            border-radius: 10px;        
          }
        }

        h3 {
          margin-top: 0px;
          font-family: 'MyFont';
          font-size: 3rem;
          text-decoration: underline;
          text-underline-offset: 20px;
          text-decoration-color: var(--dark-blue);
          
        }


        form {

          ul {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            height: 70%;
            list-style: none;
            padding-left: 0px;

            li {
              display: flex;
              flex: 1 1 auto;
              flex-direction: column;
              gap: 5px;

              label {
                font-size: 1.2rem;
              }
  
              input, textarea {
                font-family: "Helvetica", "Arial", sans-serif;
                font-size: 1rem;
                border: 1px solid #D6D9DC;
                border-radius: 4px;
                padding: 5px 10px;
                resize: none;
                margin-bottom: 5px;
              }

              input:hover, textarea:hover {
                  box-shadow: 2px 2px 5px #dddddf;
              }

              input:focus, textarea:focus {
                  border: 1px solid var(--dark-blue);
                  box-shadow: 2px 2px 5px #dddddf;
                  outline: none;
              }

              input::placeholder, textarea::placeholder {
                  color: #c6c9cd;
                  font-size: 0.95rem;
              }

            } 
          }

          button {
            cursor: pointer;
            border: none;
            background-color: #2ec4b6;
            font-weight: 700;
            font-size: 1rem;
            color: white;
            width: 25%;
            padding: 8px;
            border-radius: 10px;
          }
        }
      }
    }
  }`, "",{"version":3,"sources":["webpack://./src/pages/contact.css"],"names":[],"mappings":"AAAA;;IAEI;MACE,WAAW;MACX,yDAAsD;MACtD,sBAAsB;MACtB,4BAA4B;MAC5B,kBAAkB;MAClB,uBAAuB;;MAEvB;QACE,aAAa;QACb,+BAA+B;QAC/B,uBAAuB;QACvB,gBAAgB;QAChB,6EAA6E;;QAE7E;UACE,UAAU;;UAEV;YACE,iBAAiB;UACnB;;UAEA;YACE,WAAW;YACX,YAAY;YACZ,mBAAmB;UACrB;QACF;;QAEA;UACE,eAAe;UACf,qBAAqB;UACrB,eAAe;UACf,0BAA0B;UAC1B,2BAA2B;UAC3B,uCAAuC;;QAEzC;;;QAGA;;UAEE;YACE,aAAa;YACb,sBAAsB;YACtB,6BAA6B;YAC7B,WAAW;YACX,gBAAgB;YAChB,iBAAiB;;YAEjB;cACE,aAAa;cACb,cAAc;cACd,sBAAsB;cACtB,QAAQ;;cAER;gBACE,iBAAiB;cACnB;;cAEA;gBACE,6CAA6C;gBAC7C,eAAe;gBACf,yBAAyB;gBACzB,kBAAkB;gBAClB,iBAAiB;gBACjB,YAAY;gBACZ,kBAAkB;cACpB;;cAEA;kBACI,+BAA+B;cACnC;;cAEA;kBACI,kCAAkC;kBAClC,+BAA+B;kBAC/B,aAAa;cACjB;;cAEA;kBACI,cAAc;kBACd,kBAAkB;cACtB;;YAEF;UACF;;UAEA;YACE,eAAe;YACf,YAAY;YACZ,yBAAyB;YACzB,gBAAgB;YAChB,eAAe;YACf,YAAY;YACZ,UAAU;YACV,YAAY;YACZ,mBAAmB;UACrB;QACF;MACF;IACF;EACF","sourcesContent":[".contacts {\n\n    .bg-info {\n      margin: 0px;\n      background-image: url(\"../assets/background/home.jpg\");\n      background-size: cover;\n      background-attachment: fixed;\n      padding: 15vh 20vw;\n      height: min(83vh, auto);\n\n      .contacts-info {\n        display: grid;\n        grid-template-columns: auto 1fr;\n        background-color: white;\n        padding: 5vh 5vw;\n        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n\n        div {\n          width: 90%;\n\n          p {\n            font-size: 1.3rem;\n          }\n\n          img {\n            width: 100%;\n            height: auto;\n            border-radius: 10px;        \n          }\n        }\n\n        h3 {\n          margin-top: 0px;\n          font-family: 'MyFont';\n          font-size: 3rem;\n          text-decoration: underline;\n          text-underline-offset: 20px;\n          text-decoration-color: var(--dark-blue);\n          \n        }\n\n\n        form {\n\n          ul {\n            display: flex;\n            flex-direction: column;\n            justify-content: space-evenly;\n            height: 70%;\n            list-style: none;\n            padding-left: 0px;\n\n            li {\n              display: flex;\n              flex: 1 1 auto;\n              flex-direction: column;\n              gap: 5px;\n\n              label {\n                font-size: 1.2rem;\n              }\n  \n              input, textarea {\n                font-family: \"Helvetica\", \"Arial\", sans-serif;\n                font-size: 1rem;\n                border: 1px solid #D6D9DC;\n                border-radius: 4px;\n                padding: 5px 10px;\n                resize: none;\n                margin-bottom: 5px;\n              }\n\n              input:hover, textarea:hover {\n                  box-shadow: 2px 2px 5px #dddddf;\n              }\n\n              input:focus, textarea:focus {\n                  border: 1px solid var(--dark-blue);\n                  box-shadow: 2px 2px 5px #dddddf;\n                  outline: none;\n              }\n\n              input::placeholder, textarea::placeholder {\n                  color: #c6c9cd;\n                  font-size: 0.95rem;\n              }\n\n            } \n          }\n\n          button {\n            cursor: pointer;\n            border: none;\n            background-color: #2ec4b6;\n            font-weight: 700;\n            font-size: 1rem;\n            color: white;\n            width: 25%;\n            padding: 8px;\n            border-radius: 10px;\n          }\n        }\n      }\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/home.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/home.css ***!
  \******************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background/home.jpg */ "./src/assets/background/home.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.home {
  height: 83vh;
  margin: 0px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-attachment: fixed;

  .bg-home {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10% 20%;


    h1 {  
      font-family: 'MyFont';
      font-size: 4rem;
      text-align: center;
      color: white;
      margin: 25px 0px;
    }

    p {
      font-size: 1.5rem;
      text-align: center;
      color: white;
    }


    button {
      cursor: pointer;
      border: 2px solid var(--dark-blue);
      background-color: #2ec4b6;
      font-weight: 700;
      font-size: 1rem;
      color: white;
      padding: 8px 25px;
      border-radius: 10px;
    }
  }

}`, "",{"version":3,"sources":["webpack://./src/pages/home.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,kHAA+G;EAC/G,sBAAsB;EACtB,4BAA4B;;EAE5B;;IAEE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;;;IAGhB;MACE,qBAAqB;MACrB,eAAe;MACf,kBAAkB;MAClB,YAAY;MACZ,gBAAgB;IAClB;;IAEA;MACE,iBAAiB;MACjB,kBAAkB;MAClB,YAAY;IACd;;;IAGA;MACE,eAAe;MACf,kCAAkC;MAClC,yBAAyB;MACzB,gBAAgB;MAChB,eAAe;MACf,YAAY;MACZ,iBAAiB;MACjB,mBAAmB;IACrB;EACF;;AAEF","sourcesContent":[".home {\n  height: 83vh;\n  margin: 0px;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(\"../assets/background/home.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n\n  .bg-home {\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 10% 20%;\n\n\n    h1 {  \n      font-family: 'MyFont';\n      font-size: 4rem;\n      text-align: center;\n      color: white;\n      margin: 25px 0px;\n    }\n\n    p {\n      font-size: 1.5rem;\n      text-align: center;\n      color: white;\n    }\n\n\n    button {\n      cursor: pointer;\n      border: 2px solid var(--dark-blue);\n      background-color: #2ec4b6;\n      font-weight: 700;\n      font-size: 1rem;\n      color: white;\n      padding: 8px 25px;\n      border-radius: 10px;\n    }\n  }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/menu.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/menu.css ***!
  \******************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background/home.jpg */ "./src/assets/background/home.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.menu {

    .bg-info {
      margin: 0px;
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
      background-size: cover;
      background-attachment: fixed;
      padding: 15vh 20vw;
      
        
      .inside-card {
        display: grid;
        grid-template-rows: 50px auto 50px / minmax(0, 1fr);
        background-color: white;
        padding: 10vh 5vw;
        gap: 5vw;

        > button {
          justify-self: center;
          width: 20%;
          cursor: pointer;
          border: 2px solid var(--dark-blue);
          background-color: #2ec4b6;
          font-weight: 700;
          font-size: 1rem;
          color: white;
          padding: 8px 25px;
          border-radius: 10px;

        }

        h1 {
          margin: 0px;
          font-family: 'MyFont';
          font-size: 4rem;
          text-align: center;
          color: black;
        }

        .card-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
          grid-column-gap: 20px;
          grid-row-gap: 50px;

          .card {
            color: white;
            height: 150px;
            display: grid;
            grid-template-columns: auto 1fr;
            background-color: var(--white);
            box-shadow: 0px 0px 10px 5px var(--grey);

            img {
              height: 150px;
            }

            div {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 100%;
              padding: 5%;
              font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

              h3 {
                margin: 0px;

                display: flex;
                justify-content: space-between;
                color: black;
                font-size: 1.2rem;

                span {
                  text-align: center;
                  width: 45px;
                  height: 20px;
                  background-color: var(--dark-blue);
                  font-size: 1rem;
                  padding: 0px 5px;
                  color: white;
                }

              }

              p {
                font-size: 0.8rem;
                color: black;
              }

              > button {
                justify-self: center;
                cursor: pointer;
                border: 2px solid var(--dark-blue);
                background-color: #2ec4b6;
                font-size: 0.9rem;
                color: white;
                padding: 3px 7px;
                width: 30%;
                border-radius: 10px;

              }
            }
          }


        }
      }
    }

  }`, "",{"version":3,"sources":["webpack://./src/pages/menu.css"],"names":[],"mappings":"AAAA;;IAEI;MACE,WAAW;MACX,yDAAsD;MACtD,sBAAsB;MACtB,4BAA4B;MAC5B,kBAAkB;;;MAGlB;QACE,aAAa;QACb,mDAAmD;QACnD,uBAAuB;QACvB,iBAAiB;QACjB,QAAQ;;QAER;UACE,oBAAoB;UACpB,UAAU;UACV,eAAe;UACf,kCAAkC;UAClC,yBAAyB;UACzB,gBAAgB;UAChB,eAAe;UACf,YAAY;UACZ,iBAAiB;UACjB,mBAAmB;;QAErB;;QAEA;UACE,WAAW;UACX,qBAAqB;UACrB,eAAe;UACf,kBAAkB;UAClB,YAAY;QACd;;QAEA;UACE,aAAa;UACb,yDAAyD;UACzD,qBAAqB;UACrB,kBAAkB;;UAElB;YACE,YAAY;YACZ,aAAa;YACb,aAAa;YACb,+BAA+B;YAC/B,8BAA8B;YAC9B,wCAAwC;;YAExC;cACE,aAAa;YACf;;YAEA;cACE,aAAa;cACb,sBAAsB;cACtB,8BAA8B;cAC9B,YAAY;cACZ,WAAW;cACX,6EAA6E;;cAE7E;gBACE,WAAW;;gBAEX,aAAa;gBACb,8BAA8B;gBAC9B,YAAY;gBACZ,iBAAiB;;gBAEjB;kBACE,kBAAkB;kBAClB,WAAW;kBACX,YAAY;kBACZ,kCAAkC;kBAClC,eAAe;kBACf,gBAAgB;kBAChB,YAAY;gBACd;;cAEF;;cAEA;gBACE,iBAAiB;gBACjB,YAAY;cACd;;cAEA;gBACE,oBAAoB;gBACpB,eAAe;gBACf,kCAAkC;gBAClC,yBAAyB;gBACzB,iBAAiB;gBACjB,YAAY;gBACZ,gBAAgB;gBAChB,UAAU;gBACV,mBAAmB;;cAErB;YACF;UACF;;;QAGF;MACF;IACF;;EAEF","sourcesContent":[".menu {\n\n    .bg-info {\n      margin: 0px;\n      background-image: url(\"../assets/background/home.jpg\");\n      background-size: cover;\n      background-attachment: fixed;\n      padding: 15vh 20vw;\n      \n        \n      .inside-card {\n        display: grid;\n        grid-template-rows: 50px auto 50px / minmax(0, 1fr);\n        background-color: white;\n        padding: 10vh 5vw;\n        gap: 5vw;\n\n        > button {\n          justify-self: center;\n          width: 20%;\n          cursor: pointer;\n          border: 2px solid var(--dark-blue);\n          background-color: #2ec4b6;\n          font-weight: 700;\n          font-size: 1rem;\n          color: white;\n          padding: 8px 25px;\n          border-radius: 10px;\n\n        }\n\n        h1 {\n          margin: 0px;\n          font-family: 'MyFont';\n          font-size: 4rem;\n          text-align: center;\n          color: black;\n        }\n\n        .card-list {\n          display: grid;\n          grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));\n          grid-column-gap: 20px;\n          grid-row-gap: 50px;\n\n          .card {\n            color: white;\n            height: 150px;\n            display: grid;\n            grid-template-columns: auto 1fr;\n            background-color: var(--white);\n            box-shadow: 0px 0px 10px 5px var(--grey);\n\n            img {\n              height: 150px;\n            }\n\n            div {\n              display: flex;\n              flex-direction: column;\n              justify-content: space-between;\n              height: 100%;\n              padding: 5%;\n              font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n\n              h3 {\n                margin: 0px;\n\n                display: flex;\n                justify-content: space-between;\n                color: black;\n                font-size: 1.2rem;\n\n                span {\n                  text-align: center;\n                  width: 45px;\n                  height: 20px;\n                  background-color: var(--dark-blue);\n                  font-size: 1rem;\n                  padding: 0px 5px;\n                  color: white;\n                }\n\n              }\n\n              p {\n                font-size: 0.8rem;\n                color: black;\n              }\n\n              > button {\n                justify-self: center;\n                cursor: pointer;\n                border: 2px solid var(--dark-blue);\n                background-color: #2ec4b6;\n                font-size: 0.9rem;\n                color: white;\n                padding: 3px 7px;\n                width: 30%;\n                border-radius: 10px;\n\n              }\n            }\n          }\n\n\n        }\n      }\n    }\n\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets//fonts/DancingScript-VariableFont_wght.ttf */ "./src/assets/fonts/DancingScript-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets//fonts/Roboto-Regular.ttf */ "./src/assets/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'MyFont';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-weight: 600;
    font-style: normal;
  }

:root {
  --black: #000000;
  --dark-blue: #2ec4b6;
  --toast: #cbf3f0; 
  --grey: #e5e5e5;
  --white: #ffffff;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0px;
  height: 100vh;
  display: grid;
  grid-template-rows: 17vh auto auto;
  background-color: var(--toast);

  header {
    grid-row: 1;
    background-color: var(--dark-blue);
    border-bottom: 8px solid var(--toast);
    padding: 20px 0px 20px 0px;

    nav {
      height: 100%;
      display: flex;
      justify-content: center;
      gap: 100px;

      img {
        height: 12vh;
        width: auto;
      }

      button {
        border: none;
        outline: none;
        background-color: var(--dark-blue);
        color: var(--white);
        cursor: pointer;
        font-size: 1.2rem;
        transition: 500ms ease-out;
      }

      button:hover {
        color: var(--grey);
        padding-bottom: 20px;
        text-decoration: underline;
        text-underline-offset: 15px;
      }

    }
  }

  #content {
    background-color: var(--white);
    grid-row: 2;

    
    /* .home {
      height: 83vh;
      margin: 0px;
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("./assets//background/home.jpg");
      background-size: cover;
      background-attachment: fixed;

      .bg-home {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10% 20%;
  
  
        h1 {  
          font-family: 'MyFont';
          font-size: 4rem;
          text-align: center;
          color: white;
          margin: 25px 0px;
        }
  
        p {
          font-size: 1.5rem;
          text-align: center;
          color: white;
        }
  
  
        button {
          cursor: pointer;
          border: 2px solid var(--dark-blue);
          background-color: #2ec4b6;
          font-weight: 700;
          font-size: 1rem;
          color: white;
          padding: 8px 25px;
          border-radius: 10px;
        }
      }

    } */

    /* .menu {

      .bg-info {
        margin: 0px;
        background-image: url("./assets/background/home.jpg");
        background-size: cover;
        background-attachment: fixed;
        padding: 15vh 20vw;
        
          
        .inside-card {
          display: grid;
          grid-template-rows: 50px auto 50px / minmax(0, 1fr);
          background-color: white;
          padding: 10vh 5vw;
          gap: 5vw;

          > button {
            justify-self: center;
            width: 20%;
            cursor: pointer;
            border: 2px solid var(--dark-blue);
            background-color: #2ec4b6;
            font-weight: 700;
            font-size: 1rem;
            color: white;
            padding: 8px 25px;
            border-radius: 10px;

          }

          h1 {
            margin: 0px;
            font-family: 'MyFont';
            font-size: 4rem;
            text-align: center;
            color: black;
          }

          .card-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
            grid-column-gap: 20px;
            grid-row-gap: 50px;

            .card {
              color: white;
              height: 150px;
              display: grid;
              grid-template-columns: auto 1fr;
              background-color: var(--white);
              box-shadow: 0px 0px 10px 5px var(--grey);

              img {
                height: 150px;
              }

              div {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                padding: 5%;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

                h3 {
                  margin: 0px;

                  display: flex;
                  justify-content: space-between;
                  color: black;
                  font-size: 1.2rem;

                  span {
                    text-align: center;
                    width: 45px;
                    height: 20px;
                    background-color: var(--dark-blue);
                    font-size: 1rem;
                    padding: 0px 5px;
                    color: white;
                  }

                }

                p {
                  font-size: 0.8rem;
                  color: black;
                }

                > button {
                  justify-self: center;
                  cursor: pointer;
                  border: 2px solid var(--dark-blue);
                  background-color: #2ec4b6;
                  font-size: 0.9rem;
                  color: white;
                  padding: 3px 7px;
                  width: 30%;
                  border-radius: 10px;

                }
              }
            }


          }
        }
      }

    } */

    /* .about {

      .bg-info {
        margin: 0px;
        background-image: url("./assets/background/home.jpg");
        background-size: cover;
        background-attachment: fixed;
        padding: 15vh 20vw;

        .about-info {
          display: flex;
          background-color: white;
          padding: 10vh 5vw;
          gap: 5vw;
  
          > div {
            h1 {
              margin: 0px;
              font-size: 4rem;
              font-family: 'MyFont';
            }
  
            p {
              margin-top: 10px;
              font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
              font-size: 1rem;
            }
  
            button {
              margin-top: 10px;
              cursor: pointer;
              border: none;
              background-color: #2ec4b6;
              font-weight: 700;
              font-size: 1rem;
              color: white;
              width: 45%;
              padding: 8px;
              border-radius: 10px;
            }
          }
  
  
          img {
            width: 40%;
          }
        }
      }

      .mission {
        background-color: white;
        height: min(95vh, auto);

        > h1 {
          margin: 10vh auto 5vh;
          font-size: 4rem;
          font-family: 'MyFont';
          text-align: center;
        }

        > p {
          margin: 0vh 20vw 10vh;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          font-size: 1.2rem;
          text-align: center;
        }

        > .reasons {
          ul {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 50px;
  
            li {
              text-align: center;

              width: 300px;
              height: 300px;

              h3 {
                font-size: 1.2rem;  
              }

              img {
                height: 55px;
                width: auto;
              }
            }
          }
        }



      }

      .reviews {
        background-image: url(./assets/background/tokyo-street.jpg);
        background-size: cover;
        background-attachment: fixed;
        padding: 15vh 5vw;
        height: min(90vh, auto);
        display: grid;
        grid-template: 200px auto/ repeat(3, 1fr);
        justify-items: center;


        h1 {
          grid-column: 1/4;
          grid-row: 1;
          color: white;
          font-size: 3.5rem;
          font-family: 'MyFont';
          text-align: center;
        }
        .card {
          background-color: white;
          width: 17vw;
          height: min(40vh, auto);
          flex-grow: 0;
          text-align: center;
          padding: 10px 35px;

          p {
            padding: 10px 5px;
            font-size: 1rem;

          }

          img {
            margin: 20px auto;
            display: block;
            flex-grow: 0;
            height: 80px;
            width: auto;
            border-radius: 50%;
          }

          span {
            font-size: 1.2rem;
          }
        }
      }

    } */

    /* .contacts {

      .bg-info {
        margin: 0px;
        background-image: url("./assets/background/home.jpg");
        background-size: cover;
        background-attachment: fixed;
        padding: 15vh 20vw;
        height: min(83vh, auto);

        .contacts-info {
          display: grid;
          grid-template-columns: auto 1fr;
          background-color: white;
          padding: 5vh 5vw;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

          div {
            width: 90%;
  
            p {
              font-size: 1.3rem;
            }

            img {
              width: 100%;
              height: auto;
              border-radius: 10px;        
            }
          }

          h3 {
            margin-top: 0px;
            font-family: 'MyFont';
            font-size: 3rem;
            text-decoration: underline;
            text-underline-offset: 20px;
            text-decoration-color: var(--dark-blue);
            
          }


          form {

            ul {
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              height: 70%;
              list-style: none;
              padding-left: 0px;
  
              li {
                display: flex;
                flex: 1 1 auto;
                flex-direction: column;
                gap: 5px;

                label {
                  font-size: 1.2rem;
                }
    
                input, textarea {
                  font-family: "Helvetica", "Arial", sans-serif;
                  font-size: 1rem;
                  border: 1px solid #D6D9DC;
                  border-radius: 4px;
                  padding: 5px 10px;
                  resize: none;
                  margin-bottom: 5px;
                }

                input:hover, textarea:hover {
                    box-shadow: 2px 2px 5px #dddddf;
                }

                input:focus, textarea:focus {
                    border: 1px solid var(--dark-blue);
                    box-shadow: 2px 2px 5px #dddddf;
                    outline: none;
                }

                input::placeholder, textarea::placeholder {
                    color: #c6c9cd;
                    font-size: 0.95rem;
                }

              } 
            }

            button {
              cursor: pointer;
              border: none;
              background-color: #2ec4b6;
              font-weight: 700;
              font-size: 1rem;
              color: white;
              width: 25%;
              padding: 8px;
              border-radius: 10px;
            }
  


          }


  
  

        }
      }
    } */

  }
  
  footer {
    grid-row: -2 ;
    background-color: #1c1c1c;
    display: grid;
    grid-template-rows: 90% 10%;
    align-items: center;
    color: white;


    .footer-info {
      height: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;

      > div {
        margin: 5% 15%;
      }

      p {
        margin-top: 20px;
        margin-bottom: 30px;
        font-size: 2.5rem;
        font-weight: 700;
        font-family: 'MyFont';
        color: white;
      }

      .f-contact div, .f-social div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span {
          margin-bottom: 10px;
        }
        a {
          color: white;
          text-decoration: none;
        }
      }

      .f-form form {
        height: 100%;

        label {
          margin-top: 20px;
          margin-bottom: 30px;
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          font-family: 'MyFont';
          color: white;
        }

        input {
          display: block;
          margin-bottom: 15px;
          width: 70%;
          padding: 10px;
          border-radius: 2px;
          font-family: 'Courier New', Courier, monospace;
        }

        button {
          cursor: pointer;
          border: none;
          background-color: #2ec4b6;
          font-weight: 700;
          font-size: 1rem;
          color: white;
          padding: 8px;
          border-radius: 10px;
        }
      }


    }

    .github {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      color: var(--white);
      background-color: #2c2c2c;
      img {
        height: 20px;
        width: auto;
      }
    }

  }

}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAA+D;IAC/D,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,qBAAqB;IACrB,4CAA8C;IAC9C,gBAAgB;IAChB,kBAAkB;EACpB;;AAEF;EACE,gBAAgB;EAChB,oBAAoB;EACpB,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,kCAAkC;EAClC,8BAA8B;;EAE9B;IACE,WAAW;IACX,kCAAkC;IAClC,qCAAqC;IACrC,0BAA0B;;IAE1B;MACE,YAAY;MACZ,aAAa;MACb,uBAAuB;MACvB,UAAU;;MAEV;QACE,YAAY;QACZ,WAAW;MACb;;MAEA;QACE,YAAY;QACZ,aAAa;QACb,kCAAkC;QAClC,mBAAmB;QACnB,eAAe;QACf,iBAAiB;QACjB,0BAA0B;MAC5B;;MAEA;QACE,kBAAkB;QAClB,oBAAoB;QACpB,0BAA0B;QAC1B,2BAA2B;MAC7B;;IAEF;EACF;;EAEA;IACE,8BAA8B;IAC9B,WAAW;;;IAGX;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;OA2CG;;IAEH;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;OA8GG;;IAEH;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;OAiJG;;IAEH;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;OAgHG;;EAEL;;EAEA;IACE,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,YAAY;;;IAGZ;MACE,YAAY;MACZ,aAAa;MACb,qCAAqC;MACrC,qBAAqB;;MAErB;QACE,cAAc;MAChB;;MAEA;QACE,gBAAgB;QAChB,mBAAmB;QACnB,iBAAiB;QACjB,gBAAgB;QAChB,qBAAqB;QACrB,YAAY;MACd;;MAEA;QACE,aAAa;QACb,sBAAsB;QACtB,8BAA8B;;QAE9B;UACE,mBAAmB;QACrB;QACA;UACE,YAAY;UACZ,qBAAqB;QACvB;MACF;;MAEA;QACE,YAAY;;QAEZ;UACE,gBAAgB;UAChB,mBAAmB;UACnB,cAAc;UACd,iBAAiB;UACjB,gBAAgB;UAChB,qBAAqB;UACrB,YAAY;QACd;;QAEA;UACE,cAAc;UACd,mBAAmB;UACnB,UAAU;UACV,aAAa;UACb,kBAAkB;UAClB,8CAA8C;QAChD;;QAEA;UACE,eAAe;UACf,YAAY;UACZ,yBAAyB;UACzB,gBAAgB;UAChB,eAAe;UACf,YAAY;UACZ,YAAY;UACZ,mBAAmB;QACrB;MACF;;;IAGF;;IAEA;MACE,aAAa;MACb,uBAAuB;MACvB,mBAAmB;MACnB,SAAS;MACT,mBAAmB;MACnB,yBAAyB;MACzB;QACE,YAAY;QACZ,WAAW;MACb;IACF;;EAEF;;AAEF","sourcesContent":["@font-face {\n    font-family: 'MyFont';\n    src: url('./assets//fonts/DancingScript-VariableFont_wght.ttf');\n    font-weight: 600;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'Roboto';\n    src: url('./assets//fonts/Roboto-Regular.ttf');\n    font-weight: 600;\n    font-style: normal;\n  }\n\n:root {\n  --black: #000000;\n  --dark-blue: #2ec4b6;\n  --toast: #cbf3f0; \n  --grey: #e5e5e5;\n  --white: #ffffff;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0px;\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 17vh auto auto;\n  background-color: var(--toast);\n\n  header {\n    grid-row: 1;\n    background-color: var(--dark-blue);\n    border-bottom: 8px solid var(--toast);\n    padding: 20px 0px 20px 0px;\n\n    nav {\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      gap: 100px;\n\n      img {\n        height: 12vh;\n        width: auto;\n      }\n\n      button {\n        border: none;\n        outline: none;\n        background-color: var(--dark-blue);\n        color: var(--white);\n        cursor: pointer;\n        font-size: 1.2rem;\n        transition: 500ms ease-out;\n      }\n\n      button:hover {\n        color: var(--grey);\n        padding-bottom: 20px;\n        text-decoration: underline;\n        text-underline-offset: 15px;\n      }\n\n    }\n  }\n\n  #content {\n    background-color: var(--white);\n    grid-row: 2;\n\n    \n    /* .home {\n      height: 83vh;\n      margin: 0px;\n      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(\"./assets//background/home.jpg\");\n      background-size: cover;\n      background-attachment: fixed;\n\n      .bg-home {\n\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        padding: 10% 20%;\n  \n  \n        h1 {  \n          font-family: 'MyFont';\n          font-size: 4rem;\n          text-align: center;\n          color: white;\n          margin: 25px 0px;\n        }\n  \n        p {\n          font-size: 1.5rem;\n          text-align: center;\n          color: white;\n        }\n  \n  \n        button {\n          cursor: pointer;\n          border: 2px solid var(--dark-blue);\n          background-color: #2ec4b6;\n          font-weight: 700;\n          font-size: 1rem;\n          color: white;\n          padding: 8px 25px;\n          border-radius: 10px;\n        }\n      }\n\n    } */\n\n    /* .menu {\n\n      .bg-info {\n        margin: 0px;\n        background-image: url(\"./assets/background/home.jpg\");\n        background-size: cover;\n        background-attachment: fixed;\n        padding: 15vh 20vw;\n        \n          \n        .inside-card {\n          display: grid;\n          grid-template-rows: 50px auto 50px / minmax(0, 1fr);\n          background-color: white;\n          padding: 10vh 5vw;\n          gap: 5vw;\n\n          > button {\n            justify-self: center;\n            width: 20%;\n            cursor: pointer;\n            border: 2px solid var(--dark-blue);\n            background-color: #2ec4b6;\n            font-weight: 700;\n            font-size: 1rem;\n            color: white;\n            padding: 8px 25px;\n            border-radius: 10px;\n\n          }\n\n          h1 {\n            margin: 0px;\n            font-family: 'MyFont';\n            font-size: 4rem;\n            text-align: center;\n            color: black;\n          }\n\n          .card-list {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));\n            grid-column-gap: 20px;\n            grid-row-gap: 50px;\n\n            .card {\n              color: white;\n              height: 150px;\n              display: grid;\n              grid-template-columns: auto 1fr;\n              background-color: var(--white);\n              box-shadow: 0px 0px 10px 5px var(--grey);\n\n              img {\n                height: 150px;\n              }\n\n              div {\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n                height: 100%;\n                padding: 5%;\n                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n\n                h3 {\n                  margin: 0px;\n\n                  display: flex;\n                  justify-content: space-between;\n                  color: black;\n                  font-size: 1.2rem;\n\n                  span {\n                    text-align: center;\n                    width: 45px;\n                    height: 20px;\n                    background-color: var(--dark-blue);\n                    font-size: 1rem;\n                    padding: 0px 5px;\n                    color: white;\n                  }\n\n                }\n\n                p {\n                  font-size: 0.8rem;\n                  color: black;\n                }\n\n                > button {\n                  justify-self: center;\n                  cursor: pointer;\n                  border: 2px solid var(--dark-blue);\n                  background-color: #2ec4b6;\n                  font-size: 0.9rem;\n                  color: white;\n                  padding: 3px 7px;\n                  width: 30%;\n                  border-radius: 10px;\n\n                }\n              }\n            }\n\n\n          }\n        }\n      }\n\n    } */\n\n    /* .about {\n\n      .bg-info {\n        margin: 0px;\n        background-image: url(\"./assets/background/home.jpg\");\n        background-size: cover;\n        background-attachment: fixed;\n        padding: 15vh 20vw;\n\n        .about-info {\n          display: flex;\n          background-color: white;\n          padding: 10vh 5vw;\n          gap: 5vw;\n  \n          > div {\n            h1 {\n              margin: 0px;\n              font-size: 4rem;\n              font-family: 'MyFont';\n            }\n  \n            p {\n              margin-top: 10px;\n              font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n              font-size: 1rem;\n            }\n  \n            button {\n              margin-top: 10px;\n              cursor: pointer;\n              border: none;\n              background-color: #2ec4b6;\n              font-weight: 700;\n              font-size: 1rem;\n              color: white;\n              width: 45%;\n              padding: 8px;\n              border-radius: 10px;\n            }\n          }\n  \n  \n          img {\n            width: 40%;\n          }\n        }\n      }\n\n      .mission {\n        background-color: white;\n        height: min(95vh, auto);\n\n        > h1 {\n          margin: 10vh auto 5vh;\n          font-size: 4rem;\n          font-family: 'MyFont';\n          text-align: center;\n        }\n\n        > p {\n          margin: 0vh 20vw 10vh;\n          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n          font-size: 1.2rem;\n          text-align: center;\n        }\n\n        > .reasons {\n          ul {\n            list-style: none;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            gap: 50px;\n  \n            li {\n              text-align: center;\n\n              width: 300px;\n              height: 300px;\n\n              h3 {\n                font-size: 1.2rem;  \n              }\n\n              img {\n                height: 55px;\n                width: auto;\n              }\n            }\n          }\n        }\n\n\n\n      }\n\n      .reviews {\n        background-image: url(./assets/background/tokyo-street.jpg);\n        background-size: cover;\n        background-attachment: fixed;\n        padding: 15vh 5vw;\n        height: min(90vh, auto);\n        display: grid;\n        grid-template: 200px auto/ repeat(3, 1fr);\n        justify-items: center;\n\n\n        h1 {\n          grid-column: 1/4;\n          grid-row: 1;\n          color: white;\n          font-size: 3.5rem;\n          font-family: 'MyFont';\n          text-align: center;\n        }\n        .card {\n          background-color: white;\n          width: 17vw;\n          height: min(40vh, auto);\n          flex-grow: 0;\n          text-align: center;\n          padding: 10px 35px;\n\n          p {\n            padding: 10px 5px;\n            font-size: 1rem;\n\n          }\n\n          img {\n            margin: 20px auto;\n            display: block;\n            flex-grow: 0;\n            height: 80px;\n            width: auto;\n            border-radius: 50%;\n          }\n\n          span {\n            font-size: 1.2rem;\n          }\n        }\n      }\n\n    } */\n\n    /* .contacts {\n\n      .bg-info {\n        margin: 0px;\n        background-image: url(\"./assets/background/home.jpg\");\n        background-size: cover;\n        background-attachment: fixed;\n        padding: 15vh 20vw;\n        height: min(83vh, auto);\n\n        .contacts-info {\n          display: grid;\n          grid-template-columns: auto 1fr;\n          background-color: white;\n          padding: 5vh 5vw;\n          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n\n          div {\n            width: 90%;\n  \n            p {\n              font-size: 1.3rem;\n            }\n\n            img {\n              width: 100%;\n              height: auto;\n              border-radius: 10px;        \n            }\n          }\n\n          h3 {\n            margin-top: 0px;\n            font-family: 'MyFont';\n            font-size: 3rem;\n            text-decoration: underline;\n            text-underline-offset: 20px;\n            text-decoration-color: var(--dark-blue);\n            \n          }\n\n\n          form {\n\n            ul {\n              display: flex;\n              flex-direction: column;\n              justify-content: space-evenly;\n              height: 70%;\n              list-style: none;\n              padding-left: 0px;\n  \n              li {\n                display: flex;\n                flex: 1 1 auto;\n                flex-direction: column;\n                gap: 5px;\n\n                label {\n                  font-size: 1.2rem;\n                }\n    \n                input, textarea {\n                  font-family: \"Helvetica\", \"Arial\", sans-serif;\n                  font-size: 1rem;\n                  border: 1px solid #D6D9DC;\n                  border-radius: 4px;\n                  padding: 5px 10px;\n                  resize: none;\n                  margin-bottom: 5px;\n                }\n\n                input:hover, textarea:hover {\n                    box-shadow: 2px 2px 5px #dddddf;\n                }\n\n                input:focus, textarea:focus {\n                    border: 1px solid var(--dark-blue);\n                    box-shadow: 2px 2px 5px #dddddf;\n                    outline: none;\n                }\n\n                input::placeholder, textarea::placeholder {\n                    color: #c6c9cd;\n                    font-size: 0.95rem;\n                }\n\n              } \n            }\n\n            button {\n              cursor: pointer;\n              border: none;\n              background-color: #2ec4b6;\n              font-weight: 700;\n              font-size: 1rem;\n              color: white;\n              width: 25%;\n              padding: 8px;\n              border-radius: 10px;\n            }\n  \n\n\n          }\n\n\n  \n  \n\n        }\n      }\n    } */\n\n  }\n  \n  footer {\n    grid-row: -2 ;\n    background-color: #1c1c1c;\n    display: grid;\n    grid-template-rows: 90% 10%;\n    align-items: center;\n    color: white;\n\n\n    .footer-info {\n      height: 100%;\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      justify-items: center;\n\n      > div {\n        margin: 5% 15%;\n      }\n\n      p {\n        margin-top: 20px;\n        margin-bottom: 30px;\n        font-size: 2.5rem;\n        font-weight: 700;\n        font-family: 'MyFont';\n        color: white;\n      }\n\n      .f-contact div, .f-social div {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n\n        span {\n          margin-bottom: 10px;\n        }\n        a {\n          color: white;\n          text-decoration: none;\n        }\n      }\n\n      .f-form form {\n        height: 100%;\n\n        label {\n          margin-top: 20px;\n          margin-bottom: 30px;\n          display: block;\n          font-size: 2.5rem;\n          font-weight: 700;\n          font-family: 'MyFont';\n          color: white;\n        }\n\n        input {\n          display: block;\n          margin-bottom: 15px;\n          width: 70%;\n          padding: 10px;\n          border-radius: 2px;\n          font-family: 'Courier New', Courier, monospace;\n        }\n\n        button {\n          cursor: pointer;\n          border: none;\n          background-color: #2ec4b6;\n          font-weight: 700;\n          font-size: 1rem;\n          color: white;\n          padding: 8px;\n          border-radius: 10px;\n        }\n      }\n\n\n    }\n\n    .github {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      gap: 10px;\n      color: var(--white);\n      background-color: #2c2c2c;\n      img {\n        height: 20px;\n        width: auto;\n      }\n    }\n\n  }\n\n}\n"],"sourceRoot":""}]);
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/pages/about.css":
/*!*****************************!*\
  !*** ./src/pages/about.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/contact.css":
/*!*******************************!*\
  !*** ./src/pages/contact.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./contact.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/contact.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/home.css":
/*!****************************!*\
  !*** ./src/pages/home.css ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/menu.css":
/*!****************************!*\
  !*** ./src/pages/menu.css ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/data.js":
/*!****************************!*\
  !*** ./src/assets/data.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _food_banoffie_pie_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food/banoffie_pie.jpg */ "./src/assets/food/banoffie_pie.jpg");
/* harmony import */ var _food_carob_dulce_de_leche_cheesecake_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food/carob_+_dulce_de_leche_cheesecake.jpg */ "./src/assets/food/carob_+_dulce_de_leche_cheesecake.jpg");
/* harmony import */ var _food_raspberry_vanilla_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food/raspberry_&_vanilla.jpg */ "./src/assets/food/raspberry_&_vanilla.jpg");
/* harmony import */ var _food_pistachio_scoop_brest_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food/pistachio_scoop-brest.jpg */ "./src/assets/food/pistachio_scoop-brest.jpg");
/* harmony import */ var _food_panna_cotta_blueberry_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food/panna_cotta_&_blueberry.jpg */ "./src/assets/food/panna_cotta_&_blueberry.jpg");
/* harmony import */ var _food_lemon_poppyseed_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food/lemon_poppyseed.jpg */ "./src/assets/food/lemon_poppyseed.jpg");
/* harmony import */ var _food_chocolate_tart_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food/chocolate_tart.jpg */ "./src/assets/food/chocolate_tart.jpg");
/* harmony import */ var _food_chocolate_hazelnut_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./food/chocolate_hazelnut_.jpg */ "./src/assets/food/chocolate_hazelnut_.jpg");










const data = [
    {
"title": "Banoffie Pie",
"price": "4,9€",
"image": _food_banoffie_pie_jpg__WEBPACK_IMPORTED_MODULE_0__,
"ingredients": "Handmade doughnut filled with a homemade banana cream..."
    },
    {
"title": "Dulce de Leche",
"price": "4,9€",
"image": _food_carob_dulce_de_leche_cheesecake_jpg__WEBPACK_IMPORTED_MODULE_1__,
"ingredients": "Handmade doughnut filled with a homemade banana cream..."
    },
    {
"title": "Raspberry",
"price": "6€",
"image": _food_raspberry_vanilla_jpg__WEBPACK_IMPORTED_MODULE_2__,
"ingredients": "Handmade doughnut filled with a homemade banana cream..."
    },
    {
"title": "Pistachio",
"price": "6€",
"image": _food_pistachio_scoop_brest_jpg__WEBPACK_IMPORTED_MODULE_3__,
"ingredients": "Handmade doughnut filled with a homemade banana cream..."
    },
    {
"title": "Panna Cotta",
"price": "4,9€",
"image": _food_panna_cotta_blueberry_jpg__WEBPACK_IMPORTED_MODULE_4__,
"ingredients": "Handmade doughnut filled with a homemade banana cream..."
    },
    {
"title": "Lemon Poppyseed",
"price": "4,9€",
"image": _food_lemon_poppyseed_jpg__WEBPACK_IMPORTED_MODULE_5__,
"ingredients": "Handmade doughnut filled with a homemade banana cream..."
    },
    {
"title": "Chocolate Tart",
"price": "4,9€",
"image": _food_chocolate_tart_jpg__WEBPACK_IMPORTED_MODULE_6__,
"ingredients": "Handmade doughnut filled with a homemade banana cream..."
    },
    {
"title": "Chocolate Hazelnut",
"price": "5,9€",
"image": _food_chocolate_hazelnut_jpg__WEBPACK_IMPORTED_MODULE_7__,
"ingredients": "Handmade doughnut filled with a homemade banana cream..."
    }
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);


/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_filler_about_JPG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/filler/about.JPG */ "./src/assets/filler/about.JPG");
/* harmony import */ var _assets_filler_profile_picture_JPG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/filler/profile_picture.JPG */ "./src/assets/filler/profile_picture.JPG");
/* harmony import */ var _assets_logos_community_people_friends_group_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logos/community-people-friends-group-svgrepo-com.svg */ "./src/assets/logos/community-people-friends-group-svgrepo-com.svg");
/* harmony import */ var _assets_logos_cow_animals_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/logos/cow-animals-svgrepo-com.svg */ "./src/assets/logos/cow-animals-svgrepo-com.svg");
/* harmony import */ var _assets_logos_health_care_healthcare_health_service_health_clinic_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/logos/health-care-healthcare-health-service-health-clinic-svgrepo-com.svg */ "./src/assets/logos/health-care-healthcare-health-service-health-clinic-svgrepo-com.svg");
/* harmony import */ var _assets_logos_tree_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/logos/tree-svgrepo-com.svg */ "./src/assets/logos/tree-svgrepo-com.svg");
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.css */ "./src/pages/about.css");










function about() {

    const div = document.createElement('div')
    div.classList = 'about'

    div.innerHTML = `
    <div class="bg-info">

        <div class="about-info">

            <div>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum alias saepe quidem totam placeat maiores, reiciendis perspiciatis porro exercitationem, eligendi repudiandae tenetur temporibus debitis voluptatibus omnis veritatis. Cupiditate, perferendis eaque?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, sapiente perspiciatis eaque dolor eos, reiciendis ullam quas atque fugit dicta velit fuga asperiores voluptatum saepe omnis iste iure quam sit.</p>
                <button>Learn More</button>
            </div>
            <img src="./assets/about.JPG" alt="">

        </div>

        
    </div>

    <div class="mission">
        <h1>Our Mission</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint placeat, temporibus praesentium officiis veritatis iusto aut hic esse rem non maiores libero, repudiandae aliquid repellendus nisi facere animi tempora!</p>

        <div class="reasons">

            <ul>
                <li>
                    <img src="./assets/person.png" alt="">
                    <h3>Health</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
                </li>
                <li>
                    <img src="./assets/person.png" alt="">
                    <h3>Animals</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="./assets/person.png" alt="">
                    <h3>Enviroment</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
                </li>
                <li>
                    <img src="./assets/person.png" alt="">
                    <h3>People</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
                </li>
            </ul>

        </div>
    </div>

    <div class="reviews">

        <h1>Journalist's Reviews</h1>

        <div class="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum eos assumenda laboriosam blanditiis autem ea, nihil ipsam? Error saepe enim alias quod assumenda velit debitis impedit delectus, qui doloremque?</p>
            <img src="./assets/profile_picture.JPG" alt="">
            <span>Name - Company</span>
        </div>

        <div class="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum eos assumenda laboriosam blanditiis autem ea, nihil ipsam? Error saepe enim alias quod assumenda velit debitis impedit delectus, qui doloremque?</p>
            <img src="./assets/profile_picture.JPG" alt="">
            <span>Name - Company</span>
        </div>

        <div class="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum eos assumenda laboriosam blanditiis autem ea, nihil ipsam? Error saepe enim alias quod assumenda velit debitis impedit delectus, qui doloremque?</p>
            <img src="./assets/profile_picture.JPG" alt="">
            <span>Name - Company</span>
        </div>

    </div>

    `

    div.querySelector('.about-info img').src = _assets_filler_about_JPG__WEBPACK_IMPORTED_MODULE_0__

    const logos = [_assets_logos_health_care_healthcare_health_service_health_clinic_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__, _assets_logos_cow_animals_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__, _assets_logos_tree_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__, _assets_logos_community_people_friends_group_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__]

    for (let i = 0; i < 4; ++i) {
        div.querySelectorAll('li img')[i].src = logos[i]
    }

    div.querySelectorAll('.card img').forEach((value) => {
        value.src = _assets_filler_profile_picture_JPG__WEBPACK_IMPORTED_MODULE_1__
    })

    return div

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_filler_location_JPG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/filler/location.JPG */ "./src/assets/filler/location.JPG");
/* harmony import */ var _contact_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.css */ "./src/pages/contact.css");



function contact() {

    const div = document.createElement('div')
    div.classList = 'contacts'

    div.innerHTML = `
    <div class="bg-info">

        <div class="contacts-info">

            <div>
                <h3>Address</h3>
                <p>Av. de la Bourdonnais, 75007 Paris, France</p>
                <img src="./assets/location.JPG" alt="">
            </div>


            <form action="">
                <h3>Contact Form</h3>
                <ul>
                    <li>
                        <label for="name">Name:</label>
                        <input type="text" name="name" id="name" required>
                    </li>
                    <li>
                        <label for="email">Email:</label>
                        <input type="text" name="email" id="email" required>
                    </li>
                    <li>
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" rows="8" cols="33" maxlength="250" spellcheck="true" required></textarea>
                    </li>
                    <li></li>
                </ul>
                <button type="button">Send</button>
            </form>

        </div>
        
    </div>
    `

    div.querySelectorAll('div img').forEach((value) => {
        value.src = _assets_filler_location_JPG__WEBPACK_IMPORTED_MODULE_0__
    })


    return div

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.css */ "./src/pages/home.css");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/pages/utility.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/pages/menu.js");




function home() {
    const div = document.createElement('div')
    div.className = 'home'

    const bg_home = document.createElement('div')
    bg_home.className = 'bg-home'
    div.appendChild(bg_home)

    
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const button = document.createElement('button')

    h1.textContent = 'Welcome to Vegan Scoop'
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus nihil sapiente totam provident consequuntur doloribus corrupti expedita eligendi deleniti consectetur deserunt est, aliquid odio quidem nulla quod. Quis, ducimus!'
    button.textContent = 'Order Now'

    ;(0,_utility__WEBPACK_IMPORTED_MODULE_1__.defineButton)(button, (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])())

    bg_home.appendChild(h1)
    bg_home.appendChild(p)
    bg_home.appendChild(button)

    return div
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/data.js */ "./src/assets/data.js");
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.css */ "./src/pages/menu.css");



function menu() {

    const div = document.createElement('div')
    div.classList = 'menu'

    div.innerHTML = `
    
    <div class="bg-info">

        <div class="inside-card">

            <h1>Menu</h1>

            <div class="card-list"></div>

            <button type="button">View More</button>

        </div>  
    </div>
    `

    div.querySelectorAll('.card img').forEach((value) => {
        value.src = Journalist
    })

    const card_list = div.querySelector('.card-list')


    _assets_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((value) => {

        const card = document.createElement('div')
        card.className = 'card'

        const img = document.createElement('img')
        img.src = value.image

        const card_div = document.createElement('div')

        const card_div_h3 = document.createElement('h3')
        card_div_h3.textContent = value.title

        const card_div_span = document.createElement('span')
        card_div_span.textContent = value.price

        const card_div_p = document.createElement('p')
        card_div_p.textContent = value.ingredients

        const card_div_button = document.createElement('button')
        card_div_button.textContent = 'Add'

        card_div.appendChild(card_div_h3)
        card_div_h3.appendChild(card_div_span)
        card_div.appendChild(card_div_p)
        card_div.appendChild(card_div_button)

        card.appendChild(img)
        card.appendChild(card_div)

        card_list.appendChild(card)

    })

    return div
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/pages/utility.js":
/*!******************************!*\
  !*** ./src/pages/utility.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineButton: () => (/* binding */ defineButton),
/* harmony export */   reset: () => (/* binding */ reset)
/* harmony export */ });
function reset(new_div) {

    const content = document.querySelector('#content')
    content.innerHTML = '';
    content.appendChild(new_div)

}

function defineButton(button, func) {

    button.addEventListener('click', () => {
        reset(func)
    })
}



/***/ }),

/***/ "./src/assets/background/home.jpg":
/*!****************************************!*\
  !*** ./src/assets/background/home.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bd0555f0366e6824c4d.jpg";

/***/ }),

/***/ "./src/assets/background/tokyo-street.jpg":
/*!************************************************!*\
  !*** ./src/assets/background/tokyo-street.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18af78faf335a4dd0bc8.jpg";

/***/ }),

/***/ "./src/assets/filler/about.JPG":
/*!*************************************!*\
  !*** ./src/assets/filler/about.JPG ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "543715aee9cf6f696b34.JPG";

/***/ }),

/***/ "./src/assets/filler/location.JPG":
/*!****************************************!*\
  !*** ./src/assets/filler/location.JPG ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "895725e7c44f63292ae3.JPG";

/***/ }),

/***/ "./src/assets/filler/profile_picture.JPG":
/*!***********************************************!*\
  !*** ./src/assets/filler/profile_picture.JPG ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f68e0893a425b3a6c9b0.JPG";

/***/ }),

/***/ "./src/assets/fonts/DancingScript-VariableFont_wght.ttf":
/*!**************************************************************!*\
  !*** ./src/assets/fonts/DancingScript-VariableFont_wght.ttf ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d02a1ee17643667e9808.ttf";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07ac8f5ca3e2eded80d3.ttf";

/***/ }),

/***/ "./src/assets/food/banoffie_pie.jpg":
/*!******************************************!*\
  !*** ./src/assets/food/banoffie_pie.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8569e4ae4b3d85eee79d.jpg";

/***/ }),

/***/ "./src/assets/food/carob_+_dulce_de_leche_cheesecake.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/food/carob_+_dulce_de_leche_cheesecake.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf7619e1654047f00276.jpg";

/***/ }),

/***/ "./src/assets/food/chocolate_hazelnut_.jpg":
/*!*************************************************!*\
  !*** ./src/assets/food/chocolate_hazelnut_.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4814b165994c078746e.jpg";

/***/ }),

/***/ "./src/assets/food/chocolate_tart.jpg":
/*!********************************************!*\
  !*** ./src/assets/food/chocolate_tart.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc54ff1a9eab3f81aa23.jpg";

/***/ }),

/***/ "./src/assets/food/lemon_poppyseed.jpg":
/*!*********************************************!*\
  !*** ./src/assets/food/lemon_poppyseed.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "063cd04157e833e04a6c.jpg";

/***/ }),

/***/ "./src/assets/food/panna_cotta_&_blueberry.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/food/panna_cotta_&_blueberry.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d58e8ae182acf308d82.jpg";

/***/ }),

/***/ "./src/assets/food/pistachio_scoop-brest.jpg":
/*!***************************************************!*\
  !*** ./src/assets/food/pistachio_scoop-brest.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1440e7acd2beb993f44.jpg";

/***/ }),

/***/ "./src/assets/food/raspberry_&_vanilla.jpg":
/*!*************************************************!*\
  !*** ./src/assets/food/raspberry_&_vanilla.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "890e6a3fca2dd698f996.jpg";

/***/ }),

/***/ "./src/assets/logos/community-people-friends-group-svgrepo-com.svg":
/*!*************************************************************************!*\
  !*** ./src/assets/logos/community-people-friends-group-svgrepo-com.svg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f59a2ef22758304c888.svg";

/***/ }),

/***/ "./src/assets/logos/cow-animals-svgrepo-com.svg":
/*!******************************************************!*\
  !*** ./src/assets/logos/cow-animals-svgrepo-com.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3925f4399eff3da25fc6.svg";

/***/ }),

/***/ "./src/assets/logos/giordano1.png":
/*!****************************************!*\
  !*** ./src/assets/logos/giordano1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a202ac8513ca0f2afd4e.png";

/***/ }),

/***/ "./src/assets/logos/github-mark-white.png":
/*!************************************************!*\
  !*** ./src/assets/logos/github-mark-white.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "925aa8e685ab0217bb34.png";

/***/ }),

/***/ "./src/assets/logos/health-care-healthcare-health-service-health-clinic-svgrepo-com.svg":
/*!**********************************************************************************************!*\
  !*** ./src/assets/logos/health-care-healthcare-health-service-health-clinic-svgrepo-com.svg ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "832092ef5c94cc184060.svg";

/***/ }),

/***/ "./src/assets/logos/tree-svgrepo-com.svg":
/*!***********************************************!*\
  !*** ./src/assets/logos/tree-svgrepo-com.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "faa33a9d93f011ff54b2.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_logos_github_mark_white_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logos/github-mark-white.png */ "./src/assets/logos/github-mark-white.png");
/* harmony import */ var _assets_logos_giordano1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logos/giordano1.png */ "./src/assets/logos/giordano1.png");
/* harmony import */ var _assets_filler_about_JPG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/filler/about.JPG */ "./src/assets/filler/about.JPG");
/* harmony import */ var _assets_filler_profile_picture_JPG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/filler/profile_picture.JPG */ "./src/assets/filler/profile_picture.JPG");
/* harmony import */ var _assets_logos_community_people_friends_group_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/logos/community-people-friends-group-svgrepo-com.svg */ "./src/assets/logos/community-people-friends-group-svgrepo-com.svg");
/* harmony import */ var _assets_logos_cow_animals_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/logos/cow-animals-svgrepo-com.svg */ "./src/assets/logos/cow-animals-svgrepo-com.svg");
/* harmony import */ var _assets_logos_health_care_healthcare_health_service_health_clinic_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/logos/health-care-healthcare-health-service-health-clinic-svgrepo-com.svg */ "./src/assets/logos/health-care-healthcare-health-service-health-clinic-svgrepo-com.svg");
/* harmony import */ var _assets_logos_tree_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/logos/tree-svgrepo-com.svg */ "./src/assets/logos/tree-svgrepo-com.svg");
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/contact.js */ "./src/pages/contact.js");
/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/menu.js */ "./src/pages/menu.js");
/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/about.js */ "./src/pages/about.js");
/* harmony import */ var _pages_utility_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/utility.js */ "./src/pages/utility.js");


// import data from './assets/data.json';
// import data from './assets/data.js';






// import Location from './assets/filler/location.JPG';













// function home() {
//     const div = document.createElement('div')
//     div.className = 'home'

//     const bg_home = document.createElement('div')
//     bg_home.className = 'bg-home'
//     div.appendChild(bg_home)

    
//     const h1 = document.createElement('h1')
//     const p = document.createElement('p')
//     const button = document.createElement('button')

//     h1.textContent = 'Welcome to Vegan Scoop'
//     p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus nihil sapiente totam provident consequuntur doloribus corrupti expedita eligendi deleniti consectetur deserunt est, aliquid odio quidem nulla quod. Quis, ducimus!'
//     button.textContent = 'Order Now'

//     defineButton(button, menu())

//     bg_home.appendChild(h1)
//     bg_home.appendChild(p)
//     bg_home.appendChild(button)

//     return div
// }

// function about() {

//     const div = document.createElement('div')
//     div.classList = 'about'

//     div.innerHTML = `
//     <div class="bg-info">

//         <div class="about-info">

//             <div>
//                 <h1>About</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum alias saepe quidem totam placeat maiores, reiciendis perspiciatis porro exercitationem, eligendi repudiandae tenetur temporibus debitis voluptatibus omnis veritatis. Cupiditate, perferendis eaque?</p>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, sapiente perspiciatis eaque dolor eos, reiciendis ullam quas atque fugit dicta velit fuga asperiores voluptatum saepe omnis iste iure quam sit.</p>
//                 <button>Learn More</button>
//             </div>
//             <img src="./assets/about.JPG" alt="">

//         </div>

        
//     </div>

//     <div class="mission">
//         <h1>Our Mission</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint placeat, temporibus praesentium officiis veritatis iusto aut hic esse rem non maiores libero, repudiandae aliquid repellendus nisi facere animi tempora!</p>

//         <div class="reasons">

//             <ul>
//                 <li>
//                     <img src="./assets/person.png" alt="">
//                     <h3>Health</h3>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
//                 </li>
//                 <li>
//                     <img src="./assets/person.png" alt="">
//                     <h3>Animals</h3>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
//                 </li>
//             </ul>
//             <ul>
//                 <li>
//                     <img src="./assets/person.png" alt="">
//                     <h3>Enviroment</h3>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
//                 </li>
//                 <li>
//                     <img src="./assets/person.png" alt="">
//                     <h3>People</h3>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
//                 </li>
//             </ul>

//         </div>
//     </div>

//     <div class="reviews">

//         <h1>Journalist's Reviews</h1>

//         <div class="card">
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum eos assumenda laboriosam blanditiis autem ea, nihil ipsam? Error saepe enim alias quod assumenda velit debitis impedit delectus, qui doloremque?</p>
//             <img src="./assets/profile_picture.JPG" alt="">
//             <span>Name - Company</span>
//         </div>

//         <div class="card">
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum eos assumenda laboriosam blanditiis autem ea, nihil ipsam? Error saepe enim alias quod assumenda velit debitis impedit delectus, qui doloremque?</p>
//             <img src="./assets/profile_picture.JPG" alt="">
//             <span>Name - Company</span>
//         </div>

//         <div class="card">
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum eos assumenda laboriosam blanditiis autem ea, nihil ipsam? Error saepe enim alias quod assumenda velit debitis impedit delectus, qui doloremque?</p>
//             <img src="./assets/profile_picture.JPG" alt="">
//             <span>Name - Company</span>
//         </div>

//     </div>

//     `

//     div.querySelector('.about-info img').src = AboutPic

//     const logos = [healthLogo, CowLogo, TreeLogo, CommunityLogo]

//     for (let i = 0; i < 4; ++i) {
//         div.querySelectorAll('li img')[i].src = logos[i]
//     }

//     div.querySelectorAll('.card img').forEach((value) => {
//         value.src = Journalist
//     })

//     return div

// }

// function contact() {

//     const div = document.createElement('div')
//     div.classList = 'contacts'

//     div.innerHTML = `
//     <div class="bg-info">

//         <div class="contacts-info">

//             <div>
//                 <h3>Address</h3>
//                 <p>Av. de la Bourdonnais, 75007 Paris, France</p>
//                 <img src="./assets/location.JPG" alt="">
//             </div>


//             <form action="">
//                 <h3>Contact Form</h3>
//                 <ul>
//                     <li>
//                         <label for="name">Name:</label>
//                         <input type="text" name="name" id="name" required>
//                     </li>
//                     <li>
//                         <label for="email">Email:</label>
//                         <input type="text" name="email" id="email" required>
//                     </li>
//                     <li>
//                         <label for="message">Message:</label>
//                         <textarea id="message" name="message" rows="8" cols="33" maxlength="250" spellcheck="true" required></textarea>
//                     </li>
//                     <li></li>
//                 </ul>
//                 <button type="button">Send</button>
//             </form>

//         </div>
        
//     </div>
//     `

//     div.querySelectorAll('div img').forEach((value) => {
//         value.src = Location
//     })


//     return div

// }

// function menu() {

//     const div = document.createElement('div')
//     div.classList = 'menu'

//     div.innerHTML = `
    
//     <div class="bg-info">

//         <div class="inside-card">

//             <h1>Menu</h1>

//             <div class="card-list"></div>

//             <button type="button">View More</button>

//         </div>  
//     </div>
//     `

//     div.querySelectorAll('.card img').forEach((value) => {
//         value.src = Journalist
//     })

//     const card_list = div.querySelector('.card-list')


//     data.forEach((value) => {

//         const card = document.createElement('div')
//         card.className = 'card'

//         const img = document.createElement('img')
//         img.src = value.image

//         const card_div = document.createElement('div')

//         const card_div_h3 = document.createElement('h3')
//         card_div_h3.textContent = value.title

//         const card_div_span = document.createElement('span')
//         card_div_span.textContent = value.price

//         const card_div_p = document.createElement('p')
//         card_div_p.textContent = value.ingredients

//         const card_div_button = document.createElement('button')
//         card_div_button.textContent = 'Add'

//         card_div.appendChild(card_div_h3)
//         card_div_h3.appendChild(card_div_span)
//         card_div.appendChild(card_div_p)
//         card_div.appendChild(card_div_button)

//         card.appendChild(img)
//         card.appendChild(card_div)

//         card_list.appendChild(card)

//     })

//     return div
    
// }

// function reset(new_div) {

//     content.innerHTML = '';
//     content.appendChild(new_div)

// }

// function defineButton(button, func) {

//     button.addEventListener('click', () => {
//         reset(func)
//     })
// }

document.querySelector('nav img').src = _assets_logos_giordano1_png__WEBPACK_IMPORTED_MODULE_2__
document.querySelector('.github img').src = _assets_logos_github_mark_white_png__WEBPACK_IMPORTED_MODULE_1__
document.querySelector('#content').appendChild((0,_pages_home_js__WEBPACK_IMPORTED_MODULE_9__["default"])())

;(0,_pages_utility_js__WEBPACK_IMPORTED_MODULE_13__.defineButton)(document.querySelector('.button-home'), (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_9__["default"])());
(0,_pages_utility_js__WEBPACK_IMPORTED_MODULE_13__.defineButton)(document.querySelector('.button-about'), (0,_pages_about_js__WEBPACK_IMPORTED_MODULE_12__["default"])());
(0,_pages_utility_js__WEBPACK_IMPORTED_MODULE_13__.defineButton)(document.querySelector('.button-contact'), (0,_pages_contact_js__WEBPACK_IMPORTED_MODULE_10__["default"])());
(0,_pages_utility_js__WEBPACK_IMPORTED_MODULE_13__.defineButton)(document.querySelector('.button-menu'), (0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_11__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBLE1BQU07O0FBRU47O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLE1BQU07O0FBRU47O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLE1BQU0sVUFBVSxZQUFZLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxZQUFZLFlBQVksS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsK0NBQStDLE9BQU8sa0hBQWtILE9BQU8scUpBQXFKLE9BQU8sb0hBQW9ILE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sVUFBVSxVQUFVLEtBQUssTUFBTSxNQUFNLHFDQUFxQyw0QkFBNEIsc0VBQXNFLHVCQUF1Qix5QkFBeUIsS0FBSyxrQkFBa0IsNEJBQTRCLHFEQUFxRCx1QkFBdUIseUJBQXlCLEtBQUssV0FBVyxxQkFBcUIseUJBQXlCLHNCQUFzQixvQkFBb0IscUJBQXFCLEdBQUcsT0FBTywyQkFBMkIsR0FBRyxVQUFVLGdCQUFnQixrQkFBa0Isa0JBQWtCLHVDQUF1QyxtQ0FBbUMsY0FBYyxrQkFBa0IseUNBQXlDLDRDQUE0QyxpQ0FBaUMsYUFBYSxxQkFBcUIsc0JBQXNCLGdDQUFnQyxtQkFBbUIsZUFBZSx1QkFBdUIsc0JBQXNCLFNBQVMsa0JBQWtCLHVCQUF1Qix3QkFBd0IsNkNBQTZDLDhCQUE4QiwwQkFBMEIsNEJBQTRCLHFDQUFxQyxTQUFTLHdCQUF3Qiw2QkFBNkIsK0JBQStCLHFDQUFxQyxzQ0FBc0MsU0FBUyxTQUFTLEtBQUssZ0JBQWdCLHFDQUFxQyxrQkFBa0Isd0JBQXdCLHFCQUFxQixvQkFBb0IsMEhBQTBILCtCQUErQixxQ0FBcUMsb0JBQW9CLDBCQUEwQixpQ0FBaUMsOEJBQThCLGtDQUFrQywyQkFBMkIsd0JBQXdCLGtDQUFrQyw0QkFBNEIsK0JBQStCLHlCQUF5Qiw2QkFBNkIsV0FBVyxpQkFBaUIsOEJBQThCLCtCQUErQix5QkFBeUIsV0FBVywwQkFBMEIsNEJBQTRCLCtDQUErQyxzQ0FBc0MsNkJBQTZCLDRCQUE0Qix5QkFBeUIsOEJBQThCLGdDQUFnQyxXQUFXLFNBQVMsVUFBVSxvQkFBb0Isb0JBQW9CLHNCQUFzQixrRUFBa0UsaUNBQWlDLHVDQUF1Qyw2QkFBNkIsOENBQThDLDBCQUEwQixnRUFBZ0Usb0NBQW9DLDhCQUE4QixxQkFBcUIsd0JBQXdCLG1DQUFtQyx5QkFBeUIsOEJBQThCLGlEQUFpRCx3Q0FBd0MsK0JBQStCLDhCQUE4QiwyQkFBMkIsZ0NBQWdDLGtDQUFrQyxlQUFlLGtCQUFrQiwwQkFBMEIsb0NBQW9DLDhCQUE4QixpQ0FBaUMsMkJBQTJCLGFBQWEsMEJBQTBCLDRCQUE0Qix3RUFBd0Usb0NBQW9DLGlDQUFpQyx1QkFBdUIsNkJBQTZCLDhCQUE4Qiw4QkFBOEIsZ0RBQWdELCtDQUErQyx5REFBeUQsdUJBQXVCLGdDQUFnQyxpQkFBaUIsdUJBQXVCLGdDQUFnQyx5Q0FBeUMsaURBQWlELCtCQUErQiw4QkFBOEIsZ0dBQWdHLHdCQUF3QixnQ0FBZ0Msb0NBQW9DLG1EQUFtRCxpQ0FBaUMsc0NBQXNDLDRCQUE0Qix5Q0FBeUMsa0NBQWtDLG1DQUFtQyx5REFBeUQsc0NBQXNDLHVDQUF1QyxtQ0FBbUMscUJBQXFCLHFCQUFxQix1QkFBdUIsc0NBQXNDLGlDQUFpQyxtQkFBbUIsOEJBQThCLHlDQUF5QyxvQ0FBb0MsdURBQXVELDhDQUE4QyxzQ0FBc0MsaUNBQWlDLHFDQUFxQywrQkFBK0Isd0NBQXdDLHFCQUFxQixpQkFBaUIsZUFBZSxpQkFBaUIsV0FBVyxTQUFTLFVBQVUscUJBQXFCLG9CQUFvQixzQkFBc0Isa0VBQWtFLGlDQUFpQyx1Q0FBdUMsNkJBQTZCLHlCQUF5QiwwQkFBMEIsb0NBQW9DLDhCQUE4QixxQkFBcUIsdUJBQXVCLGtCQUFrQiw0QkFBNEIsZ0NBQWdDLHNDQUFzQyxlQUFlLHFCQUFxQixpQ0FBaUMsOEZBQThGLGdDQUFnQyxlQUFlLDBCQUEwQixpQ0FBaUMsZ0NBQWdDLDZCQUE2QiwwQ0FBMEMsaUNBQWlDLGdDQUFnQyw2QkFBNkIsMkJBQTJCLDZCQUE2QixvQ0FBb0MsZUFBZSxhQUFhLHlCQUF5Qix5QkFBeUIsYUFBYSxXQUFXLFNBQVMsb0JBQW9CLGtDQUFrQyxrQ0FBa0Msa0JBQWtCLGtDQUFrQyw0QkFBNEIsa0NBQWtDLCtCQUErQixXQUFXLGlCQUFpQixrQ0FBa0MsMEZBQTBGLDhCQUE4QiwrQkFBK0IsV0FBVyx3QkFBd0IsZ0JBQWdCLCtCQUErQiw0QkFBNEIsa0NBQWtDLHNDQUFzQyx3QkFBd0Isc0JBQXNCLG1DQUFtQywrQkFBK0IsOEJBQThCLHNCQUFzQixzQ0FBc0MsaUJBQWlCLHVCQUF1QiwrQkFBK0IsOEJBQThCLGlCQUFpQixlQUFlLGFBQWEsV0FBVyxlQUFlLG9CQUFvQixzRUFBc0UsaUNBQWlDLHVDQUF1Qyw0QkFBNEIsa0NBQWtDLHdCQUF3QixvREFBb0QsZ0NBQWdDLGtCQUFrQiw2QkFBNkIsd0JBQXdCLHlCQUF5Qiw4QkFBOEIsa0NBQWtDLCtCQUErQixXQUFXLGlCQUFpQixvQ0FBb0Msd0JBQXdCLG9DQUFvQyx5QkFBeUIsK0JBQStCLCtCQUErQixpQkFBaUIsZ0NBQWdDLDhCQUE4QixlQUFlLG1CQUFtQixnQ0FBZ0MsNkJBQTZCLDJCQUEyQiwyQkFBMkIsMEJBQTBCLGlDQUFpQyxhQUFhLG9CQUFvQixnQ0FBZ0MsYUFBYSxXQUFXLFNBQVMsVUFBVSx3QkFBd0Isb0JBQW9CLHNCQUFzQixrRUFBa0UsaUNBQWlDLHVDQUF1Qyw2QkFBNkIsa0NBQWtDLDRCQUE0QiwwQkFBMEIsNENBQTRDLG9DQUFvQyw2QkFBNkIsMEZBQTBGLG1CQUFtQix5QkFBeUIscUJBQXFCLGtDQUFrQyxlQUFlLHFCQUFxQiw0QkFBNEIsNkJBQTZCLDRDQUE0QyxlQUFlLGFBQWEsa0JBQWtCLDhCQUE4QixvQ0FBb0MsOEJBQThCLHlDQUF5QywwQ0FBMEMsc0RBQXNELDJCQUEyQixzQkFBc0Isb0JBQW9CLDhCQUE4Qix1Q0FBdUMsOENBQThDLDRCQUE0QixpQ0FBaUMsa0NBQWtDLHdCQUF3QixnQ0FBZ0MsaUNBQWlDLHlDQUF5QywyQkFBMkIsMkJBQTJCLHNDQUFzQyxtQkFBbUIseUNBQXlDLHNFQUFzRSxvQ0FBb0MsOENBQThDLHVDQUF1QyxzQ0FBc0MsaUNBQWlDLHVDQUF1QyxtQkFBbUIsaURBQWlELHNEQUFzRCxtQkFBbUIsaURBQWlELHlEQUF5RCxzREFBc0Qsb0NBQW9DLG1CQUFtQiwrREFBK0QscUNBQXFDLHlDQUF5QyxtQkFBbUIsb0JBQW9CLGVBQWUsd0JBQXdCLGdDQUFnQyw2QkFBNkIsMENBQTBDLGlDQUFpQyxnQ0FBZ0MsNkJBQTZCLDJCQUEyQiw2QkFBNkIsb0NBQW9DLGVBQWUscUJBQXFCLHlCQUF5QixTQUFTLFFBQVEsU0FBUyxnQkFBZ0Isb0JBQW9CLGdDQUFnQyxvQkFBb0Isa0NBQWtDLDBCQUEwQixtQkFBbUIsd0JBQXdCLHFCQUFxQixzQkFBc0IsOENBQThDLDhCQUE4QixpQkFBaUIseUJBQXlCLFNBQVMsYUFBYSwyQkFBMkIsOEJBQThCLDRCQUE0QiwyQkFBMkIsZ0NBQWdDLHVCQUF1QixTQUFTLHlDQUF5Qyx3QkFBd0IsaUNBQWlDLHlDQUF5QyxrQkFBa0IsZ0NBQWdDLFdBQVcsYUFBYSx5QkFBeUIsa0NBQWtDLFdBQVcsU0FBUyx3QkFBd0IsdUJBQXVCLG1CQUFtQiw2QkFBNkIsZ0NBQWdDLDJCQUEyQiw4QkFBOEIsNkJBQTZCLGtDQUFrQyx5QkFBeUIsV0FBVyxtQkFBbUIsMkJBQTJCLGdDQUFnQyx1QkFBdUIsMEJBQTBCLCtCQUErQiwyREFBMkQsV0FBVyxvQkFBb0IsNEJBQTRCLHlCQUF5QixzQ0FBc0MsNkJBQTZCLDRCQUE0Qix5QkFBeUIseUJBQXlCLGdDQUFnQyxXQUFXLFNBQVMsV0FBVyxpQkFBaUIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsa0JBQWtCLDRCQUE0QixrQ0FBa0MsYUFBYSx1QkFBdUIsc0JBQXNCLFNBQVMsT0FBTyxPQUFPLEtBQUsscUJBQXFCO0FBQ2pvZTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzFsQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF3RztBQUN4RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHdGQUFPOzs7O0FBSWtEO0FBQzFFLE9BQU8saUVBQWUsd0ZBQU8sSUFBSSx3RkFBTyxVQUFVLHdGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBcUc7QUFDckc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUkrQztBQUN2RSxPQUFPLGlFQUFlLHFGQUFPLElBQUkscUZBQU8sVUFBVSxxRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXFHO0FBQ3JHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMscUZBQU87Ozs7QUFJK0M7QUFDdkUsT0FBTyxpRUFBZSxxRkFBTyxJQUFJLHFGQUFPLFVBQVUscUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQ3hCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYm1EO0FBQ2U7QUFDVjtBQUNPO0FBQ0Y7QUFDSjtBQUNGO0FBQ1M7OztBQUdoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsbURBQVk7QUFDckI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzRUFBSztBQUNkO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0RBQVM7QUFDbEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0REFBZTtBQUN4QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTLDREQUFXO0FBQ3BCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0RBQWU7QUFDeEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxREFBYztBQUN2QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTLHlEQUFrQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEK0I7QUFDWTs7QUFFNkI7QUFDekI7QUFDMkM7QUFDakQ7O0FBRXZDOztBQUVyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsK0NBQStDLHFEQUFROztBQUV2RCxtQkFBbUIsOEdBQVUsRUFBRSxzRUFBTyxFQUFFLCtEQUFRLEVBQUUseUZBQWE7O0FBRS9ELG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsK0RBQVU7QUFDOUIsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0dpQztBQUM5Qjs7QUFFdkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHdEQUFRO0FBQzVCLEtBQUs7OztBQUdMOztBQUVBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RESztBQUNxQjtBQUNmOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHVEQUFZLFNBQVMsaURBQUk7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJzQjtBQUNqQjs7QUFFcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOzs7QUFHQSxJQUFJLHVEQUFJOztBQUVSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDckVuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCOztBQUVyQjtBQUNBOztBQUUyRDtBQUNQOztBQUVIO0FBQ1k7QUFDN0Q7O0FBRTBGO0FBQ3pCO0FBQzJDO0FBQ2pEOztBQUV6QjtBQUNNO0FBQ047QUFDRTs7QUFFcUI7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFROztBQUVSOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFROztBQUVSOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLFFBQVE7O0FBRVI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQSx3Q0FBd0Msd0RBQVE7QUFDaEQsNENBQTRDLGdFQUFPO0FBQ25ELCtDQUErQywwREFBSTs7QUFFbkQsaUVBQVkseUNBQXlDLDBEQUFJO0FBQ3pELGdFQUFZLDBDQUEwQyw0REFBSztBQUMzRCxnRUFBWSw0Q0FBNEMsOERBQU87QUFDL0QsZ0VBQVkseUNBQXlDLDJEQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2Fib3V0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvY29udGFjdC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvYWJvdXQuY3NzP2ExMGEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3QuY3NzPzVjNmUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuY3NzPzhlNDYiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuY3NzPzVkMjYiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9kYXRhLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2JhY2tncm91bmQvaG9tZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvYmFja2dyb3VuZC90b2t5by1zdHJlZXQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmFib3V0IHtcblxuICAgIC5iZy1pbmZvIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICBwYWRkaW5nOiAxNXZoIDIwdnc7XG5cbiAgICAgIC5hYm91dC1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwdmggNXZ3O1xuICAgICAgICBnYXA6IDV2dztcblxuICAgICAgICA+IGRpdiB7XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjNGI2O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1pc3Npb24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBoZWlnaHQ6IG1pbig5NXZoLCBhdXRvKTtcblxuICAgICAgPiBoMSB7XG4gICAgICAgIG1hcmdpbjogMTB2aCBhdXRvIDV2aDtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgPiBwIHtcbiAgICAgICAgbWFyZ2luOiAwdmggMjB2dyAxMHZoO1xuICAgICAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgPiAucmVhc29ucyB7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDUwcHg7XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07ICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG5cbiAgICB9XG5cbiAgICAucmV2aWV3cyB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgIHBhZGRpbmc6IDE1dmggNXZ3O1xuICAgICAgaGVpZ2h0OiBtaW4oOTB2aCwgYXV0byk7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZTogMjAwcHggYXV0by8gcmVwZWF0KDMsIDFmcik7XG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cblxuICAgICAgaDEge1xuICAgICAgICBncmlkLWNvbHVtbjogMS80O1xuICAgICAgICBncmlkLXJvdzogMTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuY2FyZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTd2dztcbiAgICAgICAgaGVpZ2h0OiBtaW4oNDB2aCwgYXV0byk7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDM1cHg7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL2Fib3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSTtNQUNFLFdBQVc7TUFDWCx5REFBc0Q7TUFDdEQsc0JBQXNCO01BQ3RCLDRCQUE0QjtNQUM1QixrQkFBa0I7O01BRWxCO1FBQ0UsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsUUFBUTs7UUFFUjtVQUNFO1lBQ0UsV0FBVztZQUNYLGVBQWU7WUFDZixxQkFBcUI7VUFDdkI7O1VBRUE7WUFDRSxnQkFBZ0I7WUFDaEIsNkVBQTZFO1lBQzdFLGVBQWU7VUFDakI7O1VBRUE7WUFDRSxnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLFlBQVk7WUFDWix5QkFBeUI7WUFDekIsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZixZQUFZO1lBQ1osVUFBVTtZQUNWLFlBQVk7WUFDWixtQkFBbUI7VUFDckI7UUFDRjs7O1FBR0E7VUFDRSxVQUFVO1FBQ1o7TUFDRjtJQUNGOztJQUVBO01BQ0UsdUJBQXVCO01BQ3ZCLHVCQUF1Qjs7TUFFdkI7UUFDRSxxQkFBcUI7UUFDckIsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixrQkFBa0I7TUFDcEI7O01BRUE7UUFDRSxxQkFBcUI7UUFDckIsNkVBQTZFO1FBQzdFLGlCQUFpQjtRQUNqQixrQkFBa0I7TUFDcEI7O01BRUE7UUFDRTtVQUNFLGdCQUFnQjtVQUNoQixhQUFhO1VBQ2IsbUJBQW1CO1VBQ25CLHVCQUF1QjtVQUN2QixTQUFTOztVQUVUO1lBQ0Usa0JBQWtCOztZQUVsQixZQUFZO1lBQ1osYUFBYTs7WUFFYjtjQUNFLGlCQUFpQjtZQUNuQjs7WUFFQTtjQUNFLFlBQVk7Y0FDWixXQUFXO1lBQ2I7VUFDRjtRQUNGO01BQ0Y7Ozs7SUFJRjs7SUFFQTtNQUNFLHlEQUE0RDtNQUM1RCxzQkFBc0I7TUFDdEIsNEJBQTRCO01BQzVCLGlCQUFpQjtNQUNqQix1QkFBdUI7TUFDdkIsYUFBYTtNQUNiLHlDQUF5QztNQUN6QyxxQkFBcUI7OztNQUdyQjtRQUNFLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsa0JBQWtCO01BQ3BCO01BQ0E7UUFDRSx1QkFBdUI7UUFDdkIsV0FBVztRQUNYLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGtCQUFrQjs7UUFFbEI7VUFDRSxpQkFBaUI7VUFDakIsZUFBZTs7UUFFakI7O1FBRUE7VUFDRSxpQkFBaUI7VUFDakIsY0FBYztVQUNkLFlBQVk7VUFDWixZQUFZO1VBQ1osV0FBVztVQUNYLGtCQUFrQjtRQUNwQjs7UUFFQTtVQUNFLGlCQUFpQjtRQUNuQjtNQUNGO0lBQ0Y7O0VBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFib3V0IHtcXG5cXG4gICAgLmJnLWluZm8ge1xcbiAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2JhY2tncm91bmQvaG9tZS5qcGdcXFwiKTtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgICAgcGFkZGluZzogMTV2aCAyMHZ3O1xcblxcbiAgICAgIC5hYm91dC1pbmZvIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDEwdmggNXZ3O1xcbiAgICAgICAgZ2FwOiA1dnc7XFxuXFxuICAgICAgICA+IGRpdiB7XFxuICAgICAgICAgIGgxIHtcXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIHAge1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWM0YjY7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgIHdpZHRoOiA0MCU7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5taXNzaW9uIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBoZWlnaHQ6IG1pbig5NXZoLCBhdXRvKTtcXG5cXG4gICAgICA+IGgxIHtcXG4gICAgICAgIG1hcmdpbjogMTB2aCBhdXRvIDV2aDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgPiBwIHtcXG4gICAgICAgIG1hcmdpbjogMHZoIDIwdncgMTB2aDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgfVxcblxcbiAgICAgID4gLnJlYXNvbnMge1xcbiAgICAgICAgdWwge1xcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiA1MHB4O1xcblxcbiAgICAgICAgICBsaSB7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcblxcbiAgICAgICAgICAgIGgzIHtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtOyAgXFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XFxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuXFxuXFxuICAgIH1cXG5cXG4gICAgLnJldmlld3Mge1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvYmFja2dyb3VuZC90b2t5by1zdHJlZXQuanBnKTtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgICAgcGFkZGluZzogMTV2aCA1dnc7XFxuICAgICAgaGVpZ2h0OiBtaW4oOTB2aCwgYXV0byk7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlOiAyMDBweCBhdXRvLyByZXBlYXQoMywgMWZyKTtcXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxuICAgICAgaDEge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgICAgIGdyaWQtcm93OiAxO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgfVxcbiAgICAgIC5jYXJkIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgd2lkdGg6IDE3dnc7XFxuICAgICAgICBoZWlnaHQ6IG1pbig0MHZoLCBhdXRvKTtcXG4gICAgICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzVweDtcXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICAgICAgfVxcblxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XFxuICAgICAgICAgIGhlaWdodDogODBweDtcXG4gICAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHNwYW4ge1xcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9iYWNrZ3JvdW5kL2hvbWUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29udGFjdHMge1xuXG4gICAgLmJnLWluZm8ge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgIHBhZGRpbmc6IDE1dmggMjB2dztcbiAgICAgIGhlaWdodDogbWluKDgzdmgsIGF1dG8pO1xuXG4gICAgICAuY29udGFjdHMtaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA1dmggNXZ3O1xuICAgICAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcblxuICAgICAgICBkaXYge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAyMHB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZm9ybSB7XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGdhcDogNXB4O1xuXG4gICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDZEOURDO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaW5wdXQ6aG92ZXIsIHRleHRhcmVhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICNkZGRkZGY7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICNkZGRkZGY7XG4gICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNjNmM5Y2Q7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlYzRiNjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9jb250YWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSTtNQUNFLFdBQVc7TUFDWCx5REFBc0Q7TUFDdEQsc0JBQXNCO01BQ3RCLDRCQUE0QjtNQUM1QixrQkFBa0I7TUFDbEIsdUJBQXVCOztNQUV2QjtRQUNFLGFBQWE7UUFDYiwrQkFBK0I7UUFDL0IsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQiw2RUFBNkU7O1FBRTdFO1VBQ0UsVUFBVTs7VUFFVjtZQUNFLGlCQUFpQjtVQUNuQjs7VUFFQTtZQUNFLFdBQVc7WUFDWCxZQUFZO1lBQ1osbUJBQW1CO1VBQ3JCO1FBQ0Y7O1FBRUE7VUFDRSxlQUFlO1VBQ2YscUJBQXFCO1VBQ3JCLGVBQWU7VUFDZiwwQkFBMEI7VUFDMUIsMkJBQTJCO1VBQzNCLHVDQUF1Qzs7UUFFekM7OztRQUdBOztVQUVFO1lBQ0UsYUFBYTtZQUNiLHNCQUFzQjtZQUN0Qiw2QkFBNkI7WUFDN0IsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixpQkFBaUI7O1lBRWpCO2NBQ0UsYUFBYTtjQUNiLGNBQWM7Y0FDZCxzQkFBc0I7Y0FDdEIsUUFBUTs7Y0FFUjtnQkFDRSxpQkFBaUI7Y0FDbkI7O2NBRUE7Z0JBQ0UsNkNBQTZDO2dCQUM3QyxlQUFlO2dCQUNmLHlCQUF5QjtnQkFDekIsa0JBQWtCO2dCQUNsQixpQkFBaUI7Z0JBQ2pCLFlBQVk7Z0JBQ1osa0JBQWtCO2NBQ3BCOztjQUVBO2tCQUNJLCtCQUErQjtjQUNuQzs7Y0FFQTtrQkFDSSxrQ0FBa0M7a0JBQ2xDLCtCQUErQjtrQkFDL0IsYUFBYTtjQUNqQjs7Y0FFQTtrQkFDSSxjQUFjO2tCQUNkLGtCQUFrQjtjQUN0Qjs7WUFFRjtVQUNGOztVQUVBO1lBQ0UsZUFBZTtZQUNmLFlBQVk7WUFDWix5QkFBeUI7WUFDekIsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZixZQUFZO1lBQ1osVUFBVTtZQUNWLFlBQVk7WUFDWixtQkFBbUI7VUFDckI7UUFDRjtNQUNGO0lBQ0Y7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFjdHMge1xcblxcbiAgICAuYmctaW5mbyB7XFxuICAgICAgbWFyZ2luOiAwcHg7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvYmFja2dyb3VuZC9ob21lLmpwZ1xcXCIpO1xcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgICBwYWRkaW5nOiAxNXZoIDIwdnc7XFxuICAgICAgaGVpZ2h0OiBtaW4oODN2aCwgYXV0byk7XFxuXFxuICAgICAgLmNvbnRhY3RzLWluZm8ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDV2aCA1dnc7XFxuICAgICAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG5cXG4gICAgICAgIGRpdiB7XFxuICAgICAgICAgIHdpZHRoOiA5MCU7XFxuXFxuICAgICAgICAgIHAge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgICAgICBcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgaDMge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICAgICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAyMHB4O1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgICAgICAgIFxcbiAgICAgICAgfVxcblxcblxcbiAgICAgICAgZm9ybSB7XFxuXFxuICAgICAgICAgIHVsIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG5cXG4gICAgICAgICAgICBsaSB7XFxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgZ2FwOiA1cHg7XFxuXFxuICAgICAgICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgICAgICAgfVxcbiAgXFxuICAgICAgICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYVxcXCIsIFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDlEQztcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICBpbnB1dDpob3ZlciwgdGV4dGFyZWE6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICNkZGRkZGY7XFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggI2RkZGRkZjtcXG4gICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzZjOWNkO1xcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXG4gICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB9IFxcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjNGI2O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICB3aWR0aDogMjUlO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvYmFja2dyb3VuZC9ob21lLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhvbWUge1xuICBoZWlnaHQ6IDgzdmg7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjMpLCByZ2JhKDAsIDAsIDAsIDAuMykpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG5cbiAgLmJnLWhvbWUge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTAlIDIwJTtcblxuXG4gICAgaDEgeyAgXG4gICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBtYXJnaW46IDI1cHggMHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG5cbiAgICBidXR0b24ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWM0YjY7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogOHB4IDI1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtIQUErRztFQUMvRyxzQkFBc0I7RUFDdEIsNEJBQTRCOztFQUU1Qjs7SUFFRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCOzs7SUFHaEI7TUFDRSxxQkFBcUI7TUFDckIsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixZQUFZO0lBQ2Q7OztJQUdBO01BQ0UsZUFBZTtNQUNmLGtDQUFrQztNQUNsQyx5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLG1CQUFtQjtJQUNyQjtFQUNGOztBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ob21lIHtcXG4gIGhlaWdodDogODN2aDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4zKSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgdXJsKFxcXCIuLi9hc3NldHMvYmFja2dyb3VuZC9ob21lLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuXFxuICAuYmctaG9tZSB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMCUgMjAlO1xcblxcblxcbiAgICBoMSB7ICBcXG4gICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgbWFyZ2luOiAyNXB4IDBweDtcXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlYzRiNjtcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgcGFkZGluZzogOHB4IDI1cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcbiAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9iYWNrZ3JvdW5kL2hvbWUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubWVudSB7XG5cbiAgICAuYmctaW5mbyB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgcGFkZGluZzogMTV2aCAyMHZ3O1xuICAgICAgXG4gICAgICAgIFxuICAgICAgLmluc2lkZS1jYXJkIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IGF1dG8gNTBweCAvIG1pbm1heCgwLCAxZnIpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTB2aCA1dnc7XG4gICAgICAgIGdhcDogNXZ3O1xuXG4gICAgICAgID4gYnV0dG9uIHtcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWM0YjY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAyNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1saXN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAlLCAxZnIpKTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XG4gICAgICAgICAgZ3JpZC1yb3ctZ2FwOiA1MHB4O1xuXG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCB2YXIoLS1ncmV5KTtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcblxuICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG5cbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICA+IGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlYzRiNjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDdweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL21lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJO01BQ0UsV0FBVztNQUNYLHlEQUFzRDtNQUN0RCxzQkFBc0I7TUFDdEIsNEJBQTRCO01BQzVCLGtCQUFrQjs7O01BR2xCO1FBQ0UsYUFBYTtRQUNiLG1EQUFtRDtRQUNuRCx1QkFBdUI7UUFDdkIsaUJBQWlCO1FBQ2pCLFFBQVE7O1FBRVI7VUFDRSxvQkFBb0I7VUFDcEIsVUFBVTtVQUNWLGVBQWU7VUFDZixrQ0FBa0M7VUFDbEMseUJBQXlCO1VBQ3pCLGdCQUFnQjtVQUNoQixlQUFlO1VBQ2YsWUFBWTtVQUNaLGlCQUFpQjtVQUNqQixtQkFBbUI7O1FBRXJCOztRQUVBO1VBQ0UsV0FBVztVQUNYLHFCQUFxQjtVQUNyQixlQUFlO1VBQ2Ysa0JBQWtCO1VBQ2xCLFlBQVk7UUFDZDs7UUFFQTtVQUNFLGFBQWE7VUFDYix5REFBeUQ7VUFDekQscUJBQXFCO1VBQ3JCLGtCQUFrQjs7VUFFbEI7WUFDRSxZQUFZO1lBQ1osYUFBYTtZQUNiLGFBQWE7WUFDYiwrQkFBK0I7WUFDL0IsOEJBQThCO1lBQzlCLHdDQUF3Qzs7WUFFeEM7Y0FDRSxhQUFhO1lBQ2Y7O1lBRUE7Y0FDRSxhQUFhO2NBQ2Isc0JBQXNCO2NBQ3RCLDhCQUE4QjtjQUM5QixZQUFZO2NBQ1osV0FBVztjQUNYLDZFQUE2RTs7Y0FFN0U7Z0JBQ0UsV0FBVzs7Z0JBRVgsYUFBYTtnQkFDYiw4QkFBOEI7Z0JBQzlCLFlBQVk7Z0JBQ1osaUJBQWlCOztnQkFFakI7a0JBQ0Usa0JBQWtCO2tCQUNsQixXQUFXO2tCQUNYLFlBQVk7a0JBQ1osa0NBQWtDO2tCQUNsQyxlQUFlO2tCQUNmLGdCQUFnQjtrQkFDaEIsWUFBWTtnQkFDZDs7Y0FFRjs7Y0FFQTtnQkFDRSxpQkFBaUI7Z0JBQ2pCLFlBQVk7Y0FDZDs7Y0FFQTtnQkFDRSxvQkFBb0I7Z0JBQ3BCLGVBQWU7Z0JBQ2Ysa0NBQWtDO2dCQUNsQyx5QkFBeUI7Z0JBQ3pCLGlCQUFpQjtnQkFDakIsWUFBWTtnQkFDWixnQkFBZ0I7Z0JBQ2hCLFVBQVU7Z0JBQ1YsbUJBQW1COztjQUVyQjtZQUNGO1VBQ0Y7OztRQUdGO01BQ0Y7SUFDRjs7RUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWVudSB7XFxuXFxuICAgIC5iZy1pbmZvIHtcXG4gICAgICBtYXJnaW46IDBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9iYWNrZ3JvdW5kL2hvbWUuanBnXFxcIik7XFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICAgIHBhZGRpbmc6IDE1dmggMjB2dztcXG4gICAgICBcXG4gICAgICAgIFxcbiAgICAgIC5pbnNpZGUtY2FyZCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IGF1dG8gNTBweCAvIG1pbm1heCgwLCAxZnIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBwYWRkaW5nOiAxMHZoIDV2dztcXG4gICAgICAgIGdhcDogNXZ3O1xcblxcbiAgICAgICAgPiBidXR0b24ge1xcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgd2lkdGg6IDIwJTtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjNGI2O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgcGFkZGluZzogOHB4IDI1cHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgICAgICB9XFxuXFxuICAgICAgICBoMSB7XFxuICAgICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY2FyZC1saXN0IHtcXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MCUsIDFmcikpO1xcbiAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XFxuICAgICAgICAgIGdyaWQtcm93LWdhcDogNTBweDtcXG5cXG4gICAgICAgICAgLmNhcmQge1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCB2YXIoLS1ncmV5KTtcXG5cXG4gICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgZGl2IHtcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgcGFkZGluZzogNSU7XFxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG5cXG4gICAgICAgICAgICAgIGgzIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XFxuXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG4gICAgICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICA+IGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWM0YjY7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA3cHg7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuXFxuXFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy8vZm9udHMvRGFuY2luZ1NjcmlwdC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy8vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbjpyb290IHtcbiAgLS1ibGFjazogIzAwMDAwMDtcbiAgLS1kYXJrLWJsdWU6ICMyZWM0YjY7XG4gIC0tdG9hc3Q6ICNjYmYzZjA7IFxuICAtLWdyZXk6ICNlNWU1ZTU7XG4gIC0td2hpdGU6ICNmZmZmZmY7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTd2aCBhdXRvIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvYXN0KTtcblxuICBoZWFkZXIge1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHZhcigtLXRvYXN0KTtcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDBweDtcblxuICAgIG5hdiB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBnYXA6IDEwMHB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEydmg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBidXR0b24ge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIHRyYW5zaXRpb246IDUwMG1zIGVhc2Utb3V0O1xuICAgICAgfVxuXG4gICAgICBidXR0b246aG92ZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JleSk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAxNXB4O1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgI2NvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBncmlkLXJvdzogMjtcblxuICAgIFxuICAgIC8qIC5ob21lIHtcbiAgICAgIGhlaWdodDogODN2aDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4zKSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgdXJsKFwiLi9hc3NldHMvL2JhY2tncm91bmQvaG9tZS5qcGdcIik7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcblxuICAgICAgLmJnLWhvbWUge1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMCUgMjAlO1xuICBcbiAgXG4gICAgICAgIGgxIHsgIFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBtYXJnaW46IDI1cHggMHB4O1xuICAgICAgICB9XG4gIFxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gIFxuICBcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjNGI2O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMjVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9ICovXG5cbiAgICAvKiAubWVudSB7XG5cbiAgICAgIC5iZy1pbmZvIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vYXNzZXRzL2JhY2tncm91bmQvaG9tZS5qcGdcIik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgIHBhZGRpbmc6IDE1dmggMjB2dztcbiAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIC5pbnNpZGUtY2FyZCB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggYXV0byA1MHB4IC8gbWlubWF4KDAsIDFmcik7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMTB2aCA1dnc7XG4gICAgICAgICAgZ2FwOiA1dnc7XG5cbiAgICAgICAgICA+IGJ1dHRvbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlYzRiNjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMjVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC1saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwJSwgMWZyKSk7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XG4gICAgICAgICAgICBncmlkLXJvdy1nYXA6IDUwcHg7XG5cbiAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggdmFyKC0tZ3JleSk7XG5cbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcblxuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG5cbiAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA+IGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjNGI2O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggN3B4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9ICovXG5cbiAgICAvKiAuYWJvdXQge1xuXG4gICAgICAuYmctaW5mbyB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kL2hvbWUuanBnXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICBwYWRkaW5nOiAxNXZoIDIwdnc7XG5cbiAgICAgICAgLmFib3V0LWluZm8ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMTB2aCA1dnc7XG4gICAgICAgICAgZ2FwOiA1dnc7XG4gIFxuICAgICAgICAgID4gZGl2IHtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjNGI2O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgXG4gIFxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubWlzc2lvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBoZWlnaHQ6IG1pbig5NXZoLCBhdXRvKTtcblxuICAgICAgICA+IGgxIHtcbiAgICAgICAgICBtYXJnaW46IDEwdmggYXV0byA1dmg7XG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICA+IHAge1xuICAgICAgICAgIG1hcmdpbjogMHZoIDIwdncgMTB2aDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICA+IC5yZWFzb25zIHtcbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogNTBweDtcbiAgXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG5cbiAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtOyAgXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuICAgICAgfVxuXG4gICAgICAucmV2aWV3cyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9iYWNrZ3JvdW5kL3Rva3lvLXN0cmVldC5qcGcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICBwYWRkaW5nOiAxNXZoIDV2dztcbiAgICAgICAgaGVpZ2h0OiBtaW4oOTB2aCwgYXV0byk7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDIwMHB4IGF1dG8vIHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcbiAgICAgICAgICBncmlkLXJvdzogMTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDE3dnc7XG4gICAgICAgICAgaGVpZ2h0OiBtaW4oNDB2aCwgYXV0byk7XG4gICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDM1cHg7XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSAqL1xuXG4gICAgLyogLmNvbnRhY3RzIHtcblxuICAgICAgLmJnLWluZm8ge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9hc3NldHMvYmFja2dyb3VuZC9ob21lLmpwZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgcGFkZGluZzogMTV2aCAyMHZ3O1xuICAgICAgICBoZWlnaHQ6IG1pbig4M3ZoLCBhdXRvKTtcblxuICAgICAgICAuY29udGFjdHMtaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDV2aCA1dnc7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG5cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMjBweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgZm9ybSB7XG5cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgXG4gICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgZ2FwOiA1cHg7XG5cbiAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDZEOURDO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW5wdXQ6aG92ZXIsIHRleHRhcmVhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggI2RkZGRkZjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAjZGRkZGRmO1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjNmM5Y2Q7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWM0YjY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG4gIFxuXG5cbiAgICAgICAgICB9XG5cblxuICBcbiAgXG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gKi9cblxuICB9XG4gIFxuICBmb290ZXIge1xuICAgIGdyaWQtcm93OiAtMiA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTAlIDEwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuXG4gICAgLmZvb3Rlci1pbmZvIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gICAgICA+IGRpdiB7XG4gICAgICAgIG1hcmdpbjogNSUgMTUlO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAuZi1jb250YWN0IGRpdiwgLmYtc29jaWFsIGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmYtZm9ybSBmb3JtIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWM0YjY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgIH1cblxuICAgIC5naXRodWIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQStEO0lBQy9ELGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsNENBQThDO0lBQzlDLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0FBRUY7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDhCQUE4Qjs7RUFFOUI7SUFDRSxXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQywwQkFBMEI7O0lBRTFCO01BQ0UsWUFBWTtNQUNaLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsVUFBVTs7TUFFVjtRQUNFLFlBQVk7UUFDWixXQUFXO01BQ2I7O01BRUE7UUFDRSxZQUFZO1FBQ1osYUFBYTtRQUNiLGtDQUFrQztRQUNsQyxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQiwwQkFBMEI7TUFDNUI7O01BRUE7UUFDRSxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQiwyQkFBMkI7TUFDN0I7O0lBRUY7RUFDRjs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixXQUFXOzs7SUFHWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTJDRzs7SUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E4R0c7O0lBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpSkc7O0lBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FnSEc7O0VBRUw7O0VBRUE7SUFDRSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFlBQVk7OztJQUdaO01BQ0UsWUFBWTtNQUNaLGFBQWE7TUFDYixxQ0FBcUM7TUFDckMscUJBQXFCOztNQUVyQjtRQUNFLGNBQWM7TUFDaEI7O01BRUE7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLFlBQVk7TUFDZDs7TUFFQTtRQUNFLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsOEJBQThCOztRQUU5QjtVQUNFLG1CQUFtQjtRQUNyQjtRQUNBO1VBQ0UsWUFBWTtVQUNaLHFCQUFxQjtRQUN2QjtNQUNGOztNQUVBO1FBQ0UsWUFBWTs7UUFFWjtVQUNFLGdCQUFnQjtVQUNoQixtQkFBbUI7VUFDbkIsY0FBYztVQUNkLGlCQUFpQjtVQUNqQixnQkFBZ0I7VUFDaEIscUJBQXFCO1VBQ3JCLFlBQVk7UUFDZDs7UUFFQTtVQUNFLGNBQWM7VUFDZCxtQkFBbUI7VUFDbkIsVUFBVTtVQUNWLGFBQWE7VUFDYixrQkFBa0I7VUFDbEIsOENBQThDO1FBQ2hEOztRQUVBO1VBQ0UsZUFBZTtVQUNmLFlBQVk7VUFDWix5QkFBeUI7VUFDekIsZ0JBQWdCO1VBQ2hCLGVBQWU7VUFDZixZQUFZO1VBQ1osWUFBWTtVQUNaLG1CQUFtQjtRQUNyQjtNQUNGOzs7SUFHRjs7SUFFQTtNQUNFLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLFNBQVM7TUFDVCxtQkFBbUI7TUFDbkIseUJBQXlCO01BQ3pCO1FBQ0UsWUFBWTtRQUNaLFdBQVc7TUFDYjtJQUNGOztFQUVGOztBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy8vZm9udHMvRGFuY2luZ1NjcmlwdC1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcblxcbiAgQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzLy9mb250cy9Sb2JvdG8tUmVndWxhci50dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcblxcbjpyb290IHtcXG4gIC0tYmxhY2s6ICMwMDAwMDA7XFxuICAtLWRhcmstYmx1ZTogIzJlYzRiNjtcXG4gIC0tdG9hc3Q6ICNjYmYzZjA7IFxcbiAgLS1ncmV5OiAjZTVlNWU1O1xcbiAgLS13aGl0ZTogI2ZmZmZmZjtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE3dmggYXV0byBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9hc3QpO1xcblxcbiAgaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB2YXIoLS10b2FzdCk7XFxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMHB4O1xcblxcbiAgICBuYXYge1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGdhcDogMTAwcHg7XFxuXFxuICAgICAgaW1nIHtcXG4gICAgICAgIGhlaWdodDogMTJ2aDtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgIH1cXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiA1MDBtcyBlYXNlLW91dDtcXG4gICAgICB9XFxuXFxuICAgICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDE1cHg7XFxuICAgICAgfVxcblxcbiAgICB9XFxuICB9XFxuXFxuICAjY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuXFxuICAgIFxcbiAgICAvKiAuaG9tZSB7XFxuICAgICAgaGVpZ2h0OiA4M3ZoO1xcbiAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMyksIHJnYmEoMCwgMCwgMCwgMC4zKSksIHVybChcXFwiLi9hc3NldHMvL2JhY2tncm91bmQvaG9tZS5qcGdcXFwiKTtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuXFxuICAgICAgLmJnLWhvbWUge1xcblxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxMCUgMjAlO1xcbiAgXFxuICBcXG4gICAgICAgIGgxIHsgIFxcbiAgICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgIG1hcmdpbjogMjVweCAwcHg7XFxuICAgICAgICB9XFxuICBcXG4gICAgICAgIHAge1xcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB9XFxuICBcXG4gIFxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjNGI2O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgcGFkZGluZzogOHB4IDI1cHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICB9ICovXFxuXFxuICAgIC8qIC5tZW51IHtcXG5cXG4gICAgICAuYmctaW5mbyB7XFxuICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvYmFja2dyb3VuZC9ob21lLmpwZ1xcXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgICAgICBwYWRkaW5nOiAxNXZoIDIwdnc7XFxuICAgICAgICBcXG4gICAgICAgICAgXFxuICAgICAgICAuaW5zaWRlLWNhcmQge1xcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggYXV0byA1MHB4IC8gbWlubWF4KDAsIDFmcik7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHZoIDV2dztcXG4gICAgICAgICAgZ2FwOiA1dnc7XFxuXFxuICAgICAgICAgID4gYnV0dG9uIHtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWM0YjY7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyNXB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgaDEge1xcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAuY2FyZC1saXN0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAlLCAxZnIpKTtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XFxuICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiA1MHB4O1xcblxcbiAgICAgICAgICAgIC5jYXJkIHtcXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggdmFyKC0tZ3JleSk7XFxuXFxuICAgICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgZGl2IHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG5cXG4gICAgICAgICAgICAgICAgaDMge1xcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xcblxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG4gICAgICAgICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICA+IGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlYzRiNjtcXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDdweDtcXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgIH0gKi9cXG5cXG4gICAgLyogLmFib3V0IHtcXG5cXG4gICAgICAuYmctaW5mbyB7XFxuICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvYmFja2dyb3VuZC9ob21lLmpwZ1xcXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgICAgICBwYWRkaW5nOiAxNXZoIDIwdnc7XFxuXFxuICAgICAgICAuYWJvdXQtaW5mbyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHZoIDV2dztcXG4gICAgICAgICAgZ2FwOiA1dnc7XFxuICBcXG4gICAgICAgICAgPiBkaXYge1xcbiAgICAgICAgICAgIGgxIHtcXG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgICAgICAgICAgIH1cXG4gIFxcbiAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgIH1cXG4gIFxcbiAgICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlYzRiNjtcXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICB3aWR0aDogNDUlO1xcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gIFxcbiAgXFxuICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAubWlzc2lvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGhlaWdodDogbWluKDk1dmgsIGF1dG8pO1xcblxcbiAgICAgICAgPiBoMSB7XFxuICAgICAgICAgIG1hcmdpbjogMTB2aCBhdXRvIDV2aDtcXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgID4gcCB7XFxuICAgICAgICAgIG1hcmdpbjogMHZoIDIwdncgMTB2aDtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA+IC5yZWFzb25zIHtcXG4gICAgICAgICAgdWwge1xcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogNTBweDtcXG4gIFxcbiAgICAgICAgICAgIGxpIHtcXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XFxuXFxuICAgICAgICAgICAgICBoMyB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtOyAgXFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcblxcblxcbiAgICAgIH1cXG5cXG4gICAgICAucmV2aWV3cyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvYmFja2dyb3VuZC90b2t5by1zdHJlZXQuanBnKTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICAgICAgcGFkZGluZzogMTV2aCA1dnc7XFxuICAgICAgICBoZWlnaHQ6IG1pbig5MHZoLCBhdXRvKTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlOiAyMDBweCBhdXRvLyByZXBlYXQoMywgMWZyKTtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG5cXG4gICAgICAgIGgxIHtcXG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgICAgICAgZ3JpZC1yb3c6IDE7XFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmNhcmQge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgd2lkdGg6IDE3dnc7XFxuICAgICAgICAgIGhlaWdodDogbWluKDQwdmgsIGF1dG8pO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgcGFkZGluZzogMTBweCAzNXB4O1xcblxcbiAgICAgICAgICBwIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDA7XFxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgfSAqL1xcblxcbiAgICAvKiAuY29udGFjdHMge1xcblxcbiAgICAgIC5iZy1pbmZvIHtcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kL2hvbWUuanBnXFxcIik7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgICAgIHBhZGRpbmc6IDE1dmggMjB2dztcXG4gICAgICAgIGhlaWdodDogbWluKDgzdmgsIGF1dG8pO1xcblxcbiAgICAgICAgLmNvbnRhY3RzLWluZm8ge1xcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgcGFkZGluZzogNXZoIDV2dztcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuXFxuICAgICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcXG4gIFxcbiAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgICAgICBcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgaDMge1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgICAgICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMjBweDtcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgIH1cXG5cXG5cXG4gICAgICAgICAgZm9ybSB7XFxuXFxuICAgICAgICAgICAgdWwge1xcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgICAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xcbiAgXFxuICAgICAgICAgICAgICBsaSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBnYXA6IDVweDtcXG5cXG4gICAgICAgICAgICAgICAgbGFiZWwge1xcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhXFxcIiwgXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDlEQztcXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpbnB1dDpob3ZlciwgdGV4dGFyZWE6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggI2RkZGRkZjtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICNkZGRkZGY7XFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzZjOWNkO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICB9IFxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlYzRiNjtcXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICB3aWR0aDogMjUlO1xcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICB9XFxuICBcXG5cXG5cXG4gICAgICAgICAgfVxcblxcblxcbiAgXFxuICBcXG5cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0gKi9cXG5cXG4gIH1cXG4gIFxcbiAgZm9vdGVyIHtcXG4gICAgZ3JpZC1yb3c6IC0yIDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MCUgMTAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuXFxuICAgIC5mb290ZXItaW5mbyB7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgPiBkaXYge1xcbiAgICAgICAgbWFyZ2luOiA1JSAxNSU7XFxuICAgICAgfVxcblxcbiAgICAgIHAge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgfVxcblxcbiAgICAgIC5mLWNvbnRhY3QgZGl2LCAuZi1zb2NpYWwgZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAgICAgc3BhbiB7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgICB9XFxuICAgICAgICBhIHtcXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5mLWZvcm0gZm9ybSB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICAgICAgICB3aWR0aDogNzAlO1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlYzRiNjtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuXFxuICAgIH1cXG5cXG4gICAgLmdpdGh1YiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogMTBweDtcXG4gICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmM7XFxuICAgICAgaW1nIHtcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgfVxcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGJhbm9mZmllX3BpZSBmcm9tIFwiLi9mb29kL2Jhbm9mZmllX3BpZS5qcGdcIjtcbmltcG9ydCBjYXJvYiBmcm9tICBcIi4vZm9vZC9jYXJvYl8rX2R1bGNlX2RlX2xlY2hlX2NoZWVzZWNha2UuanBnXCI7XG5pbXBvcnQgcmFzcGJlcnJ5IGZyb20gIFwiLi9mb29kL3Jhc3BiZXJyeV8mX3ZhbmlsbGEuanBnXCI7XG5pbXBvcnQgcGlzdGFjaGlvX3Njb29wIGZyb20gXCIuL2Zvb2QvcGlzdGFjaGlvX3Njb29wLWJyZXN0LmpwZ1wiO1xuaW1wb3J0IHBhbm5hX2NvdHRhIGZyb20gXCIuL2Zvb2QvcGFubmFfY290dGFfJl9ibHVlYmVycnkuanBnXCI7XG5pbXBvcnQgbGVtb25fcG9wcHlzZWVkIGZyb20gXCIuL2Zvb2QvbGVtb25fcG9wcHlzZWVkLmpwZ1wiO1xuaW1wb3J0IGNob2NvbGF0ZV90YXJ0IGZyb20gXCIuL2Zvb2QvY2hvY29sYXRlX3RhcnQuanBnXCI7XG5pbXBvcnQgY2hvY29sYXRlX2hhemVsbnV0IGZyb20gXCIuL2Zvb2QvY2hvY29sYXRlX2hhemVsbnV0Xy5qcGdcIjtcblxuXG5jb25zdCBkYXRhID0gW1xuICAgIHtcblwidGl0bGVcIjogXCJCYW5vZmZpZSBQaWVcIixcblwicHJpY2VcIjogXCI0LDnigqxcIixcblwiaW1hZ2VcIjogYmFub2ZmaWVfcGllLFxuXCJpbmdyZWRpZW50c1wiOiBcIkhhbmRtYWRlIGRvdWdobnV0IGZpbGxlZCB3aXRoIGEgaG9tZW1hZGUgYmFuYW5hIGNyZWFtLi4uXCJcbiAgICB9LFxuICAgIHtcblwidGl0bGVcIjogXCJEdWxjZSBkZSBMZWNoZVwiLFxuXCJwcmljZVwiOiBcIjQsOeKCrFwiLFxuXCJpbWFnZVwiOiBjYXJvYixcblwiaW5ncmVkaWVudHNcIjogXCJIYW5kbWFkZSBkb3VnaG51dCBmaWxsZWQgd2l0aCBhIGhvbWVtYWRlIGJhbmFuYSBjcmVhbS4uLlwiXG4gICAgfSxcbiAgICB7XG5cInRpdGxlXCI6IFwiUmFzcGJlcnJ5XCIsXG5cInByaWNlXCI6IFwiNuKCrFwiLFxuXCJpbWFnZVwiOiByYXNwYmVycnksXG5cImluZ3JlZGllbnRzXCI6IFwiSGFuZG1hZGUgZG91Z2hudXQgZmlsbGVkIHdpdGggYSBob21lbWFkZSBiYW5hbmEgY3JlYW0uLi5cIlxuICAgIH0sXG4gICAge1xuXCJ0aXRsZVwiOiBcIlBpc3RhY2hpb1wiLFxuXCJwcmljZVwiOiBcIjbigqxcIixcblwiaW1hZ2VcIjogcGlzdGFjaGlvX3Njb29wLFxuXCJpbmdyZWRpZW50c1wiOiBcIkhhbmRtYWRlIGRvdWdobnV0IGZpbGxlZCB3aXRoIGEgaG9tZW1hZGUgYmFuYW5hIGNyZWFtLi4uXCJcbiAgICB9LFxuICAgIHtcblwidGl0bGVcIjogXCJQYW5uYSBDb3R0YVwiLFxuXCJwcmljZVwiOiBcIjQsOeKCrFwiLFxuXCJpbWFnZVwiOiBwYW5uYV9jb3R0YSxcblwiaW5ncmVkaWVudHNcIjogXCJIYW5kbWFkZSBkb3VnaG51dCBmaWxsZWQgd2l0aCBhIGhvbWVtYWRlIGJhbmFuYSBjcmVhbS4uLlwiXG4gICAgfSxcbiAgICB7XG5cInRpdGxlXCI6IFwiTGVtb24gUG9wcHlzZWVkXCIsXG5cInByaWNlXCI6IFwiNCw54oKsXCIsXG5cImltYWdlXCI6IGxlbW9uX3BvcHB5c2VlZCxcblwiaW5ncmVkaWVudHNcIjogXCJIYW5kbWFkZSBkb3VnaG51dCBmaWxsZWQgd2l0aCBhIGhvbWVtYWRlIGJhbmFuYSBjcmVhbS4uLlwiXG4gICAgfSxcbiAgICB7XG5cInRpdGxlXCI6IFwiQ2hvY29sYXRlIFRhcnRcIixcblwicHJpY2VcIjogXCI0LDnigqxcIixcblwiaW1hZ2VcIjogY2hvY29sYXRlX3RhcnQsXG5cImluZ3JlZGllbnRzXCI6IFwiSGFuZG1hZGUgZG91Z2hudXQgZmlsbGVkIHdpdGggYSBob21lbWFkZSBiYW5hbmEgY3JlYW0uLi5cIlxuICAgIH0sXG4gICAge1xuXCJ0aXRsZVwiOiBcIkNob2NvbGF0ZSBIYXplbG51dFwiLFxuXCJwcmljZVwiOiBcIjUsOeKCrFwiLFxuXCJpbWFnZVwiOiBjaG9jb2xhdGVfaGF6ZWxudXQsXG5cImluZ3JlZGllbnRzXCI6IFwiSGFuZG1hZGUgZG91Z2hudXQgZmlsbGVkIHdpdGggYSBob21lbWFkZSBiYW5hbmEgY3JlYW0uLi5cIlxuICAgIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgZGF0YVxuIiwiaW1wb3J0IEFib3V0UGljIGZyb20gJy4uL2Fzc2V0cy9maWxsZXIvYWJvdXQuSlBHJztcbmltcG9ydCBKb3VybmFsaXN0IGZyb20gJy4uL2Fzc2V0cy9maWxsZXIvcHJvZmlsZV9waWN0dXJlLkpQRyc7XG5cbmltcG9ydCBDb21tdW5pdHlMb2dvIGZyb20gJy4uL2Fzc2V0cy9sb2dvcy9jb21tdW5pdHktcGVvcGxlLWZyaWVuZHMtZ3JvdXAtc3ZncmVwby1jb20uc3ZnJztcbmltcG9ydCBDb3dMb2dvIGZyb20gJy4uL2Fzc2V0cy9sb2dvcy9jb3ctYW5pbWFscy1zdmdyZXBvLWNvbS5zdmcnO1xuaW1wb3J0IGhlYWx0aExvZ28gZnJvbSAnLi4vYXNzZXRzL2xvZ29zL2hlYWx0aC1jYXJlLWhlYWx0aGNhcmUtaGVhbHRoLXNlcnZpY2UtaGVhbHRoLWNsaW5pYy1zdmdyZXBvLWNvbS5zdmcnO1xuaW1wb3J0IFRyZWVMb2dvIGZyb20gJy4uL2Fzc2V0cy9sb2dvcy90cmVlLXN2Z3JlcG8tY29tLnN2Zyc7XG5cbmltcG9ydCAnLi9hYm91dC5jc3MnO1xuXG5mdW5jdGlvbiBhYm91dCgpIHtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmNsYXNzTGlzdCA9ICdhYm91dCdcblxuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImJnLWluZm9cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtaW5mb1wiPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5BYm91dDwvaDE+XG4gICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVm9sdXB0YXR1bSBhbGlhcyBzYWVwZSBxdWlkZW0gdG90YW0gcGxhY2VhdCBtYWlvcmVzLCByZWljaWVuZGlzIHBlcnNwaWNpYXRpcyBwb3JybyBleGVyY2l0YXRpb25lbSwgZWxpZ2VuZGkgcmVwdWRpYW5kYWUgdGVuZXR1ciB0ZW1wb3JpYnVzIGRlYml0aXMgdm9sdXB0YXRpYnVzIG9tbmlzIHZlcml0YXRpcy4gQ3VwaWRpdGF0ZSwgcGVyZmVyZW5kaXMgZWFxdWU/PC9wPlxuICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSZXB1ZGlhbmRhZSwgc2FwaWVudGUgcGVyc3BpY2lhdGlzIGVhcXVlIGRvbG9yIGVvcywgcmVpY2llbmRpcyB1bGxhbSBxdWFzIGF0cXVlIGZ1Z2l0IGRpY3RhIHZlbGl0IGZ1Z2EgYXNwZXJpb3JlcyB2b2x1cHRhdHVtIHNhZXBlIG9tbmlzIGlzdGUgaXVyZSBxdWFtIHNpdC48L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5MZWFybiBNb3JlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvYWJvdXQuSlBHXCIgYWx0PVwiXCI+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgXG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibWlzc2lvblwiPlxuICAgICAgICA8aDE+T3VyIE1pc3Npb248L2gxPlxuICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBWb2x1cHRhdGlidXMgc2ludCBwbGFjZWF0LCB0ZW1wb3JpYnVzIHByYWVzZW50aXVtIG9mZmljaWlzIHZlcml0YXRpcyBpdXN0byBhdXQgaGljIGVzc2UgcmVtIG5vbiBtYWlvcmVzIGxpYmVybywgcmVwdWRpYW5kYWUgYWxpcXVpZCByZXBlbGxlbmR1cyBuaXNpIGZhY2VyZSBhbmltaSB0ZW1wb3JhITwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVhc29uc1wiPlxuXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3BlcnNvbi5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkhlYWx0aDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIER1Y2ltdXMgZXhjZXB0dXJpIHZvbHVwdGF0dW0gc2VxdWksIG1hZ25pIGVvcyBzZWQuIENvcnBvcmlzLCBhc3Blcm5hdHVyIG1heGltZSBlYSwgc3VudCBlcnJvciwgYWxpYXMgZXVtIG5hdHVzIGNvbnNlY3RldHVyIHBsYWNlYXQgZG9sb3JlcyBpZCBsYWJvcnVtIHF1YWVyYXQhPC9wPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3BlcnNvbi5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkFuaW1hbHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEdWNpbXVzIGV4Y2VwdHVyaSB2b2x1cHRhdHVtIHNlcXVpLCBtYWduaSBlb3Mgc2VkLiBDb3Jwb3JpcywgYXNwZXJuYXR1ciBtYXhpbWUgZWEsIHN1bnQgZXJyb3IsIGFsaWFzIGV1bSBuYXR1cyBjb25zZWN0ZXR1ciBwbGFjZWF0IGRvbG9yZXMgaWQgbGFib3J1bSBxdWFlcmF0ITwvcD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvcGVyc29uLnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+RW52aXJvbWVudDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIER1Y2ltdXMgZXhjZXB0dXJpIHZvbHVwdGF0dW0gc2VxdWksIG1hZ25pIGVvcyBzZWQuIENvcnBvcmlzLCBhc3Blcm5hdHVyIG1heGltZSBlYSwgc3VudCBlcnJvciwgYWxpYXMgZXVtIG5hdHVzIGNvbnNlY3RldHVyIHBsYWNlYXQgZG9sb3JlcyBpZCBsYWJvcnVtIHF1YWVyYXQhPC9wPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3BlcnNvbi5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlBlb3BsZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIER1Y2ltdXMgZXhjZXB0dXJpIHZvbHVwdGF0dW0gc2VxdWksIG1hZ25pIGVvcyBzZWQuIENvcnBvcmlzLCBhc3Blcm5hdHVyIG1heGltZSBlYSwgc3VudCBlcnJvciwgYWxpYXMgZXVtIG5hdHVzIGNvbnNlY3RldHVyIHBsYWNlYXQgZG9sb3JlcyBpZCBsYWJvcnVtIHF1YWVyYXQhPC9wPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInJldmlld3NcIj5cblxuICAgICAgICA8aDE+Sm91cm5hbGlzdCdzIFJldmlld3M8L2gxPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDb3Jwb3JpcyBpbGx1bSBlb3MgYXNzdW1lbmRhIGxhYm9yaW9zYW0gYmxhbmRpdGlpcyBhdXRlbSBlYSwgbmloaWwgaXBzYW0/IEVycm9yIHNhZXBlIGVuaW0gYWxpYXMgcXVvZCBhc3N1bWVuZGEgdmVsaXQgZGViaXRpcyBpbXBlZGl0IGRlbGVjdHVzLCBxdWkgZG9sb3JlbXF1ZT88L3A+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3Byb2ZpbGVfcGljdHVyZS5KUEdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDxzcGFuPk5hbWUgLSBDb21wYW55PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ29ycG9yaXMgaWxsdW0gZW9zIGFzc3VtZW5kYSBsYWJvcmlvc2FtIGJsYW5kaXRpaXMgYXV0ZW0gZWEsIG5paGlsIGlwc2FtPyBFcnJvciBzYWVwZSBlbmltIGFsaWFzIHF1b2QgYXNzdW1lbmRhIHZlbGl0IGRlYml0aXMgaW1wZWRpdCBkZWxlY3R1cywgcXVpIGRvbG9yZW1xdWU/PC9wPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9wcm9maWxlX3BpY3R1cmUuSlBHXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8c3Bhbj5OYW1lIC0gQ29tcGFueTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvcnBvcmlzIGlsbHVtIGVvcyBhc3N1bWVuZGEgbGFib3Jpb3NhbSBibGFuZGl0aWlzIGF1dGVtIGVhLCBuaWhpbCBpcHNhbT8gRXJyb3Igc2FlcGUgZW5pbSBhbGlhcyBxdW9kIGFzc3VtZW5kYSB2ZWxpdCBkZWJpdGlzIGltcGVkaXQgZGVsZWN0dXMsIHF1aSBkb2xvcmVtcXVlPzwvcD5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvcHJvZmlsZV9waWN0dXJlLkpQR1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPHNwYW4+TmFtZSAtIENvbXBhbnk8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgICBgXG5cbiAgICBkaXYucXVlcnlTZWxlY3RvcignLmFib3V0LWluZm8gaW1nJykuc3JjID0gQWJvdXRQaWNcblxuICAgIGNvbnN0IGxvZ29zID0gW2hlYWx0aExvZ28sIENvd0xvZ28sIFRyZWVMb2dvLCBDb21tdW5pdHlMb2dvXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgICAgZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpIGltZycpW2ldLnNyYyA9IGxvZ29zW2ldXG4gICAgfVxuXG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkIGltZycpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIHZhbHVlLnNyYyA9IEpvdXJuYWxpc3RcbiAgICB9KVxuXG4gICAgcmV0dXJuIGRpdlxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0OyIsImltcG9ydCBMb2NhdGlvbiBmcm9tICcuLi9hc3NldHMvZmlsbGVyL2xvY2F0aW9uLkpQRyc7XG5pbXBvcnQgJy4vY29udGFjdC5jc3MnO1xuXG5mdW5jdGlvbiBjb250YWN0KCkge1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NMaXN0ID0gJ2NvbnRhY3RzJ1xuXG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiYmctaW5mb1wiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0cy1pbmZvXCI+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzPkFkZHJlc3M8L2gzPlxuICAgICAgICAgICAgICAgIDxwPkF2LiBkZSBsYSBCb3VyZG9ubmFpcywgNzUwMDcgUGFyaXMsIEZyYW5jZTwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2xvY2F0aW9uLkpQR1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgPGgzPkNvbnRhY3QgRm9ybTwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwibWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgcm93cz1cIjhcIiBjb2xzPVwiMzNcIiBtYXhsZW5ndGg9XCIyNTBcIiBzcGVsbGNoZWNrPVwidHJ1ZVwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBgXG5cbiAgICBkaXYucXVlcnlTZWxlY3RvckFsbCgnZGl2IGltZycpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIHZhbHVlLnNyYyA9IExvY2F0aW9uXG4gICAgfSlcblxuXG4gICAgcmV0dXJuIGRpdlxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3QiLCJpbXBvcnQgJy4vaG9tZS5jc3MnO1xuaW1wb3J0IHsgZGVmaW5lQnV0dG9uIH0gZnJvbSAnLi91dGlsaXR5JztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XG5cbmZ1bmN0aW9uIGhvbWUoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NOYW1lID0gJ2hvbWUnXG5cbiAgICBjb25zdCBiZ19ob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBiZ19ob21lLmNsYXNzTmFtZSA9ICdiZy1ob21lJ1xuICAgIGRpdi5hcHBlbmRDaGlsZChiZ19ob21lKVxuXG4gICAgXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgICBoMS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIFZlZ2FuIFNjb29wJ1xuICAgIHAudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGFyaWF0dXIsIG1pbnVzIG5paGlsIHNhcGllbnRlIHRvdGFtIHByb3ZpZGVudCBjb25zZXF1dW50dXIgZG9sb3JpYnVzIGNvcnJ1cHRpIGV4cGVkaXRhIGVsaWdlbmRpIGRlbGVuaXRpIGNvbnNlY3RldHVyIGRlc2VydW50IGVzdCwgYWxpcXVpZCBvZGlvIHF1aWRlbSBudWxsYSBxdW9kLiBRdWlzLCBkdWNpbXVzISdcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnT3JkZXIgTm93J1xuXG4gICAgZGVmaW5lQnV0dG9uKGJ1dHRvbiwgbWVudSgpKVxuXG4gICAgYmdfaG9tZS5hcHBlbmRDaGlsZChoMSlcbiAgICBiZ19ob21lLmFwcGVuZENoaWxkKHApXG4gICAgYmdfaG9tZS5hcHBlbmRDaGlsZChidXR0b24pXG5cbiAgICByZXR1cm4gZGl2XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWUiLCJpbXBvcnQgZGF0YSBmcm9tICcuLi9hc3NldHMvZGF0YS5qcyc7XG5pbXBvcnQgJy4vbWVudS5jc3MnO1xuXG5mdW5jdGlvbiBtZW51KCkge1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NMaXN0ID0gJ21lbnUnXG5cbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJiZy1pbmZvXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluc2lkZS1jYXJkXCI+XG5cbiAgICAgICAgICAgIDxoMT5NZW51PC9oMT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGlzdFwiPjwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5WaWV3IE1vcmU8L2J1dHRvbj5cblxuICAgICAgICA8L2Rpdj4gIFxuICAgIDwvZGl2PlxuICAgIGBcblxuICAgIGRpdi5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCBpbWcnKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICB2YWx1ZS5zcmMgPSBKb3VybmFsaXN0XG4gICAgfSlcblxuICAgIGNvbnN0IGNhcmRfbGlzdCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY2FyZC1saXN0JylcblxuXG4gICAgZGF0YS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJ1xuXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGltZy5zcmMgPSB2YWx1ZS5pbWFnZVxuXG4gICAgICAgIGNvbnN0IGNhcmRfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgICBjb25zdCBjYXJkX2Rpdl9oMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgY2FyZF9kaXZfaDMudGV4dENvbnRlbnQgPSB2YWx1ZS50aXRsZVxuXG4gICAgICAgIGNvbnN0IGNhcmRfZGl2X3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgY2FyZF9kaXZfc3Bhbi50ZXh0Q29udGVudCA9IHZhbHVlLnByaWNlXG5cbiAgICAgICAgY29uc3QgY2FyZF9kaXZfcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBjYXJkX2Rpdl9wLnRleHRDb250ZW50ID0gdmFsdWUuaW5ncmVkaWVudHNcblxuICAgICAgICBjb25zdCBjYXJkX2Rpdl9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBjYXJkX2Rpdl9idXR0b24udGV4dENvbnRlbnQgPSAnQWRkJ1xuXG4gICAgICAgIGNhcmRfZGl2LmFwcGVuZENoaWxkKGNhcmRfZGl2X2gzKVxuICAgICAgICBjYXJkX2Rpdl9oMy5hcHBlbmRDaGlsZChjYXJkX2Rpdl9zcGFuKVxuICAgICAgICBjYXJkX2Rpdi5hcHBlbmRDaGlsZChjYXJkX2Rpdl9wKVxuICAgICAgICBjYXJkX2Rpdi5hcHBlbmRDaGlsZChjYXJkX2Rpdl9idXR0b24pXG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZF9kaXYpXG5cbiAgICAgICAgY2FyZF9saXN0LmFwcGVuZENoaWxkKGNhcmQpXG5cbiAgICB9KVxuXG4gICAgcmV0dXJuIGRpdlxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51OyIsImZ1bmN0aW9uIHJlc2V0KG5ld19kaXYpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld19kaXYpXG5cbn1cblxuZnVuY3Rpb24gZGVmaW5lQnV0dG9uKGJ1dHRvbiwgZnVuYykge1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZXNldChmdW5jKVxuICAgIH0pXG59XG5cbmV4cG9ydCB7ZGVmaW5lQnV0dG9uLCByZXNldH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBpbXBvcnQgZGF0YSBmcm9tICcuL2Fzc2V0cy9kYXRhLmpzb24nO1xuLy8gaW1wb3J0IGRhdGEgZnJvbSAnLi9hc3NldHMvZGF0YS5qcyc7XG5cbmltcG9ydCBHaXRJY29uIGZyb20gJy4vYXNzZXRzL2xvZ29zL2dpdGh1Yi1tYXJrLXdoaXRlLnBuZyc7XG5pbXBvcnQgTWFpbkxvZ28gZnJvbSAnLi9hc3NldHMvbG9nb3MvZ2lvcmRhbm8xLnBuZyc7XG5cbmltcG9ydCBBYm91dFBpYyBmcm9tICcuL2Fzc2V0cy9maWxsZXIvYWJvdXQuSlBHJztcbmltcG9ydCBKb3VybmFsaXN0IGZyb20gJy4vYXNzZXRzL2ZpbGxlci9wcm9maWxlX3BpY3R1cmUuSlBHJztcbi8vIGltcG9ydCBMb2NhdGlvbiBmcm9tICcuL2Fzc2V0cy9maWxsZXIvbG9jYXRpb24uSlBHJztcblxuaW1wb3J0IENvbW11bml0eUxvZ28gZnJvbSAnLi9hc3NldHMvbG9nb3MvY29tbXVuaXR5LXBlb3BsZS1mcmllbmRzLWdyb3VwLXN2Z3JlcG8tY29tLnN2Zyc7XG5pbXBvcnQgQ293TG9nbyBmcm9tICcuL2Fzc2V0cy9sb2dvcy9jb3ctYW5pbWFscy1zdmdyZXBvLWNvbS5zdmcnO1xuaW1wb3J0IGhlYWx0aExvZ28gZnJvbSAnLi9hc3NldHMvbG9nb3MvaGVhbHRoLWNhcmUtaGVhbHRoY2FyZS1oZWFsdGgtc2VydmljZS1oZWFsdGgtY2xpbmljLXN2Z3JlcG8tY29tLnN2Zyc7XG5pbXBvcnQgVHJlZUxvZ28gZnJvbSAnLi9hc3NldHMvbG9nb3MvdHJlZS1zdmdyZXBvLWNvbS5zdmcnO1xuXG5pbXBvcnQgaG9tZSBmcm9tICcuL3BhZ2VzL2hvbWUuanMnXG5pbXBvcnQgY29udGFjdCBmcm9tICcuL3BhZ2VzL2NvbnRhY3QuanMnXG5pbXBvcnQgbWVudSBmcm9tICcuL3BhZ2VzL21lbnUuanMnXG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9wYWdlcy9hYm91dC5qcydcblxuaW1wb3J0IHsgZGVmaW5lQnV0dG9uLCByZXNldCB9IGZyb20gJy4vcGFnZXMvdXRpbGl0eS5qcyc7XG5cbi8vIGZ1bmN0aW9uIGhvbWUoKSB7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICBkaXYuY2xhc3NOYW1lID0gJ2hvbWUnXG5cbi8vICAgICBjb25zdCBiZ19ob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICBiZ19ob21lLmNsYXNzTmFtZSA9ICdiZy1ob21lJ1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChiZ19ob21lKVxuXG4gICAgXG4vLyAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4vLyAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuLy8gICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbi8vICAgICBoMS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIFZlZ2FuIFNjb29wJ1xuLy8gICAgIHAudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGFyaWF0dXIsIG1pbnVzIG5paGlsIHNhcGllbnRlIHRvdGFtIHByb3ZpZGVudCBjb25zZXF1dW50dXIgZG9sb3JpYnVzIGNvcnJ1cHRpIGV4cGVkaXRhIGVsaWdlbmRpIGRlbGVuaXRpIGNvbnNlY3RldHVyIGRlc2VydW50IGVzdCwgYWxpcXVpZCBvZGlvIHF1aWRlbSBudWxsYSBxdW9kLiBRdWlzLCBkdWNpbXVzISdcbi8vICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnT3JkZXIgTm93J1xuXG4vLyAgICAgZGVmaW5lQnV0dG9uKGJ1dHRvbiwgbWVudSgpKVxuXG4vLyAgICAgYmdfaG9tZS5hcHBlbmRDaGlsZChoMSlcbi8vICAgICBiZ19ob21lLmFwcGVuZENoaWxkKHApXG4vLyAgICAgYmdfaG9tZS5hcHBlbmRDaGlsZChidXR0b24pXG5cbi8vICAgICByZXR1cm4gZGl2XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGFib3V0KCkge1xuXG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICBkaXYuY2xhc3NMaXN0ID0gJ2Fib3V0J1xuXG4vLyAgICAgZGl2LmlubmVySFRNTCA9IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwiYmctaW5mb1wiPlxuXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1pbmZvXCI+XG5cbi8vICAgICAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICAgICAgPGgxPkFib3V0PC9oMT5cbi8vICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBWb2x1cHRhdHVtIGFsaWFzIHNhZXBlIHF1aWRlbSB0b3RhbSBwbGFjZWF0IG1haW9yZXMsIHJlaWNpZW5kaXMgcGVyc3BpY2lhdGlzIHBvcnJvIGV4ZXJjaXRhdGlvbmVtLCBlbGlnZW5kaSByZXB1ZGlhbmRhZSB0ZW5ldHVyIHRlbXBvcmlidXMgZGViaXRpcyB2b2x1cHRhdGlidXMgb21uaXMgdmVyaXRhdGlzLiBDdXBpZGl0YXRlLCBwZXJmZXJlbmRpcyBlYXF1ZT88L3A+XG4vLyAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlcHVkaWFuZGFlLCBzYXBpZW50ZSBwZXJzcGljaWF0aXMgZWFxdWUgZG9sb3IgZW9zLCByZWljaWVuZGlzIHVsbGFtIHF1YXMgYXRxdWUgZnVnaXQgZGljdGEgdmVsaXQgZnVnYSBhc3BlcmlvcmVzIHZvbHVwdGF0dW0gc2FlcGUgb21uaXMgaXN0ZSBpdXJlIHF1YW0gc2l0LjwvcD5cbi8vICAgICAgICAgICAgICAgICA8YnV0dG9uPkxlYXJuIE1vcmU8L2J1dHRvbj5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9hYm91dC5KUEdcIiBhbHQ9XCJcIj5cblxuLy8gICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcbi8vICAgICA8L2Rpdj5cblxuLy8gICAgIDxkaXYgY2xhc3M9XCJtaXNzaW9uXCI+XG4vLyAgICAgICAgIDxoMT5PdXIgTWlzc2lvbjwvaDE+XG4vLyAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFZvbHVwdGF0aWJ1cyBzaW50IHBsYWNlYXQsIHRlbXBvcmlidXMgcHJhZXNlbnRpdW0gb2ZmaWNpaXMgdmVyaXRhdGlzIGl1c3RvIGF1dCBoaWMgZXNzZSByZW0gbm9uIG1haW9yZXMgbGliZXJvLCByZXB1ZGlhbmRhZSBhbGlxdWlkIHJlcGVsbGVuZHVzIG5pc2kgZmFjZXJlIGFuaW1pIHRlbXBvcmEhPC9wPlxuXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWFzb25zXCI+XG5cbi8vICAgICAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvcGVyc29uLnBuZ1wiIGFsdD1cIlwiPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aDM+SGVhbHRoPC9oMz5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRHVjaW11cyBleGNlcHR1cmkgdm9sdXB0YXR1bSBzZXF1aSwgbWFnbmkgZW9zIHNlZC4gQ29ycG9yaXMsIGFzcGVybmF0dXIgbWF4aW1lIGVhLCBzdW50IGVycm9yLCBhbGlhcyBldW0gbmF0dXMgY29uc2VjdGV0dXIgcGxhY2VhdCBkb2xvcmVzIGlkIGxhYm9ydW0gcXVhZXJhdCE8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvcGVyc29uLnBuZ1wiIGFsdD1cIlwiPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aDM+QW5pbWFsczwvaDM+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIER1Y2ltdXMgZXhjZXB0dXJpIHZvbHVwdGF0dW0gc2VxdWksIG1hZ25pIGVvcyBzZWQuIENvcnBvcmlzLCBhc3Blcm5hdHVyIG1heGltZSBlYSwgc3VudCBlcnJvciwgYWxpYXMgZXVtIG5hdHVzIGNvbnNlY3RldHVyIHBsYWNlYXQgZG9sb3JlcyBpZCBsYWJvcnVtIHF1YWVyYXQhPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgICAgIDxsaT5cbi8vICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9wZXJzb24ucG5nXCIgYWx0PVwiXCI+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxoMz5FbnZpcm9tZW50PC9oMz5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRHVjaW11cyBleGNlcHR1cmkgdm9sdXB0YXR1bSBzZXF1aSwgbWFnbmkgZW9zIHNlZC4gQ29ycG9yaXMsIGFzcGVybmF0dXIgbWF4aW1lIGVhLCBzdW50IGVycm9yLCBhbGlhcyBldW0gbmF0dXMgY29uc2VjdGV0dXIgcGxhY2VhdCBkb2xvcmVzIGlkIGxhYm9ydW0gcXVhZXJhdCE8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvcGVyc29uLnBuZ1wiIGFsdD1cIlwiPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aDM+UGVvcGxlPC9oMz5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRHVjaW11cyBleGNlcHR1cmkgdm9sdXB0YXR1bSBzZXF1aSwgbWFnbmkgZW9zIHNlZC4gQ29ycG9yaXMsIGFzcGVybmF0dXIgbWF4aW1lIGVhLCBzdW50IGVycm9yLCBhbGlhcyBldW0gbmF0dXMgY29uc2VjdGV0dXIgcGxhY2VhdCBkb2xvcmVzIGlkIGxhYm9ydW0gcXVhZXJhdCE8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgIDwvdWw+XG5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgPC9kaXY+XG5cbi8vICAgICA8ZGl2IGNsYXNzPVwicmV2aWV3c1wiPlxuXG4vLyAgICAgICAgIDxoMT5Kb3VybmFsaXN0J3MgUmV2aWV3czwvaDE+XG5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbi8vICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvcnBvcmlzIGlsbHVtIGVvcyBhc3N1bWVuZGEgbGFib3Jpb3NhbSBibGFuZGl0aWlzIGF1dGVtIGVhLCBuaWhpbCBpcHNhbT8gRXJyb3Igc2FlcGUgZW5pbSBhbGlhcyBxdW9kIGFzc3VtZW5kYSB2ZWxpdCBkZWJpdGlzIGltcGVkaXQgZGVsZWN0dXMsIHF1aSBkb2xvcmVtcXVlPzwvcD5cbi8vICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvcHJvZmlsZV9waWN0dXJlLkpQR1wiIGFsdD1cIlwiPlxuLy8gICAgICAgICAgICAgPHNwYW4+TmFtZSAtIENvbXBhbnk8L3NwYW4+XG4vLyAgICAgICAgIDwvZGl2PlxuXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4vLyAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDb3Jwb3JpcyBpbGx1bSBlb3MgYXNzdW1lbmRhIGxhYm9yaW9zYW0gYmxhbmRpdGlpcyBhdXRlbSBlYSwgbmloaWwgaXBzYW0/IEVycm9yIHNhZXBlIGVuaW0gYWxpYXMgcXVvZCBhc3N1bWVuZGEgdmVsaXQgZGViaXRpcyBpbXBlZGl0IGRlbGVjdHVzLCBxdWkgZG9sb3JlbXF1ZT88L3A+XG4vLyAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3Byb2ZpbGVfcGljdHVyZS5KUEdcIiBhbHQ9XCJcIj5cbi8vICAgICAgICAgICAgIDxzcGFuPk5hbWUgLSBDb21wYW55PC9zcGFuPlxuLy8gICAgICAgICA8L2Rpdj5cblxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuLy8gICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ29ycG9yaXMgaWxsdW0gZW9zIGFzc3VtZW5kYSBsYWJvcmlvc2FtIGJsYW5kaXRpaXMgYXV0ZW0gZWEsIG5paGlsIGlwc2FtPyBFcnJvciBzYWVwZSBlbmltIGFsaWFzIHF1b2QgYXNzdW1lbmRhIHZlbGl0IGRlYml0aXMgaW1wZWRpdCBkZWxlY3R1cywgcXVpIGRvbG9yZW1xdWU/PC9wPlxuLy8gICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9wcm9maWxlX3BpY3R1cmUuSlBHXCIgYWx0PVwiXCI+XG4vLyAgICAgICAgICAgICA8c3Bhbj5OYW1lIC0gQ29tcGFueTwvc3Bhbj5cbi8vICAgICAgICAgPC9kaXY+XG5cbi8vICAgICA8L2Rpdj5cblxuLy8gICAgIGBcblxuLy8gICAgIGRpdi5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtaW5mbyBpbWcnKS5zcmMgPSBBYm91dFBpY1xuXG4vLyAgICAgY29uc3QgbG9nb3MgPSBbaGVhbHRoTG9nbywgQ293TG9nbywgVHJlZUxvZ28sIENvbW11bml0eUxvZ29dXG5cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xuLy8gICAgICAgICBkaXYucXVlcnlTZWxlY3RvckFsbCgnbGkgaW1nJylbaV0uc3JjID0gbG9nb3NbaV1cbi8vICAgICB9XG5cbi8vICAgICBkaXYucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQgaW1nJykuZm9yRWFjaCgodmFsdWUpID0+IHtcbi8vICAgICAgICAgdmFsdWUuc3JjID0gSm91cm5hbGlzdFxuLy8gICAgIH0pXG5cbi8vICAgICByZXR1cm4gZGl2XG5cbi8vIH1cblxuLy8gZnVuY3Rpb24gY29udGFjdCgpIHtcblxuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgZGl2LmNsYXNzTGlzdCA9ICdjb250YWN0cydcblxuLy8gICAgIGRpdi5pbm5lckhUTUwgPSBgXG4vLyAgICAgPGRpdiBjbGFzcz1cImJnLWluZm9cIj5cblxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdHMtaW5mb1wiPlxuXG4vLyAgICAgICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgICAgIDxoMz5BZGRyZXNzPC9oMz5cbi8vICAgICAgICAgICAgICAgICA8cD5Bdi4gZGUgbGEgQm91cmRvbm5haXMsIDc1MDA3IFBhcmlzLCBGcmFuY2U8L3A+XG4vLyAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2NhdGlvbi5KUEdcIiBhbHQ9XCJcIj5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuXG5cbi8vICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuLy8gICAgICAgICAgICAgICAgIDxoMz5Db250YWN0IEZvcm08L2gzPlxuLy8gICAgICAgICAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHJlcXVpcmVkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHJlcXVpcmVkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U6PC9sYWJlbD5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHJvd3M9XCI4XCIgY29scz1cIjMzXCIgbWF4bGVuZ3RoPVwiMjUwXCIgc3BlbGxjaGVjaz1cInRydWVcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICAgICA8bGk+PC9saT5cbi8vICAgICAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlNlbmQ8L2J1dHRvbj5cbi8vICAgICAgICAgICAgIDwvZm9ybT5cblxuLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuXG4vLyAgICAgZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdiBpbWcnKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuLy8gICAgICAgICB2YWx1ZS5zcmMgPSBMb2NhdGlvblxuLy8gICAgIH0pXG5cblxuLy8gICAgIHJldHVybiBkaXZcblxuLy8gfVxuXG4vLyBmdW5jdGlvbiBtZW51KCkge1xuXG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICBkaXYuY2xhc3NMaXN0ID0gJ21lbnUnXG5cbi8vICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgIFxuLy8gICAgIDxkaXYgY2xhc3M9XCJiZy1pbmZvXCI+XG5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImluc2lkZS1jYXJkXCI+XG5cbi8vICAgICAgICAgICAgIDxoMT5NZW51PC9oMT5cblxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGlzdFwiPjwvZGl2PlxuXG4vLyAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5WaWV3IE1vcmU8L2J1dHRvbj5cblxuLy8gICAgICAgICA8L2Rpdj4gIFxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcblxuLy8gICAgIGRpdi5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCBpbWcnKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuLy8gICAgICAgICB2YWx1ZS5zcmMgPSBKb3VybmFsaXN0XG4vLyAgICAgfSlcblxuLy8gICAgIGNvbnN0IGNhcmRfbGlzdCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY2FyZC1saXN0JylcblxuXG4vLyAgICAgZGF0YS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuXG4vLyAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgICAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJ1xuXG4vLyAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4vLyAgICAgICAgIGltZy5zcmMgPSB2YWx1ZS5pbWFnZVxuXG4vLyAgICAgICAgIGNvbnN0IGNhcmRfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuLy8gICAgICAgICBjb25zdCBjYXJkX2Rpdl9oMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbi8vICAgICAgICAgY2FyZF9kaXZfaDMudGV4dENvbnRlbnQgPSB2YWx1ZS50aXRsZVxuXG4vLyAgICAgICAgIGNvbnN0IGNhcmRfZGl2X3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbi8vICAgICAgICAgY2FyZF9kaXZfc3Bhbi50ZXh0Q29udGVudCA9IHZhbHVlLnByaWNlXG5cbi8vICAgICAgICAgY29uc3QgY2FyZF9kaXZfcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuLy8gICAgICAgICBjYXJkX2Rpdl9wLnRleHRDb250ZW50ID0gdmFsdWUuaW5ncmVkaWVudHNcblxuLy8gICAgICAgICBjb25zdCBjYXJkX2Rpdl9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuLy8gICAgICAgICBjYXJkX2Rpdl9idXR0b24udGV4dENvbnRlbnQgPSAnQWRkJ1xuXG4vLyAgICAgICAgIGNhcmRfZGl2LmFwcGVuZENoaWxkKGNhcmRfZGl2X2gzKVxuLy8gICAgICAgICBjYXJkX2Rpdl9oMy5hcHBlbmRDaGlsZChjYXJkX2Rpdl9zcGFuKVxuLy8gICAgICAgICBjYXJkX2Rpdi5hcHBlbmRDaGlsZChjYXJkX2Rpdl9wKVxuLy8gICAgICAgICBjYXJkX2Rpdi5hcHBlbmRDaGlsZChjYXJkX2Rpdl9idXR0b24pXG5cbi8vICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4vLyAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZF9kaXYpXG5cbi8vICAgICAgICAgY2FyZF9saXN0LmFwcGVuZENoaWxkKGNhcmQpXG5cbi8vICAgICB9KVxuXG4vLyAgICAgcmV0dXJuIGRpdlxuICAgIFxuLy8gfVxuXG4vLyBmdW5jdGlvbiByZXNldChuZXdfZGl2KSB7XG5cbi8vICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3X2RpdilcblxuLy8gfVxuXG4vLyBmdW5jdGlvbiBkZWZpbmVCdXR0b24oYnV0dG9uLCBmdW5jKSB7XG5cbi8vICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgICAgIHJlc2V0KGZ1bmMpXG4vLyAgICAgfSlcbi8vIH1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2IGltZycpLnNyYyA9IE1haW5Mb2dvXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2l0aHViIGltZycpLnNyYyA9IEdpdEljb25cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQoaG9tZSgpKVxuXG5kZWZpbmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1ob21lJyksIGhvbWUoKSk7XG5kZWZpbmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1hYm91dCcpLCBhYm91dCgpKTtcbmRlZmluZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWNvbnRhY3QnKSwgY29udGFjdCgpKTtcbmRlZmluZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW1lbnUnKSwgbWVudSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==