//Project Euler: Problem 41: Pandigital prime
//We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

//What is the largest n-length digit pandigital prime that exists?
//Solution
function pandigitalPrime(n) {
    function isPrime(num) {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num !== 1;
    }
    function getPermutations(n) {
        if (n === 1) {
            permutations.push(digitsArr.join(''));
        } else {
            for (let i = 0; i < n - 1; i++) {
                getPermutations(n - 1);
                if (n % 2 === 0) {
                    swap(i, n - 1);
                } else {
                    swap(0, n - 1);
                }
            }
            getPermutations(n - 1);
        }
    }
    function swap(x, y) {
        let temp = digitsArr[x];
        digitsArr[x] = digitsArr[y];
        digitsArr[y] = temp;
    }
    let max = 0;
    let permutations = [];
    let digitsArr;
    let pandigitalNum = '';
    for (let max = n; max > 0; max--) {
        pandigitalNum += max;
    }
    for (let i = 0; i < pandigitalNum.length; i++) {
        if (max > 0) {
            break;
        } else {
            permutations = [];
            const currMax = pandigitalNum.slice(i);
            digitsArr = currMax.split('');
            getPermutations(digitsArr.length);
            permutations.sort(function (a, b) {
                return b - a;
            });
            for (let perm of permutations) {
                const thisPerm = parseInt(perm);
                if (isPrime(thisPerm)) {
                    max = thisPerm;
                    break;
                }
            }
        }
    }
    return max;
}
pandigitalPrime(7);
