const express = require("express");

const dbConfig = require("./dbConfig/db");

const app = express();

dbConfig();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(6000, () => console.log("Server is running on port 6000"));
