//Project Euler: Problem 13: Large Sum

//Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
//Solution
function largeSum(arr) {
    let sum = 0;
    for (let i in arr) {
        sum += Number(arr[i]);
    }
    let largeSum = Number(String(sum).replace(/\./g, "").slice(0, 10));
    return largeSum;
}

const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);