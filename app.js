const fs = require("fs");
const express = require("express");

const html = fs.readFileSync("./index.html");
const app = express();

app.get("/", (req, res) => {
  res.header({
    status: "200",
    "Content-type": "text/html",
  });
  res.send(html);
});

app.listen(3000, () => {
  console.log("Server running on port 3000...");
});
