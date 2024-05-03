import { useParams } from "react-router-dom";

function CharacterDetailsPage({ characters }) {
  // `useParams` allows to get the dynamic part of the path
  const { charId } = useParams();

  const character = characters.find((char) => char.id === charId);

  if (!character) {
    return <div>404 Character Not Found</div>;
  }

  const { imageSrc, firstName, lastName, voiceActor, quote } = character;

  return (
    <div className="card">
      <img
        src={imageSrc}
        alt=""
      />
      <hgroup>
        <h2>
          {firstName} {lastName}
        </h2>
        <h3>Voiced by: {voiceActor}</h3>
        <p>{quote}</p>
      </hgroup>
    </div>
  );
}

export default CharacterDetailsPage;
