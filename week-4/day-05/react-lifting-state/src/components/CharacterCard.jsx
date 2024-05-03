import "./CharacterCard.css";

function CharacterCard({
  name,
  voiceActor,
  quote,
  imageSrc,
  deleteCharacter,
  charLikeCounters,
  setCharCounters
}) {
  console.log("Rendering ", name);

  // we moved the like counter to the parent component to be able to compare the likes between character. ie `we lifted the state up`
  // const [likeCounter, setLikeCounter] = useState(0);

  return (
    <div className="card">
      <img
        src={imageSrc}
        alt=""
      />
      <hgroup>
        <h2>
          {name} <span>| liked: {charLikeCounters[name] || 0}</span>
        </h2>
        <h3>Voiced by: {voiceActor}</h3>
        <p>{quote}</p>
        <button
          // no longer used because state was lifted up
          // onClick={() => setLikeCounter(likeCounter + 1)}

          onClick={() => {
            const currentLikeCount = charLikeCounters[name] || 0;

            /*
            we spread charCounters ({...charCounters}) so as not to lose the other characters

            {[name]: newLikeCount} here the character's name will be used as key. for "Bob Belcher" we'll have {...charCounters, "Bob Belcher": newLikeCount}
            */
            setCharCounters({
              ...charLikeCounters,
              [name]: currentLikeCount + 1
            });
          }}
        >
          Like
        </button>
        <button
          onClick={() => {
            setCharCounters({ ...charLikeCounters, [name]: 0 });
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
