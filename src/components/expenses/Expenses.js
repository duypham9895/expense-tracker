import React, { useState } from "react";
import isEmpty from "lodash/isEmpty";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses: initialExpenses }) => {
  const year = new Date().getFullYear();
  const [filteredYear, setFilteredYear] = useState(year);
  // const [expenses, setExpenses] = useState(initialExpenses);
  // // * Up-to-date expenses when initialExpenses changed by user input
  // useEffect(() => setExpenses(initialExpenses), [initialExpenses]);

  const filteredExpensesByYear = initialExpenses.filter(
    ({ date }) => date.getFullYear() === filteredYear
  );
  const mappedExpensesContent = filteredExpensesByYear.map(
    ({ id, title, amount, date }) => (
      <ExpenseItem key={id} title={title} amount={amount} date={date} />
    )
  );
  const emptyExpensesContent = <p>Not found any expenses</p>;
  const expensesContent = isEmpty(filteredExpensesByYear)
    ? emptyExpensesContent
    : mappedExpensesContent;

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={filteredYear}
        onUpdateDefaultYear={setFilteredYear}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
