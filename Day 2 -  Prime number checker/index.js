// Day 2
// JavaScript: Implement a prime number checker and a function to list primes in a range.
// Frontend: Build a UI for entering a range and displaying prime numbers.
// Backend: API for listing prime numbers in a range. Include validation and unit tests.


// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false; // 0 and 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to list all primes in a given range [start, end]
function listPrimesInRange(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

const button = document.getElementById('btn');
const start_val = document.getElementById('start');
const end_val = document.getElementById('end');

const output = document.getElementById('output');
button.addEventListener('click',()=>{
    let start = Number(start_val.value);
    let end = Number(end_val.value);
    const res = listPrimesInRange(start, end)
    output.innerHTML = res;
})