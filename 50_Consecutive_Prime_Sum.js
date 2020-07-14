//Project Euler: Problem 50: Consecutive prime sum
//The prime 41, can be written as the sum of six consecutive primes:
//41 = 2 + 3 + 5 + 7 + 11 + 13
//This is the longest sum of consecutive primes that adds to a prime below one-hundred.

//The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

//Which prime, below one-million, can be written as the sum of the most consecutive primes?
//Solution
function consecutivePrimeSum(limit) {
    function isPrime(num) {
        if (num < 2) {
            return false;
        } else if (num === 2) {
            return true;
        }
        const sqrtOfNum = Math.floor(num ** 0.5);
        for (let i = 2; i <= sqrtOfNum + 1; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    function getPrimes(limit) {
        const primes = [];
        for (let i = 0; i <= limit; i++) {
            if (isPrime(i)) primes.push(i);
        }
        return primes;
    }
    const primes = getPrimes(limit);
    let primeSum = [...primes];
    primeSum.reduce((acc, n, i) => {
        primeSum[i] += acc;
        return acc += n;
    }, 0);

    for (let j = primeSum.length - 1; j >= 0; j--) {
        for (let i = 0; i < j; i++) {
            const sum = primeSum[j] - primeSum[i];
            if (sum > limit) break;
            if (isPrime(sum) && primes.indexOf(sum) > -1) return sum;
        }
    }
}

consecutivePrimeSum(1000000);