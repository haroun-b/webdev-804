import Counter from "./Counter";

function GrandChild({ count, setCount }) {
  return (
    <div>
      <Counter
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default GrandChild;
