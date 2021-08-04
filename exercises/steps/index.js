// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {}

module.exports = steps;

// SOLUTION 1
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let output = "";
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         output += "#";
//       } else {
//         output += " ";
//       }
//     }
//     console.log(output);
//   }
// }

// SOLUTION 2
// function steps(n, row = 0, string = "") {
//   if (n === row) {
//     return;
//   }

//   if (n === string.length) {
//     console.log(string);
//     return steps(n, row + 1);
//   }

//   if (string.length <= row) {
//     string += "#";
//   } else {
//     string += " ";
//   }
//   steps(n, row, string);
// }
