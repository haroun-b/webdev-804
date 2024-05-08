import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";
import ProjectCard from "../components/ProjectCard";

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function getProjects() {
      try {
        const response = await axios.get(`${API_BASE_URL}/projects`);
        setProjects(response.data);
      } catch (err) {
        setErrorMsg(err.message);
      }
    }
    getProjects();
  }, []);

  return (
    <div className="projects-list">
      <h1>All Projects</h1>
      {errorMsg && <div>{errorMsg}</div>}
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            project={project}
          />
        );
      })}
    </div>
  );
}

export default ProjectsList;
