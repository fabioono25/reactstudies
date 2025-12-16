import React from "react";
import { DataProvider } from "./data-context";
import Child4 from "./child4";

const ParentWithContext = () => {
  return (
    <DataProvider>
      <div>
        <h1>Parent Component - using Data Context</h1>
        <Child4 />
      </div>
    </DataProvider>
  );
};

export default ParentWithContext;
