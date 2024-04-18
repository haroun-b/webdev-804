console.log("one");

setTimeout(() => {
  console.log("two");
}, 2000);

logger();

console.log("three");

const intervalId = setInterval(() => {
  console.log("from interval");
}, 1000);

const timeoutId = setTimeout(() => {
  console.log("four");
}, 0);

console.log("five");

// console.log("HI");

// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

/*
 marie: 1,3,5,4,2;
 yas: 1,3,5,4,2;
 guillaume: 1,3,5,4,2;
 ulysse: 4,1,3,5,2;
 claire: log,1,3,5,4,2;
 */

function logger() {
  console.log("logging...");

  console.log("still logging....");
}

console.log(intervalId);
setTimeout(() => {
  clearInterval(intervalId);
}, 4000);

clearTimeout(timeoutId);
