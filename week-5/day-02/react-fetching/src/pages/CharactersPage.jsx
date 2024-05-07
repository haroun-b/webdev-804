import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import { useEffect, useState } from "react";

function CharacterPage() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://bobsburgers-api.herokuapp.com/characters"
      );
      const data = await response.json();
      setCharacters(data);
    }
    fetchData();
  }, []);

  const charGender = searchParams.get("gender");

  /*
  `?.` is called optional chaining. used in case `char.gender` is not a string
   more on `?.`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  */
  const filteredCharacters = charGender
    ? characters.filter((char) => {
        return char.gender?.toLowerCase() === charGender;
      })
    : characters;

  return (
    <>
      <h1>Bob&apos;s Burgers Characters</h1>

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
          name={char.name}
          imageSrc={char.image}
        />
      ))}
    </>
  );
}

export default CharacterPage;
