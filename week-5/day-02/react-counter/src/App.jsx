import { useEffect, useState } from "react";
import "./App.css";

/** Component life cycle
 * 1. Mount
 * 2. Update
 * 3. Unmount
 */

function App() {
  const [count, setCount] = useState(0);
  const [dependent, setDependant] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);
  }, [dependent]);

  // setTimeout(() => {
  //   // console.log(count);
  //   setCount((currentCount) => {
  //     console.log(currentCount);
  //     return currentCount;
  //   });
  // }, 3000);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setDependant((dependant) => !dependant)}>
        Flip
      </button>
    </>
  );
}

export default App;
