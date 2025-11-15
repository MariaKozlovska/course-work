const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");

const router = express.Router();

// Task Manegement Routes
router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks); // Get all tasks (Admin: all, User: assigned)
router.get("/:id", protect, getTaskById); // Get task by ID 
router.get("/", protect, adminOnly, createTask); // Create a task (Admin only)
router.get("/:id", protect, updateTask); // Update Task Details
router.delete("/:id", protect, adminOnly, deleteTask); // Delete a task (Admin only)
router.put("/:id/status", protect, updateTaskStatus); // Update task status
router.put("/:id/todo", protect, updateTaskCheckList); // Update task checklist

module.exports = router;