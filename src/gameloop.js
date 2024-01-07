import createPlayer from './player';
import modal from './modal';

export default function gameloop() {
  const player = createPlayer();
  const playerBoard = player.getPlayerGameboard();
  const compBoard = player.getCompGameBoard();

  // Modal prep
  const welcomeModal = modal();
  welcomeModal.initialize(playerBoard);
  welcomeModal.startPlaceSequence(playerBoard, 'Carrier', 5, 'x');
  welcomeModal.displayInfo('Carrier');

  // temp comp ships
  compBoard.placeShip('Carrier', ['A1', 'A2', 'A3', 'A4', 'A5']);
  compBoard.placeShip('Battleship', ['B1', 'B2', 'B3', 'B4']);
  compBoard.placeShip('Destroyer', ['C1', 'C2', 'C3']);
  compBoard.placeShip('Submarine', ['D1', 'D2', 'D3']);
  compBoard.placeShip('PatrolBoat', ['E1', 'E2']);

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
  };
}
