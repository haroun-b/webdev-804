import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharacterDetailsPage() {
  // `useParams` allows to get the dynamic part of the path
  const { charId } = useParams();
  const [characterDetails, setCharacterDetails] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(
        `https://bobsburgers-api.herokuapp.com/characters/${charId}`
      );
      const data = await response.json();

      setCharacterDetails(data);
    }
    fetchDetails();
  }, [charId]);

  if (!characterDetails) {
    return <div>Loading...</div>;
  }

  const { image, name, voicedBy, firstEpisode } = characterDetails;

  return (
    <div className="card">
      <img
        src={image}
        alt=""
      />
      <hgroup>
        <h2>{name}</h2>
        <h3>Voiced by: {voicedBy}</h3>
        <p>First appeared in: {firstEpisode}</p>
      </hgroup>
    </div>
  );
}

export default CharacterDetailsPage;
