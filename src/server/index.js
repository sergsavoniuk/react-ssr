import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import serialize from "serialize-javascript";
import fetch from "isomorphic-fetch";

import { App } from "../shared/App";

const app = express();

app.use(express.static("dist"));

app.get("*", (req, res) => {
  fetch(
    "https://api.covid19api.com/total/country/belarus?from=2020-06-01T00:00:00Z&to=2020-11-11T00:00:00Z"
  )
    .then((res) => res.json())
    .then((data) => {
      const html = ReactDOM.renderToString(<App data={data} />);

      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>React SSR demo</title>
            <script src="/bundle.js" defer></script>
            <link href="/main.css" rel="stylesheet">
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
          </head>
          <body>
            <div id="root">${html}</div>
          </body>
        </html>
      `);
    });
});

app.listen(3000, () => {
  console.log("Server is listening on port: 3000");
});
