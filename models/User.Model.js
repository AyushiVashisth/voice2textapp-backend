// Import the mongoose library for working with MongoDB
const mongoose = require("mongoose");

// Define the user schema using the mongoose.Schema method
const userSchema = mongoose.Schema({
  // Define the fields for the user schema
  firstName: { type: String, required: true }, // First name of the user
  lastName: { type: String, required: true }, // Last name of the user
  state: { type: String, required: true }, // State of the user
  district: { type: String, required: true }, // District of the user
  village: { type: String, required: true }, // Village of the user
  panNumber: { type: String, required: true }, // PAN (Permanent Account Number) of the user
  aadhaarNumber: { type: Number, required: true } // Aadhaar Number of the user
});

// Create a User model based on the defined schema
const UserModel = mongoose.model("User", userSchema);

// Export the User model to make it accessible in other parts of your code
module.exports = UserModel;
