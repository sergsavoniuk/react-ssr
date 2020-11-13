import React, { useRef, useState } from "react";
import cn from "classnames";

import "./MonthPicker.css";

const months = [
  [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 1 },
    { label: "Mar", value: 2 },
    { label: "Apr", value: 3 },
  ],
  [
    { label: "May", value: 4 },
    { label: "June", value: 5 },
    { label: "July", value: 6 },
    { label: "Aug", value: 7 },
  ],
  [
    { label: "Sep", value: 8 },
    { label: "Oct", value: 9 },
    { label: "Nov", value: 10 },
    { label: "Dec", value: 11 },
  ],
];

export const MonthPicker = ({ onChange }) => {
  const [year, setYear] = useState(2020);
  const [month, setMonth] = useState(null);
  const [showMonthPicker, setShowMonthPicker] = useState(false);

  const inputRef = useRef();

  return (
    <div className="month-picker__wrapper">
      <input
        className="month-picker__input"
        ref={inputRef}
        onClick={() => setShowMonthPicker((show) => !show)}
      />
      {showMonthPicker && (
        <div className="month-picker__container">
          <div className="month-picker__container-header">
            <button onClick={() => setYear((year) => year - 1)}>
              <i className={cn("arrow left")} />
            </button>
            <span>{year}</span>
            <button onClick={() => setYear((year) => year + 1)}>
              <i className={cn("arrow right")} />
            </button>
          </div>
          <div className="month-picker__container-body">
            {months.map((items) => (
              <div className="month-picker__container-row">
                {items.map(({ label, value }) => (
                  <div
                    className={cn(
                      "month-picker__container-cell",
                      value === month && "month-picker__container-cell--active"
                    )}
                    role="button"
                    tabIndex="-1"
                    onClick={() => {
                      setMonth(value);
                      inputRef.current.value = `${label}, ${year}`;
                      setShowMonthPicker(false);
                      onChange({ month: value, year });
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
