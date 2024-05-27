import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

function Counter() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <p>{count}</p>

      <button onClick={() => setCount((v) => v + 1)}>+</button>
      <button onClick={() => setCount((v) => v - 1)}>-</button>
    </div>
  );
}

export default Counter;
