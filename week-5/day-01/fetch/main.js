const characterListEl = document.querySelector("#characters");

// async function displayCharacters() {
//   fetch("https://rickandmortyapi.com/api/character")
//     .then((response) => {
//       return response.json();
//     })
//     .then((body) => {
//       for (const char of body.results) {
//         const li = document.createElement("li");
//         li.textContent = char.name;

//         characterListEl.appendChild(li);
//       }
//     })
//     .catch(console.log);
// }

async function displayCharacters() {
  let body;
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    body = await response.json();
  } catch (err) {
    console.log(err);
  }

  for (const char of body.results) {
    const li = document.createElement("li");
    li.textContent = char.name;

    characterListEl.appendChild(li);
  }
}

// function hello(a) {
//   try {
//     a.id.firstName;
//   } catch (err) {
//     console.log("Caught the error");
//   }
// }

// hello();

displayCharacters();
