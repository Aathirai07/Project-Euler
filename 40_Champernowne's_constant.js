//Project Euler: Problem 40: Champernowne's constant
//An irrational decimal fraction is created by concatenating the positive integers:
//0.123456789101112131415161718192021...
//It can be seen that the 12th digit of the fractional part is 1.
//If dn represents the nth digit of the fractional part, find the value of the following expression.
//d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000

//Solution
function champernownesConstant(n) {
    let fractionalPart = '';
    for (let i = 0; fractionalPart.length <= n; i++) {
        fractionalPart += i.toString();
    }
    let product = 1;
    for (let i = 0; i < n.toString().length; i++) {
        const index = 10 ** i;
        product *= parseInt(fractionalPart[index], 10);
    }
    return product;
}

champernownesConstant(100);