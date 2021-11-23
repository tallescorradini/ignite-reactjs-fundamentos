import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prev) => ++prev);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}