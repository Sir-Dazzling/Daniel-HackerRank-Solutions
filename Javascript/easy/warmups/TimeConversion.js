function timeConversion(s) {
  let accumulated = "";
  const day = s.substring(s.length - 2);
  const hour = s.substring(0, 2);
  const minute = s.substring(3, 5);
  const second = s.substring(6, 8);

  if (hour === "12") {
    accumulated += `${day === "PM" ? "12" : "00"}`;
  } else {
    accumulated += `${day === "AM" ? hour : Number(hour) + 12}`;
  }

  return accumulated + ":" + minute + ":" + second;
}
