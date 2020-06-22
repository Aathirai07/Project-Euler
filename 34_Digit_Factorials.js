//Project Euler: Problem 34: Digit factorials
//145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

//Find the numbers and the sum of the numbers which are equal to the sum of the factorial of their digits.
//Solution
let factorial = (n) => n <= 1 ? n : n * factorial(--n);

function digitFactorial() {
    var sum = 0, numbers = [], facts = [];
    facts[0] = 1
    for (let i = 1; i < 10; i++) {
        facts[i] = factorial(i);
    }
    for (let i = 10; i < 50000; i++) {
        let number = i
        var sumOfFacts = 0
        while (number > 0) {
            let d = number % 10;
            number = Math.floor(number / 10);
            sumOfFacts += facts[d];
        }
        if (sumOfFacts == i) {
            sum += i;
            numbers.push(i)
        }
    }
    return { sum, numbers };
}