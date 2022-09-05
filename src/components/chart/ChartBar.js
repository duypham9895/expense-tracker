import React from "react";

import "./ChartBar.css";

const ChartBar = ({ value, maxValue, label }) => {
  const rate = Math.round((value / maxValue) * 100);
  const barHeightFill = !maxValue ? `0%` : `${rate}%`;
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barHeightFill }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
