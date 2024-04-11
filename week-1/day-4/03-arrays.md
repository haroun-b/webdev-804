# 03. Arrays

**< [Home](../../README.md) / [Week 1](../README.md)**

---

An array is a data structure that can store multiple values. It is a collection of elements, each identified by an index. The index starts at 0 and goes up to the length of the array minus one.

Unlike in objects, the order of the elements in an array is important.

```javascript
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 3, a: 1 };
console.log(abj1.a === obj2.a); // true

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 1];
console.log(arr1[0] === arr2[0]); // false
```

## Creating Arrays

```javascript
// an array can be empty
const emptyArray = [];

// an array can store any type of value
const mixedArray = [1, "two", true, { a: 1 }, [1, 2, 3]];
```

### Matrix

An array can also store other arrays, creating a matrix.

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

## Accessing Elements

```javascript
const phobias = ["spiders", "heights", "planes", "darkness", "water"];

// first element
console.log(phobias[0]); // spiders

// last element
console.log(phobias[phobias.length - 1]); // water
```

## Array Methods

```javascript
const phobias = ["spiders", "heights", "planes", "darkness", "water"];

phobias.push("clowns", "small talk");
console.log(phobias); // ["spiders", "heights", "planes", "darkness", "water", "clowns", "small talk"]

phobias.unshift("lava", "birds");
console.log(phobias); // ["lava", "birds", "spiders", "heights", "planes", "darkness", "water", "clowns", "small talk"]

phobias.pop();
console.log(phobias); // ["lava", "birds", "spiders", "heights", "planes", "darkness", "water", "clowns"]

phobias.shift();
console.log(phobias); // ["birds", "spiders", "heights", "planes", "darkness", "water", "clowns"]

// splice takes two arguments: the index to start at and the number of elements to remove
phobias.splice(2, 4);
console.log(phobias); // ["birds", "spiders", "clowns"]

// splice can also be use to replace an element
phobias.splice(1, 1, "turtles");
console.log(phobias); // ["birds", "turtles", "clowns"]

// slice takes two arguments: the index to start at and the index to end at
const slicedPhobias = phobias.slice(1, 2);
console.log(slicedPhobias); // ["turtles"]

// slice does not modify the original array
console.log(phobias); // ["birds", "turtles", "clowns"]
```

### .forEach()

```javascript
const phobias = ["spiders", "heights", "planes", "darkness", "water"];

phobias.forEach((phobia, index) => {
  console.log(index, phobia);
});

// Logs:
// 0 "spiders"
// 1 "heights"
// 2 "planes"
// 3 "darkness"
// 4 "water"
```

```javascript
// .forEach() can also be used with an arrow function
arr.forEach((element, index) => {
  // ...
});

// or a regular anonymous function
arr.forEach(function (element, index) {
  // ...
});

// or a named function
function myFunction(element, index) {
  // ...
}
arr.forEach(myFunction);
```

## Str.split()

```javascript
const sentence = "I am a sentence";
const words = sentence.split(" ");

console.log(words); // ["I", "am", "a", "sentence"]
```

## Array.prototype.method() vs Array.method()

`Array.prototype.method()` is a method that is available to all arrays. `Array.method()` is a method that is available to the Array object itself.

```javascript
const arr = [1, 2, 3];

// Array.prototype.protoMethod()
arr.protoMethod();

// Array.method()
Array.method(/* arguments */);
arr.method(); // this will throw an error
```
