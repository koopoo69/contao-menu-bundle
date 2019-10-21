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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Resources/assets/js/contao-menu-bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Resources/assets/js/contao-menu-bundle.js":
/*!*******************************************************!*\
  !*** ./src/Resources/assets/js/contao-menu-bundle.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _npm_package__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../npm-package */ "./src/Resources/npm-package/js/contao-menu-bundle.js");
__webpack_require__(/*! ../scss/contao-menu-bundle.scss */ "./src/Resources/assets/scss/contao-menu-bundle.scss");


document.addEventListener('DOMContentLoaded', _npm_package__WEBPACK_IMPORTED_MODULE_0__["MenuBundle"].init);

/***/ }),

/***/ "./src/Resources/assets/scss/contao-menu-bundle.scss":
/*!***********************************************************!*\
  !*** ./src/Resources/assets/scss/contao-menu-bundle.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Resources/npm-package/js/contao-menu-bundle.js":
/*!************************************************************!*\
  !*** ./src/Resources/npm-package/js/contao-menu-bundle.js ***!
  \************************************************************/
/*! exports provided: MenuBundle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBundle", function() { return MenuBundle; });
/* harmony import */ var _hundh_contao_utils_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hundh/contao-utils-bundle */ "@hundh/contao-utils-bundle");
/* harmony import */ var _hundh_contao_utils_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hundh_contao_utils_bundle__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MenuBundle =
/*#__PURE__*/
function () {
  function MenuBundle() {
    _classCallCheck(this, MenuBundle);
  }

  _createClass(MenuBundle, null, [{
    key: "init",
    value: function init() {
      MenuBundle.initMenu();
    }
  }, {
    key: "initMenu",
    value: function initMenu() {
      document.querySelectorAll('.mod_huh_menu').forEach(function (menu) {
        var maxTriggerLevel = menu.getAttribute('data-max-trigger-level'),
            closeDelay = menu.getAttribute('data-close-delay'),
            triggerActivatedLinkClasses = [];

        if (maxTriggerLevel == 0) {
          triggerActivatedLinkClasses.push('a.submenu');
        } else {
          for (var i = 1; i <= maxTriggerLevel; i++) {
            triggerActivatedLinkClasses.push('.level_' + i + ' > .submenu > a.submenu');
          }
        }

        menu.querySelectorAll(triggerActivatedLinkClasses).forEach(function (link) {
          link.addEventListener('click', function (e) {
            e.preventDefault();

            if (window.navigator.maxTouchPoints == 0) {
              var url = link.getAttribute('href');

              if (url !== null && url.length > 0) {
                location.href = link.href;
              }
            }
          });
          link.addEventListener('mouseover', function () {
            MenuBundle.openSubmenu(menu, link);
          });
          link.addEventListener('touchstart', function () {
            MenuBundle.openSubmenu(menu, link);
          });
          link.addEventListener('mouseleave', function (e) {
            console.log('mouseleave link');

            if (MenuBundle.isElementCurrentlyHovered(link.nextElementSibling)) {
              return;
            }

            setTimeout(function () {
              if (MenuBundle.isElementCurrentlyHovered(link)) {
                return;
              }

              link.classList.remove('open');
              link.nextElementSibling.classList.remove('open');
            }, closeDelay);
          });
          link.nextElementSibling.addEventListener('mouseleave', function (e) {
            console.log('mouseleave submenu ul');

            if (MenuBundle.isElementCurrentlyHovered(link)) {
              return;
            }

            setTimeout(function () {
              if (MenuBundle.isElementCurrentlyHovered(link.nextElementSibling)) {
                return;
              }

              e.target.classList.remove('open');
              link.classList.remove('open');
            }, closeDelay);
          });
        });
        menu.addEventListener('mouseleave', function (e) {
          setTimeout(function () {
            if (MenuBundle.isElementCurrentlyHovered(menu)) {
              return;
            } // remove all open classes


            menu.querySelectorAll('.open').forEach(function (element) {
              element.classList.remove('open');
            });
          }, closeDelay);
        });
        document.querySelector('body').addEventListener('touchstart', function (e) {
          if (e.target.closest('.mod_huh_menu') !== null) {
            return;
          }

          setTimeout(function () {
            if (MenuBundle.isElementCurrentlyHovered(menu)) {
              return;
            } // remove all open classes


            menu.querySelectorAll('.open').forEach(function (element) {
              element.classList.remove('open');
            });
          }, closeDelay);
        });
      });
    }
  }, {
    key: "openSubmenu",
    value: function openSubmenu(menu, link) {
      var openDelay = menu.getAttribute('data-open-delay') ? menu.getAttribute('data-open-delay') : 0;

      if (link.classList.contains('open')) {
        return;
      }

      setTimeout(function () {
        if (!MenuBundle.isElementCurrentlyHovered(link)) {
          return;
        }

        var openedParents = [];
        utilsBundle.dom.getAllParentNodes(link).forEach(function (element) {
          if (element.classList.contains('open')) {
            openedParents.push(element);
          }
        }); // remove all open classes except those which are parents

        menu.querySelectorAll('.open').forEach(function (element) {
          if (openedParents.indexOf(element) < 0) {
            element.classList.remove('open');
          }
        });

        if (!link.classList.contains('open')) {
          link.classList.add('open');
        }

        if (!link.nextElementSibling.classList.contains('open')) {
          link.nextElementSibling.classList.add('open');
        }
      }, openDelay);
    }
  }, {
    key: "isElementCurrentlyHovered",
    value: function isElementCurrentlyHovered(element) {
      var found = false;
      document.querySelectorAll(':hover').forEach(function (hoveredElement) {
        if (hoveredElement === element) {
          found = true;
        }
      });
      return found;
    }
  }]);

  return MenuBundle;
}();



