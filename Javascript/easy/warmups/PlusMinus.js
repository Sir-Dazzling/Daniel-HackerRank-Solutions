function plusMinus(arr) {
  // Write your code here
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  arr.forEach((value) => {
    if (value > 0) {
      positiveCount++;
    } else if (value < 0) {
      negativeCount++;
    } else zeroCount++;
  });

  console.log((positiveCount / arr.length).toFixed(6));
  console.log((negativeCount / arr.length).toFixed(6));
  console.log((zeroCount / arr.length).toFixed(6));
}
