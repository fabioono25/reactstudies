import React, { useState } from "react";

// Pure component: the output is solely dependent on the input props and internal state
function PureCounterComponent() {
  const [count, setCount] = useState(0);

  // Increment count when the component is rendered
  // This function will only be called once during the initial rendering
  // subsequent renders will not modify the count
  // since state updates do not cause re-renders during the same render cycle
  if (count === 0) {
    console.log("Incrementing count");
    setCount(1);
  }

  return <div>Count is: {count}</div>;
}

export default PureCounterComponent;
