function double(x) {
  return x * 2;
}

console.log(double(2) === 4);
console.log(double(9) === 18);

function sum(arr) {
  // ...
}

function avg(arr) {
  let sum = 0;

  if (arr === undefined) {
    return 0;
  }

  if (!Array.isArray(arr)) {
    return "Invalid Input !";
  }

  for (const n of arr) {
    if (typeof n !== "number") {
      return "Invalid Input !";
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

  console.log(result);
  return result;
}

console.log(avg([4, 6]) === 5);
console.log(avg([]) === 0);
console.log(avg([8]) === 8);

console.log(avg() === 0, avg());

console.log(avg(["Hello", "Bye"]) === "Invalid Input !");
console.log(avg([true, false]) === "Invalid Input !");
console.log(avg(5) === "Invalid Input !");

undefined.length;
