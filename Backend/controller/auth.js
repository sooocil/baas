const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users.js");

const register = async (req, res) => {
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
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(errorHandler(404, "User not found"));
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(errorHandler(401, "Invalid credentials"));
    const token = jwt.sign(
      { username: user.username, id: user._id, isAdmin: user._isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .json(otherDetails);
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
