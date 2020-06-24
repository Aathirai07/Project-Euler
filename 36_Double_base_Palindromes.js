//Project Euler: Problem 36: Double-base palindromes
//The decimal number, 585 = 1001001001 (binary), is palindromic in both bases.

//Find the sum of all numbers, less than n, whereas 1000 ≤ n ≤ 1000000, which are palindromic in base 10 and base 2.
//Solution
function isPalindrome(x, base) {
    var s = x.toString(base);
    var a = s.length - 1;
    var b = 0;
    while (b < a) {
        if (s[a] !== s[b]) {
            return false;
        }
        b++;
        a--;
    }
    return true;
}
function generatePalindrome(x, oddPalindrome) {
    var res = x;
    x >>= oddPalindrome;
    while (x > 0) {
        res = (res << 1) | (x & 1);
        x >>= 1;
    }
    return res;
}
function doubleBasePalindromes(n) {
    var sum = 0;
    for (var parity = 0; parity < 2; parity++) {
        var p = generatePalindrome(1, parity);
        for (var i = 2; p < n; i++) {
            if (isPalindrome(p, 10)) {
                sum += p;
            }
            p = generatePalindrome(i, parity);
        }
    }
    return sum;
}
doubleBasePalindromes(1000000);