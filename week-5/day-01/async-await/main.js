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

      if (index > 2) {
        reject("index is greater than 2");
      }

      resolve(steps[index]);
    }, Math.floor(Math.random() * 1000));
  });
}

async function whackJimmy() {
  // try {
  //   const step0 = await fetchStep(0);
  //   addStep(step0);
  // } catch (error) {
  //   console.log("step0 failed. ", error);
  // }
  // try {
  //   const step1 = await fetchStep(1);
  //   addStep(step1);
  //   const step2 = await fetchStep(2);
  //   addStep(step2);
  // } catch (err) {
  //   console.log("something went wrong. ", err);
  // }

  // array methods do not await
  // steps.forEach(async (_, i) => {
  //   const step = await fetchStep(i);
  //   addStep(step);
  // });

  // for (let i = 0; i < steps.length; i++) {
  //   const step = await fetchStep(i);
  //   addStep(step);
  // }

  const promises = [];

  for (let i = 0; i < steps.length; i++) {
    promises.push(fetchStep(i));
  }

  try {
    const stepToDisplay = await Promise.all(promises);

    console.log(stepToDisplay);
    for (const step of stepToDisplay) {
      addStep(step);
    }
  } catch (err) {
    console.log(err);
  }
}

whackJimmy();
