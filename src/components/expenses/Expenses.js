import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses: initialExpenses }) => {
  const year = new Date().getFullYear();
  const [filteredYear, setFilteredYear] = useState(year);

  const filteredExpensesByYear = initialExpenses.filter(
    ({ date }) => date.getFullYear() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={filteredYear}
        onUpdateDefaultYear={setFilteredYear}
      />
      <ExpensesList expenses={filteredExpensesByYear} />
    </Card>
  );
};

export default Expenses;
