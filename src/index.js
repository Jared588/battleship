import './styles.css';
import gameloop from './gameloop';

const game = gameloop();

game.player.compAttack();
game.player.playerAttack('A5')

console.log(game.player.getPlayerGameboard().getAllShots())

game.updateBoard();
