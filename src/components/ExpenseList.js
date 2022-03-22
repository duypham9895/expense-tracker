import React from "react";

import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  return (
    <>
      {expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </>
  );
};

export default ExpenseList;
