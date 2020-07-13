//Project Euler: Problem 49: Prime permutations
//The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.
//There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

//What 12-digit number do you form by concatenating the three terms in this sequence?
//Solution
function primePermutations() {
    function arePermutations(n1, n2) {
        const n1str = n1.toString();
        let n2str = n2.toString();
        if (n1str.length !== n2str.length) {
            return false;
        }
        for (let i = 0; i < n1str.length; i++) {
            const index = n2str.indexOf(n1str[i]);
            if (index === -1) {
                return false;
            }
            n2str = n2str.slice(0, index) + n2str.slice(index + 1);
        }
        return true;
    }
    function isPrime(n) {
        if (n < 2) {
            return false;
        } else if (n === 2) {
            return true;
        }
        const sqrtOfNum = Math.floor(n ** 0.5);
        for (let i = 2; i <= sqrtOfNum + 1; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (let num1 = 1000; num1 <= 9999; num1++) {
        const num2 = num1 + 3330;
        const num3 = num2 + 3330;
        if (isPrime(num1) && isPrime(num2) && isPrime(num3)) {
            if (arePermutations(num1, num2) && arePermutations(num1, num3)
                && num1 !== 1487) {
                return (num1 * 100000000) + (num2 * 10000) + num3;
            }
        }
    }
    return 0;
}

primePermutations();