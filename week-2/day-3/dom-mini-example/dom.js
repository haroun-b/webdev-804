const inputForm = document.querySelector("form");
const nameInput = inputForm.querySelector("#name");
const messageEl = document.querySelector(".message");
const headingEl = document.querySelector("h1");

// getting an attribute
console.log(headingEl.id, headingEl.getAttribute("data-something"));

// setting an attribute
headingEl.id = "my-heading";
headingEl.setAttribute("data-something", "My Data");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents form from submitting

  // innerHTML allows the user to inject code through input
  // messageEl.innerHTML = `Hi, ${nameInput.value}`;

  messageEl.textContent = `Hi, ${nameInput.value}`;
});

document.addEventListener("click", (e) => {
  // even though the event listener is on the document we only change the bg-color of the element that was clicked
  e.target.style.backgroundColor = "purple";
});
