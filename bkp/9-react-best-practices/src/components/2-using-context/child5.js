import React, { useContext } from "react";
import DataContext from "./data-context";
import Child6 from "./child6";

const Child5 = () => {
  const data = useContext(DataContext);

  return (
    <div>
      <h2>Child 5</h2>
      <p>Name: {data.name}</p>
      <Child6 data={data} />
    </div>
  );
};

export default Child5;
