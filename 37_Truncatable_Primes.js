//Project Euler: Problem 37: Truncatable primes
//The number 3797 has an interesting property. 
//Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. 
//Similarly we can work from right to left: 3797, 379, 37, and 3.

//Find the sum of the only n (8 ≤ n ≤ 11) primes that are both truncatable from left to right and right to left.
//Solution
function isPrime(number) {
    if (number == 1) {
        return false;
    }
    for (let i = 2; i * i <= number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
function isTruncatable(p) {
    for (var div = 10; div < p; div *= 10) {
        if (!isPrime(p % div) || !isPrime(p / div | 0)) {
            return false
        }
    }
    return true
}
function truncatablePrimes(n) {
    var sum = 0
    var num = 0
    for (var i = 23; num < n; i += 2) {
        if (isPrime(i) && isTruncatable(i)) {
            num++
            sum += i
        }
    }
    return sum
}
truncatablePrimes(8);