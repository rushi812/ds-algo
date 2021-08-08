// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Memoization
function fib(n) {}

module.exports = fib;

// SOLUTION 1
// Time Complexity => n (Linear Time)
// function fib(n) {
//   const result = [];
//   let n1 = 0;
//   let n2 = 1;
//   let next;
//   for (let i = 0; i <= n; i++) {
//     result.push(n1);
//     next = n1 + n2;
//     n1 = n2;
//     n2 = next;
//   }
//   return result[n];
// }

// SOLUTION 2
// Time Complexity => n (Linear Time)
// function fib(n) {
//   const result = [0, 1];
//   let next = 0;
//   for (i = 2; i <= n; i++) {
//     next = result[i - 1] + result[i - 2];
//     result.push(next);
//   }
//   return result[n];
// }

// SOLUTION 3 Using recursion
// Time Complexity => 2^n (Exponential Time), i.e for every increase in the step there will be exponential increase in the processing time
// Function that return the nth number generate in fibonacci series
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// Function to print the fibonacci series
// function printFib(n) {
//   const result = [];

//   for (let i = 0; i <= n; i++) {
//     result.push(fib(i));
//   }
//   return result;
// }

// SOLUTION 4 (Memoization)
// Memoization
// function memoize(fn) {
//   const cache = {};
//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const result = fn.apply(this, args);
//     cache[args] = result;

//     return result;
//   };
// }

// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
//   // this "fib" function is the reference to the memoized version of "slowFib" function
// }

// const fib = memoize(slowFib);
