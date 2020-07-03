//Project Euler: Problem 44: Pentagon numbers
//Pentagonal numbers are generated by the formula, Pn=n(3n−1)/2. The first ten pentagonal numbers are:
//1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...
//It can be seen that P4 + P7 = 22 + 70 = 92 = P8. However, their difference, 70 − 22 = 48, is not pentagonal.

//Find the pair of pentagonal numbers, Pj and Pk, for which their sum and difference are pentagonal and D = |Pk − Pj| is minimized; what is the value of D?
//Solution
function pentagonNumbers() {
    function isPentagonal(num) {
        const n = (Math.sqrt((24 * num) + 1) + 1) / 6;
        return n % 1 === 0;
    }
    let result;
    let i = 1;
    while (!result) {
        i++;
        const num1 = (i * ((3 * i) - 1)) / 2;
        let j = i - 1;
        while (j > 0 && !result) {
            const num2 = (j * ((3 * j) - 1)) / 2;
            if (isPentagonal(num1 - num2) && isPentagonal(num1 + num2)) {
                result = num1 - num2;
            }
            j--;
        }
    }
    return result;
}

pentagonNumbers();