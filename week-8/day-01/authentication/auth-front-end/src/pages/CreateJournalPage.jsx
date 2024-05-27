import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiHandler from "../utils/apiHandler";

function CreateJournalPage() {
  const [journalForm, setJournalForm] = useState({ title: "", content: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleChange(e) {
    setJournalForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await apiHandler.createJournal(journalForm);

      navigate("/journals");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      {error && <div>{error}</div>}

      <form
        method="post"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="content">
          Content
          <textarea
            name="content"
            id="content"
            onChange={handleChange}
          ></textarea>
        </label>

        <input
          type="submit"
          value="Create Journal"
        />
      </form>
    </div>
  );
}

export default CreateJournalPage;
