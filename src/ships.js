export default function createShip(name, length, hits, sunk) {
  return {
    name,
    length,
    hits,
    sunk,

    hit () {
      this.hits += 1;
    },

    isSunk() {
      return this.hits === this.length;
    },

    displayInfo () {
      console.log(
        `${this.name} length:${this.length} hits:${this.hits} sunk:${this.sunk}`,
      );
    },
  };
}
