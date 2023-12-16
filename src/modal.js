export default function modal() {
  const modal = document.getElementById('myModal');
  const modalBoard = document.getElementById('modal-board');

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

    startPlaceSequence(board, ship, len, dir) {
      const grid = board.getGrid();
      const cells = modalBoard.children;

      // Add visual listeners
      for (let i = 0; i < cells.length; i += 1) {
        cells[i].addEventListener('mouseover', () => {
          for (let j = 0; j < len; j += 1) {
            if (cells[i + j]) {
              cells[i + j].style.backgroundColor = 'green';
            }
          }
        });
        cells[i].addEventListener('mouseleave', () => {
          for (let j = 0; j < len; j += 1) {
            if (cells[i + j] && !grid[i + j].occupied) {
              cells[i + j].style.backgroundColor = '';
            }
          }
        });

        // Add placement listeners
        cells[i].addEventListener('click', () => {
          // Check for occupation
          for (let j = 0; j < len; j += 1) {
            if (!cells[i + j] || grid[i + j].occupied) {
              return;
            }
          }

          // Carrier
          if (ship === 'Carrier') {
            board.placeShip('Carrier', [
              `${grid[i].position}`,
              `${grid[i + 1].position}`,
              `${grid[i + 2].position}`,
              `${grid[i + 3].position}`,
              `${grid[i + 4].position}`,
            ]);
            // Update board
            setTimeout(() => {
              this.initialize(board);
              this.startPlaceSequence(board, 'Battleship', 4, 'x');
              this.displayInfo('Battleship');
            }, 100);
          }

          // Battleship
          else if (ship === 'Battleship') {
            board.placeShip('Battleship', [
              `${grid[i].position}`,
              `${grid[i + 1].position}`,
              `${grid[i + 2].position}`,
              `${grid[i + 3].position}`,
            ]);
            // Update board
            setTimeout(() => {
              this.initialize(board);
              this.startPlaceSequence(board, 'Destroyer', 3, 'x');
              this.displayInfo('Destroyer');
            }, 100);
          }

          // Destroyer
          else if (ship === 'Destroyer') {
            board.placeShip('Destroyer', [
              `${grid[i].position}`,
              `${grid[i + 1].position}`,
              `${grid[i + 2].position}`,
            ]);
            // Update board
            setTimeout(() => {
              this.initialize(board);
              this.startPlaceSequence(board, 'Submarine', 3, 'x');
              this.displayInfo('Submarine');
            }, 100);
          }

          // Submarine
          else if (ship === 'Submarine') {
            board.placeShip('Submarine', [
              `${grid[i].position}`,
              `${grid[i + 1].position}`,
              `${grid[i + 2].position}`,
            ]);
            // Update board
            setTimeout(() => {
              this.initialize(board);
              this.startPlaceSequence(board, 'Patrol Boat', 2, 'x');
              this.displayInfo('PatrolBoat');
            }, 100);
          }

          // Patrol Boat
          else if (ship === 'Patrol Boat') {
            board.placeShip('Patrol Boat', [
              `${grid[i].position}`,
              `${grid[i + 1].position}`,
            ]);
            // Update board
            setTimeout(() => {
              this.initialize(board);
            }, 100);
          }

          // Flash for confirmation
          for (let k = 0; k < len; k += 1) {
            cells[i + k].style.backgroundColor = 'rgb(0, 170, 0)';
            setTimeout(() => {
              cells[i + k].style.backgroundColor = 'green';
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
        name.innerText = (`Place Your ${ship}...`);

        // Change ship image
        imageContainer.innerHTML = '';
        image.src = `../src/images/${ship}.png`;
        image.classList.add('ship-icon')
        // Submarine png was wayyy too big. This will re-size it more proptionally
        if(ship === 'Submarine') {
          image.style.width = '300px'
        }
        imageContainer.appendChild(image);
    }
  };
}
