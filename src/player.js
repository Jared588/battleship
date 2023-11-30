import gameboard from './gameboard';

export default function createPlayer() {
    const playerGameboard = gameboard();
    playerGameboard.initialize();
    const compGameboard = gameboard();
    compGameboard.initialize();

    return {
        playerAttack(position) {
            compGameboard.receiveAttack(position);
        },

        compAttack(position) {
            playerGameboard.receiveAttack(position);
        },

        getPlayerGameboard() {
            return playerGameboard;
        },

        getCompGameBoard() {
            return compGameboard;
        },
    }
}

