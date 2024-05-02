import { useParams } from "react-router-dom";

import characters from "../assets/characters.json";

function CharacterDetailsPage() {
  const { id } = useParams();

  const character = characters.find((char) => char.id === parseInt(id));

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
