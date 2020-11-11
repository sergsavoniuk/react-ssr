import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import "./Home.css";

export const Home = ({ fetchInitialData, staticContext }) => {
  const [country, setCountry] = useState(null);

  const [countries, setCountries] = useState(() =>
    __isBrowser__ ? window.__INITIAL_DATA__.home : staticContext.data
  );

  const fetchCountries = useRef(countries ? false : true);

  useEffect(() => {
    if (fetchCountries.current === true) {
      // setLoading(true);

      fetchInitialData().then((countries) => {
        setCountries(countries);
        // setLoading(false);
      });
    } else {
      fetchCountries.current = true;
    }
  }, [fetchCountries]);

  return (
    <div className="home-page">
      <h1 className="home-page__title">COVID-19 Tracker</h1>
      <div className="home-page__search-form">
        <Select
          className="country-selector"
          name="country"
          options={countries}
          onChange={({ value }) => {
            setCountry(value);
          }}
        />
        <Link to={`/statistics/${country}`}>Search</Link>
      </div>
    </div>
  );
};
