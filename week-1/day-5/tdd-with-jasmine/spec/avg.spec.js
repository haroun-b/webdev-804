// TODO: convert the console.log tests bellow to jasmine tests and add more test cases. make sure to follow the red-green-refactor approach

describe("avg function test", () => {
  it("should return the average when passed an array of numbers", () => {
    expect(avg([4, 6])).toBe(5);
    expect(avg([5, 8, 2])).toBe(5);
  });

  it("should return the number when passed an array with one number", () => {
    expect(avg([8])).toBe(8);
  });

  it("should return zero when passed an empty array", () => {
    expect(avg([])).toBe(0);
  });

  it("should return 0 when called without arguments", () => {
    expect(avg()).toBe(0);
  });
});

/*
console.log(avg([4, 6]) === 5);
console.log(avg([8]) === 8);
console.log(avg([]) === 0);
console.log(avg() === 0, avg());

console.log(avg(["Hello", "Bye"]) === "Invalid Input!");
console.log(avg([true, false]) === "Invalid Input!");
console.log(avg(5) === "Invalid Input!");
*/
