const steps = [
  "Take care of Short Joey's parking ticket",
  "Ask Joey for a meet with Fat Tony",
  "Ask for Fat Tony's blessing",
  "Whack Jimmy"
];

const listEl = document.querySelector("#whacking-steps");

function doTheThing(thing, callback, erroHandler) {
  const randomDelay = Math.floor(Math.random() * 1000);

  setTimeout(() => {
    if (typeof thing !== "string") {
      // makes sure user passed errorHandler
      if (erroHandler) {
        erroHandler("thing must be string");
        return;
      } else {
        throw Error("thing must be string");
      }
    }

    const li = document.createElement("li");
    li.textContent = thing;

    listEl.appendChild(li);

    // we only call the callback function when it is not undefined
    if (callback) {
      callback();
    }
  }, randomDelay);
}

/*
in order to make sure steps are called in order, we pass step1 to step0 as callback
this way step1 would only be executed once step0 has finished

doTheThing(
  steps[0],
  () => {
    doTheThing(steps[1], (err) => console.log("step1 failed: ", err));
  },
  (err) => console.log("step0 failed: ", err)
);
*/

/*
we do the same thing for all the rest of the steps. step2 is step1's callback, etc...
when we have a lot of nested callbacks, we call it: "callback hell"
*/
doTheThing(
  steps[0],
  () => {
    doTheThing(
      steps[1],
      () => {
        doTheThing(
          steps[2],
          () => {
            doTheThing(
              steps[3],
              () => {
                doTheThing("Jimmy is dead!");
              },
              (err) => console.log("step3 failed: ", err)
            );
          },
          (err) => console.log("step2 failed: ", err)
        );
      },
      (err) => console.log("step1 failed: ", err)
    );
  },
  (err) => console.log("step0 failed: ", err)
);
