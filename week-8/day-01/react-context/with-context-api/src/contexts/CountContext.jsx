import { useState } from "react";
import { createContext } from "react";

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <div>
        <h2>Count Context Provider</h2>
        {children}
      </div>
    </CountContext.Provider>
  );
}

export { CountContext, CountContextProvider };
