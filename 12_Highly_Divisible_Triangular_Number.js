//Project Euler: Problem 12: Highly Divisible Triangular Number
//The sequence of triangle numbers is generated by adding the natural numbers. 
//So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. 
//The first ten terms would be:
//1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
//We can see that 28 is the first triangle number to have over five divisors.

//What is the value of the first triangle number to have over n divisors?
//Solution
function triangularNo(num) {
    var n = num;
    var p = 1;
    if (num === 1) return 1;
    for (var i = 2; i * i <= n; i++) {
        var c = 1;
        while (n % i === 0) {
            n /= i;
            c++;
        }
        p *= c;
    }
    if (n === num || n > 1)
        p *= 2;
    return p;
}
function divisibleTriangleNumber(n) {
    var x = 1;
    var result = 1;
    while (triangularNo(result) <= n) {
        x++;
        result += x;
    }
    return result;
}
divisibleTriangleNumber(500);