//Project Euler: Problem 39: Integer right triangles
//If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.
//{20,48,52}, {24,45,51}, {30,40,50}

//For which value of p ≤ n, is the number of solutions maximized?
function intRightTriangles(n) {
    let triangles = {};
    // a is the shortest side
    for (let a = 3; a < n / 3; a++)
        // o is the opposite side and is at least as long as a
        for (let o = a; o < n / 2; o++) {
            let h = Math.sqrt(a * a + o * o); // hypotenuse
            let p = a + o + h;  // perimeter
            if ((h % 1) === 0 && p <= n) {
                triangles[p] = (triangles[p] || 0) + 1;
            }
        }
    let max = 0, maxp = null;
    for (let p in triangles) {
        if (max < triangles[p]) {
            max = triangles[p];
            maxp = parseInt(p);
        }
    }
    return maxp;
}

intRightTriangles(500);