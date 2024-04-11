console.log("Step 1");
console.log("Step 2");

const x = 6;

if (x > 5) {
  console.log("X is greater than 5");
}

if (x > 3) {
  console.log("X is greater than 3");
} else if (x > 2) {
  console.log("X is greater than 2");
}

// x === x > 5 || x === x > 3

let y;

console.log(x < y === (y === 5));

switch (true) {
  case x > 5:
    console.log("X is greater than 5");
    break;
  // case y === 3:
  //   console.log("X is greater than 3");
  //   break;
  // case x > 2:
  //   console.log("X is greater than 2");

  // default:
  //   console.log("hello from default");
  //   break;
}

const favPet = "Wolf";

if (favPet === "Dog") {
  console.log("Woof");
} else if (favPet === "Bird") {
  console.log("Coucou");
} else if (favPet === "Cat") {
  console.log("Meow");
}

switch (favPet) {
  case "Dog":
  case "Wolf":
    console.log("Woof");
    break;
  case "Bird":
    console.log("Coucou");
    break;
  case "Cat":
    console.log("Meow");
    break;

  default:
    console.log("This is like an else");
    break;
}

console.log("Step 3");

const z = 13;

if (z > 10) {
  if (z < 16) {
    console.log("X is between 10 and 16");
  }
}

if (16 > z && 10 < z) {
  console.log("X is between 10 and 16");
}

let j;

if (z > 10) {
  j = 5;
} else {
  j = 0;
}

const k = z > 10 ? 5 : 0;

// loops
// while

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

console.log(i);

do {
  console.log(i);
  i++;
} while (i < 10);

// for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let j = 10; j > 0; j--) {
  console.log(j);
}

const phobias = ["spider", "hights", "avion", "noir", "eau"];

for (let i = 0; i < phobias.length; i++) {
  console.log(phobias[i]);
  console.log(i);
}

for (const phobia of phobias) {
  console.log(phobia);

  if (phobia === "avion") {
    break;
  }
}

for (const phobia of phobias) {
  if (phobia === "hights") {
    //this is a guard clause
    continue;
  }

  console.log(phobia);
}

for (const phobia of phobias) {
  if (phobia !== "hights") {
    console.log(phobia);
  }
}

const obj = {
  x: 8,
  y: 9,
  z: 10
};

console.log(obj.x);

for (const k in obj) {
  console.log(k, obj[k]);
}

for (const z in phobias) {
  console.log(z, phobias[z]);
}
