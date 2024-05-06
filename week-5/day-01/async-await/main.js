const steps = [
  "Take care of Short Joey's parking ticket",
  "Ask Joey for a meet with Fat Tony",
  "Ask for Fat Tony's blessing",
  "Whack Jimmy"
];

const listEl = document.querySelector("#whacking-steps");

function fetchStep(index) {
  return new Promise((resolve, reject) => {
    const randomDelay = Math.floor(Math.random() * 1000);

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

async function whackJimmy() {
  /*
  we can handle each step individually

  try {
    const step0 = await fetchStep(0);
    displayStep(step0);
  } catch (error) {
    console.log("step0 failed: ", error);
  }

  try {
    const step1 = await fetchStep(1);
    displayStep(step1);
  } catch (error) {
    console.log("step1 failed: ", error);
  }
  */

  // we can handle all steps at once, one after the other
  for (let i = 0; i < steps.length; i++) {
    try {
      const step = await fetchStep(i);
      displayStep(step);
    } catch (error) {
      console.log(`step${i} failed: `, error);
    }
  }
  displayStep("Jimmy is dead!");

  /*
  be careful with array methods. array methods do not await
  so using forEach will not work as expected (steps will be displayed out of order)

  steps.forEach(async (_, i) => {
    const step = await fetchStep(i);
    displayStep(step);
  });
  */

  /*
  we can also fetch all the steps at once while maintaining the order
  promises are pushed into the `promises` array in order, so once all promises are resolved, the steps will be in order in the stepToDisplay array

  const promises = [];
  for (let i = 0; i < steps.length; i++) {
    promises.push(fetchStep(i));
  }

  try {
    const stepsToDisplay = await Promise.all(promises);

    for (const step of stepsToDisplay) {
      displayStep(step);
    }
  } catch (err) {
    console.log(err);
  }
  */
}

whackJimmy();
