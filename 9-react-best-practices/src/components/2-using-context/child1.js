import React from 'react';
import Child2 from './child2';

const Child1 = ({ data }) => {
  return (
    <div>
      <h2>Child 4</h2>
      <p>Name: {data.name}</p>
      <Child2 data={data} />
    </div>
  );
};

export default Child1;

