//Project Euler: Problem 18: Maximum Path Sum I
//If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

//If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?
//Solution
function maximumPathSumI(triangle) {
    let maxSum = triangle.slice();
    for (let i = triangle.length - 1; i > 0; i--) {
        let currentRow = maxSum[i];
        let previousRow = maxSum[i - 1];
        const temp = [];
        for (let j = 0; j < i; j++) {
            temp.push(Math.max((currentRow[j] + previousRow[j]), (currentRow[j + 1] + previousRow[j])));
        }
        maxSum[i - 1] = temp;
        maxSum.pop();
    }
    return maxSum[0][0];
}

const testTriangle = [[3, 0, 0, 0],
[7, 4, 0, 0],
[2, 4, 6, 0],
[8, 5, 9, 3]];

maximumPathSumI(testTriangle);