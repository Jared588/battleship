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
welcomeModal.startPlaceSequence(game.playerBoard, 'Carrier', 5, 'x', game);
welcomeModal.displayInfo('Carrier');
game.updateBoard();

// Randomize enemy ship placement
game.placeEnemyShip('Carrier', 5, game);
game.placeEnemyShip('Battleship', 4, game);
game.placeEnemyShip('Destroyer', 3, game);
game.placeEnemyShip('Submarine', 3, game);
game.placeEnemyShip('PatrolBoat', 2, game);
