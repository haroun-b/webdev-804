# 03. Async, Timeout and Interval

**< [Home](../../README.md) / [Week 2](../README.md)**

---

## `setTimeout`

`setTimeout` is a function that allows us to run a function after a certain amount of time has passed. It takes a callback as a first argument and a time in milliseconds as a second argument.

```javascript
setTimeout(() => {
  console.log("Hello, World!");
}, 2000);
```

**This will log "Hello, World!" after 2 seconds.**

## `setInterval`

`setInterval` is a function that allows us to run a function repeatedly after a certain amount of time has passed. It takes a callback as a first argument and a time in milliseconds as a second argument.

```javascript
setInterval(() => {
  console.log("Hello, World!");
}, 1000);
```

**This will log "Hello, World!" every second.**

## Async Code

JavaScript is a single-threaded language, which means it can only do one thing at a time. However, it can handle asynchronous code using callbacks, promises, and async/await.

`setTimeout` and `setInterval` are examples of asynchronous code. They allow us to run code after a certain amount of time has passed without blocking the main thread.

```javascript
function logger() {
  console.log("logging...");

  console.log("still logging....");
}

console.log("one");

setTimeout(() => {
  console.log("two");
}, 2000);

logger();

console.log("three");

setInterval(() => {
  console.log("from interval");
}, 1000);

setTimeout(() => {
  console.log("four");
}, 0);

console.log("five");
```

**This will log:**

```
one
logging...
still logging....
three
five
four
from interval
two
from interval
from interval
... (from interval every second)
```

From this example example we see that all syncronous code is executed first, then the asynchronous code is executed in order of time set.

## `clearTimeout` and `clearInterval`

`setTimeout` and `setInterval` return an ID that can be used to stop the timer using `clearTimeout` and `clearInterval` respectively.

```javascript
const timeoutId = setTimeout(() => {
  console.log("Hello, World!");
}, 2000);

clearTimeout(timeoutId);
```

```javascript
const intervalId = setInterval(() => {
  console.log("Hello, World!");
}, 1000);

clearInterval(intervalId);
```

**This allows us to cancel an action using a `setTimeout`**

```javascript
const timeoutId = setTimeout(() => {
  sendEmail();
}, 2000);

cancelButton.addEventListener("click", () => {
  clearTimeout(timeoutId);
});
```

**We can also run an interval for a certain amount of time**

```javascript
const intervalId = setInterval(() => {
  doSomething();
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
```

## Exercise

- Extend the [duck tickler game](../day-3/duck-tickler/) we did on day 3 to include a timer that ends the game after a certain amount of time.
- Add a game over message when the timer ends.
- Allow the user to restart the game, and reset the game state when the game is restarted.
