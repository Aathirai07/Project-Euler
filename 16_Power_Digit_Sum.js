//Project Euler: Problem 16: Power Digit Sum
//2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

//What is the sum of the digits of the number 2^exponent?
//Solution
function powerDigitSum(exponent) {
    const bigNum = [1];
    let sum = 0;
    for (let i = 1; i <= exponent; i++) {
        let count = bigNum.length + 1;
        let overflow = 0;
        for (let j = 0; j < count; j++) {
            let digit = bigNum[j] || 0;
            digit = 2 * digit + overflow;
            if (digit > 9) {
                digit -= 10;
                overflow = 1;
            } else {
                overflow = 0;
            }
            bigNum[j] = digit;
        }
    }
    bigNum.forEach(function (num) {
        return sum += num;
    });
    return sum;
}
powerDigitSum(15);