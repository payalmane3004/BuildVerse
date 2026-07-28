const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const {
  updateProfile,
  getProfile,
} = require("../controllers/userController");

// Update Profile
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);


module.exports = router;