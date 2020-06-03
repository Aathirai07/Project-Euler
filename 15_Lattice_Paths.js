//Project Euler: Problem 15: Lattice Paths
//Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

//How many such routes are there through a given gridSize?
//Solution
function latticePaths(gridSize) {
    let paths = 1;
    for (let i = 0; i < gridSize; i++) {
        paths *= (2 * gridSize) - i;
        paths /= i + 1;
    }
    return paths;
}

latticePaths(2);