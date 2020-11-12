import { Home } from "./components/Home";
import { CovidStatistics } from "./components/CovidStatistics";

import { Api } from "./api/api";

export const routes = [
  {
    path: "/",
    slice: "home",
    exact: true,
    component: Home,
    fetchInitialData: () => Api.fetchCountries(),
  },
  {
    path: "/statistics/:country",
    slice: "statistics",
    component: CovidStatistics,
    fetchInitialData: (path = "", period = "week") =>
      Api.fetchCovidStatisticsByCountry(path.split("/").pop(), period),
  },
];
