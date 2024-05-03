import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharactersPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";

import jsonCharacters from "./assets/characters.json";

function App() {
  const [characters, setCharacters] = useState(jsonCharacters);

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          Component={HomePage}
        />

        <Route
          path="/characters"
          element={
            <CharacterPage
              characters={characters}
              setCharacters={setCharacters}
            />
          }
        />

        <Route
          path="/characters/:charId"
          element={<CharacterDetailsPage characters={characters} />}
        />

        <Route
          path="*"
          element={<h1>404 Page Not Found!</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
