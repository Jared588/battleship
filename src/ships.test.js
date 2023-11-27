import createShip from './ships';

test('Ship recieves damage: 0 -> 1', () => {
    const Carrier1 = createShip('Carrier', 5, 0, false);
    Carrier1.hit();
    expect(Carrier1.hits).toBe(1)
});

test('Ship can be sunk: length === hits', () => {
    const Carrier1 = createShip('Carrier', 5, 5, false);
    expect(Carrier1.isSunk()).toBe(true);
})