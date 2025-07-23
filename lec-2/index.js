function sum(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
// module.exports = {
//   sum,
//   subtract
// };
module.exports.sum = sum;
module.exports.subtract = subtract;
//common js module -- require('fs') -- import fs from 'fs' in ES6
//