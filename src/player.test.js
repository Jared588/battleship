import createPlayer from './player';

test('Player can attack', () => {
  const player = createPlayer();
  const compGameBoard = player.getCompGameBoard();
  compGameBoard.placeShip('Patrol Boat', ['A1', 'A2']);
  player.playerAttack('A1');
  expect(compGameBoard.getHitShots()).toStrictEqual(['A1']);
});

test('AI attack returns a random unoccupied position', () => {
  const player = createPlayer();
  const gameboard = player.getPlayerGameboard();
  player.compAttack();
  expect(gameboard.getAllShots()).toHaveLength(1);
});
