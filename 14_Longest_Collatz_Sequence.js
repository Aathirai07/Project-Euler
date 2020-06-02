//Project Euler: Problem 14: Longest Collatz Sequence
//The following iterative sequence is defined for the set of positive integers:
//n → n/2 (n is even)
//n → 3n + 1 (n is odd)
//Using the rule above and starting with 13, we generate the following sequence:
//13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

//Which starting number, under the given limit, produces the longest chain?
//Solution
function longestCollatzSequence(limit) {
    let number = 1;
    let maxchain = 1;
    for (let i = Math.floor(limit / 2); i < limit; i++) {
        let length = chainLength(i);
        if (length > maxchain) {
            number = i;
            maxchain = length;
        }
    }
    return number;
}
const knownLength = { '1': 1 };
function chainLength(n) {
    if (knownLength[n]) {
        return knownLength[n];
    } else {
        const length = n % 2 === 0 ? chainLength(n / 2) + 1 : chainLength((3 * n + 1) / 2) + 2;
        knownLength[n] = length;
        return length;
    }
}
longestCollatzSequence(14);  