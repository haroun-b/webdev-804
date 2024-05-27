import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function UserProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Id: {user._id}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Type: {user.isAdmin ? "Admin" : "Regular User"}</h2>
    </div>
  );
}

export default UserProfilePage;
