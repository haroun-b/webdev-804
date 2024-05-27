import { useContext } from "react";
import Counter from "./Counter";
import { MessageContext } from "../contexts/MessageContext";

function GrandChild() {
  const { message, toggleMsg } = useContext(MessageContext);

  return (
    <div className="grand-child">
      <p>GrandChild</p>
      <p>Message: {message}</p>
      <button onClick={toggleMsg}>Toggle Msg</button>
      <Counter />
    </div>
  );
}

export default GrandChild;
