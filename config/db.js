// Import the mongoose library for working with MongoDB
const mongoose = require("mongoose");

// Load environment variables from a .env file
require("dotenv").config();

// Establish a connection to the MongoDB database using the provided URL
const connection = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true, // Use the new URL parser
  useUnifiedTopology: true // Use the new server discovery and monitoring engine
});

// Export the connection object to make it accessible in other parts of your code
module.exports = { connection };
