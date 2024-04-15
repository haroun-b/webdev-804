// const animal = {
//   name: "",
//   species: "",
//   numberOfLegs: 4,
//   birthYear: 2024
// };

// valid ways to declare an object method
const animal = {
  sleep1: function () {
    console.log("zzzzzzzzzzzzz");
  },
  sleep2: () => {
    console.log("zzzzzzzzzzzzz");
  },
  sleep3() {
    console.log("zzzzzzzzzzzzz");
  }
};

function buildAnimal(name, species, numberOfLegs, birthYear) {
  // return {
  //   name: name,
  //   numberOfLegs: numberOfLegs,
  //   birthYear: birthYear
  // };

  // when the property name is the same, no need to repeat it
  return {
    name,
    species,
    numberOfLegs,
    birthYear,
    // when a function is inside an object, we call it a method
    sleep: function () {
      console.log("zzzzzzzzzzzzzzz");
    }
  };
}

function buildCat(name, birthYear = 2024) {
  // return {
  //   name,
  //   numberOfLegs: 4,
  //   birthYear,
  //   favThing: "Basking in the sun",
  //   sleep() {
  //     console.log("zzzzzzzzzzzzzzz");
  //   }
  // };

  // if (birthYear == undefined) {
  //   birthYear = 2024;
  // }

  const newCat = buildAnimal(name, "Cat", 4, birthYear);
  newCat.favThing = "Basking in the sun";
  newCat.favFood = "Fish";

  newCat.showLove = function () {
    console.log("Vomir une boule de poile sur l'oreiller");
  };

  return newCat;
}

// classes

class Animal {
  #name;
  constructor(name, species, numberOfLegs, birthYear) {
    this.needsFood = true;

    this.#name = name;
    this.species = species;
    this.numberOfLegs = numberOfLegs;
    this.birthYear = birthYear;

    // this.sleep = function () {
    //   console.log("zzzzzzzzzzzzzzzzzzzz");
    // };
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    if (typeof newName !== "string") {
      return;
    }

    this.#name = newName;
  }

  sleep() {
    console.log(`${this.name} is sleeping zzzzzz`);
  }
}

class Cat extends Animal {
  #humansName = "Tuna can opener";

  constructor(name, birthYear) {
    super(name, "Cat", 4, birthYear);

    // this.sleep = function () {
    //   console.log("zzzzzzzzzzzzzzzzzzzz");
    // };
  }

  favFood = "Fish";
  favThing = "Basking in the sun";

  showLove() {
    console.log("Vomir une boule de poile sur l'oreiller");
  }

  #getMood() {
    return Math.random() > 0.5 ? "good" : "bad";
  }

  displayMood() {
    if (this.#getMood() === "good") {
      console.log("Brrrrrrrrrrrrrrrrrrrr...");
    } else {
      console.log("Hsssssssssssssssss...");
    }
  }

  static combineCatNames(catArr) {
    let result = "";

    for (const cat of catArr) {
      result += cat.name;
    }

    return result;
  }
}

const sekotin = new Cat("Sekotin", 2023);
const fifi = new Cat("Fifi");
const mimi = new Cat("Mimi");

Cat.combineCatNames([sekotin, fifi, mimi]);
// sekotin.combineCatNames()

console.log(sekotin.name);
sekotin.name = "Bob";
console.log(sekotin.name);
sekotin.name = 65;
console.log(sekotin.name);
sekotin.name = "Bob";

console.log(sekotin);

// sekotin.#getMood();
sekotin.displayMood();
// sekotin.#getMood();

// sekotin.sleep();

// const square = {
//   sideLength: 4,
//   area() {
//     return this.sideLength ** 2;
//   }
// };

class Vehicle {
  constructor(make, model, numberOfWheels) {
    this.make = make;
    this.model = model;
    this.numberOfWheels = numberOfWheels;
  }

  start() {
    console.log(`${this.make}-${this.model} has started...`);
  }
  stop() {
    console.log(`${this.make}-${this.model} has stopped...`);
  }
  static crush() {
    console.log("Oh nooooooo!");
  }
}

class Car extends Vehicle {
  #trunkCapacity;

  constructor(make, model, trunkCapacity) {
    super(make, model, 4);

    this.#trunkCapacity = trunkCapacity;
  }

  openTrunk() {
    console.log(`${this.make}-${this.model} trunk opened`);
  }

  closeTrunk() {
    console.log(`${this.make}-${this.model} trunk closed`);
  }
}

class Bike extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }

  doWheely() {
    console.log(`${this.make}-${this.model} doing wheely`);
  }
}

// prototype

// console.log(Array.prototype, new Array())
Vehicle.prototype.start();
// Vehicle.prototype.crush();
Vehicle.crush();

const myVehicle = new Vehicle("Space300", "X55", 0);

// console.log(myVehicle.__proto__ === Vehicle.prototype);

// console.log(Car.__proto__ === Vehicle.prototype);

// console.log(Car.__proto__ === Vehicle);
// console.log(Car.__proto__.prototype === Vehicle.prototype);

console.log(myVehicle instanceof Vehicle);
console.log(Car.prototype instanceof Vehicle);
