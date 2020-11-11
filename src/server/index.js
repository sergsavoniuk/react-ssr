import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";

import { App } from "../shared/App";
import { routes } from "../shared/routes";

const paths = {
  "/": "home",
  "/statistics": "statistics",
};

const app = express();

app.use(express.static("dist"));

app.get(["/", "/statistics/**"], (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise
    .then((data) => {
      const html = ReactDOM.renderToString(
        <StaticRouter location={req.url} context={{ data }}>
          <App />
        </StaticRouter>
      );

      const initialData = {
        // [paths[req.path]]: data,
      };

      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>React SSR demo</title>
            <script src="/bundle.js" defer></script>
            <link href="/main.css" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&display=swap" rel="stylesheet">
            <script>window.__INITIAL_DATA__ = ${serialize(initialData)}</script>
          </head>
          <body>
            <div id="root">${html}</div>
          </body>
        </html>
      `);
    })
    .catch(next);
});

app.listen(3000, () => {
  console.log("Server is listening on port: 3000");
});
