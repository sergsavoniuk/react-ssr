import fetch from "isomorphic-fetch";

export const Api = {
  fetchCountries() {
    return fetch("https://api.covid19api.com/countries")
      .then((response) => response.json())
      .then((data) => {
        const result = data.map(({ Country, Slug }) => ({
          label: Country,
          value: Slug,
        }));
        return result;
      })
      .catch((error) => {
        console.warn(error);
        return null;
      });
  },
  fetchCovidStatisticsByCountry(country) {
    return fetch(`https://api.covid19api.com/total/country/${country}`)
      .then((response) => response.json())
      .then((data) => {
        const result = {
          country: data[0].Country,
          data: data.map(
            ({ Confirmed, Deaths, Recovered, Active, Date: date }) => ({
              confirmed: Confirmed,
              deaths: Deaths,
              recovered: Recovered,
              active: Active,
              date: new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
            })
          ),
        };

        return result;
      })
      .catch((error) => {
        console.warn(error);
        return null;
      });
  },
};
