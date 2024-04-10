# 04. JavaScript Logical Operators

**< [Home](../../README.md) / [Week 1](../README.md)**

---

- `&&` Logical AND
- `||` Logical OR
- `!` Logical NOT

```javascript
const isTrue = true;
const isFalse = false;

console.log(isTrue && isFalse); // false
console.log(isTrue || isFalse); // true
console.log(!isTrue); // false
```

## Truthy and Falsy

In JavaScript, every value can be evaluated as either `true` or `false`. The following values are considered `falsy`:

- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

All other values are considered `truthy`.

We can check if a value is `truthy` or `falsy` doing `Boolean(value)`.

## Short-circuit evaluation

### `&&` Logical AND

The `&&` operator returns the first falsy value or the last value if all are truthy.

```javascript
console.log(5 && true && "Hello"); // "Hello"
console.log(5 && false && "Hello"); // false
```

### `||` Logical OR

The `||` operator returns the first truthy value or the last value if all are falsy.

```javascript
console.log(5 || true || "Hello"); // 5
console.log(false || null || 0); // 0
```
