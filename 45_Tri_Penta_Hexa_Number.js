//Project Euler: Problem 45: Triangular, pentagonal, and hexagonal
//Triangle, pentagonal, and hexagonal numbers are generated by the following formulae:

//Triangle      Tn=n(n+1)/2     1, 3, 6, 10, 15, ...
//Pentagonal    Pn=n(3n−1)/2    1, 5, 12, 22, 35, ...
//Hexagonal     Hn=n(2n−1)      1, 6, 15, 28, 45, ...
//It can be verified that T285 = P165 = H143 = 40755.

//Find the next triangle number that is also pentagonal and hexagonal.
//Solution
function triPentaHexa(n) {
    function triangle(n) {
        return (n * (n + 1)) / 2;
    }
    function isPentagon(n) {
        const num = (Math.sqrt((24 * n) + 1) + 1) / 6;
        return num % 1 === 0;
    }
    function isHexagon(n) {
        const num = Math.sqrt(0.5 * (n + (1 / 8))) + 0.25;
        return num % 1 === 0;
    }
    let number = n, found = false, tri;
    while (!found) {
        number++;
        tri = triangle(number);
        if (isPentagon(tri) && isHexagon(tri)) {
            found = true;
        }
    }
    return tri;
}

triPentaHexa(40756);