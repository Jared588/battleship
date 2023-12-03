import gameloop from './gameloop'

test('Start new game', () => {
    const game = gameloop();
    expect(game).toBeTruthy();
    expect(game.player).toBeTruthy();
});
