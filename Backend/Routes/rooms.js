const express = require("express");
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} = require("../controller/room.js");
const { verifyAdmin } = require("../utils/verifyToken.js");
const router = express.Router();
//CREATE
router.post("/createrooms", verifyAdmin, createRoom);
//UPDATE
router.put("/update/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/delete/:id/:hotelid", verifyAdmin, deleteRoom);
//GET
router.get("/find/:id", getRoom);
//GETALL
router.get("/allrooms", getRooms);

module.exports = router;
