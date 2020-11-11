import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";

import { App } from "../shared/App";

const app = express();

app.use(express.static("dist"));

app.get("*", (req, res) => {
  const html = ReactDOM.renderToString(<App />);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR demo</title>
        <script src="/bundle.js" defer></script>
        <link href="/main.css" rel="stylesheet">
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
