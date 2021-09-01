// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const widths = [0];
  const pointer = "s";
  const arr = [root, pointer];

  while (arr.length > 1) {
    const node = arr.shift();
    if (node === pointer) {
      widths.push(0);
      arr.push(pointer);
    } else {
      arr.push(...node.children);
      widths[widths.length - 1] += 1;
    }
  }
  return widths;
}

module.exports = levelWidth;
