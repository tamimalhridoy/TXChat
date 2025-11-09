const userSchema = require("../models/userSchema");

const registration = (req, res) => {
  const { fullName, email, password, avatar } = req.body;

  if (!fullName) return res.status(400).send("Name Is Requird!");
  

  const User = new userSchema({
    fullName,
    email,
    password,
    avatar,
  });
  User.save();

  res.status(201).send("Registration Successful");
};

module.exports = { registration };
