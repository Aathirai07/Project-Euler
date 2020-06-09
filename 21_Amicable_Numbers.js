//Project Euler: Problem 21: Amicable Numbers
//Let d(n) be defined as the sum of proper divisors of n
//If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
//For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

//Evaluate the sum of all the amicable numbers under n.
//Solution
function sumAmicableNum(n) {
    const fsum = (n) => {
        let sum = 1;
        for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
            if (Math.floor(n % i) === 0)
                sum += i + Math.floor(n / i);
        return sum;
    };
    let d = [];
    let amicableSum = 0;
    for (let i = 2; i < n; i++) d[i] = fsum(i);
    for (let i = 2; i < n; i++) {
        let dsum = d[i];
        if (d[dsum] === i && i !== dsum) amicableSum += i + dsum;
    }
    return amicableSum / 2;
}

sumAmicableNum(100);