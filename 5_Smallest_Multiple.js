//Project Euler: Problem 5: Smallest Multiple
//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
//Solution
function smallestMult(n) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  var result = 1;
  for (var i = 2; i <= n; i++) {
    result = lcm(result, i);
  }
  return result;
}

smallestMult(20);
