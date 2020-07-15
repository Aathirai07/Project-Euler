//Project Euler: Problem 51: Prime digit replacements
//By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.
//By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

//Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.
//Solution
function primeDigitReplacements() {
    function eratosthenes(n) {
        var detectprimes = new Array(n),
            primes = new Array();

        detectprimes[0] = false;
        detectprimes[1] = false;

        for (var i = 2; i < detectprimes.length; i++)
            detectprimes[i] = true;

        for (var p = 2; p < Math.sqrt(n); p++) {
            if (detectprimes[p]) {
                for (var j = p * p; j < n; j += p)
                    detectprimes[j] = false;
            }
        }

        for (var i = 0; i < n; i++) {
            if (detectprimes[i])
                primes.push(i);
        }

        return primes;
    }
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
    var primes = eratosthenes(1000000),
        digits = '0123456789',
        result = 0;
    for (var j = 0; j < primes.length; j++) {
        if (primes[j] > 100000) {
            var prime = primes[j],
                temp = prime.toString(),
                count = 0;
            for (var i = 0; i < 10; i++) {
                var prim = temp,
                    n = parseInt(prim.replace(/1/g, digits[i]));
                if (isPrime(n)) {
                    if (n.toString().length == temp.length)
                        count++;
                }
            }
            if (count == 8) {
                result = parseInt(temp);
                break;
            }
        }
    }
    return result;
}

primeDigitReplacements();