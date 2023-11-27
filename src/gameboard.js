import createShip from './ships';

export default function gameboard() {
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  let grid = [];

  return {
    initialize() {
      grid = [];
      for (let i = 0; i < 10; i += 1) {
        for (let j = 1; j <= 10; j += 1) {
          grid.push({
            position: columns[i] + j,
            occupied: false,
            ship: null,
          });
        }
      }
    },

    getGrid() {
      return grid;
    },

    placeShip(ship, position) {
      let carrierCount = 0;
      let BattleshipCount = 0;
      let DestroyerCount = 0;
      let SubmarineCount = 0;
      let PatrolBoatCount = 0;

      // Check that the points are unoccupied
      position.forEach((point) => {
        const gridPoint = grid.find((cell) => cell.position === point);
        if (gridPoint && gridPoint.occupied === true) {
            return;
        }
      });

      // Create the ship
      let newShip;
      if (ship === 'Carrier' && carrierCount < 1) {
        newShip = createShip('Carrier', 5, 0, false);
        carrierCount += 1;
      } else if (ship === 'Battleship' && BattleshipCount < 1) {
        newShip = createShip('Battleship', 4, 0, false);
        BattleshipCount += 1;
      } else if (ship === 'Destroyer' && DestroyerCount < 1) {
        newShip = createShip('Destroyer', 3, 0, false);
        DestroyerCount += 1;
      } else if (ship === 'Submarine' && SubmarineCount < 1) {
        newShip = createShip('Submarine', 3, 0, false);
        SubmarineCount += 1;
      } else if (ship === 'Patrol Boat' && PatrolBoatCount < 1) {
        newShip = createShip('Patrol Boat', 2, 0, false);
        PatrolBoatCount += 1;
      } else return;

      // Add the ship
      position.forEach((point) => {
        const gridPoint = grid.find((cell) => cell.position === point);
        if (gridPoint) {
          gridPoint.occupied = true;
          gridPoint.ship = newShip.name;
        }
      });
    },
  };
}
