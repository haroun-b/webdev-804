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

  const filteredCharacters = charGender
    ? characters.filter((char) => char.gender?.toLowerCase() === charGender)
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
