const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let new_arr = [];
  for(let i=0; i< arr.length; i++)
  {
    switch(arr[i]) {
      case '--discard-next': // исключает следующий за ней элемент исходного массива из преобразованного массива.
        i = (arr[i+2] == '--double-prev' || arr[i+2] == '--discard-prev')? i+2 : i+1;
        break;
      case '--discard-prev': // исключает предшествующий ей элемент исходного массива из преобразованного массива.
        if(new_arr.length) new_arr.pop();
        break;
      case '--double-next': // дублирует следующий за ней элемент исходного массива в преобразованном массиве.
        if(arr[i+1]) {
          new_arr.push(arr[i+1]);
          new_arr.push(arr[i+1]);
          i++;
        }
        break;
      case '--double-prev': //дублирует предшествующий ей элемент исходного массива в преобразованном массиве.
        if(new_arr.length) new_arr.push(new_arr[new_arr.length-1]);
        break;
      default:
        new_arr.push(arr[i]);
        break;
    }
  }
  return new_arr;
}

module.exports = {
  transform
};
