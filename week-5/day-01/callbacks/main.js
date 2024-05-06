const steps = [
  "Take care of Short Joey's parking ticket",
  "Ask Joey for a meet with Fat Tony",
  "Ask for Fat Tony's blessing",
  "Whack Jimmy"
];

const listEl = document.querySelector("#whacking-steps");

function doTheThing(thing, cb, erroHandler) {
  setTimeout(() => {
    if (typeof thing !== "string") {
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

    if (cb) {
      cb();
    }
  }, Math.floor(Math.random() * 1000));
}

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
                doTheThing("Jimmy is dead", undefined, console.error);
              },
              console.error
            );
          },
          console.error
        );
      },
      console.error
    );
  },
  console.error
);
