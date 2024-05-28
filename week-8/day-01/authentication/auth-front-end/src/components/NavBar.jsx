import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function NavBar() {
  const { user, updateToken } = useContext(AuthContext);

  function logOut() {
    updateToken(null);
  }

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {!user && (
        <>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
      {user && (
        <>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/journals">Journals</NavLink>
          <NavLink to="/create-journal">Create Journal</NavLink>
          <button onClick={logOut}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default NavBar;
