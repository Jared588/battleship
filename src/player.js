import gameboard from './gameboard';

export default function createPlayer() {
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

  const playerGameboard = gameboard();
  playerGameboard.initialize();
  const compGameboard = gameboard();
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
