function largestPrimeFactor (n){
  let primeNumber = 0;
  const calcSqrt = num => Math.floor(Math.sqrt(num));
  let givenNumSqrt = calcSqrt(n);

  const isPrime = num => {
    for (let i = 2, s = calcSqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  }

  const findFactors = (num, sqrt) => {
    const factors = [];
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }

  const foundFactors = findFactors(n, givenNumSqrt);

  if (foundFactors.length) {
    for (var i = foundFactors.length - 1; i >= 0; i--) {
      if(isPrime(foundFactors[i])) {
        primeNumber = foundFactors[i];
        break;
      }
    }
  } else {
    primeNumber = n;
  }
  return primeNumber;
};

exports.largestPrimeFactor = largestPrimeFactor;

console.log(largestPrimeFactor(3));
console.log(largestPrimeFactor(25));
console.log(largestPrimeFactor(29));
