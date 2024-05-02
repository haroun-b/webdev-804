import { Link } from "react-router-dom";

function CharacterCard({ id, name, imageSrc }) {
  return (
    <Link
      to={`/characters/${id}`}
      className="card light"
    >
      <img
        src={imageSrc}
        alt=""
      />
      <h2>{name}</h2>
    </Link>
  );
}

export default CharacterCard;
