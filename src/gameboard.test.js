import gameboard from './gameboard';

test('Gameboard initializes correctly', () => {
    const myGameboard = gameboard();
    myGameboard.initialize();
    const grid = myGameboard.getGrid();
    expect(grid[0]).toBe('A1');
})