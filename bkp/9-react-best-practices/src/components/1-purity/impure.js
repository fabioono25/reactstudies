import React from "react";

let count = 0;

// issue here: count is a global variable that will be incremented every time the component is re-rendered
// impure component: the output of the component is not solely dependent on the input props
function ImpureCounterComponent() {
  count += 1;
  console.log("Count after increment: ", count);
  return <div>Count is: {count}</div>;
}

export default ImpureCounterComponent;
