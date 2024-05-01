import { useState } from "react";

import "./App.css";

import richImg from "./assets/rich.png";
import mrKrabsImg from "./assets/mr-krabs.png";

import MoneyDisplay from "./component/MoneyDisplay";
import MoneyMessage from "./component/MoneyMessage";

/* => money will be incremented onClick, but never updated on the page
function App() {
  let money = 0;

  return (
    <>
      <h1>Money I have</h1>
      <h2>{money}</h2>

      <button
        onClick={() => {
          money++;
          console.log("money is: ", money);
        }}
      >
        Make Money
      </button>
    </>
  );
}
*/

// to update the page when a variable changes, we must use useState
function App() {
  console.log("Rendering App...");

  const [money, setMoney] = useState(0);
  const amIRich = money > 10;

  /* => useState like all react hooks cannot be called conditionally
  * => so this is invalid

  let money;
  let setMoney;

  if (true) {
    [money, setMoney] = useState(0);
  }
  */

  const mrKrabsClass = amIRich ? "mr-krabs peeking" : "mr-krabs";
  const headingMsg = amIRich ? "I have money" : "Money I have";

  return (
    <>
      <h1>{headingMsg}</h1>

      {/* only expressions can be used here. if-else wouldn't work */}
      {/* {if (amIRich) {} else {}} <= NOT VALID */}
      {/* {amIRich ? <></> : <MoneyMessage />} <= VALID */}
      {!amIRich && <MoneyMessage />}

      {amIRich && (
        <img
          className="rich"
          src={richImg}
          alt=""
        />
      )}

      <MoneyDisplay money={money} />

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

      <img
        // className={amIRich ? "mr-krabs peeking" : "mr-krabs"}
        // className={`mr-krabs${amIRich ? " peeking" : ""}`}
        className={mrKrabsClass}
        src={mrKrabsImg}
        alt=""
      />

      {/* react does not render booleans, undefined, and null */}
      {/* so these won't show on the page */}
      {true}
      {false}
      {undefined}
      {null}
    </>
  );
}

export default App;
