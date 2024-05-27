import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

function Counter() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h3>Counter</h3>
      <p>{count}</p>

      <button onClick={() => setCount((v) => v + 1)}>+</button>
      <button onClick={() => setCount((v) => v - 1)}>-</button>
    </div>
  );
}

export default Counter;
