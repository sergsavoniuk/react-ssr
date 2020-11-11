import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FixedSizeList as List } from "react-window";

import { CovidStatisticsListItem } from "./CovidStatisticsListItem";

// import "./CovidStatisticsList.css";

export const CovidStatisticsList = ({ data }) => {
  return (
    <div className="covid-statistics__list">
      {/* <Link to="/">Home</Link> */}
      {data && (
        <List
          height={700}
          itemCount={data.length}
          itemData={data}
          itemSize={150}
        >
          {CovidStatisticsListItem}
        </List>
      )}
    </div>
  );
};
