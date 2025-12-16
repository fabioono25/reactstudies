import React from 'react';
import Child3 from './child3';

const Child2 = ({ data }) => {
  return (
    <div>
      <h2>Child 2</h2>
      <p>Name: {data.name}</p>
      <Child3 data={data} />
    </div>
  );
};

export default Child2;

