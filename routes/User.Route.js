// Import the express framework for creating API routes
const express = require("express");

// Import the User model from the "../models/User.Model" module
const UserModel = require("../models/User.Model");

// Create an instance of an Express Router to define API routes
const router = express.Router();

// Create a new user
router.post("/", async (req, res) => {
  try {
    // Use the UserModel to create a new user based on the data provided in the request body
    const newUser = await UserModel.create(req.body);

    // Respond with a status of 201 (Created) and the newly created user as JSON
    res.status(201).json(newUser);
  } catch (err) {
    // If there's an error during user creation, respond with a status of 400 (Bad Request) and an error message as JSON
    res.status(400).json({ error: err.message });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    // Use the UserModel to find all users in the database
    const users = await UserModel.find();

    // Respond with the list of users as JSON
    res.json(users);
  } catch (err) {
    // If there's an error while fetching users, respond with a status of 500 (Internal Server Error) and an error message as JSON
    res.status(500).json({ error: err.message });
  }
});

// Export the router to make it accessible in other parts of your Express application
module.exports = router;
