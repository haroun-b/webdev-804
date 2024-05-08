import axios from "axios";
import Form from "../components/Form";
import { API_BASE_URL } from "../consts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NewProject() {
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(formData) {
    try {
      await axios.post(`${API_BASE_URL}/projects`, formData);
      navigate("/projects");
    } catch (error) {
      setErrorMsg(error.message);
    }
  }

  return (
    <div>
      <h1>Create a new Project</h1>
      {errorMsg && <div>{errorMsg}</div>}
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default NewProject;
