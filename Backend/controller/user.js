const User = require("../models/users.js");

//Adduser
const addUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
};

//UPDATE
const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(savedUser);
  } catch (error) {
    next(error);
  }
};

//DELETE
const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};

//GET
const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

//GETALL
const getUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

//Exports
module.exports = {
  addUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
};
