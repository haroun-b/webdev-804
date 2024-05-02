import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

import characters from "../assets/characters.json";

function CharacterPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const charGender = searchParams.get("gender");

  const filteredCharacters = charGender
    ? characters.filter((char) => char.gender === charGender)
    : characters;

  return (
    <>
      <h1>Belcher Family</h1>
      {/* <Link to="/characters?gender=male">Male</Link> */}

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
          imageSrc={char.imageSrc}
        />
      ))}
    </>
  );
}

export default CharacterPage;
