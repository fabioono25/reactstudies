import { useState } from "react";
import CountLabel from "./1e-count-label";

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <CountLabel count={count} />
    </>
  );
}

// this is not a recommended approach, but it is better than updating a state in an effect.

// This pattern can be hard to understand and is usually best avoided. 
// However, it’s better than updating state in an effect. When you call the set function during render, 
// React will re-render that component immediately after your component exits with a return statement, 
// and before rendering the children. This way, children don’t need to render twice. The rest of your component 
// function will still execute (and the result will be thrown away). If your condition is below all the Hook calls, 
// you may add an early return; to restart rendering earlier.