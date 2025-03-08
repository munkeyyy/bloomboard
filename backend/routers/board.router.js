import express from "express";
import {
  createBoard,
  getAllBoards,
  getBoardById,
  updateBoard,
  deleteBoard,
} from "../controller/board.controller.js";
import { authMiddleware } from "../middleware/middleware.js";
// import { authMiddleware } from "../middleware/authMiddleware.js"; // Protect routes

const router = express.Router();

// Create a new board (Logged-in users only)
router.post("/create", createBoard);

// Get all boards
router.get("/", getAllBoards);

// Get a single board by ID
router.get("/:id", getBoardById);

// Update a board (Only board owner)
router.put("/:id", authMiddleware, updateBoard);

// Delete a board (Only board owner)
router.delete("/:id", authMiddleware, deleteBoard);

export default router;
