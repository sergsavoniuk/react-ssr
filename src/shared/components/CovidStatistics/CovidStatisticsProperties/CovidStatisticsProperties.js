import React from "react";

import "./CovidStatisticsProperties.css";

export const options = [
  "# of Confirmed",
  "# of Deaths",
  "# of Recovered",
  "# of Active",
];

export const CovidStatisticsProperties = ({ values, onChange }) => {
  return (
    <div className="covid-statistics-propertiess__container">
      {options.map((option) => (
        <label key={options}>
          {option}
          <input
            type="checkbox"
            checked={values.includes(option)}
            onChange={(event) =>
              event.target.checked
                ? onChange([...values, option])
                : onChange(values.filter((value) => value !== option))
            }
          />
          <span className="checkmark" />
        </label>
      ))}
    </div>
  );
};
