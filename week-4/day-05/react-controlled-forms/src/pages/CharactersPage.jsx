import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

import { useState } from "react";

function CharacterPage({ characters, setCharacters }) {
  // const [firstName, setFirstName] = useState("Jon");
  // const [lastName, setLastName] = useState("Doe");

  const [characterForm, setCharacterForm] = useState({
    firstName: "",
    lastName: "",
    gender: "male",
    isRecurring: false,
    voiceActor: "",
    quote: "",
    imageSrc: ""
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const charGender = searchParams.get("gender");

  const filteredCharacters = charGender
    ? characters.filter((char) => char.gender === charGender)
    : characters;

  function handleSubmit(event) {
    event.preventDefault();

    // const formEl = event.target;
    // const firstNameEl = formEl.querySelector("#firstName");
    // const lastNameEl = formEl.querySelector("#lastName");

    setCharacters([
      ...characters,
      { ...characterForm, id: (characters.length + 1).toString() }
    ]);
  }

  function handleChange(event) {
    setCharacterForm({
      ...characterForm,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
    });
  }

  return (
    <>
      <h1>Belcher Family</h1>

      <form
        method="post"
        onSubmit={handleSubmit}
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

        <label htmlFor="isRecurring">
          Is Recurring Character
          <input
            type="checkbox"
            name="isRecurring"
            id="isRecurring"
            onChange={handleChange}
            value={characterForm.isRecurring}
          />
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
            type="url"
            name="imageSrc"
            id="imageSrc"
            onChange={handleChange}
            value={characterForm.imageSrc}
          />
        </label>

        <input
          type="submit"
          value="Add Character"
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
        />
      ))}
    </>
  );
}

export default CharacterPage;
