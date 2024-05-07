import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

/** Component life cycle
 * 1. Mount
 * 2. Update
 * 3. Unmount
 */

function App() {
  const [counterOn, setCounterOn] = useState(false);

  // useEffect(() => {
  //   console.log("counterOn was switched");
  // }, [counterOn]);

  return (
    <>
      {counterOn && <Counter />}
      <button onClick={() => setCounterOn((_switch) => !_switch)}>
        {counterOn ? "Hide Counter" : "Show Counter"}
      </button>
    </>
  );
}

export default App;
