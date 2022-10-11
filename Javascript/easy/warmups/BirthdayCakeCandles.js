function birthdayCakeCandles(candles) {
  let sortedArr = candles.sort((a, b) => a - b);
  let max = Math.max(...sortedArr);
  let count = 0;

  while (sortedArr.includes(max)) {
    count++;
    sortedArr.pop();
  }

  return count;
}
