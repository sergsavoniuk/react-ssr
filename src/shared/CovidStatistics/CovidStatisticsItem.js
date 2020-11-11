import React from "react";

export const CovidStatisticsItem = ({ data }) => {
  return (
    <div style={{ borderBottom: "1px solid black" }}>
      <div>
        <span>Date: </span>
        <span>{data.Date}</span>
      </div>
      <div>
        <span>Confirmed: </span>
        <span>{data.Confirmed}</span>
      </div>
      <div>
        <span>Deaths: </span>
        <span>{data.Deaths}</span>
      </div>
      <div>
        <span>Recovered: </span>
        <span>{data.Recovered}</span>
      </div>
      <div>
        <span>Active: </span>
        <span>{data.Active}</span>
      </div>
    </div>
  );
};
