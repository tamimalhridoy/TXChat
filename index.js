const express = require("express");
const dbConfig = require("./dbConfig/db");
const router = require("./routes");

const app = express();
app.use(express.json());
require("dotenv").config();

dbConfig();
app.use(router);

app.listen(3000, () => console.log("Server is running on port 3000"));
