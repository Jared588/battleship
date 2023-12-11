export default function modal() {
  const modal = document.getElementById('myModal');
  const modalBoard = document.getElementById('modal-board');

  return {
    initialize(board) {
      // Place cells
      for (let i = 0; i < board.getGrid().length; i += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = board.getGrid()[i].position;

        modalBoard.appendChild(cell);
      }
    },

    startPlacement(board) {
      const grid = board.getGrid();
      // Add listeners for placement
      const cells = modalBoard.children;
      for (let i = 0; i < cells.length; i += 1) {
        cells[i].addEventListener('mouseover', () => {
          for (let j = 0; j < 5; j += 1) {
            if (cells[i + j]) {
              cells[i + j].style.backgroundColor = 'green';
            }
          }
        });
        cells[i].addEventListener('mouseleave', () => {
          for (let j = 0; j < 5; j += 1) {
            if (cells[i + j] && !grid[i + j].occupied) {
              cells[i + j].style.backgroundColor = '';
            }
          }
        });
        cells[i].addEventListener('click', () => {
          // Check for occupation
          for (let j = 0; j < 5; j += 1) {
            if (!cells[i + j] || grid[i + j].occupied) {
              return;
            }
          }

          // Place ship
          for (let k = 0; k < 5; k += 1) {
            board.placeShip('Carrier', [
              `${grid[i].position}`,
              `${grid[i + 1].position}`,
              `${grid[i + 2].position}`,
              `${grid[i + 3].position}`,
              `${grid[i + 4].position}`,
            ]);

            // Flash for confirmation
            cells[i + k].style.backgroundColor = 'rgb(0, 170, 0)';
            setTimeout(() => {
              cells[i + k].style.backgroundColor = 'green';
            }, 200);
          }
        });
      }
    },
  };
}
