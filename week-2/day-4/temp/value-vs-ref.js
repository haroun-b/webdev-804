// const a = 5;
// let b = a;

// b = 6;

// console.log(a, b);

// const obj1 = { a: 5, b: 6 };
// const obj2 = obj1;

// obj2.b = 9;

// console.log(obj1, obj2);

const a = {
  x: 1,
  y: 2,
  j: {
    i: 8
  }
};

const b = a;

const z = {
  x: 1,
  y: 2
};

const aClone = { ...a };

aClone.x = 9;
console.log(a, aClone);

aClone.j.i = 88;

console.log(a, aClone);

// deep
const deepA = JSON.parse(JSON.stringify(a));
const deepA2 = structuredClone(a);

console.log(typeof deepA);
console.log(deepA2);
