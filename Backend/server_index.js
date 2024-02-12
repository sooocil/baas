const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./Routes/auth.js");
const userRoute = require("./Routes/users.js");
const roomRoute = require("./Routes/rooms.js");
const hotelRoute = require("./Routes/hotels.js");
const cookie = require("cookie-parser");

const User = require("./models/users");
const Room = require("./models/rooms");
const app = express();
const port = 3000;
app.use(cors());
app.use(cookie());

app.use(bodyParser.json());
app.use(express.json());
// Connect to MongoDB compass
mongodb: mongoose.connect("mongodb://127.0.0.1:27017/hotelb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle user registration
app.post("/register", async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Create a new user document and save it to the database
    const newUser = new User({ email, username, password });
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

app.post("/addrooms", async (req, res) => {
  const { roomno, description, roomtype, capacity, acnonac, rent, status } =
    req.body;
  try {
    const newRoom = new Room({
      roomno: roomno,
      description: description,
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
        res.status(500).json({ message: " server error", error: err.message });
      });
  } catch (error) {
    res.status(500).json({
      message: " server error",
      error: error.message,
    });
  }
});

app.get("/", (req, res) => {
  Room.find({})
    .then((rooms) => res.json(rooms))
    .catch((err) => res.send("Error: " + err));
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  Room.findByIdAndUpdate(id)
    .then((rooms) => res.json(rooms))
    .catch((err) => res.send("Error: " + err));
});

app.delete("/deleteroom/:id", async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json({ message: "Room deleted successfully" });
  } catch (error) {
    console.error("Error deleting room:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/find/:id", async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(room);
  } catch (error) {
    console.error("Error finding room:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/hotels", hotelRoute);

app.listen(port, () => {
  console.log("Connected to Backend");
  console.log("Connected to MongoDB");
});
