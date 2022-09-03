import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = ({
  title: staticTitle,
  amount: staticAmount,
  date: staticDate,
}) => {
  const [title, setTitle] = useState(staticTitle);

  const titleHandler = () => {
    setTitle("Updated!");
    console.log({ title });
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={staticDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${staticAmount}</div>
      </div>
      <button onClick={titleHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
