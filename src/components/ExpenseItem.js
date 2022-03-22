import React from "react";

import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  // const date = new Date(2022, 5, 29);
  // const title = "Car Insurance";
  // const amount = 296.98;

  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
