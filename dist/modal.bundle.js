/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modal)
/* harmony export */ });
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
      imageContainer.innerHTML = '';
      image.src = `../src/images/${ship}.png`;
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7O0FBRTdCO0FBQ0Esc0JBQXNCLGtCQUFrQjtBQUN4QztBQUNBLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMEJBQTBCLFNBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEMsaUJBQWlCLGlDQUFpQztBQUNsRCxpQkFBaUIsaUNBQWlDO0FBQ2xELGlCQUFpQixpQ0FBaUM7QUFDbEQsaUJBQWlCLGlDQUFpQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEMsaUJBQWlCLGlDQUFpQztBQUNsRCxpQkFBaUIsaUNBQWlDO0FBQ2xELGlCQUFpQixpQ0FBaUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDLGlCQUFpQixpQ0FBaUM7QUFDbEQsaUJBQWlCLGlDQUFpQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEMsaUJBQWlCLGlDQUFpQztBQUNsRCxpQkFBaUIsaUNBQWlDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQyxpQkFBaUIsaUNBQWlDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsS0FBSzs7QUFFMUM7QUFDQTtBQUNBLG1DQUFtQyxLQUFLO0FBQ3hDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbCgpIHtcbiAgY29uc3QgbXlNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG4gIGNvbnN0IG1vZGFsQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYm9hcmQnKTtcbiAgbGV0IERpciA9ICd4JztcbiAgbGV0IGN1cnJlbnRTaGlwID0gJ0NhcnJpZXInO1xuXG4gIHJldHVybiB7XG4gICAgaW5pdGlhbGl6ZShib2FyZCkge1xuICAgICAgbW9kYWxCb2FyZC5pbm5lckhUTUwgPSAnJztcbiAgICAgIC8vIFBsYWNlIGNlbGxzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmdldEdyaWQoKS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gYm9hcmQuZ2V0R3JpZCgpW2ldLnBvc2l0aW9uO1xuXG4gICAgICAgIG1vZGFsQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIGlmIChib2FyZC5nZXRHcmlkKClbaV0ub2NjdXBpZWQpIHtcbiAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnRQbGFjZVNlcXVlbmNlKGJvYXJkLCBzaGlwLCBsZW4sIGRpciwgZ2FtZSkge1xuICAgICAgLy8gbGlzdGVuIGZvciBhbmQgdXBkYXRlIGFueSBkaXJlY3Rpb24gY2hhbmdlc1xuICAgICAgY29uc3QgZGlyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpci1idG4nKTtcbiAgICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgRGlyID0gRGlyID09PSAneCcgPyAneScgOiAneCc7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZShib2FyZCk7XG5cbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aHMgPSB7XG4gICAgICAgICAgQ2FycmllcjogNSxcbiAgICAgICAgICBCYXR0bGVzaGlwOiA0LFxuICAgICAgICAgIERlc3Ryb3llcjogMyxcbiAgICAgICAgICBTdWJtYXJpbmU6IDMsXG4gICAgICAgICAgUGF0cm9sQm9hdDogMixcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0YXJ0UGxhY2VTZXF1ZW5jZShcbiAgICAgICAgICBib2FyZCxcbiAgICAgICAgICBjdXJyZW50U2hpcCxcbiAgICAgICAgICBzaGlwTGVuZ3Roc1tjdXJyZW50U2hpcF0sXG4gICAgICAgICAgRGlyLFxuICAgICAgICAgIGdhbWUsXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBkaXJCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgfTtcbiAgICAgIGRpckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG5cbiAgICAgIC8vIFBsYWNlbWVudFxuICAgICAgY29uc3QgZ3JpZCA9IGJvYXJkLmdldEdyaWQoKTtcbiAgICAgIGNvbnN0IGNlbGxzID0gbW9kYWxCb2FyZC5jaGlsZHJlbjtcbiAgICAgIGxldCBkaXJPZmZTZXQ7IC8vIEFkanVzdG1lbnRzIGZvciBwbGFjZW1lbnQgZGlyZWN0aW9uXG4gICAgICBpZiAoZGlyID09PSAneCcpIHtcbiAgICAgICAgZGlyT2ZmU2V0ID0gMTtcbiAgICAgIH0gZWxzZSBkaXJPZmZTZXQgPSAxMDsgLy8gKjEwIGZvciB5LWF4aXMgcGxhY2VtZW50XG5cbiAgICAgIC8vIEFkZCB2aXN1YWwgbGlzdGVuZXJzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaiArPSAxKSB7XG4gICAgICAgICAgICBpZiAoY2VsbHNbaSArIGpdKSB7XG4gICAgICAgICAgICAgIGNlbGxzW2kgKyBqICogZGlyT2ZmU2V0XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGogKz0gMSkge1xuICAgICAgICAgICAgaWYgKGNlbGxzW2kgKyBqICogZGlyT2ZmU2V0XSAmJiAhZ3JpZFtpICsgaiAqIGRpck9mZlNldF0ub2NjdXBpZWQpIHtcbiAgICAgICAgICAgICAgY2VsbHNbaSArIGogKiBkaXJPZmZTZXRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIHBsYWNlbWVudCBsaXN0ZW5lcnNcbiAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIG9jY3VwYXRpb25cbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaiArPSAxKSB7XG4gICAgICAgICAgICBpZiAoIWNlbGxzW2kgKyBqICogZGlyT2ZmU2V0XSB8fCBncmlkW2kgKyBqICogZGlyT2ZmU2V0XS5vY2N1cGllZCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2FycmllclxuICAgICAgICAgIGlmIChzaGlwID09PSAnQ2FycmllcicpIHtcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCgnQ2FycmllcicsIFtcbiAgICAgICAgICAgICAgYCR7Z3JpZFtpXS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgICBgJHtncmlkW2kgKyAxICogZGlyT2ZmU2V0XS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgICBgJHtncmlkW2kgKyAyICogZGlyT2ZmU2V0XS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgICBgJHtncmlkW2kgKyAzICogZGlyT2ZmU2V0XS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgICBgJHtncmlkW2kgKyA0ICogZGlyT2ZmU2V0XS5wb3NpdGlvbn1gLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgYm9hcmRcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoYm9hcmQpO1xuICAgICAgICAgICAgICB0aGlzLnN0YXJ0UGxhY2VTZXF1ZW5jZShib2FyZCwgJ0JhdHRsZXNoaXAnLCA0LCBkaXIsIGdhbWUpO1xuICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlJbmZvKCdCYXR0bGVzaGlwJyk7XG4gICAgICAgICAgICAgIHRoaXMubmV4dFNoaXAoKTtcbiAgICAgICAgICAgICAgZGlyQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQmF0dGxlc2hpcFxuICAgICAgICAgIGVsc2UgaWYgKHNoaXAgPT09ICdCYXR0bGVzaGlwJykge1xuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKCdCYXR0bGVzaGlwJywgW1xuICAgICAgICAgICAgICBgJHtncmlkW2ldLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICAgIGAke2dyaWRbaSArIDEgKiBkaXJPZmZTZXRdLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICAgIGAke2dyaWRbaSArIDIgKiBkaXJPZmZTZXRdLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICAgIGAke2dyaWRbaSArIDMgKiBkaXJPZmZTZXRdLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBib2FyZFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZShib2FyZCk7XG4gICAgICAgICAgICAgIHRoaXMuc3RhcnRQbGFjZVNlcXVlbmNlKGJvYXJkLCAnRGVzdHJveWVyJywgMywgZGlyLCBnYW1lKTtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5SW5mbygnRGVzdHJveWVyJyk7XG4gICAgICAgICAgICAgIHRoaXMubmV4dFNoaXAoKTtcbiAgICAgICAgICAgICAgZGlyQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVzdHJveWVyXG4gICAgICAgICAgZWxzZSBpZiAoc2hpcCA9PT0gJ0Rlc3Ryb3llcicpIHtcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCgnRGVzdHJveWVyJywgW1xuICAgICAgICAgICAgICBgJHtncmlkW2ldLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICAgIGAke2dyaWRbaSArIDEgKiBkaXJPZmZTZXRdLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICAgIGAke2dyaWRbaSArIDIgKiBkaXJPZmZTZXRdLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBib2FyZFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZShib2FyZCk7XG4gICAgICAgICAgICAgIHRoaXMuc3RhcnRQbGFjZVNlcXVlbmNlKGJvYXJkLCAnU3VibWFyaW5lJywgMywgZGlyLCBnYW1lKTtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5SW5mbygnU3VibWFyaW5lJyk7XG4gICAgICAgICAgICAgIHRoaXMubmV4dFNoaXAoKTtcbiAgICAgICAgICAgICAgZGlyQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU3VibWFyaW5lXG4gICAgICAgICAgZWxzZSBpZiAoc2hpcCA9PT0gJ1N1Ym1hcmluZScpIHtcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcCgnU3VibWFyaW5lJywgW1xuICAgICAgICAgICAgICBgJHtncmlkW2ldLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICAgIGAke2dyaWRbaSArIDEgKiBkaXJPZmZTZXRdLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICAgIGAke2dyaWRbaSArIDIgKiBkaXJPZmZTZXRdLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBib2FyZFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZShib2FyZCk7XG4gICAgICAgICAgICAgIHRoaXMuc3RhcnRQbGFjZVNlcXVlbmNlKGJvYXJkLCAnUGF0cm9sQm9hdCcsIDIsIGRpciwgZ2FtZSk7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGxheUluZm8oJ1BhdHJvbEJvYXQnKTtcbiAgICAgICAgICAgICAgdGhpcy5uZXh0U2hpcCgpO1xuICAgICAgICAgICAgICBkaXJCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBQYXRyb2wgQm9hdFxuICAgICAgICAgIGVsc2UgaWYgKHNoaXAgPT09ICdQYXRyb2xCb2F0Jykge1xuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKCdQYXRyb2xCb2F0JywgW1xuICAgICAgICAgICAgICBgJHtncmlkW2ldLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICAgIGAke2dyaWRbaSArIDEgKiBkaXJPZmZTZXRdLnBvc2l0aW9ufWAsXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBib2FyZFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZShib2FyZCk7XG4gICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICBnYW1lLnVwZGF0ZUJvYXJkKCk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEZsYXNoIGZvciBjb25maXJtYXRpb25cbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGxlbjsgayArPSAxKSB7XG4gICAgICAgICAgICBjZWxsc1tpICsgayAqIGRpck9mZlNldF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigwLCAxNzAsIDApJztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjZWxsc1tpICsgayAqIGRpck9mZlNldF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGlzcGxheUluZm8oc2hpcCkge1xuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLW5hbWUnKTtcbiAgICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtaW1hZ2UnKTtcbiAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgIC8vIENoYW5nZSBzaGlwIG5hbWVcbiAgICAgIG5hbWUuaW5uZXJUZXh0ID0gYFBsYWNlIFlvdXIgJHtzaGlwfS4uLmA7XG5cbiAgICAgIC8vIENoYW5nZSBzaGlwIGltYWdlXG4gICAgICBpbWFnZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgIGltYWdlLnNyYyA9IGAuLi9zcmMvaW1hZ2VzLyR7c2hpcH0ucG5nYDtcbiAgICAgIGltYWdlLnN0eWxlLndpZHRoID0gJzMwMHB4JztcbiAgICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICB9LFxuXG4gICAgbmV4dFNoaXAoKSB7XG4gICAgICBpZihjdXJyZW50U2hpcCA9PT0gJ0NhcnJpZXInKSB7XG4gICAgICAgIGN1cnJlbnRTaGlwID0gJ0JhdHRsZXNoaXAnO1xuICAgICAgfWVsc2UgaWYoY3VycmVudFNoaXAgPT09ICdCYXR0bGVzaGlwJykge1xuICAgICAgICBjdXJyZW50U2hpcCA9ICdEZXN0cm95ZXInO1xuICAgICAgfWVsc2UgaWYoY3VycmVudFNoaXAgPT09ICdEZXN0cm95ZXInKSB7XG4gICAgICAgIGN1cnJlbnRTaGlwID0gJ1N1Ym1hcmluZSc7XG4gICAgICB9ZWxzZSBpZihjdXJyZW50U2hpcCA9PT0gJ1N1Ym1hcmluZScpIHtcbiAgICAgICAgY3VycmVudFNoaXAgPSAnUGF0cm9sQm9hdCc7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICBteU1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9