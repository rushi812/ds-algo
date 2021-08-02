// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abcba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {}

module.exports = palindrome;

// SOLUTION 1
// function palindrome(str) {
//   let reversedString = str.split("").reduce((rev, char) => char + rev, "");
//   return reversedString === str;
// }

// SOLUTION 2
// function palindrome(str) {
//   return str.split("").every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }
