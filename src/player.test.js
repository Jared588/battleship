import createPlayer from './player';

test('Player can attack', () => {
    const player = createPlayer();
    const compGameBoard = player.getCompGameBoard();
    compGameBoard.placeShip('Patrol Boat', ['A1', 'A2']);
    player.playerAttack('A1');
    expect(compGameBoard.getHitShots()).toStrictEqual(['A1']);
})