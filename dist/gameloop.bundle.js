/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1vdmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWxvb3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZU92ZXIob3V0Y29tZSkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtb3Zlci1tb2RhbCcpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1vdmVyLXRleHQnKTtcbiAgICBjb25zdCByZXRyeUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXRyeS1idG4nKTtcblxuICAgIC8vIERpc3BsYXkgTW9kYWxcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuXG4gICAgLy8gRGlzcGxheSBPdXRjb21lXG4gICAgaWYgKG91dGNvbWUgPT09ICd3aW4nKSB7XG4gICAgICAgIHRleHQuaW5uZXJUZXh0ID0gJ1lvdSBXaW4hJztcbiAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0LmlubmVyVGV4dCA9ICdZb3UgTG9zZSEnXG4gICAgfVxuXG4gICAgLy8gUmV0cnkgQnV0dG9uIHJlYWN0aXZpdHlcbiAgICByZXRyeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICByZXRyeUJ0bi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgfSlcbiAgICByZXRyeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICByZXRyeUJ0bi5zdHlsZS5jb2xvciA9ICdncmF5JztcbiAgICB9KVxuXG4gICAgLy8gUmVzdGFydFxuICAgIHJldHJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBSZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG59IiwiaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSAnLi9zaGlwcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVib2FyZCgpIHtcbiAgLy8gQm9hcmRcbiAgY29uc3QgY29sdW1ucyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICBsZXQgZ3JpZCA9IFtdO1xuICBsZXQgbnVtYmVyT2ZIaXRzID0gMDtcbiAgY29uc3QgaGl0U2hvdHMgPSBbXTtcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXTtcblxuICAvLyBTaGlwc1xuICBsZXQgQ2FycmllcjtcbiAgbGV0IEJhdHRsZXNoaXA7XG4gIGxldCBEZXN0cm95ZXI7XG4gIGxldCBTdWJtYXJpbmU7XG4gIGxldCBQYXRyb2xCb2F0O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIGdyaWQgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaiArPSAxKSB7XG4gICAgICAgICAgZ3JpZC5wdXNoKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBjb2x1bW5zW2ldICsgaixcbiAgICAgICAgICAgIG9jY3VwaWVkOiBmYWxzZSxcbiAgICAgICAgICAgIHNoaXA6IG51bGwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0R3JpZCgpIHtcbiAgICAgIHJldHVybiBncmlkO1xuICAgIH0sXG5cbiAgICBwbGFjZVNoaXAoc2hpcCwgcG9zaXRpb24pIHtcbiAgICAgIGxldCBjYXJyaWVyQ291bnQgPSAwO1xuICAgICAgbGV0IEJhdHRsZXNoaXBDb3VudCA9IDA7XG4gICAgICBsZXQgRGVzdHJveWVyQ291bnQgPSAwO1xuICAgICAgbGV0IFN1Ym1hcmluZUNvdW50ID0gMDtcbiAgICAgIGxldCBQYXRyb2xCb2F0Q291bnQgPSAwO1xuXG4gICAgICAvLyBDaGVjayB0aGF0IHRoZSBwb2ludHMgYXJlIHVub2NjdXBpZWRcbiAgICAgIHBvc2l0aW9uLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWRQb2ludCA9IGdyaWQuZmluZCgoY2VsbCkgPT4gY2VsbC5wb3NpdGlvbiA9PT0gcG9pbnQpO1xuICAgICAgICBpZiAoZ3JpZFBvaW50ICYmIGdyaWRQb2ludC5vY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLXJldHVyblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgc2hpcFxuICAgICAgbGV0IG5ld1NoaXA7XG4gICAgICBpZiAoc2hpcCA9PT0gJ0NhcnJpZXInICYmIGNhcnJpZXJDb3VudCA8IDEpIHtcbiAgICAgICAgQ2FycmllciA9IGNyZWF0ZVNoaXAoJ0NhcnJpZXInLCA1LCAwLCBmYWxzZSk7XG4gICAgICAgIG5ld1NoaXAgPSBDYXJyaWVyO1xuICAgICAgICBjYXJyaWVyQ291bnQgKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcCA9PT0gJ0JhdHRsZXNoaXAnICYmIEJhdHRsZXNoaXBDb3VudCA8IDEpIHtcbiAgICAgICAgQmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoJ0JhdHRsZXNoaXAnLCA0LCAwLCBmYWxzZSk7XG4gICAgICAgIG5ld1NoaXAgPSBCYXR0bGVzaGlwO1xuICAgICAgICBCYXR0bGVzaGlwQ291bnQgKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcCA9PT0gJ0Rlc3Ryb3llcicgJiYgRGVzdHJveWVyQ291bnQgPCAxKSB7XG4gICAgICAgIERlc3Ryb3llciA9IGNyZWF0ZVNoaXAoJ0Rlc3Ryb3llcicsIDMsIDAsIGZhbHNlKTtcbiAgICAgICAgbmV3U2hpcCA9IERlc3Ryb3llcjtcbiAgICAgICAgRGVzdHJveWVyQ291bnQgKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcCA9PT0gJ1N1Ym1hcmluZScgJiYgU3VibWFyaW5lQ291bnQgPCAxKSB7XG4gICAgICAgIFN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoJ1N1Ym1hcmluZScsIDMsIDAsIGZhbHNlKTtcbiAgICAgICAgbmV3U2hpcCA9IFN1Ym1hcmluZTtcbiAgICAgICAgU3VibWFyaW5lQ291bnQgKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcCA9PT0gJ1BhdHJvbEJvYXQnICYmIFBhdHJvbEJvYXRDb3VudCA8IDEpIHtcbiAgICAgICAgUGF0cm9sQm9hdCA9IGNyZWF0ZVNoaXAoJ1BhdHJvbEJvYXQnLCAyLCAwLCBmYWxzZSk7XG4gICAgICAgIG5ld1NoaXAgPSBQYXRyb2xCb2F0O1xuICAgICAgICBQYXRyb2xCb2F0Q291bnQgKz0gMTtcbiAgICAgIH0gZWxzZSByZXR1cm47XG5cbiAgICAgIC8vIEFkZCB0aGUgc2hpcFxuICAgICAgcG9zaXRpb24uZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZFBvaW50ID0gZ3JpZC5maW5kKChjZWxsKSA9PiBjZWxsLnBvc2l0aW9uID09PSBwb2ludCk7XG4gICAgICAgIGlmIChncmlkUG9pbnQpIHtcbiAgICAgICAgICBncmlkUG9pbnQub2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICAgIGdyaWRQb2ludC5zaGlwID0gbmV3U2hpcC5uYW1lO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gICAgcmVjZWl2ZUF0dGFjayhwb3NpdGlvbikge1xuICAgICAgY29uc3QgZ3JpZFBvaW50ID0gZ3JpZC5maW5kKChjZWxsKSA9PiBjZWxsLnBvc2l0aW9uID09PSBwb3NpdGlvbik7XG4gICAgICBpZiAoZ3JpZFBvaW50Lm9jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChncmlkUG9pbnQuc2hpcCA9PT0gJ0NhcnJpZXInKSB7XG4gICAgICAgICAgQ2Fycmllci5oaXQoKTtcbiAgICAgICAgICBoaXRTaG90cy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgICBudW1iZXJPZkhpdHMgKz0gMTtcbiAgICAgICAgICB0aGlzLmNoZWNrRW5kR2FtZShudW1iZXJPZkhpdHMpO1xuICAgICAgICB9IGVsc2UgaWYgKGdyaWRQb2ludC5zaGlwID09PSAnQmF0dGxlc2hpcCcpIHtcbiAgICAgICAgICBCYXR0bGVzaGlwLmhpdCgpO1xuICAgICAgICAgIGhpdFNob3RzLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgIG51bWJlck9mSGl0cyArPSAxO1xuICAgICAgICAgIHRoaXMuY2hlY2tFbmRHYW1lKG51bWJlck9mSGl0cyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ3JpZFBvaW50LnNoaXAgPT09ICdEZXN0cm95ZXInKSB7XG4gICAgICAgICAgRGVzdHJveWVyLmhpdCgpO1xuICAgICAgICAgIGhpdFNob3RzLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgIG51bWJlck9mSGl0cyArPSAxO1xuICAgICAgICAgIHRoaXMuY2hlY2tFbmRHYW1lKG51bWJlck9mSGl0cyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ3JpZFBvaW50LnNoaXAgPT09ICdTdWJtYXJpbmUnKSB7XG4gICAgICAgICAgU3VibWFyaW5lLmhpdCgpO1xuICAgICAgICAgIGhpdFNob3RzLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgIG51bWJlck9mSGl0cyArPSAxO1xuICAgICAgICAgIHRoaXMuY2hlY2tFbmRHYW1lKG51bWJlck9mSGl0cyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ3JpZFBvaW50LnNoaXAgPT09ICdQYXRyb2xCb2F0Jykge1xuICAgICAgICAgIFBhdHJvbEJvYXQuaGl0KCk7XG4gICAgICAgICAgaGl0U2hvdHMucHVzaChwb3NpdGlvbik7XG4gICAgICAgICAgbnVtYmVyT2ZIaXRzICs9IDE7XG4gICAgICAgICAgdGhpcy5jaGVja0VuZEdhbWUobnVtYmVyT2ZIaXRzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWlzc2VkU2hvdHMucHVzaChwb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRTaGlwSW5mbyhzaGlwKSB7XG4gICAgICBpZiAoc2hpcCA9PT0gJ0NhcnJpZXInKSB7XG4gICAgICAgIHJldHVybiBDYXJyaWVyO1xuICAgICAgfVxuICAgICAgaWYgKHNoaXAgPT09ICdCYXR0bGVzaGlwJykge1xuICAgICAgICByZXR1cm4gQmF0dGxlc2hpcDtcbiAgICAgIH1cbiAgICAgIGlmIChzaGlwID09PSAnRGVzdHJveWVyJykge1xuICAgICAgICByZXR1cm4gRGVzdHJveWVyO1xuICAgICAgfVxuICAgICAgaWYgKHNoaXAgPT09ICdTdWJtYXJpbmUnKSB7XG4gICAgICAgIHJldHVybiBTdWJtYXJpbmU7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcCA9PT0gJ1BhdHJvbEJvYXQnKSB7XG4gICAgICAgIHJldHVybiBQYXRyb2xCb2F0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIGdldE1pc3NlZFNob3RzKCkge1xuICAgICAgcmV0dXJuIG1pc3NlZFNob3RzO1xuICAgIH0sXG5cbiAgICBnZXRIaXRTaG90cygpIHtcbiAgICAgIHJldHVybiBoaXRTaG90cztcbiAgICB9LFxuXG4gICAgZ2V0TnVtYmVyT2ZIaXRzKCkge1xuICAgICAgcmV0dXJuIG51bWJlck9mSGl0cztcbiAgICB9LFxuXG4gICAgZ2V0QWxsU2hvdHMoKSB7XG4gICAgICByZXR1cm4gbWlzc2VkU2hvdHMuY29uY2F0KGhpdFNob3RzKTtcbiAgICB9LFxuXG4gICAgY2hlY2tFbmRHYW1lKGhpdHMpIHtcbiAgICAgIHJldHVybiBoaXRzID09PSAxNztcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBsYXllcigpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21Qb3NpdGlvbihhcnJheSkge1xuICAgIGZvciAoOzspIHtcbiAgICAgIC8vIGZvciAoOzspIGNyZWF0ZXMgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDY1OyAvLyBSYW5kb20gQVNDSUkgY29kZSBmb3IgQSB0byBKXG4gICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTsgLy8gUmFuZG9tIG51bWJlciBmcm9tIDEgdG8gMTBcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSkgKyBqO1xuXG4gICAgICBpZiAoIWFycmF5LmluY2x1ZGVzKHJlc3VsdCkpIHtcbiAgICAgICAgYXJyYXkucHVzaChyZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0OyAvLyBSZXR1cm4gdGhlIGdlbmVyYXRlZCBwb3NpdGlvblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGdhbWVib2FyZCgpO1xuICBwbGF5ZXJHYW1lYm9hcmQuaW5pdGlhbGl6ZSgpO1xuICBjb25zdCBjb21wR2FtZWJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gIGNvbXBHYW1lYm9hcmQuaW5pdGlhbGl6ZSgpO1xuXG4gIHJldHVybiB7XG4gICAgcGxheWVyQXR0YWNrKHBvc2l0aW9uKSB7XG4gICAgICBjb21wR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socG9zaXRpb24pO1xuICAgIH0sXG5cbiAgICBjb21wQXR0YWNrKCkge1xuICAgICAgcGxheWVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soXG4gICAgICAgIGdlbmVyYXRlUmFuZG9tUG9zaXRpb24ocGxheWVyR2FtZWJvYXJkLmdldEFsbFNob3RzKCkpLFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgZ2V0UGxheWVyR2FtZWJvYXJkKCkge1xuICAgICAgcmV0dXJuIHBsYXllckdhbWVib2FyZDtcbiAgICB9LFxuXG4gICAgZ2V0Q29tcEdhbWVCb2FyZCgpIHtcbiAgICAgIHJldHVybiBjb21wR2FtZWJvYXJkO1xuICAgIH0sXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaGlwKG5hbWUsIGxlbmd0aCwgaGl0cywgc3Vuaykge1xuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgbGVuZ3RoLFxuICAgIGhpdHMsXG4gICAgc3VuayxcblxuICAgIGhpdCgpIHtcbiAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIH0sXG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgZGlzcGxheUluZm8oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCR7dGhpcy5uYW1lfSBsZW5ndGg6JHt0aGlzLmxlbmd0aH0gaGl0czoke3RoaXMuaGl0c30gc3Vuazoke3RoaXMuc3Vua31gLFxuICAgICAgKTtcbiAgICB9LFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBnYW1lT3ZlciBmcm9tICcuL2dhbWUtb3Zlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVsb29wKCkge1xuICBjb25zdCBwbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoKTtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBwbGF5ZXIuZ2V0UGxheWVyR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGNvbXBCb2FyZCA9IHBsYXllci5nZXRDb21wR2FtZUJvYXJkKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXIsXG4gICAgcGxheWVyQm9hcmQsXG4gICAgY29tcEJvYXJkLFxuXG4gICAgdXBkYXRlQm9hcmQoKSB7XG4gICAgICBjb25zdCBwbGF5ZXJEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuICAgICAgcGxheWVyRGlzcGxheS5pbm5lckhUTUwgPSAnJztcblxuICAgICAgY29uc3QgY29tcERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcC1ib2FyZCcpO1xuICAgICAgY29tcERpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgIC8vIFBsYXllciBib2FyZFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJCb2FyZC5nZXRHcmlkKCkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgaWYgKHBsYXllckJvYXJkLmdldEdyaWQoKVtpXS5vY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGF5ZXJCb2FyZC5nZXRIaXRTaG90cygpLmluY2x1ZGVzKHBsYXllckJvYXJkLmdldEdyaWQoKVtpXS5wb3NpdGlvbilcbiAgICAgICAgKSB7XG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGF5ZXJCb2FyZFxuICAgICAgICAgICAgLmdldE1pc3NlZFNob3RzKClcbiAgICAgICAgICAgIC5pbmNsdWRlcyhwbGF5ZXJCb2FyZC5nZXRHcmlkKClbaV0ucG9zaXRpb24pXG4gICAgICAgICkge1xuICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDE1NSwgMTU1LCAxNTUsIDAuNSknO1xuICAgICAgICB9XG5cbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IHBsYXllckJvYXJkLmdldEdyaWQoKVtpXS5wb3NpdGlvbjtcblxuICAgICAgICBwbGF5ZXJEaXNwbGF5LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb21wdXRlciBCb2FyZFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wQm9hcmQuZ2V0R3JpZCgpLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgcGxheWVyLnBsYXllckF0dGFjayhjb21wQm9hcmQuZ2V0R3JpZCgpW2ldLnBvc2l0aW9uKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUJvYXJkKCk7XG4gICAgICAgICAgaWYgKHBsYXllckJvYXJkLmNoZWNrRW5kR2FtZShjb21wQm9hcmQuZ2V0TnVtYmVyT2ZIaXRzKCkpKSB7XG4gICAgICAgICAgICBnYW1lT3Zlcignd2luJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcGxheWVyLmNvbXBBdHRhY2soKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQm9hcmQoKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZC5jaGVja0VuZEdhbWUocGxheWVyQm9hcmQuZ2V0TnVtYmVyT2ZIaXRzKCkpKSB7XG4gICAgICAgICAgICAgIGdhbWVPdmVyKCdsb3NlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgODAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvbXBCb2FyZC5nZXRIaXRTaG90cygpLmluY2x1ZGVzKGNvbXBCb2FyZC5nZXRHcmlkKClbaV0ucG9zaXRpb24pKSB7XG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb21wQm9hcmQuZ2V0TWlzc2VkU2hvdHMoKS5pbmNsdWRlcyhjb21wQm9hcmQuZ2V0R3JpZCgpW2ldLnBvc2l0aW9uKVxuICAgICAgICApIHtcbiAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgxNTUsIDE1NSwgMTU1LCAwLjUpJztcbiAgICAgICAgfVxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gY29tcEJvYXJkLmdldEdyaWQoKVtpXS5wb3NpdGlvbjtcblxuICAgICAgICBjb21wRGlzcGxheS5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcGxhY2VFbmVteVNoaXAobmFtZSwgbGVuLCBnYW1lKSB7XG4gICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpOyAvLyBHZXQgcmFuZG9tIHZhbHVlIHRvIGRlY2lkZSB4LWF4aXMgb3IgeS1heGlzXG4gICAgICBjb25zdCBncmlkID0gZ2FtZS5jb21wQm9hcmQuZ2V0R3JpZCgpO1xuICAgICAgY29uc3Qgc2hpcFBvc2l0aW9ucyA9IFtdO1xuICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcblxuICAgICAgaWYgKHJhbmRvbU51bSA9PT0gMCkge1xuICAgICAgICAvLyB4LWF4aXNcbiAgICAgICAgY29uc3QgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsZW4gKyAxKSk7XG4gICAgICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGNvbnN0IHJhbmRvbUxldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUocmFuZG9tWSArIDY1KTtcblxuICAgICAgICAvLyBDaGVjayBmb3Igb2NjdXBhdGlvblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgLyogY29uc29sZS5sb2coZ3JpZFsocmFuZG9tWSAqIDEwKSArIChyYW5kb21YICsgaSldLnBvc2l0aW9uKSAqL1xuICAgICAgICAgIGlmIChncmlkW3JhbmRvbVkgKiAxMCArIChyYW5kb21YICsgaSldLm9jY3VwaWVkKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gUGxhY2UgaWYgdmFsaWRcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICBzaGlwUG9zaXRpb25zLnB1c2goYCR7cmFuZG9tTGV0dGVyICsgKHJhbmRvbVggKyBpICsgMSl9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJlcGVhdCBwcm9jZXNzIGlmIGludmFsaWRcbiAgICAgICAgICB0aGlzLnBsYWNlRW5lbXlTaGlwKG5hbWUsIGxlbiwgZ2FtZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmFuZG9tTnVtID09PSAxKSB7XG4gICAgICAgIC8vIHktYXhpc1xuICAgICAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxlbiArIDEpKTtcbiAgICAgICAgY29uc3QgcmFuZG9tTGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShyYW5kb21ZICsgNjUpO1xuXG4gICAgICAgIC8vIENoZWNrIGZvciBvY2N1cGF0aW9uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAvKiBjb25zb2xlLmxvZyhncmlkWygocmFuZG9tWSArIGkpICogMTApICsgcmFuZG9tWF0ucG9zaXRpb24pICovXG4gICAgICAgICAgaWYgKGdyaWRbKHJhbmRvbVkgKyBpKSAqIDEwICsgcmFuZG9tWF0ub2NjdXBpZWQpIHtcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWQgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBQbGFjZSBpZiB2YWxpZFxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZXR0ZXJBc2NpaSA9IHJhbmRvbUxldHRlci5jaGFyQ29kZUF0KDApICsgaTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGN1cnJlbnRMZXR0ZXJBc2NpaSk7XG4gICAgICAgICAgICBzaGlwUG9zaXRpb25zLnB1c2goYCR7Y3VycmVudExldHRlcn0ke3JhbmRvbVggKyAxfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBSZXBlYXQgcHJvY2VzcyBpZiBpbnZhbGlkXG4gICAgICAgICAgdGhpcy5wbGFjZUVuZW15U2hpcChuYW1lLCBsZW4sIGdhbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFBsYWNlbWVudFxuICAgICAgLyogY29uc29sZS5sb2coc2hpcFBvc2l0aW9ucyk7ICovXG4gICAgICBnYW1lLmNvbXBCb2FyZC5wbGFjZVNoaXAobmFtZSwgc2hpcFBvc2l0aW9ucyk7XG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==