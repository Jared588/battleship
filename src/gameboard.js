import createShip from './ships';

export default function gameboard() {
  // Board
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  let grid = [];
  let numberOfHits = 0;
  const hitShots = [];
  const missedShots = [];

  // Ships
  let Carrier;
  let Battleship;
  let Destroyer;
  let Submarine;
  let PatrolBoat;

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
          // eslint-disable-next-line no-useless-return
          return;
        }
      });

      // Create the ship
      let newShip;
      if (ship === 'Carrier' && carrierCount < 1) {
        Carrier = createShip('Carrier', 5, 0, false);
        newShip = Carrier;
        carrierCount += 1;
      } else if (ship === 'Battleship' && BattleshipCount < 1) {
        Battleship = createShip('Battleship', 4, 0, false);
        newShip = Battleship;
        BattleshipCount += 1;
      } else if (ship === 'Destroyer' && DestroyerCount < 1) {
        Destroyer = createShip('Destroyer', 3, 0, false);
        newShip = Destroyer;
        DestroyerCount += 1;
      } else if (ship === 'Submarine' && SubmarineCount < 1) {
        Submarine = createShip('Submarine', 3, 0, false);
        newShip = Submarine;
        SubmarineCount += 1;
      } else if (ship === 'Patrol Boat' && PatrolBoatCount < 1) {
        PatrolBoat = createShip('Patrol Boat', 2, 0, false);
        newShip = PatrolBoat;
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

    // eslint-disable-next-line consistent-return
    receiveAttack(position) {
      const gridPoint = grid.find((cell) => cell.position === position);
      if (gridPoint.occupied === true) {
        if (gridPoint.ship === 'Carrier') {
          Carrier.hit();
          hitShots.push(position);
          numberOfHits += 1;
          this.checkEndGame(numberOfHits);
        } else if (gridPoint.ship === 'Battleship') {
          Battleship.hit();
          hitShots.push(position);
          numberOfHits += 1;
          this.checkEndGame(numberOfHits);
        } else if (gridPoint.ship === 'Destroyer') {
          Destroyer.hit();
          hitShots.push(position);
          numberOfHits += 1;
          this.checkEndGame(numberOfHits);
        } else if (gridPoint.ship === 'Submarine') {
          Submarine.hit();
          hitShots.push(position);
          numberOfHits += 1;
          this.checkEndGame(numberOfHits);
        } else if (gridPoint.ship === 'Patrol Boat') {
          PatrolBoat.hit();
          hitShots.push(position);
          numberOfHits += 1;
          this.checkEndGame(numberOfHits);
        }
      } else {
        missedShots.push(position);
        return null;
      }
    },

    getShipInfo(ship) {
      if (ship === 'Carrier') {
        return Carrier;
      }
      if (ship === 'Battleship') {
        return Battleship;
      }
      if (ship === 'Destroyer') {
        return Destroyer;
      }
      if (ship === 'Submarine') {
        return Submarine;
      }
      if (ship === 'Patrol Boat') {
        return PatrolBoat;
      }
      return null;
    },

    getMissedShots() {
      return missedShots;
    },

    getHitShots() {
      return hitShots;
    },

    getAllShots() {
      return missedShots.concat(hitShots);
    },

    checkEndGame(hits) {
      return hits === 16;
    },
  };
}
