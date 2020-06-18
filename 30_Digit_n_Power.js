//Project Euler: Problem 30: Digit n powers
//Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
//1634 = 1^4 + 6^4 + 3^4 + 4^4
//8208 = 8^4 + 2^4 + 0^4 + 8^4
//9474 = 9^4 + 4^4 + 7^4 + 4^4
//The sum of these numbers is 1634 + 8208 + 9474 = 19316.

//Find the sum of all the numbers that can be written as the sum of n powers of their digits.
//Solution
function digitnPowers(n) {
    var POW = [];
    for (var i = 0; i < 10; i++)
        POW[i] = Math.pow(i, n);
    return solution();
    function powSum(n) {
        var sum = 0;
        while (n > 0) {
            sum += POW[n % 10];
            n = n / 10 | 0;
        }
        return sum;
    }
    function solution() {
        var sum = 0;
        for (var i = 10; i <= 354294; i++) {
            if (i === powSum(i)) {
                sum += i;
            }
        }
        return sum;
    }
}

digitnPowers(5);