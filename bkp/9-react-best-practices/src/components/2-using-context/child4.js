import React, { useContext } from 'react';
import Child5 from './child5';
import DataContext from './data-context';

const Child4 = () => {

  const data = useContext(DataContext);

  return (
    <div>
      <h2>Child 4</h2>
      <p>Name: {data.name}</p>
      <Child5 data={data} />
    </div>
  );
};

export default Child4;

