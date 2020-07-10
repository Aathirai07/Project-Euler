//Project Euler: Problem 48: Self powers
//The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

//Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.
//Solution
function selfPowers(power, lastDigits) {
    let sum = 0;
    const modulo = Math.pow(10, lastDigits);

    for (let i = 1; i <= power; i++) {
        let temp = i;
        for (let j = 1; j < i; j++) {
            temp *= i;
            temp %= modulo;
        }
        sum += temp;
        sum %= modulo;
    }
    return sum;
}

selfPowers(1000, 10);