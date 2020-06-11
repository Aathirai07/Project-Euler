//Project Euler: Problem 23: Non-abundant Sums
//A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
//For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
//As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24.
//By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. 
//However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

//Find the sum of all positive integers <= n which cannot be written as the sum of two abundant numbers.
//Solution
function abundantCheck(number) {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i + +(i !== Math.sqrt(number) && number / i);
        }
    }
    return sum > number;
}
function sumOfNonAbundantNumbers(n) {
    let sum = 0;
    const memo = {};
    let abundantList = [];
    const checkSum = (num, stack, memo) => {
        for (let i = 0; i < stack.length; i++) {
            if ((num - stack[i]) in memo) return true;
        }
        return false;
    };
    for (let i = 1; i <= n; i++) {
        if (abundantCheck(i)) {
            abundantList.push(i);
            memo[i] = 1;
        }
        if (checkSum(i, abundantList, memo)) continue;
        sum += i;
    }
    return sum;
}
sumOfNonAbundantNumbers(20);
