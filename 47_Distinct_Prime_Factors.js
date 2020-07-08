//Project Euler: Problem 47: Distinct primes factors
//The first two consecutive numbers to have two distinct prime factors are:

//14 = 2 × 7
//15 = 3 × 5
//The first three consecutive numbers to have three distinct prime factors are:

//644 = 2 x 2 × 7 × 23
//645 = 3 × 5 × 43
//646 = 2 × 17 × 19
//Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?
//Solution
function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
    function numberOfPrimeFactors(n) {
        let factors = 0;
        //  Considering 2 as a special case
        let firstFactor = true;
        while (n % 2 == 0) {
            n = n / 2;
            if (firstFactor) {
                factors++;
                firstFactor = false;
            }
        }
        // Adding other factors
        for (let i = 3; i < Math.sqrt(n); i += 2) {
            firstFactor = true;
            while (n % i == 0) {
                n = n / i;
                if (firstFactor) {
                    factors++;
                    firstFactor = false;
                }
            }
        }
        if (n > 1) { factors++; }
        return factors;
    }

    let number = 0;
    let consecutive = 0;
    while (consecutive < targetConsecutive) {
        number++;
        if (numberOfPrimeFactors(number) >= targetNumPrimes) {
            consecutive++;
        } else {
            consecutive = 0;
        }
    }
    return number - targetConsecutive + 1;
}

distinctPrimeFactors(4, 4);