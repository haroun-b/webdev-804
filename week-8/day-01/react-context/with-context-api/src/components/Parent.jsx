import Child from "./Child";
import { MessageContextProvider } from "../contexts/MessageContext";

function Parent() {
  return (
    <div className="parent">
      <p>Parent</p>
      <MessageContextProvider>
        <Child />
      </MessageContextProvider>
    </div>
  );
}

export default Parent;
