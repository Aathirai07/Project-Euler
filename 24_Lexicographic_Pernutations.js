//Project Euler: Problem 24: Lexicographic permutations
//A permutation is an ordered arrangement of objects. 
//For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. 
//If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. 
//The lexicographic permutations of 0, 1 and 2 are: 012   021   102   120   201   210

//What is the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
//Solution
var getNthLexicographicPermutation = function (digits, n) {
    var length = digits.length;
    if (length == 1) {
        return (n == 1) ? digits[0] : null;
    }
    var combinationsWithoutFirstDigit = 1;
    for (var i = 2; i < length; i++) {
        combinationsWithoutFirstDigit *= i;
    }
    var firstDigitIndex = Math.floor((n - 1) / combinationsWithoutFirstDigit);
    if (firstDigitIndex >= length) {
        return null;
    }
    return digits.splice(firstDigitIndex, 1) + getNthLexicographicPermutation(digits, n - (firstDigitIndex * combinationsWithoutFirstDigit));
};
function lexicographicPermutations(n) {
    var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var result = parseInt(getNthLexicographicPermutation(digits, n + 1));
    return result;
}
lexicographicPermutations(900000);