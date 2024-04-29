const myObj = {
  a: 8,
  b: 9,
  c: {
    i: {
      j: 9
    }
  }
};

const a1 = myObj.a;

const { a } = myObj;

const { b } = myObj;

const j = 1;

const {
  c: {
    i: { j: j2 }
  }
} = myObj;

const {
  c: { i }
} = myObj;

const id = {
  name: "Haroun",
  something: {
    a: 1
  },
  somethingElse: ""
};

// const name = id.name;
// const something = id.something;

// const { name, something } = id;

// something.a = 6;

console.log(id);

console.log(j);

const arr = ["Ulysse", "Yassine"];

const [firstName, secondName] = arr;

const arrOfObj = [{ name: "Ulysse" }, { name: "Yassine" }];

const [, { name }] = arrOfObj;

console.log(name);

const bigObj = {
  name: {
    firstName: "ana",
    lastName: "marino"
  },
  isStudent: true,
  favoriteFootballTeam: "fc barcelona",
  hometown: {
    city: "buenos aires",
    country: "argentina"
  }
};

const { favoriteFootballTeam, ...restOfObj } = bigObj;

const arrOfNames = ["Marie", "Claire", "Yassine", "Guillaume", "Ulysse"];

// const marie = arrOfNames[0];
// const restOfStudents = arrOfNames.slice(1);

const [marie, ...restOfStudents] = arrOfNames;

// const {!favoriteFootballTeam} = bigObj

function hello(name, ...rest) {}
