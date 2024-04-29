import React from "react";

const TestWithError = () => {
  if (Math.random() < 0.5) { // Simulate a 10% chance of error
    throw new Error("An error occurred in TestWithError component");
  }

  return (
    <div>
      <h2>Test with error</h2>
    </div>
  );
};

export default TestWithError;
