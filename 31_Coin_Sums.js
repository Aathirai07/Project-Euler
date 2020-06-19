//Project Euler: Problem 31: Coin sums
//In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
//1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
//It is possible to make £2 in the following way:
//1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

//How many different ways can n pence be made using any number of coins?
//Solution
function coinSums(n) {
    const getWays = (n, m = 8, c = [1, 2, 5, 10, 20, 50, 100, 200]) => {
        if (n === 0) return 1;
        if (m === 0 || n < 0) return 0;
        return getWays(n - c[m - 1], m, c) + getWays(n, m - 1, c);
    };
    return getWays(n);
}
coinSums(200);