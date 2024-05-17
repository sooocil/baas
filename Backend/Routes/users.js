const express = require("express");

const router = express.Router();

const {
  addUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controller/user");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../utils/verifyToken");

router.get("/checkauthentication", verifyToken, (req, next) => {
  res.send("Authenticated");
});
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Hello user you are logged in and you can delete your account");
});

//ADDUSer
router.post("/add", addUser);

//UPDATE
router.put("/update/:id", updateUser);
//DELETE
router.delete("/delete/:id", deleteUser);
//GET
router.get("/get/:id", getUser);
//GETALL
router.get("/", getUsers);

module.exports = router;
