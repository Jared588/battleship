import gameboard from './gameboard';

test('Gameboard initializes correctly', () => {
  const myGameboard = gameboard();
  myGameboard.initialize();
  const grid = myGameboard.getGrid();
  expect(grid[0].position).toBe('A1');
});

test('Ship can be placed on grid: Destroyer[A1, A2]', () => {
  const myGameboard = gameboard();
  myGameboard.initialize();
  myGameboard.placeShip('Patrol Boat', ['A1', 'A2']);
  const grid = myGameboard.getGrid();
  expect(grid[0].occupied && grid[1].occupied).toBe(true);
  expect(grid[0].ship && grid[1].ship).toBe('Patrol Boat');
});

test('Get ship info', () => {
  const myGameboard = gameboard();
  myGameboard.initialize();
  myGameboard.placeShip('Patrol Boat', ['A1', 'A2']);
  const ship = myGameboard.getShipInfo('Patrol Boat');
  expect(ship.name).toBe('Patrol Boat');
})

test('Ship can receive damage', () => {
  const myGameboard = gameboard();
  myGameboard.initialize();
  myGameboard.placeShip('Patrol Boat', ['A1', 'A2']);
  myGameboard.receiveAttack('A1');
  const ship = myGameboard.getShipInfo('Patrol Boat');
  expect(ship.hits).toBe(1);
})

test('Shot can miss', () => {
  const myGameboard = gameboard();
  myGameboard.initialize();
  myGameboard.placeShip('Patrol Boat', ['A1', 'A2']);
  expect(myGameboard.receiveAttack('A3')).toBe(null);
})

test('Missed shots are recorded', () => {
  const myGameboard = gameboard();
  myGameboard.initialize();
  myGameboard.placeShip('Patrol Boat', ['A1', 'A2']);
  myGameboard.receiveAttack('A3');
  myGameboard.receiveAttack('A4');
  expect(myGameboard.getMissedShots()).toStrictEqual(['A3', 'A4']);
})