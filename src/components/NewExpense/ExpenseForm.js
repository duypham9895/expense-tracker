import React from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="titleInput">Title</label>
          <input id="titleInput" type="text" />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amountInput">Amount</label>
          <input id="amountInput" type="number" min="0.01" step="0.01" />
        </div>

        <div className="new-expense__control">
          <label htmlFor="dateInput">Date</label>
          <input id="dateInput" type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
