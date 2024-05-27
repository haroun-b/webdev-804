import "./App.css";
import GrandParent from "./components/GrandParent";
import { CountContextProvider } from "./contexts/CountContext";

function App() {
  return (
    <div>
      <CountContextProvider>
        <GrandParent />
        <GrandParent />
      </CountContextProvider>
    </div>
  );
}

export default App;
