function primeFactors(n) {
  let factors = [];
  // Divide the number by 2 until it's odd
  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }

  // Divide the number by odd numbers starting from 3
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }

  // If n is still greater than 2, it's a prime number
  if (n > 2) {
    factors.push(n);
  }

  return factors;
}

const number = 56; // Replace with your desired number
const factors = primeFactors(number);
console.log(`Prime factors of ${number}: ${factors.join(', ')}`);
