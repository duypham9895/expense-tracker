import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAppendExpense }) => {
  const [shouldAppearForm, setShouldAppearForm] = useState(false);

  const visibleFormHandler = () => {
    setShouldAppearForm((prevState) => !prevState);
  };

  if (shouldAppearForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onAppendExpense={onAppendExpense}
          onDisappearForm={visibleFormHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button onClick={visibleFormHandler} type="submit">
        Add New Expense
      </button>
    </div>
  );
};

export default NewExpense;
