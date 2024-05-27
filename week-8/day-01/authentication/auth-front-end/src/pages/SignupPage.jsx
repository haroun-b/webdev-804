import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiHandler from "../utils/apiHandler";

function SignupPage() {
  const [signupForm, setSignupForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleChange(e) {
    setSignupForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // await apiHandler.post("/users/signup", signupForm);
      await apiHandler.signup(signupForm);

      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      {error && <div>{error}</div>}

      <form
        method="post"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </label>

        <input
          type="submit"
          value="Signup"
        />
      </form>
    </div>
  );
}

export default SignupPage;
