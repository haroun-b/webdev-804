# 01. Destructuring

**< [Home](../../README.md) / [Week 4](../README.md)**

---

## Object Destructuring

Object destructuring is a shorthand syntax that allows us to extract multiple properties from an object and assign them to variables in a single statement.

```javascript
const identity = {
  name: {
    firstName: "Tina",
    lastName: "Belcher"
  },
  isStudent: true,
  favouriteBand: "Boys4Now",
  hometown: {
    city: "Wonder Wharf",
    country: "USA"
  }
};

const { name, isStudent, favouriteBand } = identity;
// this is equivalent to
// const name = identity.name;
// const isStudent = identity.isStudent;
// const favouriteBand = identity.favouriteBand;

console.log(name); // { firstName: 'Tina', lastName: 'Belcher' }
console.log(isStudent); // true
console.log(favouriteBand); // 'Boys4Now'
```

### Nested Object Destructuring

```javascript
const {
  name: { firstName, lastName },
  hometown: { city, country }
} = identity;

console.log(firstName); // 'Tina'
console.log(lastName); // 'Belcher'
console.log(city); // 'Wonder Wharf'
console.log(country); // 'USA'
```

### Renaming Destructured Properties

To avoid naming conflicts with existing variables, we can rename the properties when destructuring.

```javascript
const favouriteBand = "The Mud Stains";

const { favouriteBand: tinasFavouriteBand } = identity;

// this is equivalent to
// const tinasFavouriteBand = identity.favouriteBand;

console.log(tinasFavouriteBand); // 'Boys4Now'
```

### Default Values

We can also provide default values for properties that might not exist in the object.

```javascript
const { age = 13 } = identity;
// this is equivalent to
// const age = age in identity ? identity.age : 13;

console.log(age); // 13
```

## Array Destructuring

We can also destructure arrays using a similar syntax.

```javascript
const students = ["Marie", "Claire", "Yassine", "Guillaume", "Ulysse"];

const [first, second, third] = students;

console.log(first); // 'Marie'
console.log(second); // 'Claire'
console.log(third); // 'Yassine'
```

### Skipping Elements

```javascript
const [, , , fourth] = students;

console.log(fourth); // 'Guillaume'
```

### Rest Syntax

We can use the rest syntax to capture the remaining elements of an array.

```javascript
const [marie, ...others] = students;
// this is equivalent to
// const marie = students[0];
// const others = students.slice(1);

console.log(marie); // 'Marie'
console.log(others); // ['Claire', 'Yassine', 'Guillaume', 'Ulysse']
```

The rest syntax can also be used to capture the remaining properties of an object.

```javascript
const { name, ...restOfId } = identity;

console.log(name); // { firstName: 'Tina', lastName: 'Belcher' }
console.log(restOfId); // { isStudent: true, favouriteBand: 'Boys4Now', hometown: { city: 'Wonder Wharf', country: 'USA' } }
```

### Out of Bounds Destructuring

If we try to destructure more elements than the array contains, the missing elements will be assigned `undefined`.

```javascript
const [first, second, third, fourth, fifth, sixth] = students;

console.log(first); // 'Marie'
console.log(fifth); // 'Ulysse'
console.log(sixth); // undefined
```

## Mixed Destructuring

We can mix object and array destructuring in a single statement.

```javascript
const studentsData = [
  { name: "Marie", projectName: "Village Rescue" },
  { name: "Claire", projectName: "Flower Memory" },
  { name: "Yassine", projectName: "Catch the Fish" },
  { name: "Guillaume", projectName: "Shoot'em Up" },
  { name: "Ulysse", projectName: "Woof It Home" }
];

const [{ projectName: mariesProject }, { projectName: clairesProject }] =
  studentsData;
// this is equivalent to
// const mariesProject = studentsData[0].projectName;
// const clairesProject = studentsData[1].projectName;

console.log(mariesProject); // 'Village Rescue'
console.log(clairesProject); // 'Flower Memory'
```

## Destructuring Function Arguments

We can destructure function arguments directly in the function signature.

```javascript
function printStudent({ name, projectName }) {
  console.log(`${name}'s project was ${projectName}`);
}
// this is equivalent to
// function printStudent(student) {
// console.log(`${student.name}'s project was ${student.projectName}`);
// }

printStudent(studentsData[0]); // 'Marie's project was Village Rescue'
```
