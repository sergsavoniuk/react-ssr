import React from "react";
import { FixedSizeList as List } from "react-window";

import { CovidStatisticsListItem } from "./CovidStatisticsListItem";

export const CovidStatisticsList = ({ data }) => {
  return (
    <div className="covid-statistics__list">
      <List
        height={600}
        itemCount={data.length}
        itemData={data.slice().reverse()}
        itemSize={150}
      >
        {CovidStatisticsListItem}
      </List>
    </div>
  );
};
