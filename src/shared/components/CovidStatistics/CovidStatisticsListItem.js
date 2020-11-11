import React from "react";

export const CovidStatisticsListItem = ({ data, index, style }) => {
  const { date, confirmed, deaths, recovered, active } = data[index];

  return (
    <div className="covid-statistics__card" style={style}>
      <div className="covid-statistics__card-item">
        <span>Date: </span>
        <span>{date}</span>
      </div>
      <div className="covid-statistics__card-item">
        <span>Confirmed: </span>
        <span>{confirmed}</span>
      </div>
      <div className="covid-statistics__card-item">
        <span>Deaths: </span>
        <span>{deaths}</span>
      </div>
      <div className="covid-statistics__card-item">
        <span>Recovered: </span>
        <span>{recovered}</span>
      </div>
      <div className="covid-statistics__card-item">
        <span>Active: </span>
        <span>{active}</span>
      </div>
    </div>
  );
};
