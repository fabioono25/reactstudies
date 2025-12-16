import { useState } from "react";
import { flushSync } from "react-dom";

function ImageGalery() {
  const [index, setIndex] = useState(0);
  const [number, setNumber] = useState(0);

  const [form, setForm] = useState({name: ''});

  // don't mutate state directly
  // form.name = 'John';

  // replace the state with a new object
  // setForm({ ...form, name: 'John' });

  console.log('initialIndex', index);

  const handlerTest = () => {
    setIndex(index + 1);
    setIndex(index + 1);
    setIndex(index => index + 1);

    // executed synchronously
    flushSync(() => {
      setIndex(index => index + 1);
    });

    console.log('indexInsideMethod', index);
  };


  const handleIncreaseNumber = () => {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  };

  const handleIncreaseNumber2 = () => {
    setNumber(number => number + 1);
    setNumber(number => number + 1);
    setNumber(number => number + 1);
  };

  return (
    <div>
      <h1>Image Galery</h1>
      <img src="https://picsum.photos/200/300" alt="random" />
      <button onClick={handlerTest}>Next</button>
      <button onClick={handleIncreaseNumber}>Increase Number (wrong)</button>
      <button onClick={handleIncreaseNumber2}>Increase Number (right)</button>
      <div>{number}</div>
    </div>
  );
}

export default ImageGalery;