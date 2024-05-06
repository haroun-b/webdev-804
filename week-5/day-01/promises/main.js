const steps = [
  "Take care of Short Joey's parking ticket",
  "Ask Joey for a meet with Fat Tony",
  "Ask for Fat Tony's blessing",
  "Whack Jimmy"
];

const listEl = document.querySelector("#whacking-steps");

function fetchStep(index) {
  const randomDelay = Math.floor(Math.random() * 1000);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof index !== "number") {
        reject("index must be a number");
      }

      resolve(steps[index]);
    }, randomDelay);
  });
}

function displayStep(step) {
  const li = document.createElement("li");
  li.textContent = step;

  listEl.appendChild(li);
}

/*
while this works, it does not help us avoid callback hell. this is "promise hell"

fetchStep(0)
  .then((data) => {
    displayStep(data);

    fetchStep(1)
      .then((data) => {
        displayStep(data);

        fetchStep(2)
          .then((data) => {
            displayStep(data);
          })
          .catch((err) => console.log("step2 failed: ", err));
      })
      .catch((err) => console.log("step1 failed: ", err));
  })
  .catch((err) => console.log("step0 failed: ", err));
*/

// the correct way to chain promises is to return the next promise, so it can be handled by the next `.then`
fetchStep(0)
  .then((step0Data) => {
    displayStep(step0Data);
    return fetchStep(1);
  })
  .catch((err) => console.log("step0 failed: ", err))
  .then((step1Data) => {
    displayStep(step1Data);
    return fetchStep(2);
  })
  .catch((err) => console.log("step1 failed: ", err))
  .then((step2Data) => {
    displayStep(step2Data);
    return fetchStep(3);
  })
  .catch((err) => console.log("step2 failed: ", err))
  .then((step3Data) => {
    displayStep(step3Data);
    displayStep("Jimmy is dead!");
  })
  .catch((err) => console.log("step3 failed: ", err));

/*
if we want to catch any error that happens in any of the steps, we can use a single `.catch` at the end

fetchStep(0)
  .then((step0Data) => {
    displayStep(step0Data);
    return fetchStep(1);
  })
  .then((step1Data) => {
    displayStep(step1Data);
    return fetchStep(2);
  })
  .then((step2Data) => {
    displayStep(step2Data);
    return fetchStep(3);
  })
  .then((step3Data) => {
    displayStep(step3Data);
    displayStep("Jimmy is dead!");
  })
  .catch((err) => console.log("one of the steps failed: ", err));
*/
