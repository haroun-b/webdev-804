import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link
      className="card light"
      to={`/projects/${project.id}`}
    >
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </Link>
  );
}

export default ProjectCard;
