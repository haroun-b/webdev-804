import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";

import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import CharacterPage from "./pages/CharactersPage";

function App() {
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
          Component={CharacterPage}
        />

        {/* <Route
          path="/characters/1"
          element={<CharacterDetailsPage id={1} />}
        />

        <Route
          path="/characters/2"
          element={<CharacterDetailsPage id={2} />}
        /> */}

        <Route
          path="/characters/:id"
          Component={CharacterDetailsPage}
        />
      </Routes>
    </>
  );
}

export default App;
