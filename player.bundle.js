/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7O0FBRWxCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsUUFBUTtBQUM5Qix3QkFBd0IsU0FBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrREFBVTtBQUM1QjtBQUNBO0FBQ0EsUUFBUTtBQUNSLHFCQUFxQixrREFBVTtBQUMvQjtBQUNBO0FBQ0EsUUFBUTtBQUNSLG9CQUFvQixrREFBVTtBQUM5QjtBQUNBO0FBQ0EsUUFBUTtBQUNSLG9CQUFvQixrREFBVTtBQUM5QjtBQUNBO0FBQ0EsUUFBUTtBQUNSLHFCQUFxQixrREFBVTtBQUMvQjtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoS2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxXQUFXLFdBQVcsU0FBUyxhQUFhLE9BQU8sV0FBVyxPQUFPLFVBQVU7QUFDL0U7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7OztVQ3JCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm9DOztBQUVyQjtBQUNmO0FBQ0EsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixxREFBcUQ7QUFDckQsb0RBQW9EO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixzREFBUztBQUNuQztBQUNBLHdCQUF3QixzREFBUztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlU2hpcCBmcm9tICcuL3NoaXBzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZWJvYXJkKCkge1xuICAvLyBCb2FyZFxuICBjb25zdCBjb2x1bW5zID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gIGxldCBncmlkID0gW107XG4gIGxldCBudW1iZXJPZkhpdHMgPSAwO1xuICBjb25zdCBoaXRTaG90cyA9IFtdO1xuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdO1xuXG4gIC8vIFNoaXBzXG4gIGxldCBDYXJyaWVyO1xuICBsZXQgQmF0dGxlc2hpcDtcbiAgbGV0IERlc3Ryb3llcjtcbiAgbGV0IFN1Ym1hcmluZTtcbiAgbGV0IFBhdHJvbEJvYXQ7XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgZ3JpZCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqICs9IDEpIHtcbiAgICAgICAgICBncmlkLnB1c2goe1xuICAgICAgICAgICAgcG9zaXRpb246IGNvbHVtbnNbaV0gKyBqLFxuICAgICAgICAgICAgb2NjdXBpZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2hpcDogbnVsbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRHcmlkKCkge1xuICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgfSxcblxuICAgIHBsYWNlU2hpcChzaGlwLCBwb3NpdGlvbikge1xuICAgICAgbGV0IGNhcnJpZXJDb3VudCA9IDA7XG4gICAgICBsZXQgQmF0dGxlc2hpcENvdW50ID0gMDtcbiAgICAgIGxldCBEZXN0cm95ZXJDb3VudCA9IDA7XG4gICAgICBsZXQgU3VibWFyaW5lQ291bnQgPSAwO1xuICAgICAgbGV0IFBhdHJvbEJvYXRDb3VudCA9IDA7XG5cbiAgICAgIC8vIENoZWNrIHRoYXQgdGhlIHBvaW50cyBhcmUgdW5vY2N1cGllZFxuICAgICAgcG9zaXRpb24uZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZFBvaW50ID0gZ3JpZC5maW5kKChjZWxsKSA9PiBjZWxsLnBvc2l0aW9uID09PSBwb2ludCk7XG4gICAgICAgIGlmIChncmlkUG9pbnQgJiYgZ3JpZFBvaW50Lm9jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtcmV0dXJuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBzaGlwXG4gICAgICBsZXQgbmV3U2hpcDtcbiAgICAgIGlmIChzaGlwID09PSAnQ2FycmllcicgJiYgY2FycmllckNvdW50IDwgMSkge1xuICAgICAgICBDYXJyaWVyID0gY3JlYXRlU2hpcCgnQ2FycmllcicsIDUsIDAsIGZhbHNlKTtcbiAgICAgICAgbmV3U2hpcCA9IENhcnJpZXI7XG4gICAgICAgIGNhcnJpZXJDb3VudCArPSAxO1xuICAgICAgfSBlbHNlIGlmIChzaGlwID09PSAnQmF0dGxlc2hpcCcgJiYgQmF0dGxlc2hpcENvdW50IDwgMSkge1xuICAgICAgICBCYXR0bGVzaGlwID0gY3JlYXRlU2hpcCgnQmF0dGxlc2hpcCcsIDQsIDAsIGZhbHNlKTtcbiAgICAgICAgbmV3U2hpcCA9IEJhdHRsZXNoaXA7XG4gICAgICAgIEJhdHRsZXNoaXBDb3VudCArPSAxO1xuICAgICAgfSBlbHNlIGlmIChzaGlwID09PSAnRGVzdHJveWVyJyAmJiBEZXN0cm95ZXJDb3VudCA8IDEpIHtcbiAgICAgICAgRGVzdHJveWVyID0gY3JlYXRlU2hpcCgnRGVzdHJveWVyJywgMywgMCwgZmFsc2UpO1xuICAgICAgICBuZXdTaGlwID0gRGVzdHJveWVyO1xuICAgICAgICBEZXN0cm95ZXJDb3VudCArPSAxO1xuICAgICAgfSBlbHNlIGlmIChzaGlwID09PSAnU3VibWFyaW5lJyAmJiBTdWJtYXJpbmVDb3VudCA8IDEpIHtcbiAgICAgICAgU3VibWFyaW5lID0gY3JlYXRlU2hpcCgnU3VibWFyaW5lJywgMywgMCwgZmFsc2UpO1xuICAgICAgICBuZXdTaGlwID0gU3VibWFyaW5lO1xuICAgICAgICBTdWJtYXJpbmVDb3VudCArPSAxO1xuICAgICAgfSBlbHNlIGlmIChzaGlwID09PSAnUGF0cm9sQm9hdCcgJiYgUGF0cm9sQm9hdENvdW50IDwgMSkge1xuICAgICAgICBQYXRyb2xCb2F0ID0gY3JlYXRlU2hpcCgnUGF0cm9sQm9hdCcsIDIsIDAsIGZhbHNlKTtcbiAgICAgICAgbmV3U2hpcCA9IFBhdHJvbEJvYXQ7XG4gICAgICAgIFBhdHJvbEJvYXRDb3VudCArPSAxO1xuICAgICAgfSBlbHNlIHJldHVybjtcblxuICAgICAgLy8gQWRkIHRoZSBzaGlwXG4gICAgICBwb3NpdGlvbi5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgICBjb25zdCBncmlkUG9pbnQgPSBncmlkLmZpbmQoKGNlbGwpID0+IGNlbGwucG9zaXRpb24gPT09IHBvaW50KTtcbiAgICAgICAgaWYgKGdyaWRQb2ludCkge1xuICAgICAgICAgIGdyaWRQb2ludC5vY2N1cGllZCA9IHRydWU7XG4gICAgICAgICAgZ3JpZFBvaW50LnNoaXAgPSBuZXdTaGlwLm5hbWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICByZWNlaXZlQXR0YWNrKHBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBncmlkUG9pbnQgPSBncmlkLmZpbmQoKGNlbGwpID0+IGNlbGwucG9zaXRpb24gPT09IHBvc2l0aW9uKTtcbiAgICAgIGlmIChncmlkUG9pbnQub2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGdyaWRQb2ludC5zaGlwID09PSAnQ2FycmllcicpIHtcbiAgICAgICAgICBDYXJyaWVyLmhpdCgpO1xuICAgICAgICAgIGhpdFNob3RzLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgIG51bWJlck9mSGl0cyArPSAxO1xuICAgICAgICAgIHRoaXMuY2hlY2tFbmRHYW1lKG51bWJlck9mSGl0cyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ3JpZFBvaW50LnNoaXAgPT09ICdCYXR0bGVzaGlwJykge1xuICAgICAgICAgIEJhdHRsZXNoaXAuaGl0KCk7XG4gICAgICAgICAgaGl0U2hvdHMucHVzaChwb3NpdGlvbik7XG4gICAgICAgICAgbnVtYmVyT2ZIaXRzICs9IDE7XG4gICAgICAgICAgdGhpcy5jaGVja0VuZEdhbWUobnVtYmVyT2ZIaXRzKTtcbiAgICAgICAgfSBlbHNlIGlmIChncmlkUG9pbnQuc2hpcCA9PT0gJ0Rlc3Ryb3llcicpIHtcbiAgICAgICAgICBEZXN0cm95ZXIuaGl0KCk7XG4gICAgICAgICAgaGl0U2hvdHMucHVzaChwb3NpdGlvbik7XG4gICAgICAgICAgbnVtYmVyT2ZIaXRzICs9IDE7XG4gICAgICAgICAgdGhpcy5jaGVja0VuZEdhbWUobnVtYmVyT2ZIaXRzKTtcbiAgICAgICAgfSBlbHNlIGlmIChncmlkUG9pbnQuc2hpcCA9PT0gJ1N1Ym1hcmluZScpIHtcbiAgICAgICAgICBTdWJtYXJpbmUuaGl0KCk7XG4gICAgICAgICAgaGl0U2hvdHMucHVzaChwb3NpdGlvbik7XG4gICAgICAgICAgbnVtYmVyT2ZIaXRzICs9IDE7XG4gICAgICAgICAgdGhpcy5jaGVja0VuZEdhbWUobnVtYmVyT2ZIaXRzKTtcbiAgICAgICAgfSBlbHNlIGlmIChncmlkUG9pbnQuc2hpcCA9PT0gJ1BhdHJvbEJvYXQnKSB7XG4gICAgICAgICAgUGF0cm9sQm9hdC5oaXQoKTtcbiAgICAgICAgICBoaXRTaG90cy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgICBudW1iZXJPZkhpdHMgKz0gMTtcbiAgICAgICAgICB0aGlzLmNoZWNrRW5kR2FtZShudW1iZXJPZkhpdHMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtaXNzZWRTaG90cy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGdldFNoaXBJbmZvKHNoaXApIHtcbiAgICAgIGlmIChzaGlwID09PSAnQ2FycmllcicpIHtcbiAgICAgICAgcmV0dXJuIENhcnJpZXI7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcCA9PT0gJ0JhdHRsZXNoaXAnKSB7XG4gICAgICAgIHJldHVybiBCYXR0bGVzaGlwO1xuICAgICAgfVxuICAgICAgaWYgKHNoaXAgPT09ICdEZXN0cm95ZXInKSB7XG4gICAgICAgIHJldHVybiBEZXN0cm95ZXI7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcCA9PT0gJ1N1Ym1hcmluZScpIHtcbiAgICAgICAgcmV0dXJuIFN1Ym1hcmluZTtcbiAgICAgIH1cbiAgICAgIGlmIChzaGlwID09PSAnUGF0cm9sQm9hdCcpIHtcbiAgICAgICAgcmV0dXJuIFBhdHJvbEJvYXQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgZ2V0TWlzc2VkU2hvdHMoKSB7XG4gICAgICByZXR1cm4gbWlzc2VkU2hvdHM7XG4gICAgfSxcblxuICAgIGdldEhpdFNob3RzKCkge1xuICAgICAgcmV0dXJuIGhpdFNob3RzO1xuICAgIH0sXG5cbiAgICBnZXROdW1iZXJPZkhpdHMoKSB7XG4gICAgICByZXR1cm4gbnVtYmVyT2ZIaXRzO1xuICAgIH0sXG5cbiAgICBnZXRBbGxTaG90cygpIHtcbiAgICAgIHJldHVybiBtaXNzZWRTaG90cy5jb25jYXQoaGl0U2hvdHMpO1xuICAgIH0sXG5cbiAgICBjaGVja0VuZEdhbWUoaGl0cykge1xuICAgICAgcmV0dXJuIGhpdHMgPT09IDE3O1xuICAgIH0sXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaGlwKG5hbWUsIGxlbmd0aCwgaGl0cywgc3Vuaykge1xuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgbGVuZ3RoLFxuICAgIGhpdHMsXG4gICAgc3VuayxcblxuICAgIGhpdCgpIHtcbiAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIH0sXG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgZGlzcGxheUluZm8oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCR7dGhpcy5uYW1lfSBsZW5ndGg6JHt0aGlzLmxlbmd0aH0gaGl0czoke3RoaXMuaGl0c30gc3Vuazoke3RoaXMuc3Vua31gLFxuICAgICAgKTtcbiAgICB9LFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGxheWVyKCkge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVBvc2l0aW9uKGFycmF5KSB7XG4gICAgZm9yICg7Oykge1xuICAgICAgLy8gZm9yICg7OykgY3JlYXRlcyBhbiBpbmZpbml0ZSBsb29wXG4gICAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgNjU7IC8vIFJhbmRvbSBBU0NJSSBjb2RlIGZvciBBIHRvIEpcbiAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxOyAvLyBSYW5kb20gbnVtYmVyIGZyb20gMSB0byAxMFxuICAgICAgY29uc3QgcmVzdWx0ID0gU3RyaW5nLmZyb21DaGFyQ29kZShpKSArIGo7XG5cbiAgICAgIGlmICghYXJyYXkuaW5jbHVkZXMocmVzdWx0KSkge1xuICAgICAgICBhcnJheS5wdXNoKHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7IC8vIFJldHVybiB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gIHBsYXllckdhbWVib2FyZC5pbml0aWFsaXplKCk7XG4gIGNvbnN0IGNvbXBHYW1lYm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgY29tcEdhbWVib2FyZC5pbml0aWFsaXplKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXJBdHRhY2socG9zaXRpb24pIHtcbiAgICAgIGNvbXBHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XG4gICAgfSxcblxuICAgIGNvbXBBdHRhY2soKSB7XG4gICAgICBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgZ2VuZXJhdGVSYW5kb21Qb3NpdGlvbihwbGF5ZXJHYW1lYm9hcmQuZ2V0QWxsU2hvdHMoKSksXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBnZXRQbGF5ZXJHYW1lYm9hcmQoKSB7XG4gICAgICByZXR1cm4gcGxheWVyR2FtZWJvYXJkO1xuICAgIH0sXG5cbiAgICBnZXRDb21wR2FtZUJvYXJkKCkge1xuICAgICAgcmV0dXJuIGNvbXBHYW1lYm9hcmQ7XG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==