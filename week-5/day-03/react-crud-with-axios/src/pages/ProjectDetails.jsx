import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_BASE_URL } from "../consts";
import Form from "../components/Form";

function ProjectDetails() {
  const { projectId } = useParams();

  const [project, setProject] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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

  useEffect(() => {
    getProject();
  }, [projectId]);

  async function handleSubmit(formData) {
    try {
      const response = await axios.post(`${API_BASE_URL}/tasks`, {
        // title: formData.title,
        // description: formData.description,
        ...formData,
        projectId: project.id
      });

      getProject();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  if (errorMsg) {
    return <div>{errorMsg}</div>;
  }

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h2>Tasks</h2>
      <ul>
        {project.tasks.map((task) => {
          return <li key={task.id}>{task.title}</li>;
        })}
      </ul>

      <Form handleSubmit={handleSubmit} />

      <Link to="/projects">Back</Link>
    </div>
  );
}

export default ProjectDetails;
