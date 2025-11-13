const userSchema = require("../models/userSchema");

const registration = async (req, res) => {
  const { fullName, email, password, avatar } = req.body;
  if (!fullName) return res.status(400).send("Name Is Requird!");
  if (!email) return res.status(400).send("Email Is Requird");
  if (!password) return res.status(400).send("Password is required!");

  const existingUser = await userSchema.findOne({ email });
  if (!existingUser) return res.status(400).send("Email alredy exist");

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
