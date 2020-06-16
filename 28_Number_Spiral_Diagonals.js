//Project Euler: Problem 28: Number spiral diagonals
//Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

//  21 22 23 24 25
//  20  7  8  9 10
//  19  6  1  2 11
//  18  5  4  3 12
//  17 16 15 14 13

//It can be verified that the sum of the numbers on the diagonals is 101.

//What is the sum of the numbers on the diagonals in an n by n spiral formed in the same way?
//Solution
function spiralDiagonals(n) {
    const SumOfn2 = (n) => {
        return n * (n + 1) * (2 * n + 1) / 6;
    };
    const SumOfn = (n) => {
        return n * (n + 1) / 2;
    };
    let sum = (SumOfn2(n - 1) + SumOfn(n - 1) + n - 1) + (Math.floor(n / 2) + SumOfn2(n));
    return sum;
}

spiralDiagonals(1001);