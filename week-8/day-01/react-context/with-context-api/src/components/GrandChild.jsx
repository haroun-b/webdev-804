import { useContext } from "react";
import Counter from "./Counter";
import { MessageContext } from "../contexts/MessageContext";

function GrandChild() {
  const { message, toggleMsg } = useContext(MessageContext);

  return (
    <div>
      <p>GrandChild</p>
      {message}
      <button onClick={toggleMsg}>Toggle MSG</button>
      <Counter />
    </div>
  );
}

export default GrandChild;
