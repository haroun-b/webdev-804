// let myLet;
// const myConst;
// var myVar = undefined;

// console.log(otherVariable);
// console.log(myLet);
// console.log(myConst)

console.log(myVar);

let myLet = 42;
const myConst = 99;

var myVar = 66;
myVar = 99;

console.log(myVar);

sayHello();

function sayHello() {
  console.log("Hello");
}

// scope

const x = 24;

function myFunc() {
  const x = 68;

  if (true) {
    const x = 9;

    if (true) {
      const x = 88;

      console.log(x);
    }
  }
}

function myFunc2() {
  const x = 14;

  if (true) {
    const x = 12;
  }

  console.log(x);
}

function myFunc3() {
  if (true) {
    if (true) {
      var x = 88;
    }
  }

  console.log(x);
}

myFunc();
myFunc2();
myFunc3();
