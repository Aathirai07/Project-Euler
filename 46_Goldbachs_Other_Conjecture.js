//Project Euler: Problem 46: Goldbach's other conjecture
//It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

//9 = 7 + 2×1^2
//15 = 7 + 2×2^2
//21 = 3 + 2×3^2
//25 = 7 + 2×3^2
//27 = 19 + 2×2^2
//33 = 31 + 2×1^2
//It turns out that the conjecture was false.

//What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
//Solution
function goldbachsOtherConjecture() {
    function isPrime(num) {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num !== 1;
    }

    function isSquare(num) {
        return Math.sqrt(num) % 1 === 0;
    }

    const primes = [];
    for (let i = 2; primes.length < 1000; i++) {
        if (isPrime(i)) primes.push(i);
    }

    let num = 3;
    let answer;
    while (!answer) {
        num += 2;
        if (!isPrime(num)) {
            let found = false;
            for (let primeI = 0; primeI < primes.length && !found; primeI++) {
                const square = (num - primes[primeI]) / 2;
                if (isSquare(square)) {
                    found = true;
                    break;
                }
            }
            if (!found) answer = num;
        }
    }
    return answer;
}

goldbachsOtherConjecture();