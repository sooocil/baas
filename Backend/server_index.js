const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/users");
const app = express();
const port = 3000;
app.use(cors());

app.use(bodyParser.json());

// Connect to MongoDB compass
mongoose.connect("mongodb://localhost:27017/hotelb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle user registration
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Create a new user document and save it to the database
    const newUser = new User({ username, password });
    await newUser.save();

    // Respond with a success message
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ username });

    // Check if the user exists and the password matches
    if (user && user.password === password) {
      // Successful login
      res.status(200).json({ message: "Login successful" });
    } else {
      // Invalid credentials
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
