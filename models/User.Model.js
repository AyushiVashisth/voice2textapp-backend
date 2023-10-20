const mongoose = require("mongoose");

// Define the user schema
const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  village: { type: String, required: true },
  panNumber: { type: String, required: true },
  aadhaarNumber: { type: Number, required: true }
});

// Create a User model based on the schema
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
