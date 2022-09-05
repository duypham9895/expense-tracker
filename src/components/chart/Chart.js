import React from "react";
import maxBy from "lodash/maxBy";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const { value: maxValue } = maxBy(dataPoints, "value");

  // const chartBars
  return (
    <div className="chart">
      {dataPoints.map(({ value, label }) => (
        <ChartBar key={label} value={value} maxValue={maxValue} label={label} />
      ))}
    </div>
  );
};

export default Chart;
