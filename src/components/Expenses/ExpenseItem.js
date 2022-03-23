import React from "react";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  const onTitleHandler = () => {
    console.log("Clicked!!!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={onTitleHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
