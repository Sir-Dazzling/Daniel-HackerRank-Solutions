/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 *
 *
 */

// I sorted first
// used slice to get first four elements
// used slice again to get last four elements
// reduce thier sume and print

function miniMaxSum(arr) {
  let sortedArr = [...arr].sort((a, b) => a - b);
  let minArr = sortedArr.slice(0, sortedArr.length - 1);
  let maxArr = sortedArr.slice(1, sortedArr.length);

  function sumArr(arr) {
    return [...arr].reduce((prev, current) => prev + current);
  }

  console.log(`${sumArr(minArr)} ${sumArr(maxArr)}`);
}

// Cleaner approach
// Find the sum of the array
// Get the min/max values of array with Math.min and Math.max functions
// Gte lowest sum by sum - max and highest sum by sum - min
function miniMaxSum(arr) {
  let sum = arr.reduce((prev, current) => prev + current);
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  console.log(`${sum - max} ${sum - min}`);
}
