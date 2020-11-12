import React from "react";

import "./CovidStatisticsPeriods.css";

const options = [
  {
    label: "1 week",
    value: "week",
  },
  {
    label: "1 month",
    value: "month",
  },
  {
    label: "3 months",
    value: "3_months",
  },
  {
    label: "all time",
    value: "all_time",
  },
];

export const CovidStatisticsPeriods = ({ value: selectedValue, onChange }) => {
  return (
    <div className="covid-statistics-periods__container">
      {options.map(({ label, value }) => (
        <label key={value}>
          {label}
          <input
            type="radio"
            value={value}
            checked={value === selectedValue}
            onChange={(event) => onChange(event.target.value)}
          />
          <span className="checkmark" />
        </label>
      ))}
    </div>
  );
};
