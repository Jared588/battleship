import './styles.css';
import gameloop from './gameloop';

const game = gameloop();

game.player.compAttack();
game.player.compAttack();
game.player.playerAttack('B9');
game.player.playerAttack('B10');

console.log(game.player.getPlayerGameboard().getAllShots());

game.updateBoard();
