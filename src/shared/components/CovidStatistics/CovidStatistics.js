import React, { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { CovidStatisticsList } from "./CovidStatisticsList";
import { CovidStatisticsPeriods } from "./CovidStatisticsPeriods";
import { CovidStatisticsChart } from "./CovidStatisticsChart";
import {
  CovidStatisticsProperties,
  options as statisticsProperties,
} from "./CovidStatisticsProperties";

import "./CovidStatistics.css";

export const CovidStatistics = ({ fetchInitialData, staticContext }) => {
  const { country } = useParams();

  const [period, setPeriod] = useState({ label: "1 week" });
  const [properties, setProperties] = useState(statisticsProperties);
  const [statistics, setStatistics] = useState(
    __isBrowser__ ? window.__INITIAL_DATA__?.statistics : staticContext.data
  );

  const fetchNewStatistics = useRef(statistics ? false : true);

  useEffect(() => {
    if (
      fetchNewStatistics.current === true &&
      (period.label === "choose month" ? period.value : true)
    ) {
      fetchInitialData(country, period).then((statistics) => {
        setStatistics(statistics);
      });
    } else {
      fetchNewStatistics.current = true;
    }
  }, [country, period, fetchNewStatistics]);

  return (
    <div className="covid-statistics__wrapper">
      {!statistics ? (
        <h3>Loading ...</h3>
      ) : (
        <>
          <Link to="/">&#8678; Back</Link>
          <h1 className="covid-statistics__header">
            Covid-19 Statistics for {statistics.country}
          </h1>
          <div className="covid-statistics__container">
            <div className="covid-statistics__data-container">
              <CovidStatisticsPeriods
                value={period}
                onChange={(value) => setPeriod(value)}
              />
              <CovidStatisticsList data={statistics.data} />
            </div>
            <div className="covid-statistics__visualization-container">
              <CovidStatisticsProperties
                values={properties}
                onChange={(value) => setProperties(value)}
              />
              <CovidStatisticsChart
                properties={properties}
                data={statistics.data}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
