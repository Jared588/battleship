import createPlayer from './player'

export default function gameloop() {
    const player = createPlayer();
    const playerBoard = player.getPlayerGameboard();
    const compBoard = player.getCompGameBoard();

    /// temp player ships
    playerBoard.placeShip('Carrier', ['A1', 'A2', 'A3', 'A4', 'A5']);
    playerBoard.placeShip('Battlehsip', ['B1', 'B2', 'B3', 'B4']);
    playerBoard.placeShip('Destroyer', ['C1', 'C2', 'C3']);
    playerBoard.placeShip('Submarine', ['D1', 'D2', 'D3']);
    playerBoard.placeShip('Patrol Boat', ['E1', 'E2']);

    // temp comp ships
    compBoard.placeShip('Carrier', ['A1', 'A2', 'A3', 'A4', 'A5']);
    compBoard.placeShip('Battlehsip', ['B1', 'B2', 'B3', 'B4']);
    compBoard.placeShip('Destroyer', ['C1', 'C2', 'C3']);
    compBoard.placeShip('Submarine', ['D1', 'D2', 'D3']);
    compBoard.placeShip('Patrol Boat', ['E1', 'E2']);

    return {
        player,
        playerBoard,
        compBoard
    }
};