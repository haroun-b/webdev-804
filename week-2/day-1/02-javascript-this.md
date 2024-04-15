# 02. JavaScript `this`

**< [Home](../../README.md) / [Week 2](../README.md)**

---

The `this` keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where `this` refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

```javascript
console.log(this); // logs: Window in the browser, Global in Node.js

function logThis() {
  console.log(this);
}

logThis(); // logs: Window in the browser, Global in Node.js
```

```javascript
const human = {
  name: "John",
  age: 30,
  logThis: function () {
    console.log(this);
  }
};

human.logThis(); // logs: { name: 'John', age: 30, logThis: λ }
```

```javascript
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  logThis() {
    console.log(this);
  }
}

const john = new Human("John", 30);
john.logThis(); // logs: Human { name: 'John', age: 30 }
```

```javascript
const shapes = {
  square: {
    name: "Square",
    side: 8,
    logSquare() {
      console.log(this);
    }
  },
  circle: {
    name: "Circle",
    radius: 10,
    logCircle() {
      console.log(this);
    }
  },
  logShapes() {
    console.log(this);
  }
};

shapes.square.logSquare(); // logs: { name: 'Square', side: 8, logSquare: λ }
shapes.circle.logCircle(); // logs: { name: 'Circle', radius: 10, logCircle: λ }

shapes.logShapes(); // logs: { square: { name: 'Square', side: 8, logSquare: λ }, circle: { name: 'Circle', radius: 10, logCircle: λ }, logShapes: λ }
```

```javascript
const a = {
  name: "AAAAAAAA",
  log1: function () {
    console.log(this);
  },
  // AVOID using arrow functions for object methods
  log2: () => {
    console.log(this);
  },
  log3() {
    console.log(this);
  }
};

a.log1(); // logs: { name: 'AAAAAAAA', log1: λ, log2: λ, log3: λ }
a.log2(); // logs: Window in the browser, Global in Node.js
a.log3(); // logs: { name: 'AAAAAAAA', log1: λ, log2: λ, log3: λ }
```

## function.call(), function.apply(), function.bind()

The `call()`, `apply()`, and `bind()` function methods are used to set the value of `this` explicitly.

```javascript
function sayHello() {
  console.log(`Hello, ${this.name}!`);
}

function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const human = {
  name: "Bob"
};

const cat = {
  name: "Sekotin"
};

sayHello.call(human); // logs: Hello, Bob!
sayHello.call(cat); // logs: Hello, Sekotin!

sayHello.apply(human); // logs: Hello, Bob!
sayHello.apply(cat); // logs: Hello, Sekotin!

greet.call(human, "Good morning"); // logs: Good morning, Bob!
greet.call(cat, "Good morning"); // logs: Good morning, Sekotin!

greet.apply(human, ["Good morning"]); // logs: Good morning, Bob!
greet.apply(cat, ["Good morning"]); // logs: Good morning

const greetBob = greet.bind(human);

greetBob("Good morning"); // logs: Good morning, Bob!
greetBob("Good afternoon"); // logs: Good afternoon, Bob!
```

`apply()` and `call()` are similar, but `apply()` takes an array of arguments, while `call()` takes a comma-separated list of arguments.

`bind()` returns a new function with the value of `this` set to the provided value. It does not call the function immediately, but it can be called later.

```javascript
const sayHello = () => {
  console.log(`Hello, ${this.name}!`);
};

const human = {
  name: "Bob"
};

const cat = {
  name: "Sekotin"
};

sayHello.call(human); // logs: Hello, undefined!
sayHello.call(cat); // logs: Hello, undefined!

sayHello.apply(human); // logs: Hello, undefined!
sayHello.apply(cat); // logs: Hello, undefined!

const greetBob = sayHello.bind(human);
greetBob(); // logs: Hello, undefined!
```

`.call()`, `.apply()`, and `bind()` do not work with arrow functions.
