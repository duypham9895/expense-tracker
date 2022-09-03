import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = ({
  title: staticTitle,
  amount: staticAmount,
  date: staticDate,
}) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={staticDate} />
      <div className="expense-item__description">
        <h2>{staticTitle}</h2>
        <div className="expense-item__price">${staticAmount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
