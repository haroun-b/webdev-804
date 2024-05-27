import { useState } from "react";
import { createContext } from "react";

const MessageContext = createContext();

function MessageContextProvider({ children }) {
  const [message, setMessage] = useState("Hello");

  function toggleMsg() {
    setMessage((msg) => (msg === "Hello" ? "Bye" : "Hello"));
  }

  return (
    <MessageContext.Provider value={{ message, toggleMsg }}>
      <div>
        <h3>Message Context Provider</h3>
        {children}
      </div>
    </MessageContext.Provider>
  );
}

export { MessageContext, MessageContextProvider };
