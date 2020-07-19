//Project Euler: Problem 53: Combinatoric selections
//There are exactly ten ways of selecting three from five, 12345:
//123, 124, 125, 134, 135, 145, 234, 235, 245, and 345
//In combinatorics, we use the notation,  (5 3)=10 
//In general,  (n r)=n!/r!(n−r)! , where  r≤n ,  n!=n×(n−1)×...×3×2×1 , and  0!=1 .
//It is not until  n=23 , that a value exceeds one-million:  (23 10)=1144066 .

//How many, not necessarily distinct, values of (n r) for 1≤n≤100 , are greater than one-million?
//Solution
function combinatoricSelections(limit) {
    const factorial = n =>
        Array.apply(null, { length: n })
            .map((_, i) => i + 1)
            .reduce((p, c) => p * c, 1);
    let result = 0;
    const nMax = 100;
    for (let n = 1; n <= nMax; n++) {
        for (let r = 0; r <= n; r++) {
            if (factorial(n) / (factorial(r) * factorial(n - r)) >= limit)
                result++;
        }
    }
    return result;
}

combinatoricSelections(1000000);