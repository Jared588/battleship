/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxLQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnREFBTztBQUMxQixzQkFBc0IsbURBQVU7QUFDaEMscUJBQXFCLGtEQUFTO0FBQzlCLHFCQUFxQixrREFBUztBQUM5QixzQkFBc0IsbURBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgQ2FycmllciBmcm9tICcuL2ltYWdlcy9DYXJyaWVyLnBuZydcbmltcG9ydCBCYXR0bGVzaGlwIGZyb20gJy4vaW1hZ2VzL0JhdHRsZXNoaXAucG5nJ1xuaW1wb3J0IERlc3Ryb3llciBmcm9tICcuL2ltYWdlcy9EZXN0cm95ZXIucG5nJ1xuaW1wb3J0IFN1Ym1hcmluZSBmcm9tICcuL2ltYWdlcy9TdWJtYXJpbmUucG5nJ1xuaW1wb3J0IFBhdHJvbEJvYXQgZnJvbSAnLi9pbWFnZXMvUGF0cm9sQm9hdC5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsKCkge1xuICBjb25zdCBteU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TW9kYWwnKTtcbiAgY29uc3QgbW9kYWxCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1ib2FyZCcpO1xuICBsZXQgRGlyID0gJ3gnO1xuICBsZXQgY3VycmVudFNoaXAgPSAnQ2Fycmllcic7XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsaXplKGJvYXJkKSB7XG4gICAgICBtb2RhbEJvYXJkLmlubmVySFRNTCA9ICcnO1xuICAgICAgLy8gUGxhY2UgY2VsbHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQuZ2V0R3JpZCgpLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBib2FyZC5nZXRHcmlkKClbaV0ucG9zaXRpb247XG5cbiAgICAgICAgbW9kYWxCb2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgaWYgKGJvYXJkLmdldEdyaWQoKVtpXS5vY2N1cGllZCkge1xuICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGFydFBsYWNlU2VxdWVuY2UoYm9hcmQsIHNoaXAsIGxlbiwgZGlyLCBnYW1lKSB7XG4gICAgICAvLyBsaXN0ZW4gZm9yIGFuZCB1cGRhdGUgYW55IGRpcmVjdGlvbiBjaGFuZ2VzXG4gICAgICBjb25zdCBkaXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlyLWJ0bicpO1xuICAgICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBEaXIgPSBEaXIgPT09ICd4JyA/ICd5JyA6ICd4JztcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKGJvYXJkKTtcblxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RocyA9IHtcbiAgICAgICAgICBDYXJyaWVyOiA1LFxuICAgICAgICAgIEJhdHRsZXNoaXA6IDQsXG4gICAgICAgICAgRGVzdHJveWVyOiAzLFxuICAgICAgICAgIFN1Ym1hcmluZTogMyxcbiAgICAgICAgICBQYXRyb2xCb2F0OiAyLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RhcnRQbGFjZVNlcXVlbmNlKFxuICAgICAgICAgIGJvYXJkLFxuICAgICAgICAgIGN1cnJlbnRTaGlwLFxuICAgICAgICAgIHNoaXBMZW5ndGhzW2N1cnJlbnRTaGlwXSxcbiAgICAgICAgICBEaXIsXG4gICAgICAgICAgZ2FtZSxcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGRpckJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICB9O1xuICAgICAgZGlyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcblxuICAgICAgLy8gUGxhY2VtZW50XG4gICAgICBjb25zdCBncmlkID0gYm9hcmQuZ2V0R3JpZCgpO1xuICAgICAgY29uc3QgY2VsbHMgPSBtb2RhbEJvYXJkLmNoaWxkcmVuO1xuICAgICAgbGV0IGRpck9mZlNldDsgLy8gQWRqdXN0bWVudHMgZm9yIHBsYWNlbWVudCBkaXJlY3Rpb25cbiAgICAgIGlmIChkaXIgPT09ICd4Jykge1xuICAgICAgICBkaXJPZmZTZXQgPSAxO1xuICAgICAgfSBlbHNlIGRpck9mZlNldCA9IDEwOyAvLyAqMTAgZm9yIHktYXhpcyBwbGFjZW1lbnRcblxuICAgICAgLy8gQWRkIHZpc3VhbCBsaXN0ZW5lcnNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChjZWxsc1tpICsgal0pIHtcbiAgICAgICAgICAgICAgY2VsbHNbaSArIGogKiBkaXJPZmZTZXRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaiArPSAxKSB7XG4gICAgICAgICAgICBpZiAoY2VsbHNbaSArIGogKiBkaXJPZmZTZXRdICYmICFncmlkW2kgKyBqICogZGlyT2ZmU2V0XS5vY2N1cGllZCkge1xuICAgICAgICAgICAgICBjZWxsc1tpICsgaiAqIGRpck9mZlNldF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgcGxhY2VtZW50IGxpc3RlbmVyc1xuICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAvLyBDaGVjayBmb3Igb2NjdXBhdGlvblxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGlmICghY2VsbHNbaSArIGogKiBkaXJPZmZTZXRdIHx8IGdyaWRbaSArIGogKiBkaXJPZmZTZXRdLm9jY3VwaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDYXJyaWVyXG4gICAgICAgICAgaWYgKHNoaXAgPT09ICdDYXJyaWVyJykge1xuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKCdDYXJyaWVyJywgW1xuICAgICAgICAgICAgICBgJHtncmlkW2ldLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICAgIGAke2dyaWRbaSArIDEgKiBkaXJPZmZTZXRdLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICAgIGAke2dyaWRbaSArIDIgKiBkaXJPZmZTZXRdLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICAgIGAke2dyaWRbaSArIDMgKiBkaXJPZmZTZXRdLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICAgIGAke2dyaWRbaSArIDQgKiBkaXJPZmZTZXRdLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBib2FyZFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZShib2FyZCk7XG4gICAgICAgICAgICAgIHRoaXMuc3RhcnRQbGFjZVNlcXVlbmNlKGJvYXJkLCAnQmF0dGxlc2hpcCcsIDQsIGRpciwgZ2FtZSk7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGxheUluZm8oJ0JhdHRsZXNoaXAnKTtcbiAgICAgICAgICAgICAgdGhpcy5uZXh0U2hpcCgpO1xuICAgICAgICAgICAgICBkaXJCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBCYXR0bGVzaGlwXG4gICAgICAgICAgZWxzZSBpZiAoc2hpcCA9PT0gJ0JhdHRsZXNoaXAnKSB7XG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoJ0JhdHRsZXNoaXAnLCBbXG4gICAgICAgICAgICAgIGAke2dyaWRbaV0ucG9zaXRpb259YCxcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpICsgMSAqIGRpck9mZlNldF0ucG9zaXRpb259YCxcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpICsgMiAqIGRpck9mZlNldF0ucG9zaXRpb259YCxcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpICsgMyAqIGRpck9mZlNldF0ucG9zaXRpb259YCxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgLy8gVXBkYXRlIGJvYXJkXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKGJvYXJkKTtcbiAgICAgICAgICAgICAgdGhpcy5zdGFydFBsYWNlU2VxdWVuY2UoYm9hcmQsICdEZXN0cm95ZXInLCAzLCBkaXIsIGdhbWUpO1xuICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlJbmZvKCdEZXN0cm95ZXInKTtcbiAgICAgICAgICAgICAgdGhpcy5uZXh0U2hpcCgpO1xuICAgICAgICAgICAgICBkaXJCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEZXN0cm95ZXJcbiAgICAgICAgICBlbHNlIGlmIChzaGlwID09PSAnRGVzdHJveWVyJykge1xuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKCdEZXN0cm95ZXInLCBbXG4gICAgICAgICAgICAgIGAke2dyaWRbaV0ucG9zaXRpb259YCxcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpICsgMSAqIGRpck9mZlNldF0ucG9zaXRpb259YCxcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpICsgMiAqIGRpck9mZlNldF0ucG9zaXRpb259YCxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgLy8gVXBkYXRlIGJvYXJkXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKGJvYXJkKTtcbiAgICAgICAgICAgICAgdGhpcy5zdGFydFBsYWNlU2VxdWVuY2UoYm9hcmQsICdTdWJtYXJpbmUnLCAzLCBkaXIsIGdhbWUpO1xuICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlJbmZvKCdTdWJtYXJpbmUnKTtcbiAgICAgICAgICAgICAgdGhpcy5uZXh0U2hpcCgpO1xuICAgICAgICAgICAgICBkaXJCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTdWJtYXJpbmVcbiAgICAgICAgICBlbHNlIGlmIChzaGlwID09PSAnU3VibWFyaW5lJykge1xuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKCdTdWJtYXJpbmUnLCBbXG4gICAgICAgICAgICAgIGAke2dyaWRbaV0ucG9zaXRpb259YCxcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpICsgMSAqIGRpck9mZlNldF0ucG9zaXRpb259YCxcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpICsgMiAqIGRpck9mZlNldF0ucG9zaXRpb259YCxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgLy8gVXBkYXRlIGJvYXJkXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKGJvYXJkKTtcbiAgICAgICAgICAgICAgdGhpcy5zdGFydFBsYWNlU2VxdWVuY2UoYm9hcmQsICdQYXRyb2xCb2F0JywgMiwgZGlyLCBnYW1lKTtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5SW5mbygnUGF0cm9sQm9hdCcpO1xuICAgICAgICAgICAgICB0aGlzLm5leHRTaGlwKCk7XG4gICAgICAgICAgICAgIGRpckJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFBhdHJvbCBCb2F0XG4gICAgICAgICAgZWxzZSBpZiAoc2hpcCA9PT0gJ1BhdHJvbEJvYXQnKSB7XG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoJ1BhdHJvbEJvYXQnLCBbXG4gICAgICAgICAgICAgIGAke2dyaWRbaV0ucG9zaXRpb259YCxcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpICsgMSAqIGRpck9mZlNldF0ucG9zaXRpb259YCxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgLy8gVXBkYXRlIGJvYXJkXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKGJvYXJkKTtcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICAgIGdhbWUudXBkYXRlQm9hcmQoKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRmxhc2ggZm9yIGNvbmZpcm1hdGlvblxuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbGVuOyBrICs9IDEpIHtcbiAgICAgICAgICAgIGNlbGxzW2kgKyBrICogZGlyT2ZmU2V0XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDAsIDE3MCwgMCknO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNlbGxzW2kgKyBrICogZGlyT2ZmU2V0XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkaXNwbGF5SW5mbyhzaGlwKSB7XG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtbmFtZScpO1xuICAgICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1pbWFnZScpO1xuICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBcbiAgICAgIC8vIENoYW5nZSBzaGlwIG5hbWVcbiAgICAgIG5hbWUuaW5uZXJUZXh0ID0gYFBsYWNlIFlvdXIgJHtzaGlwfS4uLmA7XG4gICAgXG4gICAgICAvLyBDaGFuZ2Ugc2hpcCBpbWFnZVxuICAgICAgY29uc3Qgc2hpcEltYWdlcyA9IHtcbiAgICAgICAgJ0NhcnJpZXInOiBDYXJyaWVyLFxuICAgICAgICAnQmF0dGxlc2hpcCc6IEJhdHRsZXNoaXAsXG4gICAgICAgICdEZXN0cm95ZXInOiBEZXN0cm95ZXIsXG4gICAgICAgICdTdWJtYXJpbmUnOiBTdWJtYXJpbmUsXG4gICAgICAgICdQYXRyb2xCb2F0JzogUGF0cm9sQm9hdCxcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGltYWdlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgaW1hZ2Uuc3JjID0gc2hpcEltYWdlc1tzaGlwXTtcbiAgICAgIGltYWdlLnN0eWxlLndpZHRoID0gJzMwMHB4JztcbiAgICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICB9LFxuXG4gICAgbmV4dFNoaXAoKSB7XG4gICAgICBpZihjdXJyZW50U2hpcCA9PT0gJ0NhcnJpZXInKSB7XG4gICAgICAgIGN1cnJlbnRTaGlwID0gJ0JhdHRsZXNoaXAnO1xuICAgICAgfWVsc2UgaWYoY3VycmVudFNoaXAgPT09ICdCYXR0bGVzaGlwJykge1xuICAgICAgICBjdXJyZW50U2hpcCA9ICdEZXN0cm95ZXInO1xuICAgICAgfWVsc2UgaWYoY3VycmVudFNoaXAgPT09ICdEZXN0cm95ZXInKSB7XG4gICAgICAgIGN1cnJlbnRTaGlwID0gJ1N1Ym1hcmluZSc7XG4gICAgICB9ZWxzZSBpZihjdXJyZW50U2hpcCA9PT0gJ1N1Ym1hcmluZScpIHtcbiAgICAgICAgY3VycmVudFNoaXAgPSAnUGF0cm9sQm9hdCc7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICBteU1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9