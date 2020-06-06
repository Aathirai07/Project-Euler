//Project Euler: Problem 20: Factorial Digit Sum
//n! means n × (n − 1) × ... × 3 × 2 × 1
//For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
//and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

//Find the sum of the digits n!
//Solution
let factorial = (n) => n <= 1 ? BigInt(n) : BigInt(n) * BigInt(factorial(--n));
let sumDigits = n => n.toString().split('').map(x => parseInt(x)).reduce((a, b) => a + b);

function sumFactorialDigits(n) {
    return sumDigits(factorial(n));
}
sumFactorialDigits(100);