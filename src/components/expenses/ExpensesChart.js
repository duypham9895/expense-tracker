import React from "react";

import Chart from "../chart/Chart";

const ExpensesChart = ({ expenses }) => {
  const dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // Append value for each month in the expenses list
  expenses.forEach(({ date, amount }) => {
    const month = date.getMonth(); //starting at 0 => Jan = 0
    dataPoints[month].value += amount;
  });

  return <Chart dataPoints={dataPoints} />;
};

export default ExpensesChart;
