//Project Euler: Problem 27: Quadratic primes

//Find the product of the coefficients,  a  and  b , for the quadratic expression that produces the maximum number of primes for consecutive values of  n , starting with  n=0 .
//Solution
function quadraticPrimes(limit) {
    var primes = calculatePrimesTo(Math.sqrt(quadratic(limit, limit, limit - 1)));
    var maxN = 0;
    var maxA, maxB;
    for (var a = -limit; a <= limit; a++) {
        for (var b = -limit; b <= limit; b++) {
            for (var n = 0; n < b && isPrime(Math.abs(quadratic(a, b, n)), primes); n++) { }
            if (n > maxN) {
                maxN = n;
                maxA = a;
                maxB = b;
            }
        }
    }
    return maxA * maxB;
}
var isPrime = function (n, primes) {
    var maxCheck = Math.sqrt(Math.abs(n));
    for (var i = 0; primes[i] <= maxCheck; i++) {
        if (n % primes[i] === 0) {
            return false;
        }
    }
    return true;
};
var quadratic = function (a, b, n) {
    return n * n + a * n + b;
};
var calculatePrimesTo = function (max) {
    var isPrime = [];
    var primes = [];
    for (var i = 2; i <= max; i++) {
        isPrime[i] = true;
    }
    for (var i = 2; i * i <= max; i++) {
        if (isPrime[i]) {
            for (var j = i; i * j <= max; j++) {
                isPrime[i * j] = false;
            }
        }
    }
    for (var i = 2; i <= max; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }
    return primes;
};
quadraticPrimes(1000);