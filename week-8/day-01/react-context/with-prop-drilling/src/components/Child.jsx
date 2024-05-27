import GrandChild from "./GrandChild";

function Child({ count, setCount }) {
  return (
    <div>
      <GrandChild
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default Child;
