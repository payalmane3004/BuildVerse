const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createProject,
  getAllProjects,
  getMyProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

// ==========================
// Public Routes
// ==========================

// Get all projects (supports search)
router.get("/", getAllProjects);






router.get("/my", protect, getMyProjects);
// Get a single project
router.get("/:id", getProjectById);

// ==========================
// Protected Routes
// ==========================



// Create a project
router.post("/", protect, createProject);

// Update project
router.put("/:id", protect, updateProject);

// Delete project
router.delete("/:id", protect, deleteProject);

module.exports = router;