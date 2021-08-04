// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {}

module.exports = anagrams;

// SOLUTION 1
// function anagrams(stringA, stringB) {
//   const strA = [...stringA.replace(/[^\w]/g, "").toLowerCase()].sort();
//   const strB = [...stringB.replace(/[^\w]/g, "").toLowerCase()].sort();

//   if (strA.length !== strB.length) {
//     return false;
//   }

//   for (let i = 0; i < strA.length; i++) {
//     if (strA[i] !== strB[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// SOLUTION 2 (Using Character maps)
// function anagrams(stringA, stringB) {
//   const charMapA = charMap(stringA);
//   const charMapB = charMap(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }

//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// const charMap = (str) => {
//   const charMap = {};
//   const cleanedStr = str.replace(/[^\w]/g, "").toLowerCase();

//   for (let char of cleanedStr) {
//     charMap[char] = charMap[char]++ || 1;
//   }
//   return charMap;
// };

// SOLUTION 3
// function anagrams(stringA, stringB) {
//   return cleanedString(stringA) === cleanedString(stringB);
// }

// const cleanedString = (str) => {
//   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// };
