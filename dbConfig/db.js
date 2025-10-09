const mongoose = require("mongoose");

const dbConfig = () => {
  return mongoose
    .connect(
      "mongodb+srv://txchat:GE0eeBmsBfC4adUn@txchat0.ieqapcf.mongodb.net/txchat?retryWrites=true&w=majority&appName=txchat0"
    )
    .then(() => console.log("Database Connected!"));
};

module.exports = dbConfig;
