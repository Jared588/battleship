export default function modal() {
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
      dir = Dir;
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
