import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import UserProfilePage from "./pages/UserProfilePage";
import JournalsPage from "./pages/JournalsPage";
import CreateJournalPage from "./pages/CreateJournalPage";
import IsPublicLayout from "./components/IsPublicLayout";
import IsPrivateLayout from "./components/IsPrivateLayout";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route
          path="/"
          Component={HomePage}
        />

        <Route Component={IsPublicLayout}>
          <Route
            path="/login"
            Component={LoginPage}
          />
          <Route
            path="/signup"
            Component={SignupPage}
          />
        </Route>

        <Route Component={IsPrivateLayout}>
          <Route
            path="/profile"
            Component={UserProfilePage}
          />

          <Route
            path="/journals"
            Component={JournalsPage}
          />

          <Route
            path="/create-journal"
            Component={CreateJournalPage}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
