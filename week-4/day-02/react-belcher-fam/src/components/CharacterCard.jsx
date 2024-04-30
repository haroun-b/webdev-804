import "./CharacterCard.css";

function CharacterCard({ name, voiceActor, quote, imageSrc }) {
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

export default CharacterCard;
