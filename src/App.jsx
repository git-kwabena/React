import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-center">{count}</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default App;
