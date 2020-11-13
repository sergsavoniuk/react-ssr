import React from "react";

import { MonthPicker } from "../../MonthPicker";

import "./CovidStatisticsPeriods.css";

const options = ["1 week", "1 month", "3 months", "all time", "choose month"];

export const CovidStatisticsPeriods = ({ value: selectedValue, onChange }) => {
  return (
    <div className="covid-statistics-periods__container">
      {options.map((option) => (
        <label key={option}>
          {option}
          <input
            type="radio"
            value={option}
            checked={option === selectedValue.label}
            onChange={(event) => onChange({ label: event.target.value })}
          />
          <span className="checkmark" />
        </label>
      ))}
      {selectedValue.label === "choose month" && (
        <MonthPicker
          onChange={(value) => onChange({ label: "choose month", value })}
        />
      )}
    </div>
  );
};
