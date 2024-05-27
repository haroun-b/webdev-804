import { useContext } from "react";
import Parent from "./Parent";
import { MessageContext } from "../contexts/MessageContext";

function GrandParent() {
  const msgContextValue = useContext(MessageContext);

  console.log(msgContextValue);

  return (
    <div>
      <p>GrandParent</p>
      {msgContextValue?.message}
      <Parent />
    </div>
  );
}

export default GrandParent;
