const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "",
  },
  otp: {
    type: String,
    default: "",
  },
  isVrified: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordValid = function (password) {
  bcrypt.compare(password, this.password).then(function (result) {
    return result;
  });
};

// userSchema.methods.isPasswordValid = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

module.exports = mongoose.model("User", userSchema);
