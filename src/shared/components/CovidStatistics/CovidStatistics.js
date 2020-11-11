import React, { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { CovidStatisticsList } from "./CovidStatisticsList";

import "./CovidStatistics.css";

export const CovidStatistics = ({ fetchInitialData, staticContext }) => {
  const { country } = useParams();

  const [statistics, setStatistics] = useState(() =>
    __isBrowser__ ? window.__INITIAL_DATA__?.statistics : staticContext.data
  );

  const fetchNewStatistics = useRef(statistics ? false : true);

  useEffect(() => {
    if (fetchNewStatistics.current === true) {
      fetchInitialData(country).then((statistics) => {
        setStatistics(statistics);
      });
    } else {
      fetchNewStatistics.current = true;
    }
  }, [country, fetchNewStatistics]);

  return (
    <div className="covid-statistics__container">
      {!statistics ? (
        <h3>Loading ...</h3>
      ) : (
        <>
          <Link to="/">&#8678; Back</Link>
          <h1 className="covid-statistics__header">
            Covid-19 Statistics for {statistics.country}
          </h1>
          <CovidStatisticsList data={statistics.data} />
        </>
      )}
    </div>
  );
};
