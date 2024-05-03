import "./CharacterCard.css";

function CharacterCard({
  name,
  voiceActor,
  quote,
  imageSrc,
  deleteCharacter,
  charCounters,
  setCharCounters
}) {
  console.log("Rendering ", name);

  // const [likeCounter, setLikeCounter] = useState(0);

  return (
    <div className="card">
      <img
        src={imageSrc}
        alt=""
      />
      <hgroup>
        <h2>
          {name} <span>| liked: {charCounters[name] || 0}</span>
        </h2>
        <h3>Voiced by: {voiceActor}</h3>
        <p>{quote}</p>
        <button
          onClick={() => {
            const currentLikeCount = charCounters[name] || 0;

            setCharCounters({ ...charCounters, [name]: currentLikeCount + 1 });
          }}
        >
          Like
        </button>
        <button
          onClick={() => {
            setCharCounters({ ...charCounters, [name]: 0 });
            deleteCharacter(name);
          }}
        >
          Delete
        </button>
      </hgroup>
    </div>
  );
}

export default CharacterCard;
