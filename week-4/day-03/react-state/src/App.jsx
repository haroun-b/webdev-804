import { useState } from "react";

import "./App.css";

import richImg from "./assets/rich.png";
import mrKrabsImg from "./assets/mr-krabs.png";

import MoneyDisplay from "./component/MoneyDisplay";
import MoneyMessage from "./component/MoneyMessage";

function App() {
  console.log("Rendering App...");

  const [money, setMoney] = useState(0);
  const amIRich = money > 10;

  const mrKrabsClass = amIRich ? "mr-krabs peeking" : "mr-krabs";
  const headingMsg = amIRich ? "I have money" : "Money I have";

  /* NONO
  let money;
  let setMoney;

  if (true) {
    [money, setMoney] = useState(0);
  }
 */

  return (
    <>
      <h1>{headingMsg}</h1>

      {/* {amIRich ? <></> : <MoneyMessage />} */}

      {/* these won't be rendered on the page */}
      {false}
      {undefined}
      {null}

      {/* {55} */}

      {!amIRich && <MoneyMessage />}

      {amIRich && (
        <img
          className="rich"
          src={richImg}
          alt=""
        />
      )}

      {/* only expressions can be used here. ie: if-else wouldn't work */}

      <img
        // className={amIRich ? "mr-krabs peeking" : "mr-krabs"}
        // className={`mr-krabs${amIRich ? " peeking" : ""}`}
        className={mrKrabsClass}
        src={mrKrabsImg}
        alt=""
      />

      <MoneyDisplay money={money} />

      {/* <button
        onClick={() => {
          money++;
          console.log(money);
        }}
      >
        Make Money
      </button> */}

      <button
        onClick={() => {
          setMoney(money + 1);
        }}
      >
        Make Money
      </button>

      <button
        onClick={() => {
          setMoney(money - 1);
        }}
      >
        Lose Money
      </button>
    </>
  );
}

export default App;
