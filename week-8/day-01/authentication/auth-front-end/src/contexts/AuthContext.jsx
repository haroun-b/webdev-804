import { createContext, useEffect, useState } from "react";
import apiHandler from "../utils/apiHandler";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const [isLoading, setIsLoading] = useState(false);

  function updateToken(token) {
    if (token) {
      localStorage.setItem("authToken", token);
    } else {
      localStorage.removeItem("authToken");
    }

    setAuthToken(token);
  }

  useEffect(() => {
    async function getUser() {
      if (!authToken) {
        if (user) {
          setUser(null);
        }

        return;
      }

      try {
        setIsLoading(true);
        const response = await apiHandler.getUser();

        setUser(response.data);
      } catch (error) {
        console.error(error);
        updateToken(null);
      } finally {
        setIsLoading(false);
      }
    }

    getUser();
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ user, updateToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
