//Project Euler: Problem 7: 10001st Prime
//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

//What is the nth prime number?
//Solution
function nthPrime(n) {
  var primeno = 2;
  for (var count = 1; count <= n; primeno++) {
    var isPrime = true;
    var rootnumber = Math.sqrt(primeno);
    for (let i = 2; i <= rootnumber; i++) {
      if (!(primeno % i)) {
        isPrime = false;
        break;
      }
    }
    isPrime ? count++ : "";
  }
  return primeno - 1;
}

nthPrime(10001);
