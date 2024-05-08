import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsList from "./pages/ProjectsList";

import "./App.css";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          Component={Home}
        />

        <Route
          path="/projects"
          Component={ProjectsList}
        />

        <Route
          path="/projects/:projectId"
          Component={ProjectDetails}
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