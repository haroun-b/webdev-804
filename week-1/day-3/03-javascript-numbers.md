# 03. JavaScript Numbers

**< [Home](../../README.md) / [Week 1](../README.md)**

---

```javascript
const integer = 42;
const float = 3.14;

const scientificNotation = 1.5e3; // 1500
const scientificNotation2 = 1.5e-3; // 0.0015

const largeNumber = 123_456_789; // 123456789
```

## Math Operations

```javascript
const sum = 1 + 2; // 3
const subs = 5 - 3; // 2
const mult = 2 * 3; // 6
const div = 10 / 2; // 5
const mod = 10 % 3; // 1  also known as remainder
const pow = 2 ** 3; // 8

const increment = 1;
console.log(increment++); // 1 post-increment
console.log(increment); // 2

console.log(++increment); // 3 pre-increment
console.log(increment); // 3

const decrement = 5;
console.log(decrement--); // 5 post-decrement
console.log(decrement); // 4

console.log(--decrement); // 3 pre-decrement
console.log(decrement); // 3

const assignment = 10;
assignment += 5; // 15
assignment -= 5; // 10
assignment *= 2; // 20
assignment /= 2; // 10
assignment %= 3; // 1
assignment **= 3; // 1000
```

## Order of Operations (PEMDAS)

1. **P**arentheses
2. **E**xponents
3. **M**ultiplication and **D**ivision
4. **A**ddition and **S**ubtraction

```javascript
(1 + 2) * 3; // 9
1 + 2 * 3; // 7

3 ** 2 * 2; // 18
3 ** (2 * 2); // 81
```

## Type Coercion

```javascript
/*
  when an addition contains a string and a number,
  JavaScript will convert the number to a string
*/
"55" + 5; // "555"

/*
  for all other operations, JavaScript will convert the string to a number
  since these operations are only valid on numbers
*/
"55" - 5; // 50
"55" * 5; // 275
"55" / 5; // 11
```

```javascript
/* 
NaN is a special value that represents "Not a Number" 
we get NaN when we preform an invalid operation where type coercion is not possible
*/

"Hello" * 2; // NaN
"Hello" / 2; // NaN
```

## Comparison

```javascript
const a = 5;
const b = "5";

a == b; // true compares the values
a === b; // false compares the values and the types

// always use strict equality (===)
```

```javascript
const a = 5;
const b = 10;

a > b; // false
a < b; // true
a <= b; // true
```

### Gotcha!

```javascript
let a = 5;
const b = 10;

a = b; // this is not a comparison, it's an assignment (so be careful)

console.log(a); // 10
```

## Math

The JavaScript `Math` object allows us to perform mathematical tasks on numbers.

```javascript
Math.round(3.14); // 3
Math.round(3.6); // 4

Math.ceil(3.14); // 4
Math.floor(3.14); // 3

Math.sqrt(9); // 3 square root
Math.pow(2, 3); // 8 same as 2 ** 3

Math.random(); // random number between 0 and 1

const arr = ["Yassine", "Guillaume", "Marie", "Claire", "Ulysse"];

const randomNum = Math.random() * arr.length;
const randomInt = Math.floor(randomNum);

arr[randomInt]; // random name from the array

Math.min(1, 2, 3, 4, 5); // 1
Math.max(1, 2, 3, 4, 5); // 5
```

## toFixed

```javascript
const num = 3.14159265359;

num.toFixed(2); // "3.14" returns a string 🤷

// so don't forget to convert it back to a number if needed
Number(num.toFixed(2)); // 3.14
```

## Float Precision

```javascript
0.1 + 0.2 === 0.3; // false

0.1 + 0.2; // 0.30000000000000004

0.1 + 0.2 - 0.3 < Number.EPSILON; // true
```

**Number.EPSILON** is a constant that represents the difference between 1 and the smallest floating point number greater than 1.

More on EPSILON [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON).

## Infinity

```javascript
2 ** 1024; // Infinity

Number.MAX_VALUE; // 1.7976931348623157e+308
```

We can check if a number in finite by doing: `Number.isFinite(n)`.

More on MAX_VALUE [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE).

More on isFinite [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite).

## External Resources

- [Representing Numbers and Letters with Binary](https://www.youtube.com/watch?v=1GSjbWt0c9M)
- [Floating Point Numbers - Computerphile](https://www.youtube.com/watch?v=PZRI1IfStY0)
