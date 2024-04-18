# 01. Scope, Hoisting, and Shadowing

**< [Home](../../README.md) / [Week 2](../README.md)**

---

**DO NOT USE `var`**
**You might see `var` in some older code, so it's important to understand how it works. However, you should always use `let` and `const`.**

## Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.

### Function Hoisting

Function declarations are hoisted to the top of their containing scope. Allowing us to call the function before it is declared.

```javascript
sayHi(); // Hi!

function sayHi() {
  console.log("Hi!");
}
```

### Variable Hoisting

Variable declarations are also hoisted to the top of their containing scope. However, only the declaration is hoisted, not the initialization.

#### `let` and `const`

```javascript
console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // ReferenceError: Cannot access 'b' before initialization

const a = 1;
let b = 2;
```

#### `var`

```javascript
console.log(a); // undefined

var a = 1;
```

## Scope

Scope is the context in which a variable is declared. It determines the visibility and lifetime of a variable.

### `const` and `let`

`const` and `let` are block-scoped variables. Meaning they can only be accessed within the block they are declared in and any nested blocks.

Variables declared using `const` and `let` cannot be accessed from the parent block.

```javascript
{
  const a = 1;

  {
    const b = 2;

    console.log(a); // 1
    console.log(b); // 2
  }

  console.log(a); // 1
  console.log(b); // ReferenceError: b is not defined
}

function foo() {
  const c = 3;

  if (true) {
    const d = 4;

    console.log(c); // 3
    console.log(d); // 4
  }

  console.log(c); // 3
  console.log(d); // ReferenceError: d is not defined
}

console.log(a); // ReferenceError: a is not defined
console.log(c); // ReferenceError: c is not defined
```

### `var`

Variables declared using `var` on the other hand are function-scoped. Meaning they can be accessed anywhere within the function they are declared in.

```javascript
function foo() {
  var a = 1;

  if (true) {
    var b = 2;

    console.log(a); // 1
    console.log(b); // 2
  }

  console.log(a); // 1
  console.log(b); // 2
}

console.log(a); // ReferenceError: a is not defined
```

## Shadowing

Shadowing occurs when a variable declared in an inner scope has the same name as a variable declared in an outer scope.

```javascript
const a = 1;

{
  const a = 2;

  console.log(a); // 2
}
```

In the example above, the inner variable `a` shadows the outer variable `a`.

```javascript
const a = 1;

function foo() {
  cosnt a =2;

  if (true) {
    const a = 3;

    if (true) {
      const a = 4;
      console.log(a); // 4
    }

    console.log(a); // 3
  }

  console.log(a); // 2
}

console.log(a); // 1
```

When shadowing, the closest variable is used. If the variable is not found in the current scope, the next closest variable is used.
