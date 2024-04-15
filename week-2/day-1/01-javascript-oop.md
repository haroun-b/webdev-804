# 01. Object Oriented Programming

**< [Home](../../README.md) / [Week 2](../README.md)**

---

## Object Methods

We can store function in an object as a property. These functions are called methods.

```javascript
// all these are valid ways to define an object method
const animal = {
  sleep1: function () {
    console.log("zzzzzzzzzzzzz");
  },
  sleep2: () => {
    console.log("zzzzzzzzzzzzz");
  },
  // this is the recommended way
  sleep3() {
    console.log("zzzzzzzzzzzzz");
  }
};
```

## Object Factories

We can create objects using a factory function.

```javascript
function createAnimal(name, species, numberOfLegs, birthYear) {
  // return {
  //   name: name,
  //   species: species,
  //   numberOfLegs: numberOfLegs,
  //   birthYear: birthYear
  // };

  // when the property name is the same, no need to repeat it
  return {
    name,
    species,
    numberOfLegs,
    birthYear,
    sleep() {
      console.log("zzzzzzzzzzzzzzz");
    }
  };
}
```

We can also extend the animal factory and create a cat factory.

```javascript
function createCat(name, birthYear) {
  const newCat = createAnimal(name, "Cat", 4, birthYear);

  newCat.favThing = "Basking in the sun";
  newCat.favFood = "Fish";
  newCat.showLove = function () {
    console.log("Vomir une boulle de poile sur l'oreiller");
  };

  return newCat;
}
```

## Classes

```javascript
class Animal {
  constructor(name, species, numberOfLegs, birthYear) {
    this.name = name;
    this.species = species;
    this.numberOfLegs = numberOfLegs;
    this.birthYear = birthYear;
  }

  sleep() {
    console.log("zzzzzzzzzzzzzzz");
  }
}

// extends is used to inherit from another class
class Cat extends Animal {
  constructor(name, birthYear) {
    // super is used to call the constructor of the parent class
    super(name, "Cat", 4, birthYear);

    this.favThing = "Basking in the sun";
    this.favFood = "Fish";
  }

  showLove() {
    console.log("Vomir une boulle de poile sur l'oreiller");
  }

  sleep() {
    console.log(`${this.name} is sleeping...`);
  }

  // static methods are called on the class itself
  static combineCatNames(catArr) {
    let catNames = "";

    for (const cat of catArr) {
      catNames += cat.name;
    }

    console.log(catNames);
  }
}

const cat1 = new Cat("Mittens", 2018);
const cat2 = new Cat("Whiskers", 2019);
const cat3 = new Cat("Fluffy", 2020);

cat1.sleep(); // logs: Mittens is sleeping...
cat2.sleep(); // logs: Whiskers is sleeping...
cat3.sleep(); // logs: Fluffy is sleeping...

// static methods are called on the class itself
Cat.combineCatNames([cat1, cat2, cat3]); // logs: MittensWhiskersFluffy

// because combineCatNames is a static method, it can't be called on an instance
cat1.combineCatNames([cat1, cat2, cat3]); // TypeError: cat1.combineCatNames is not a function
```

## Private / Getters and Setters

To make a property or method private, we prefix it with a `#`. Private properties can only be accessed within the class.

We can allow restricted access to private properties using getters and setters.

```javascript
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
}

class Car extends Vehicle {
  #trunkCapacity; // private property
  #occupiedTrunkSpace = 0; // private property

  constructor(make, model, trunkCapacity) {
    super(make, model, 4);

    this.#trunkCapacity = trunkCapacity;
  }

  get trunkCapacity() {
    return this.#trunkCapacity;
  }

  set trunkCapacity(newCapacity) {
    if (newCapacity > this.#trunkCapacity) {
      console.log("Increasing capacity is not allowed");
      return;
    }

    this.#trunkCapacity = newCapacity;
  }

  get availableTrunkSpace() {
    return this.#trunkCapacity - this.#occupiedTrunkSpace;
  }

  addItemToTrunk(itemSize) {
    if (this.#occupiedTrunkSpace + itemSize > this.#trunkCapacity) {
      console.log("Not enough space in the trunk");
      return;
    }

    this.#occupiedTrunkSpace += itemSize;
  }

  emptyTrunk() {
    this.#occupiedTrunkSpace = 0;
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

  // private method. only accessible within the class
  #isWheelieSuccessful() {
    return Math.random() > 0.5;
  }

  doWheely() {
    if (this.#isWheelieSuccessful()) {
      console.log(`${this.make}-${this.model} doing wheely`);
    } else {
      console.log(`${this.make}-${this.model} wiped out`);
    }
  }
}

// Car
const car1 = new Car("Toyota", "Corolla", 100);

car1.trunkCapacity = 200; // logs: Increasing capacity is not allowed
console.log(car1.trunkCapacity); // logs: 100

car1.trunkCapacity = 80;
console.log(car1.trunkCapacity); // logs: 80

car1.addItemToTrunk(50);
console.log(car1.availableTrunkSpace); // logs: 30

car1.addItemToTrunk(40); // logs: Not enough space in the trunk
car1.emptyTrunk();
console.log(car1.availableTrunkSpace); // logs: 80

// Bike
const bike1 = new Bike("Yamaha", "R1");

bike1.doWheely(); // logs: Yamaha-R1 doing wheely
bike1.doWheely(); // logs: Yamaha-R1 wiped out
```

## Inheritance

We can think of `prototype` as a blueprint for an object. When we instantiate a class, the **class instance** ie **object** inherits the properties and methods from the class's **prototype**.

```javascript
const myVehicle = new Vehicle("Space300", "X55", 0);

// __proto__ is deprecated. So, AVOID using it
// console.log(myVehicle.__proto__ === Vehicle.prototype); // logs: true

// console.log(Car.__proto__ === Vehicle.prototype); // logs: false
// console.log(Car.__proto__ === Vehicle); // logs: true
// console.log(Car.__proto__.prototype === Vehicle.prototype); // logs: false

console.log(myVehicle instanceof Vehicle); // logs: true

console.log(Car instanceof Vehicle); // logs: false
console.log(Car.prototype instanceof Vehicle); // logs: true
```
