import React, { useContext } from "react";
import DataContext from "./data-context";

const Child6 = () => {
  const data = useContext(DataContext);
  return (
    <div>
      <h2>Child 6</h2>
      <p>Name: {data.name}</p>
    </div>
  );
};

export default Child6;
