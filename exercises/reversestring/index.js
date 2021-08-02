// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {}

// SOLUTION 1
// function reverse(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// SOLUTION 2
// function reverse(str) {
//   let newString = [];
//   let tempStr = str.split("");

//   for (let i = tempStr.length - 1; i >= 0; i--) {
//     newString.push(tempStr[i]);
//   }
//   return newString.join("");
// }

// SOLUTION 3
// function reverse(str) {
//   str.split("").reduce((reversed, character) => character + reversed, "");
// }

module.exports = reverse;
