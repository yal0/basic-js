const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = [];
  n = String(n);
  for(let i = 0; i < n.length; i++) {
    res.push(+(n.slice(0, i) + n.slice(i + 1)));
  }
  return Math.max(...res);
}

module.exports = {
  deleteDigit
};
