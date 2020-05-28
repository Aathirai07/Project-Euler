//Project Euler: Problem 9: Special Pythagorean Triplet
//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2

//There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
//Solution
function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    let a, b, c;
    for (a = 1; a <= sumOfabc / 3; a++) {
        for (b = a + 1; b <= sumOfabc / 2; b++) {
            c = Math.sqrt(a * a + b * b);
            if ((a + b + c) == sumOfabc) {
                return a * b * c;
            }
        }
    }
}

specialPythagoreanTriplet(1000);