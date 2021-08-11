// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {}

module.exports = reverseInt;

// SOLUTION 1 => Just a work around not an optimal solution
// function reverseInt(n) {
//   let tempInt = n.toString().split("");
//   let shiftedEle;
//   if (tempInt[0] === "-") {
//     shiftedEle = tempInt.shift();
//   } else {
//     shiftedEle = "";
//   }

//   let temp = tempInt.reduce((rev, int) => int + rev, "");
//   return parseInt(shiftedEle + temp);
// }

// SOLUTION 2 => Optimal solution
// function reverseInt(n) {
//   let reversedInt = n
//     .toString()
//     .split("")
//     .reduce((rev, int) => int + rev, "");

//   return parseInt(reversedInt) * Math.sign(n);
// Math.sign() will return -1 if number is negative, 1 if number is positive, and 0 if number is 0
// }
