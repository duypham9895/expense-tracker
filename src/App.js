import React, { useState } from "react";
import { nanoid } from "nanoid";

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: nanoid(),
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: nanoid(),
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: nanoid(),
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: nanoid(),
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const appendExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState]);
  };

  return (
    <div>
      <NewExpense onAppendExpense={appendExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
