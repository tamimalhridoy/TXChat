const { emailValidator } = require("../helpers/validators");
const userSchema = require("../models/userSchema");

// Registration
const registration = async (req, res) => {
  const { fullName, email, password, avatar } = req.body;
  if (!fullName) return res.status(400).send("Name Is Requird!");
  if (!email) return res.status(400).send("Email Is Requird");
  if (!password) return res.status(400).send("Password is required!");

  const existingUser = await userSchema.findOne({ email });
  if (existingUser) return res.status(400).send("Email alredy exist");
  if (emailValidator(email)) return res.status(400).send("email is not velid ");

  const User = new userSchema({
    fullName,
    email,
    password,
    avatar,
    otp: "null",
  });
  User.save();

  res.status(201).send("Registration Successful");
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).send("Email Is Requird");
  if (emailValidator(email)) return res.status(400).send("email is not velid ");
  if (!password) return res.status(400).send("Password is required!");
  const existingUser = await userSchema.findOne({ email });

  const passwordcheck = await existingUser.isPasswordValid(password);
  if (!passwordcheck) return res.status(400).send("wrong password");

  res.status(200).send("login seccfull");
};

module.exports = { registration, login };
