import React from "react";
import isEmpty from "lodash/isEmpty";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  if (isEmpty(expenses)) {
    return <h2 className="expenses-list__fallback">Not found any expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map(({ id, title, amount, date }) => (
        <li key={id}>
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
