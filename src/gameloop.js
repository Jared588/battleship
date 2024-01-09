import createPlayer from './player';

export default function gameloop() {
  const player = createPlayer();
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
          cell.style.background = 'orange';
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
            alert('Player Wins!');
            return;
          }
          setTimeout(() => {
            player.compAttack();
            this.updateBoard();
            if (playerBoard.checkEndGame(playerBoard.getNumberOfHits())) {
              alert('Computer Wins!');
            }
          }, 800);
        });

        if (compBoard.getHitShots().includes(compBoard.getGrid()[i].position)) {
          cell.style.backgroundColor = 'red';
        }

        if (
          compBoard.getMissedShots().includes(compBoard.getGrid()[i].position)
        ) {
          cell.style.background = 'orange';
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
