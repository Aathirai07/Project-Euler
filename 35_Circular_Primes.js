//Project Euler: Problem 35: Circular primes
//The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
//There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

//How many circular primes are there below n, whereas 100 ≤ n ≤ 1000000?
//Solution
function rotate(n) {
    if (n.length == 1) return n;
    return n.slice(1) + n[0];
}
function circularPrimes(n) {
    const bound = 10 ** Math.ceil(Math.log10(n));
    const primes = [0, 0, 2];
    let count = 0;
    for (let i = 4; i <= bound; i += 2) {
        primes.push(i - 1);
        primes.push(0);
    }
    const upperBound = Math.ceil(Math.sqrt(bound));
    for (let i = 3; i < upperBound; i += 2) {
        if (primes[i]) {
            for (let j = i * i; j < bound; j += i) {
                primes[j] = 0;
            }
        }
    }
    for (let i = 2; i < n; i++) {
        if (primes[i]) {
            let curr = String(primes[i]);
            let tmp = 1;
            for (let x = rotate(curr); x != curr; x = rotate(x)) {
                if (x > n && primes[x]) {
                    continue;
                }
                else if (!primes[x]) {
                    tmp = 0;
                    break;
                }
                tmp++;
                primes[x] = 0;
            }
            count += tmp;
        }
    }
    return count;
}
circularPrimes(1000000);