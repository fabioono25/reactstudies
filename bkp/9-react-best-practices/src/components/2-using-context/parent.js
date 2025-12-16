import React from "react";
import Child1 from "./child1";

const data = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const ParentWithProps = () => {
  return (
    <div>
      <h1>Parent Component - using props</h1>
      <Child1 data={data} />
    </div>
  );
};

export default ParentWithProps;
