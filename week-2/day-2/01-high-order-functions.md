# 01. High Order Functions

**< [Home](../../README.md) / [Week 2](../README.md)**

---

## Function Parameters

Functions can receive arguments of any type. An argument can be a number, a string, an array, an object, or even another function. When a function receives another function as an argument, it is called a high-order function.

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

function getFirstElement(array) {
  return array[0];
}

// numberMultiplier is a high-order function
// it takes a number x and multiplier function as arguments
function numberMultiplier(x, multiplier) {
  return multiplier(x);
}

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

console.log(numberMultiplier(5, double)); // 10
console.log(numberMultiplier(5, triple)); // 15
```

A good way to think about function paramaters is to think of them as variables passed to the function (in other words, as placeholders).

## Ways to Declare Functions

```javascript
// function declaration
function greeter1(greeting, name) {
  return `${greeting}, ${name}!`;
}

// arrow function expression
const greeter2 = (greeting, name) => {
  return `${greeting}, ${name}!`;
};

// anonymous function expression
const greeter3 = function (greeting, name) {
  return `${greeting}, ${name}!`;
};

console.log(greeter1("Hello", "Marie")); // Hello, Marie!
console.log(greeter2("Hello", "Marie")); // Hello, Marie!
console.log(greeter3("Hello", "Marie")); // Hello, Marie!
```

## Callback Functions

When passing a function as argument, we can either pass a function that has been declared before.

```javascript
function quadruple(x) {
  return x * 4;
}

function numberMultiplier(x, multiplier) {
  return multiplier(x);
}

console.log(numberMultiplier(5, quadruple)); // 20
```

Or declare it directly in the argument list. This is done when we know that the callback function will be used only once.

Arrow functions are often used in this case, as they are more concise.

```javascript
function numberMultiplier(x, multiplier) {
  return multiplier(x);
}

// this works. but no need to name the callback
// const result0 = numberMultiplier(5, function quadruple(x) {
//   return x * 4;
// });

const result1 = numberMultiplier(5, function (x) {
  return x * 4;
});
const result2 = numberMultiplier(5, (x) => x * 4);

console.log(result1); // 20
console.log(result2); // 20
```

## Implicit Return in Arrow Functions

Arrow functions can have an implicit `return`. This means that if the function body is a single expression, it will be returned automatically.

```javascript
// implicit return
const double = (x) => x * 2;

// no implicit return. (so this returns undefined)
// const triple = (x) => {x * 3};

// explicit return
const triple = (x) => {
  return x * 3;
};
```

## The Arguments Object

The `arguments` object is an array-like object that contains all the arguments passed to a function. It is not an array, but it can be converted to one.

```javascript
function sum() {
  let total = 0;

  // the arguments could be useful when we want to limit the number of arguments
  if (arguments.length > 99) {
    throw new Error("Too many arguments");
  }

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```
