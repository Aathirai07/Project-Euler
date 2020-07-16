//Project Euler: Problem 52: Permuted multiples
//It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

//Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
//Solution
function permutedMultiples() {
    function arePermutations(n1, n2) {
        const n1str = n1.toString();
        let n2str = n2.toString();
        if (n1str.length !== n2str.length) {
            return false;
        }
        for (let i = 0; i < n1str.length; i++) {
            const index = n2str.indexOf(n1str[i]);
            if (index === -1) {
                return false;
            }
            n2str = n2str.slice(0, index) + n2str.slice(index + 1);
        }
        return true;
    }
    let result = 0;
    for (let i = 125875; i < 1000000; i++) {
        let count = 0;
        for (let j = 2; j <= 6; j++) {
            let product = i * j;
            if (arePermutations(i, product)) {
                count++;
            }
        }
        if (count == 5) {
            result = i;
            break;
        }
    }
    return result;
}

permutedMultiples();