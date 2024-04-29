// DataFetcher.js
import React, { useState, useEffect } from "react";

const fetchData = () => {
  // Simulate asynchronous data fetching
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: "Data loaded successfully!",
      });
    }, 2000); // Simulate a 2-second delay
  });
};

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
    });
  }, []);

  return (
    <div>
      {data ? (
        <p>{data.message}</p>
      ) : (
        <p style={{ color: "red" }}>Loading data...</p>
      )}
    </div>
  );
};

export default DataFetcher;
