import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../consts";

function ProjectDetails() {
  const { projectId } = useParams();

  const [project, setProject] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function getProject() {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/projects/${projectId}?_embed=tasks`
        );
        setProject(response.data);
      } catch (err) {
        setErrorMsg(err.message);
      }
    }
    getProject();
  }, [projectId]);

  if (errorMsg) {
    return <div>{errorMsg}</div>;
  }

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <ul>
        {project.tasks.map((task) => {
          return <li key={task.id}>{task.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default ProjectDetails;
