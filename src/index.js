import './styles.css';
import gameloop from './gameloop';
import modal from './modal';

// Create game
const game = gameloop();
export default game;
game.updateBoard();

// Setup placement
const welcomeModal = modal();
welcomeModal.initialize(game.playerBoard);
welcomeModal.startPlaceSequence(game.playerBoard, 'Carrier', 5, 'x');
welcomeModal.displayInfo('Carrier');
game.updateBoard();

// temp comp ships
game.compBoard.placeShip('Carrier', ['A1', 'A2', 'A3', 'A4', 'A5']);
game.compBoard.placeShip('Battleship', ['B1', 'B2', 'B3', 'B4']);
game.compBoard.placeShip('Destroyer', ['C1', 'C2', 'C3']);
game.compBoard.placeShip('Submarine', ['D1', 'D2', 'D3']);
game.compBoard.placeShip('PatrolBoat', ['E1', 'E2']);
