import { useState } from "react";
import "./CharacterCard.css";

function CharacterCard({
  name,
  voiceActor,
  quote,
  imageSrc,
  deleteCharacter,
  favCharacter,
  setFavCharacter
}) {
  console.log("Rendering ", name);

  const [likeCounter, setLikeCounter] = useState(0);

  return (
    <div className="card">
      <img
        src={imageSrc}
        alt=""
      />
      <hgroup>
        <h2>
          {name} <span>| liked: {likeCounter}</span>
        </h2>
        <h3>Voiced by: {voiceActor}</h3>
        <p>{quote}</p>
        <button
          onClick={() => {
            const newLikeCount = likeCounter + 1;

            setLikeCounter(likeCounter + 1);
            if (newLikeCount >= favCharacter.likeCount) {
              setFavCharacter({ name, likeCount: newLikeCount });
            }
          }}
        >
          Like
        </button>
        <button onClick={() => deleteCharacter(name)}>Delete</button>
      </hgroup>
    </div>
  );
}

export default CharacterCard;
