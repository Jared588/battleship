export default function gameboard() {
    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let grid = [];
    
    return {
        initialize () {
            grid = [];
            for (let i = 0; i < 10; i += 1) {
                for (let j = 1; j <= 10; j += 1) {
                    grid.push(columns[i] + j);
                };
            };
        },

        getGrid() {
            return grid;
        }
    }

}