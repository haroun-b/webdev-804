import { Link } from "react-router-dom";

function CharacterCard({ id, firstName, lastName, imageSrc, handleEdit }) {
  return (
    <div>
      <Link
        // `/${id}` will be matched by our dynamic route `/:charId`
        to={`/characters/${id}`}
        className="card light"
      >
        <img
          src={imageSrc}
          alt=""
        />
        <h2>
          {firstName} {lastName}
        </h2>
      </Link>
      <button onClick={() => handleEdit(id)}>Edit</button>
    </div>
  );
}

export default CharacterCard;
