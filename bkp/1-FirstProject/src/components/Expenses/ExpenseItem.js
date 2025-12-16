import { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { amount, date } = props;

  const [title, setTitle] = useState(props.title);
  console.log("title in component", title);

  const handle = () => {
    console.log("title in handler", title);
    setTitle("Updated!");
  };

  return (
    <li>
      <Card className="expense-item">
        {/* <div>{date.toISOString()}</div> */}
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
          <button onClick={handle}>Change Title</button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
