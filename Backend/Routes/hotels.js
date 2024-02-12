const express = require("express");
const Hotel = require("../models/Hotel");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
  countByCity,
  countByType,
} = require("../controller/hotel");
const { verifyAdmin } = require("../utils/verifyToken");
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/update/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/delete/:id", verifyAdmin, deleteHotel);
//GET
router.get("/find/:id", getHotel);
//GETALL
router.get("/", getHotels);

// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);

module.exports = router;
