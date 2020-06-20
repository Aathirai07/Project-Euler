//Project Euler: Problem 33: Digit cancelling fractions
//The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.
//We shall consider fractions like, 30/50 = 3/5, to be trivial examples.
//There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

//If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
//Solution
function digitCancellingFractions() {
    function isCurious(numerator, denominator) {
        const fraction = numerator / denominator;
        const numString = numerator.toString();
        const denString = denominator.toString();

        if (numString[1] === '0' && denString[1] === '0') {
            // trivial
            return false;
        }
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                if (numString[i] === denString[j]) {
                    const newNum = parseInt(numString[1 - i], 10);
                    const newDen = parseInt(denString[1 - j], 10);
                    if (newNum / newDen === fraction) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    function findLargestDivisor(a, b) {
        let gcd = a > b ? b : a;
        while (gcd > 1) {
            if (a % gcd === 0 && b % gcd === 0) {
                return gcd;
            }
            gcd--;
        }
        return gcd;
    }

    function simplifyFraction(numerator, denominator) {
        const divisor = findLargestDivisor(numerator, denominator);
        return [numerator / divisor, denominator / divisor];
    }

    let multipleNumerator = 1;
    let multipleDenominator = 1;

    for (let denominator = 11; denominator < 100; denominator++) {
        for (let numerator = 10; numerator < denominator; numerator++) {
            if (isCurious(numerator, denominator)) {
                multipleNumerator *= numerator;
                multipleDenominator *= denominator;
            }
        }
    }

    return simplifyFraction(multipleNumerator, multipleDenominator)[1];
}

digitCancellingFractions();