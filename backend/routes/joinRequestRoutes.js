const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const {
  sendJoinRequest,
  getProjectRequests,
  acceptJoinRequest,
  rejectJoinRequest,
  getMyJoinRequests,
  getReceivedRequests,
} = require("../controllers/joinRequestController");;

router.post("/", protect, sendJoinRequest);

router.get("/my", protect, getMyJoinRequests);

router.get("/received", protect, getReceivedRequests);

router.get("/project/:projectId", protect, getProjectRequests);

router.patch("/:id/accept", protect, acceptJoinRequest);

router.patch("/:id/reject", protect, rejectJoinRequest);

module.exports = router;