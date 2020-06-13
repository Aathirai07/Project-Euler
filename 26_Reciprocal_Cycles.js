//Project Euler: Problem 26: Reciprocal cycles

//Find the value of d < n for which 1/d contains the longest recurring cycle in its decimal fraction part.
//Solution
function reciprocalCycles(n) {
    var longestNum = 1;
    var largestCycleSize = 1;
    for (var currentNum = longestNum + 1; currentNum <= n; currentNum++) {
        var cycleSize = getCycleSize(currentNum);
        if (cycleSize > largestCycleSize) {
            largestCycleSize = cycleSize;
            longestNum = currentNum;
        }
    }
    return longestNum;
}
var getCycleSize = function (num) {
    var numerator = 1;
    var numerators = [];
    var numeratorDigits = [];
    while (!digitsInSequence) {
        if (numerator == 0) {
            return 0;
        }
        for (var i = 0; i < numerators.length; i++) {
            if (numerator == numerators[i]) {
                var digitsInSequence = 0;
                for (var j = i; j < numerators.length; j++) {
                    digitsInSequence += numeratorDigits[j];
                }
                return digitsInSequence;
            }
        }
        numerators[numerators.length] = numerator;
        var digits = 1;
        while (num > numerator) {
            numerator *= 10;
            digits++;
        }
        numeratorDigits[numeratorDigits.length] = digits;
        numerator = numerator % num;
    }
};
reciprocalCycles(1000);