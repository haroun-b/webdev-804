import Parent from "./Parent";

function GrandParent({ count, setCount }) {
  return (
    <div>
      <Parent
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default GrandParent;
