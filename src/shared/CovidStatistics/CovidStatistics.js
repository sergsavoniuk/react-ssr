import React from "react";

import { CovidStatisticsItem } from "./CovidStatisticsItem";

import "./CovidStatistics.css";

export const CovidStatistics = ({ data }) => {
  return (
    <div className="covid-statistics__container">
      {data.map((item) => (
        <CovidStatisticsItem key={item.Date} data={item} />
      ))}
    </div>
  );
};
