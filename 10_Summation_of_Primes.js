//Project Euler: Problem 10: Summation of Primes
//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

//Find the sum of all the primes below n.
//Solution
function primeSummation(n) {
    let sum = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}
function isPrime(number) {
    for (let i = 2; i * i <= number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
primeSummation(2000000);