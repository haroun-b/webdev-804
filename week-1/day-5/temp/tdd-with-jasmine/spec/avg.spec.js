describe("avg function test", () => {
  it("should return avg when passed a valid array", () => {
    expect(avg([4, 6])).toBe(5);
  });

  it("should return zero when passed an empty array", () => {
    expect(avg([])).toBe(0);
  });

  it("should return the number when passed an array with one number", () => {
    expect(avg([8]))
      .not()
      .toBe(0);
  });

  it("should throw 'Invalid Input !' when arr is undefined", () => {
    expect(avg()).toThrow("Invalid Input !");
  });
});
