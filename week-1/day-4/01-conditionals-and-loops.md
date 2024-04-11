# 01. Conditionals and Loops

**< [Home](../../README.md) / [Week 1](../README.md)**

---

## Branching

Conditional statements are used to perform different actions based on different conditions. We call these conditions `branches`.

### If...Else

```javascript
const x = 6;

if (x > 5) {
  console.log("X is greater than 5"); // this will be executed
}

if (x > 3) {
  console.log("X is greater than 3"); // this will be executed
} else if (x > 2) {
  console.log("X is greater than 2");
} else {
  // this block is executed if none of the above conditions are true
  console.log("X is less than or equal to 2");
}
```

In a conditional block, once one of the conditions is met, the rest of the conditions are not checked.

#### Nesting

Conditional statements can be nested inside each other. This is useful but should be avoided when possible to keep code readable.

```javascript
const x = 13;

if (x > 10) {
  if (x < 16) {
    console.log("X is between 10 and 16");
  }
}

if (16 > x && 10 < x) {
  console.log("X is between 10 and 16");
}
```

### Switch

```javascript
const favPet = "Wolf";

if (favPet === "Dog") {
  console.log("Woof");
} else if (favPet === "Bird") {
  console.log("Coucou");
} else if (favPet === "Cat") {
  console.log("Meow");
} else {
  console.log("I don't know this animal");
}

switch (favPet) {
  case "Dog": // if favPet is "Dog" or "Wolf"
  case "Wolf":
    console.log("Woof");
    break; // remember to break after each case
  case "Bird":
    console.log("Coucou");
    break;
  case "Cat":
    console.log("Meow");
    break;

  default:
    console.log("I don't know this animal");
    break;
}
```

### If...Else vs Switch

In a `switch` statement, we always compare a single value to multiple cases.

```javascript
if (/* ifCondition */) {
  // do something
}

// switchCondition = valueToCheck === value1
switch (/* valueToCheck */) {
  case /* value1 */:
    // do something
    break;
}
```

We can achieve use a `switch` in a way that is similar to an `if...else` by doing the following:

```javascript
// NOT RECOMMENDED. AVOID THIS PATTERN
switch (true) {
  case /* ifCondition */:
    // do something
    break;
}
```

### Ternary Operator

```javascript
let x;

if (condition) {
  x = "something";
} else {
  x = "something else";
}

// is equivalent to
const y = condition ? "something" : "something else";

// using the ternary has the added benefit of our variable being declared as a constant
```

## Loops

### While

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++; // don't forget to increment the counter
}

// infinite loop
while (true) {
  console.log("I will run forever");
}

let j = 0;
while (j < 5) {
  console.log(j); // I will also run forever
}
```

### Do...While

Do while loops shoot first, ask questions later. Meaning the block of code is executed at least once before the condition is checked.

```javascript
let i = 5;

do {
  console.log(i); // this will run once logging 5
  i++;
} while (i < 5);
```

### For

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // logs 0, 1, 2, 3, 4
}

// we can also use for loops to iterate backwards
for (let i = 5; i > 0; i--) {
  console.log(i); // logs 5, 4, 3, 2, 1
}
```

### For...Of

```javascript
const nums = [1, 2, 3, 4, 5];

for (const num of nums) {
  console.log(num);
}
```

### For...In

```javascript
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(key, obj[key]);
}

// we can also use for...in with arrays
const arr = [1, 2, 3, 4, 5];

for (const index in arr) {
  console.log(index, arr[index]);
}
```

### Break and Continue

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // stops the loop
  }

  console.log(i); // logs 0, 1, 2
}

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // skips the current iteration
  }

  console.log(i); // logs 0, 1, 2, 4
}
```
