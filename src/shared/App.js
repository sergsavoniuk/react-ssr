import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "./routes";

import "./App.css";

export const App = () => (
  <div className="main">
    <Switch>
      {routes.map(({ path, exact, fetchInitialData, component: Component }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => (
            <Component fetchInitialData={fetchInitialData} {...props} />
          )}
        ></Route>
      ))}
    </Switch>
  </div>
);
