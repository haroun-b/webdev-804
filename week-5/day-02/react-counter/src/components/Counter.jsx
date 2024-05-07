import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter has mounted");

    const intervalId = setInterval(() => {
      console.log("incrementing counter with interval...");
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    // cleanup function, runs when component is unmounted
    return () => {
      console.log("Counter has unmounted");
      clearInterval(intervalId);
    };
  }, []);

  return <h1>{count}</h1>;
}

export default Counter;
