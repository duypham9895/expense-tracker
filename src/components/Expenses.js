import React from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </div>
  );
};

export default Expenses;
