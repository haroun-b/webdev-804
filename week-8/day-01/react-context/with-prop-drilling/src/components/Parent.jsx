import Child from "./Child";

function Parent({ count, setCount }) {
  return (
    <div>
      <Child
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default Parent;
