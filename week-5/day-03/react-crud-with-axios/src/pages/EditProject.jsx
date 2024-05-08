import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";

function EditProject() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function getProject() {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/projects/${projectId}`
        );
        setProject(response.data);
      } catch (err) {
        setErrorMsg(err.message);
      }
    }
    getProject();
  }, [projectId]);

  async function handleSubmit(formData) {
    try {
      await axios.put(`${API_BASE_URL}/projects/${projectId}`, formData);
      navigate(`/projects/${projectId}`);
    } catch (error) {
      setErrorMsg(error.message);
    }
  }

  return (
    <div>
      <h1>Edit Project</h1>
      {errorMsg && <div>{errorMsg}</div>}
      {project && (
        <Form
          handleSubmit={handleSubmit}
          data={project}
          type="Project"
        />
      )}
    </div>
  );
}

export default EditProject;
