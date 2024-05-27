function Counter({ count, setCount }) {
  return (
    <div>
      <p>{count}</p>

      <button onClick={() => setCount((v) => v + 1)}>+</button>
      <button onClick={() => setCount((v) => v - 1)}>-</button>
    </div>
  );
}

export default Counter;
