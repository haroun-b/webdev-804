import { useEffect, useState } from "react";
import apiHandler from "../utils/apiHandler";

function JournalsPage() {
  const [journals, setJournals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getJournals() {
      try {
        const response = await apiHandler.getAllJournals();

        setJournals(response.data);
      } catch (error) {
        setError(error.message);
      }
    }

    getJournals();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}

      {journals.map((journal) => {
        return (
          <div
            className="card light"
            key={journal._id}
          >
            <h2>{journal.title}</h2>
            <p>{journal.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default JournalsPage;
