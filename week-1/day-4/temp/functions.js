function sayHello() {
  // return "Ola";

  console.log("Ola");
  console.log("Ola");

  return undefined;
}

console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();

console.log(sayHello);
console.log(sayHello());

const result = sayHello();

console.log(result);

const x = 9;

function doSomething() {
  if (x === 9) {
    return;
  }

  if (x < 10) {
    return "x is less than 10";
  }

  return "I don't know";
}

console.log(doSomething());

const phobias = ["spider", "hights", "avion", "noir", "eau"];

function getPhobia() {
  let result;

  for (const phobia of phobias) {
    result = phobia;

    if (phobia === "avion") {
      break;
    }
  }

  console.log("J'ai d'autres trucs a faire");

  return result;
}

console.log(getPhobia());

function getPhobia2() {
  let result;

  for (const phobia of phobias) {
    result = phobia;

    console.log(result);

    if (phobia === "avion") {
      return "avion found";
    }
  }

  console.log("J'ai d'autres trucs a faire");

  return result;
}

console.log(getPhobia2());

function sayHelloToSomeone(name, msg) {
  console.log(`Hello ${name}`);
  console.log(msg);
}

sayHelloToSomeone("Yassine", "What's up");
sayHelloToSomeone("Ulysse");

// parameter le placeholder
// argument c'est la valeur q'on recois

function double(x) {
  return x * 2;
}

console.log(double(5));

function pow(x, exp) {
  if (typeof exp !== "number") {
    return x;
  }

  return x ** exp;
}

console.log(pow(6, "klkj"));

// spread operator
// variadic function
// function sum(...rest) {
//   console.log(rest);

//   let result = 0;
//   for (let i = 0; i < rest.length; i++) {
//     result += rest[i];
//   }

//   console.log(result);
//   return result;
// }

// sum(5, 6, 6, 6, 6);

function sum2(rest) {
  console.log(rest);

  let result = 0;
  for (let i = 0; i < rest.length; i++) {
    result += rest[i];
  }

  console.log(result);
  return result;
}

sum2([6, 5, 5, 5]);

function getTopTwoPhobias(arr) {
  // can only ever return one thing
  // return [arr[0], arr[1]];
  // return arr[0, 1], arr[1]

  const result = [];

  for (const i in arr) {
    if (i < 3) {
      result.push(arr[i]);
    }
  }

  console.log(result);
  return result;
}

console.log(getTopTwoPhobias(phobias));

function getOnePhobia(phobia) {
  return phobia;
}

let myResult;

const obj = {};

for (let i = 0; i < phobias.length; i++) {
  myResult = getOnePhobia(phobias[i]);
}

console.log(result);

const myNums = [5, 6, 8, 9];

function somme(numbers) {
  let sum = 0;
  for (const n of numbers) {
    sum += n;
  }

  return sum;
}

function moyenne(numbers) {
  return somme(numbers) / numbers.length;
}

function doubleMoyenne(numbers) {
  return moyenne(numbers) * 2;
}

console.log(moyenne(myNums));
