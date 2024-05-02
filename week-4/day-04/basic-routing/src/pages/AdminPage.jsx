import { Navigate } from "react-router-dom";

function AdminPage({ isAdmin }) {
  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Hello Mister Admin</h1>
    </div>
  );
}

export default AdminPage;
