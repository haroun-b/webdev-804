const steps = [
  "Take care of Short Joey's parking ticket",
  "Ask Joey for a meet with Fat Tony",
  "Ask for Fat Tony's blessing",
  "Whack Jimmy"
];

const listEl = document.querySelector("#whacking-steps");

// function FakePromise(func) {
//   function resolve() {}
//   function reject() {}

//   func(resolve, reject);
// }

function addStep(step) {
  const li = document.createElement("li");
  li.textContent = step;

  listEl.appendChild(li);
}

function fetchStep(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof index !== "number") {
        reject("index must be a number");
      }

      resolve(steps[index]);
    }, Math.floor(Math.random() * 1000));
  });
}

// fetchStep(0)
//   .then((data) => {
//     addStep(data);

//     fetchStep(1).then((data) => {
//       addStep(data);

//       fetchStep(2).then((data) => {
//         addStep(data);
//       });
//     });
//   })
//   .catch(console.log);

fetchStep(0)
  .then((step0Data) => {
    addStep(step0Data);
    return fetchStep(1);
  })
  .catch((err) => console.log("Step0 failed! ", err))
  .then((step1Data) => {
    addStep(step1Data);
    return fetchStep(2);
  })
  .catch((err) => console.log("Step1 failed! ", err))
  .then((step2Data) => {
    addStep(step2Data);
  })
  .catch((err) => console.log("Step2 failed! ", err));

fetchStep(0)
  .then((step0Data) => {
    addStep(step0Data);
    return fetchStep(1);
  })
  .then((step1Data) => {
    addStep(step1Data);
    return fetchStep(2);
  })
  .then((step2Data) => {
    addStep(step2Data);
  })
  .catch((err) => console.log("One of the steps failed! ", err))
  .finally(() => {
    console.log("This will run after promise is settled");
  });
