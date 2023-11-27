import gameboard from './gameboard';

test('Gameboard initializes correctly', () => {
    const myGameboard = gameboard();
    myGameboard.initialize();
    const grid = myGameboard.getGrid();
    expect(grid[0].position).toBe('A1');
})

test('Ship can be placed on grid: Destroyer[A1, A2]', () => {
    const myGameboard = gameboard();
    myGameboard.initialize();
    myGameboard.placeShip('Patrol Boat', ['A1', 'A2']);
    const grid = myGameboard.getGrid();
    expect(grid[0].occupied && grid[1].occupied).toBe(true)
    expect(grid[0].ship && grid[1].ship).toBe('Patrol Boat')
})