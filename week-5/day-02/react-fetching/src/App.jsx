import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharactersPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";

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

        {/* => creating a route for every character would be insane.
        <Route
          path="/characters/1"
          element={<CharacterDetailsPage id="1" />}
        />

        <Route
          path="/characters/2"
          element={<CharacterDetailsPage id="2" />}
        />
        */}

        {/* so we use a dynamic path `/:nameItWhatever` */}
        <Route
          path="/characters/:charId"
          Component={CharacterDetailsPage}
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
