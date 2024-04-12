// TODO: cover all test cases and refactor

function avg(arr) {
  let sum = 0;

  if (arr === undefined) {
    return 0;
  }

  if (!Array.isArray(arr)) {
    return "Invalid Input!";
  }

  for (const n of arr) {
    if (typeof n !== "number") {
      return "Invalid Input!";
    }
  }

  let result;
  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  result = sum / arr.length;

  return result;
}
