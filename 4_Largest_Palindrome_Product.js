//Project Euler: Problem 4: Largest Palindrome Product
//The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99

//Find the largest palindrome made from the product of two n-digit numbers.
//Solution
function largestPalindromeProduct(n) {
  let number = Math.pow(10, n);
  let result = 0;
  let palindrome;
  for (let i = number - 1; i > 0; i--) {
    for (let j = number - 1; j > 0; j--) {
      palindrome = i * j;
      if (
        palindrome ===
        parseFloat(palindrome.toString().split("").reverse().join(""))
      ) {
        if (palindrome > result) {
          result = palindrome;
        }
      }
    }
  }
  return result;
}

largestPalindromeProduct(3);
