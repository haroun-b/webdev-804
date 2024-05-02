import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      {/* => using regular link works, but causes page to reload 
      <a href="/about">About</a>
      <a href="/">Home</a>
      */}

      {/* => we use Link or NavLink, which do not reload page
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav> 
      */}

      {/*
      `NavLink` can take a callback as `className`
      allowing to change the css `class` and styling based on whether or not the link is active
      */}
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>

        {isAdmin && (
          <NavLink
            to="/admin"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Admin
          </NavLink>
        )}

        {!isAdmin && (
          <button onClick={() => setIsAdmin(true)}>Trust Me Bro</button>
        )}
      </nav>

      <Routes>
        <Route
          path="/"
          Component={HomePage}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/contact"
          element={
            <div>
              <h1>Contact</h1>
              <p>Don`t contact us. Leave us alone.</p>
            </div>
          }
        />

        <Route
          path="/admin"
          element={<AdminPage isAdmin={isAdmin} />}
        />

        {/*
        `*` is what we call a "catch-all" path
        it willmatch any characters following the /, including other / characters.
        */}
        <Route
          path="*"
          element={<h1>404 Page Not Found!</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
