import { useParams } from "react-router-dom";

import characters from "../assets/characters.json";

function CharacterDetailsPage() {
  // `useParams` allows to get the dynamic part of the path
  const { charId } = useParams();

  const character = characters.find((char) => char.id === charId);

  if (!character) {
    return <div>404 Character Not Found</div>;
  }

  const { imageSrc, name, voiceActor, quote } = character;

  return (
    <div className="card">
      <img
        src={imageSrc}
        alt=""
      />
      <hgroup>
        <h2>{name}</h2>
        <h3>Voiced by: {voiceActor}</h3>
        <p>{quote}</p>
      </hgroup>
    </div>
  );
}

export default CharacterDetailsPage;
