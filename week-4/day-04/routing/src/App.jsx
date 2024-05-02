import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <>
      {/* <a href="/about">About</a> */}
      {/* <a href="/">Home</a> */}

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Home</h1>
              <p>This is home</p>
            </div>
          }
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<h1>Contact</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