/***/ }),

/***/ "@hundh/contao-utils-bundle":
/*!******************************!*\
  !*** external "utilsBundle" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = utilsBundle;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy9hc3NldHMvanMvY29udGFvLW1lbnUtYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvYXNzZXRzL3Njc3MvY29udGFvLW1lbnUtYnVuZGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy9ucG0tcGFja2FnZS9qcy9jb250YW8tbWVudS1idW5kbGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXRpbHNCdW5kbGVcIiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiTWVudUJ1bmRsZSIsImluaXQiLCJpbml0TWVudSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibWVudSIsIm1heFRyaWdnZXJMZXZlbCIsImdldEF0dHJpYnV0ZSIsImNsb3NlRGVsYXkiLCJ0cmlnZ2VyQWN0aXZhdGVkTGlua0NsYXNzZXMiLCJwdXNoIiwiaSIsImxpbmsiLCJlIiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsInVybCIsImxlbmd0aCIsImxvY2F0aW9uIiwiaHJlZiIsIm9wZW5TdWJtZW51IiwiY29uc29sZSIsImxvZyIsImlzRWxlbWVudEN1cnJlbnRseUhvdmVyZWQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJzZXRUaW1lb3V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGFyZ2V0IiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9zZXN0Iiwib3BlbkRlbGF5IiwiY29udGFpbnMiLCJvcGVuZWRQYXJlbnRzIiwidXRpbHNCdW5kbGUiLCJkb20iLCJnZXRBbGxQYXJlbnROb2RlcyIsImluZGV4T2YiLCJhZGQiLCJmb3VuZCIsImhvdmVyZWRFbGVtZW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNB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QTNCLEVBQXNDQyxPQUF0QyxDQUE4QyxVQUFDdUMsY0FBRCxFQUFvQjtBQUM5RCxZQUFJQSxjQUFjLEtBQUtaLE9BQXZCLEVBQWdDO0FBQzVCVyxlQUFLLEdBQUcsSUFBUjtBQUNIO0FBQ0osT0FKRDtBQU1BLGFBQU9BLEtBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SkwsNkIiLCJmaWxlIjoiY29udGFvLW1lbnUtYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvcHVibGljL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnRhby1tZW51LWJ1bmRsZS5qc1wiKTtcbiIsInJlcXVpcmUoJy4uL3Njc3MvY29udGFvLW1lbnUtYnVuZGxlLnNjc3MnKTtcblxuaW1wb3J0IHsgTWVudUJ1bmRsZSB9IGZyb20gJy4uLy4uL25wbS1wYWNrYWdlJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIE1lbnVCdW5kbGUuaW5pdCk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICdAaHVuZGgvY29udGFvLXV0aWxzLWJ1bmRsZSc7XG5cbmNsYXNzIE1lbnVCdW5kbGUge1xuXG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIE1lbnVCdW5kbGUuaW5pdE1lbnUoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5pdE1lbnUoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RfaHVoX21lbnUnKS5mb3JFYWNoKChtZW51KSA9PiB7XG4gICAgICAgICAgICBsZXQgbWF4VHJpZ2dlckxldmVsID0gbWVudS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF4LXRyaWdnZXItbGV2ZWwnKSxcbiAgICAgICAgICAgICAgICBjbG9zZURlbGF5ID0gbWVudS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2xvc2UtZGVsYXknKSxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyQWN0aXZhdGVkTGlua0NsYXNzZXMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKG1heFRyaWdnZXJMZXZlbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckFjdGl2YXRlZExpbmtDbGFzc2VzLnB1c2goJ2Euc3VibWVudScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhUcmlnZ2VyTGV2ZWw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQWN0aXZhdGVkTGlua0NsYXNzZXMucHVzaCgnLmxldmVsXycgKyBpICsgJyA+IC5zdWJtZW51ID4gYS5zdWJtZW51Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwodHJpZ2dlckFjdGl2YXRlZExpbmtDbGFzc2VzKS5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB1cmwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsaW5rLmhyZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBNZW51QnVuZGxlLm9wZW5TdWJtZW51KG1lbnUsIGxpbmspO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBNZW51QnVuZGxlLm9wZW5TdWJtZW51KG1lbnUsIGxpbmspO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdXNlbGVhdmUgbGluaycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChNZW51QnVuZGxlLmlzRWxlbWVudEN1cnJlbnRseUhvdmVyZWQobGluay5uZXh0RWxlbWVudFNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNZW51QnVuZGxlLmlzRWxlbWVudEN1cnJlbnRseUhvdmVyZWQobGluaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9LCBjbG9zZURlbGF5KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGxpbmsubmV4dEVsZW1lbnRTaWJsaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbW91c2VsZWF2ZSBzdWJtZW51IHVsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKE1lbnVCdW5kbGUuaXNFbGVtZW50Q3VycmVudGx5SG92ZXJlZChsaW5rKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWVudUJ1bmRsZS5pc0VsZW1lbnRDdXJyZW50bHlIb3ZlcmVkKGxpbmsubmV4dEVsZW1lbnRTaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGNsb3NlRGVsYXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChNZW51QnVuZGxlLmlzRWxlbWVudEN1cnJlbnRseUhvdmVyZWQobWVudSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhbGwgb3BlbiBjbGFzc2VzXG4gICAgICAgICAgICAgICAgICAgIG1lbnUucXVlcnlTZWxlY3RvckFsbCgnLm9wZW4nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgY2xvc2VEZWxheSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcubW9kX2h1aF9tZW51JykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoTWVudUJ1bmRsZS5pc0VsZW1lbnRDdXJyZW50bHlIb3ZlcmVkKG1lbnUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgYWxsIG9wZW4gY2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgICBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIGNsb3NlRGVsYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBvcGVuU3VibWVudShtZW51LCBsaW5rKSB7XG4gICAgICAgIGxldCBvcGVuRGVsYXkgPSBtZW51LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLWRlbGF5JykgPyBtZW51LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuLWRlbGF5JykgOiAwO1xuXG4gICAgICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICghTWVudUJ1bmRsZS5pc0VsZW1lbnRDdXJyZW50bHlIb3ZlcmVkKGxpbmspKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgb3BlbmVkUGFyZW50cyA9IFtdO1xuXG4gICAgICAgICAgICB1dGlsc0J1bmRsZS5kb20uZ2V0QWxsUGFyZW50Tm9kZXMobGluaykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5lZFBhcmVudHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCBvcGVuIGNsYXNzZXMgZXhjZXB0IHRob3NlIHdoaWNoIGFyZSBwYXJlbnRzXG4gICAgICAgICAgICBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcGVuZWRQYXJlbnRzLmluZGV4T2YoZWxlbWVudCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFsaW5rLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgIGxpbmsubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgb3BlbkRlbGF5KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNFbGVtZW50Q3VycmVudGx5SG92ZXJlZChlbGVtZW50KSB7XG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICc6aG92ZXInICkuZm9yRWFjaCgoaG92ZXJlZEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChob3ZlcmVkRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cbn1cblxuZXhwb3J0IHtNZW51QnVuZGxlfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHV0aWxzQnVuZGxlOyJdLCJzb3VyY2VSb290IjoiIn0=