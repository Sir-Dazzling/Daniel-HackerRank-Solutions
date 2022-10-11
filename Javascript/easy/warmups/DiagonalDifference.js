function diagonalDifference(arr) {
  let left = 0;
  let right = 0;

  for (let i = 0; i < arr.length; i++) {
    left += arr[i][i];
    right += arr[arr.length - 1 - i][i];
  }

  return Math.abs(left - right);
}
