const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./Routes/users.js");
const roomRoute = require("./Routes/rooms.js");
const hotelRoute = require("./Routes/hotels.js");
const cookie = require("cookie-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Room = require("./models/rooms");
const Booking = require("./models/Bookings");
const app = express();
const multer = require("multer");

const User = require("./models/users");
const port = 3000;
const { getMinutesPastMidnight } = require("./utils/time"); // Import the utility function

const dotenv = require("dotenv").config();
const errorHandler = require("./utils/error.js");
const verifyToken = require("./middleware/verifyToken.js");
const JWT_SECRET = "9HCl6jJ6qiArrnnoy9uS3pRbtTR5mMyG0uDIO0g4Ero";
app.use(cors());
app.use(cookie());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(express.json());
// Connect to MongoDB compass
mongodb: mongoose.connect("mongodb://127.0.0.1:27017/hotelb");

// Handle user registration
app.post("/register", async (req, res, next) => {
  const { email, username, password } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  try {
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: hash,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    next(error);
  }
});

const comparePassword = (plainPassword, hashedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainPassword, hashedPassword, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};
app.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    // Generate JWT token
    jwt.sign(
      { email: user.email, id: user._id, isAdmin: user.isAdmin },
      JWT_SECRET,
      {},
      (err, token) => {
        if (err) {
          return res.status(500).json({ error: "Internal server error" });
        }
        res.cookie("access_token", token).json({ user, token });
      }
    );
  } catch (error) {
    console.log("Error in /login:", error);
    next(error);
  }
});

app.get("/users", (req, res) => {
  User.find({})
    .then((User) => res.json(User))
    .catch((err) => res.send("Error: " + err));
});

// Configure Multer


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/addrooms", async (req, res) => {
  const { roomno, description, roomtype, capacity, acnonac, rent, status } = req.body;

  try {
    // Check if the room number already exists
    const existingRoom = await Room.findOne({ roomno: roomno });
    if (existingRoom) {
      console.error("Room number already exists:", roomno);
      return res.status(400).json({ message: "Room number already exists" });
    }

    const newRoom = new Room({
      roomno: roomno,
      description: description,
      roomtype: roomtype,
      capacity: capacity,
      acnonac: acnonac,
      rent: rent,
      status: status,
    });

    await newRoom.save()
      .then((room) => res.json(room))
      .catch((err) => {
        console.error("Error saving room:", err);
        res.status(500).json({ message: "Server error", error: err.message });
      });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({  
      message: "Server error",
      error: error.message,
    });
  }
});


app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  Room.find({})
    .then((rooms) => res.json(rooms))
    .catch((err) => res.send("Error: " + err));
});

app.get("/getrooms/:id", (req, res) => {
  const id = req.params.id;
  Room.find({})
    .then((rooms) => res.json(rooms))
    .catch((err) => res.send("Error: " + err));
});

app.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedRoomData = req.body; // Retrieve updated room data from request body
    Room.findByIdAndUpdate(id, { $set: updatedRoomData }, { new: true })
      .then((room) => {
        if (!room) {
          return res.status(404).json({ message: "Room not found" });
        }
        res.json(room);
      })
      .catch((err) => res.status(500).send("Error: " + err));
  } catch (error) {
    console.error("Error updating room:", error);
    res.status(500).json({ message: "Internal server error" });
  }
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

app.get("/adduser", async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: hash,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    next(error);
  }
});

app.get("/profile", (req, res) => {
  const { access_token } = req.cookies;

  if (!access_token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(access_token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { email, id } = decoded;
    res.json({ email, id });
  });
});

//Reserve Room
app.post("/reserveroom", async (req, res) => {
  const { roomId, startDate, endDate } = req.body;
  try {
    const newReservation = new Reservation({
      roomId: roomId,
      startDate: startDate,
      endDate: endDate,
    });
    await newReservation.save();
    res.status(201).json({ message: "Room reserved successfully" });
  } catch (error) {
    next(error);
  }
});

app.post("/booking/addrooms", verifyToken, async (req, res) => {
  const { roomno, bookingDate, startTime, endDate } = req.body;
  const { email } = req.user;

  try {
    // Check if the room is available
    const room = await Room.findOne({ roomno: roomno });
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    if (room.status !== "Available") {
      return res
        .status(400)
        .json({ message: "Room is not available for booking" });
      console.log();
    }

    // Proceed with booking
    const newBooking = new Booking({
      userID: email, // Assign the email from the decoded token
      roomno: roomno,
      bookingDate: new Date(bookingDate), // Ensure bookingDate is a Date object
      startTime: getMinutesPastMidnight(startTime), // Convert startTime to minutes past midnight
      endDate: new Date(endDate), // Ensure endDate is a Date object
    });

    await newBooking
      .save()
      .then(async (booking) => {
        // Update room status to indicate it is booked
        room.status = "booked";
        await room.save();

        res.json(booking);
      })
      .catch((err) => {
        console.error("Error saving booking:", err);
        res.status(500).json({ message: "Server error", error: err.message });
      });
  } catch (error) {
    console.error("Error in /booking/addrooms:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//Route that save booking room to booking database inside mongodb
// app.post("/booking/addrooms", async (req, res) => {
//   const { roomno, username } = req.body;
//   try {
//     // Find the room with the given roomno
//     const room = await Room.findOne({ roomno });

//     if (!room) {
//       return res.status(404).json({ message: "Room not found" });
//     }

//     console.log(room);

//     // Update the room status to "booked"
//     room.status = "booked";

//     // Save the updated room
//     await room
//       .save()
//       .then(() => {
//         // Save the new booking
//         const newBooking = new Booking({
//           roomno: roomno,
//           username: username,
//         });
//         newBooking
//           .save()
//           .then((booking) => res.json(booking))
//           .catch((err) => {
//             console.error("Error saving booking:", err);
//             res
//               .status(500)
//               .json({ message: " server error", error: err.message });
//           });
//       })
//       .catch((err) => {
//         console.error("Error saving room:", err);
//         res.status(500).json({ message: " server error", error: err.message });
//       });
//   } catch (error) {
//     res.status(500).json({
//       message: " server error",
//       error: error.message,
//     });
//   }
// });

//Route that will be used to fetch all the booking from database
app.get("/getbookings", (req, res) => {
  Booking.find({})
    .then((bookings) => res.json(bookings))
    .catch((err) => res.send("Error: " + err));
});

app.use("/api/users", userRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/hotels", hotelRoute);

app.listen(port, () => {
  console.log("Connected to Backend");
  console.log("Connected to MongoDB");
});
