const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/users");
const Room = require("./models/rooms");
const app = express();
const port = 3000;
app.use(cors());

app.use(bodyParser.json());

// Connect to MongoDB compass
mongodb: mongoose.connect("mongodb://127.0.0.1:27017/hotelb", {
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
    res.status(500).json({
      message: "Internal server error ",
      error: "Username is already taken",
    });
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

// Handle room creation request
app.post("/addrooms", async (req, res) => {
  const { roomno, roomtype, capacity, acnonac, rent, status } = req.body;

  // Room.create(req.body)
  //   .then((room) => res.json(room))
  //   .catch((err) => res.status(400).json("Error: " + err));

  try {
    const newRoom = new Room({
      roomno: roomno,
      roomtype: roomtype,
      capacity: capacity,
      acnonac: acnonac,
      rent: rent,
      status: status,
    });
    await newRoom
      .save()
      .then((room) => res.json(room))
      .catch((err) => {
        console.error("Error saving room:", err);
        res
          .status(500)
          .json({ message: "Internal server error", error: err.message });
      });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.get("/", (req, res) => {
  Room.find({})
    .then((rooms) => res.json(rooms))
    .catch((err) => res.send("Error: " + err));
});

app.get("/update/:id", (req, res) => {
  const id = req.params.id;
  Room.findByIdAndUpdate((_id = id))
    .then((rooms) => res.json(rooms))
    .catch((err) => res.send("Error: " + err));
});

app.get("/deleteroom/:id", (req, res) => {
  const id = new mongoose.Types.ObjectId();
  const objid = id.toString(); // Convert ObjectId to string

  Room.findByIdAndDelete(objid)
    .then((rooms) => res.json(rooms))
    .catch((err) => res.send("Error: " + err));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} and connected to MongoDB.`);
});
