const mongoose = require("mongoose");

const dbConfig = () => {
  return mongoose
    .connect(process.env.DB_CONECTION_STRING)
    .then(() => console.log("Database Connected!"));
};

module.exports = dbConfig;
