const arr = ["hello", "bye"];

const obj = {
  greeting: "Hello",
  fareWell: "Goodbye"
};

const objVide = {};

const objInstance = new Object(); // Not recommended

console.log(objVide, objInstance);

obj.greeting;

obj.name = "Yassine";

console.log(obj);

obj.name = "Claire";

console.log(obj);

// obj.name = undefined;
// obj.name = null;
delete obj.name;

console.log(obj);

let obj2 = obj;

console.log(obj, obj2);

obj2.name = "Ulysse";

console.log(obj2);
console.log(obj);

const name1 = "Ulysse";
let name2 = name1;
name2 = "Marie";

console.log(name1, name2);

console.log(obj === obj2);

const objA = { a: 9 };
const objB = { a: 9 };

objA.b = 8;

console.log(objA, objB);

console.log(objA === objB);

console.log(obj);

const objCopy = { ...obj };

console.log(objCopy === obj);

objCopy.msg = "I was here";

console.log(objCopy);
console.log(obj);

const identity = {
  name: "Bobby",
  hobbies: ["Tennis", "BasketBall"],
  naissance: {
    lieu: "France",
    date: "NA"
  }
};

const id2 = { ...identity };

console.log(identity === id2);

id2.name = "Marie";

console.log(id2);
console.log(identity);

identity.naissance.lieu = "Canada";

console.log(id2);

const deepCopy = structuredClone(identity);

console.log(identity === deepCopy);

deepCopy.naissance.lieu = "USA";

console.log(identity);
console.log(deepCopy);

const names = ["Ulysse", "Claire", "Guillaume"];

const namesCopy = [...names];

namesCopy.sort();

console.log(namesCopy);
console.log(names);

const nestedArray = [
  [5, 6],
  [7, 8]
];

const shallowCopy = [...nestedArray];

console.log(nestedArray === shallowCopy);

shallowCopy[0][0] = 99;

console.log(nestedArray);

const studentName = "marie";

const students = {
  claire: { name: "claire", favLanguage: "JS" },
  ulysse: { name: "ulysse", favLanguage: "JS" },
  yassine: { name: "yassine", favLanguage: "JS" },
  marie: { name: "marie", favLanguage: "JS" },
  guillaume: { name: "guillaume", favLanguage: "JS" }
};

console.log(students.studentName);
console.log(students["studentName"]);

console.log(students[studentName]);

console.log(Object.keys(students));

for (const key in students) {
  const student = students[key];

  for (const k in student) {
    console.log(student[k]);
  }
}

if ("claire" in students) {
  console.log("Claire is a student");
}

console.log("claire" in students);
console.log("haroun" in students);

const studentKeys = Object.keys(students);
// students.keys() pourquoi pas ca

console.log(studentKeys);

const studentValues = Object.values(students);

console.log(studentValues);

for (const value of studentValues) {
  console.log(value);
}
