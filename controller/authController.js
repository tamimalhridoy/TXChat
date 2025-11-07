const userSchema = require("../models/userSchema");

const registration = (req, res) => {
  const { fullName, email, password, avatar } = req.body;

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
