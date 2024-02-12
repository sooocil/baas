const express = require("express");

const router = express.Router();

const {
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

//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//GETALL
router.get("/", verifyAdmin, getUsers);

module.exports = router;
