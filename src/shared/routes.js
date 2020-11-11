import { Home } from "./components/Home";
import { CovidStatistics } from "./components/CovidStatistics";

import { Api } from "./api/api";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    fetchInitialData: () => Api.fetchCountries(),
  },
  {
    path: "/statistics/:country",
    component: CovidStatistics,
    fetchInitialData: (path = "") =>
      Api.fetchCovidStatisticsByCountry(path.split("/").pop()),
  },
];
