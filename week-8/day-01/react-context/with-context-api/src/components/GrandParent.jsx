import { useContext } from "react";
import Parent from "./Parent";
import { MessageContext } from "../contexts/MessageContext";

function GrandParent() {
  const msgContextValue = useContext(MessageContext);

  /*
  msgContextValue is not available outside the `MessageContextProvider`
  */
  console.log(msgContextValue); // undefined

  return (
    <div className="grand-parent">
      <p>GrandParent</p>
      {msgContextValue?.message}
      <Parent />
    </div>
  );
}

export default GrandParent;
