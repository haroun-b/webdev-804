const inputForm = document.querySelector("form");
const nameInput = inputForm.querySelector("#name");
const messageEl = document.querySelector(".message");
const headingEl = document.querySelector("h1");

console.log(headingEl.id, headingEl.getAttribute("data-something"));

headingEl.id = "my-new-id";

headingEl.setAttribute("data-something", "bye");

console.log(headingEl.id, headingEl.getAttribute("data-something"));

headingEl.style.removeProperty("background-color");
// headingEl.style = null;
headingEl.removeAttribute("style");

// headingEl.style.display = "none";

headingEl.addEventListener("click", (e) => {
  e.target.style.color = "purple";
  console.log(e.target);
});

document.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "orange";
});

document.addEventListener("mouseover", (e) => {
  console.log(e.clientX, e.clientY);
});
