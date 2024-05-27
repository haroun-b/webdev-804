import GrandChild from "./GrandChild";

function Child() {
  return (
    <div className="child">
      <p>Child</p>
      <GrandChild />
    </div>
  );
}

export default Child;
