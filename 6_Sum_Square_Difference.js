//Project Euler: Problem 6: Sum Square Difference
//The difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

//Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
//Solution
function sumSquareDifference(n) {
  let sumOfNumbers = (n / 2) * (2 * 1 + (n - 1) * 1);
  let squareOfSum = Math.pow(sumOfNumbers, 2);
  let sumOfSquare = (n * (n + 1) * (2 * n + 1)) / 6;
  return squareOfSum - sumOfSquare;
}

sumSquareDifference(100);
