const arr = [5, 6, 9, 8, "hello", { a: "1" }, [5, 5, 5]];
const numbers = [5, 9, 6];

const posX = [2, 3, 5];
const posXY = [
  [2, 2, 3],
  [3, 1, 5]
];

const obj = {
  a: 8,
  b: 9
};

const obj1 = {
  b: 9,
  a: 8
};

const arr1 = [8, 9];
const arr2 = [9, 8];

obj.a === obj1.a;

arr1[0] === arr2[0];

for (const el of arr) {
  console.log(el);
}

console.log(arr.length);
arr.forEach(function () {
  console.log("hello");
});

// function (x) {}
// (x) => {}

arr.forEach(() => {
  console.log("hello");
});

const phobias = ["spider", "hights", "avion", "noir", "eau"];

/* .forEach(
(e) => {}
)
*/

function logger(x) {
  console.log(x);
}

phobias.forEach(logger);

phobias.forEach(function (x, i) {
  console.log(x, i);
});

// arr.forEach((x)=> {})

function fakeForEach(func) {
  for (const el of arr) {
    func(el);
  }
}

phobias.push("snakes");
console.log(phobias);

phobias.unshift("clowns", "small talk");
console.log(phobias);

phobias.pop();
console.log(phobias);

phobias.shift();
console.log(phobias);

phobias.push("lava", "birds");
console.log(phobias);

console.log(phobias.slice(0, 3));

console.log(phobias);

console.log(phobias.splice(1, 1, "turtles"));

console.log(phobias);
console.log(phobias.slice());

["Hello"];
// Array.prototype.sayHi = () => console.log("Hello");

// Array.from()[(5, 9)].from;

const obj3 = { a: 5, b: 9 };

obj3.a;

Object.keys(obj3);

const str = "Hello World Goodbye";

console.log(str.split(", "));
