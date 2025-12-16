import React, { createContext } from "react";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const data = {
    name: "Alice",
    age: 30,
    city: "New York",
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;
