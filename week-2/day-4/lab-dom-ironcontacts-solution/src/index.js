// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = addNewRow(randomContact);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((contact) => {
  addNewRow(contact);
});

function addNewRow(contact) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
   <td>
     <img src="${contact.pictureUrl}" />
   </td>
   <td> ${contact.name} </td>
   <td> ${contact.popularity.toFixed(2)} </td>
   <td>
     <button class="btn-delete">Delete</button>
   </td>
   <td>
     <button class="btn-like">
       <img src="./images/icon.png" alt="like" />
     </button>
   </td>
 `;

  // ITERATION 2 - Delete Buttons
  const deleteButton = newRow.querySelector(".btn-delete");

  deleteButton.addEventListener("click", (e) => {
    // e.target.closest("tr").remove();
    newRow.remove();
  });

  // ITERATION 3 - Like Buttons
  const likeButton = newRow.querySelector(".btn-like");

  likeButton.addEventListener("click", (e) => {
    likeButton.classList.toggle("selected");
    // e.target.classList.toggle("selected");
  });

  tableBody.appendChild(newRow);
}

// Bonus: ITERATION 4 - Add Random Contacts
