import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

import { useState } from "react";

function CharacterPage({ characters, setCharacters }) {
  /*
  we moved this state to the parent component (lifted the state).
  because we need it in the CharactersDetailsPage
  
  const [characters, setCharacters] = useState(jsonCharacters);
  */

  const [searchParams, setSearchParams] = useSearchParams();
  const charGender = searchParams.get("gender");

  const filteredCharacters = charGender
    ? characters.filter((char) => char.gender === charGender)
    : characters;

  /*
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  instead of having to deal with a state for every input, it's better to group all input state in one object
  */

  const emptyForm = {
    firstName: "",
    lastName: "",
    gender: "male",
    isRecurring: false,
    voiceActor: "",
    quote: "",
    imageSrc: ""
  };
  const [characterForm, setCharacterForm] = useState(emptyForm);

  function handleSubmit(event) {
    event.preventDefault();

    /* => while this works, it's considered an anti-pattern in react (AVOID)
    const formEl = event.target;
    const firstNameEl = formEl.querySelector("#firstName");
    const lastNameEl = formEl.querySelector("#lastName");
    etc...

    setCharacters([
      ...characters,
      {
        id: (characters.length + 1).toString(),
        firstName: firstNameEl.value,
        lastName: lastNameEl.value,
        etc...
      }
    ])
    */

    if (characterForm.id) {
      const characterToEditIndex = characters.findIndex(
        (char) => char.id === characterForm.id
      );

      setCharacters([
        ...characters.slice(0, characterToEditIndex),
        ...characters.slice(characterToEditIndex + 1),
        characterForm
      ]);
    } else {
      setCharacters([
        ...characters,
        { ...characterForm, id: (characters.length + 1).toString() }
      ]);
    }

    setCharacterForm(emptyForm);
  }

  function handleChange(event) {
    const inputEl = event.target;

    setCharacterForm({
      ...characterForm,

      [inputEl.name]:
        inputEl.type === "checkbox" ? inputEl.checked : inputEl.value
    });
  }

  function handleEdit(id) {
    const characterToEdit = characters.find((char) => char.id === id);

    setCharacterForm(characterToEdit);
  }

  return (
    <>
      <h1>Bob&apos;s Burgers Characters</h1>

      <form
        method="post"
        onSubmit={handleSubmit}
        className="pico"
      >
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            name="firstName"
            id="firstName"
            /* 
            onChange={(e) =>
              setCharacterForm({ ...characterForm, firstName: e.target.value })
            }
            */
            onChange={handleChange}
            value={characterForm.firstName}
          />
        </label>

        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            name="lastName"
            id="lastName"
            /* 
            onChange={(e) =>
              setCharacterForm({ ...characterForm, lastName: e.target.value })
            }
            */
            onChange={handleChange}
            value={characterForm.lastName}
          />
        </label>

        <label htmlFor="gender">
          Gender
          <select
            name="gender"
            id="gender"
            onChange={handleChange}
            value={characterForm.gender}
          >
            <option value="male">Male</option>
            <option value="female">female</option>
          </select>
        </label>

        <label htmlFor="voiceActor">
          Voice Actor
          <input
            type="text"
            name="voiceActor"
            id="voiceActor"
            onChange={handleChange}
            value={characterForm.voiceActor}
          />
        </label>

        <label htmlFor="quote">
          Quote
          <textarea
            name="quote"
            id="quote"
            rows="3"
            cols="40"
            onChange={handleChange}
            value={characterForm.quote}
          ></textarea>
        </label>

        <label htmlFor="imageSrc">
          Image
          <input
            type="text"
            name="imageSrc"
            id="imageSrc"
            onChange={handleChange}
            value={characterForm.imageSrc}
          />
        </label>

        <label htmlFor="isRecurring">
          <input
            type="checkbox"
            name="isRecurring"
            id="isRecurring"
            onChange={handleChange}
            checked={characterForm.isRecurring}
          />
          Is Recurring Character
        </label>

        <input
          type="submit"
          value={`${characterForm.id ? "Edit" : "Add"} Character`}
        />
      </form>

      <div className="filters">
        <button onClick={() => setSearchParams()}>All</button>
        <button onClick={() => setSearchParams({ gender: "male" })}>
          Male
        </button>
        <button onClick={() => setSearchParams({ gender: "female" })}>
          Female
        </button>
      </div>

      {filteredCharacters.map((char) => (
        <CharacterCard
          key={char.id}
          id={char.id}
          firstName={char.firstName}
          lastName={char.lastName}
          imageSrc={char.imageSrc}
          handleEdit={handleEdit}
        />
      ))}
    </>
  );
}

export default CharacterPage;
