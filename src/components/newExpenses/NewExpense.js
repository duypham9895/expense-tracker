import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAppendExpense }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onAppendExpense={onAppendExpense} />
    </div>
  );
};

export default NewExpense;
