import { useState } from "react";
import "./App.css";
import GrandParent from "./components/GrandParent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <GrandParent
        count={count}
        setCount={setCount}
      />

      <GrandParent
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default App;
