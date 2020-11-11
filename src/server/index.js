import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import serialize from "serialize-javascript";

import { App } from "../shared/App";

const app = express();

app.use(express.static("dist"));

app.get("*", (req, res) => {
  const text = "Hello World!!!!";
  const html = ReactDOM.renderToString(<App text={text} />);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR demo</title>
        <script src="/bundle.js" defer></script>
        <link href="/main.css" rel="stylesheet">
        <script>window.__INITIAL_DATA__ = ${serialize(text)}</script>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server is listening on port: 3000");
});
