const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const {
  sendJoinRequest,
  getProjectRequests,
  acceptJoinRequest,
  rejectJoinRequest,
  getMyJoinRequests,
} = require("../controllers/joinRequestController");

router.post("/", protect, sendJoinRequest);

router.get("/my", protect, getMyJoinRequests);

router.get("/project/:projectId", protect, getProjectRequests);

router.patch("/:id/accept", protect, acceptJoinRequest);

router.patch("/:id/reject", protect, rejectJoinRequest);

module.exports = router;