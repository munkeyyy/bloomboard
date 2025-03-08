import Board from "../models/board.model.js";
// import Post from "../models/post.model.js";

// 1️⃣ Create a new board
export const createBoard = async (req, res) => {
  try {
    const { name, description, user } = req.body;
   // Extracted from JWT middleware
    console.log(user)
    if (!name) {
      return res.status(400).json({ message: "Board name is required" });
    }

    const newBoard = new Board({ name, description,user, posts: [] });
    await newBoard.save();

    return res.status(201).json({ message: "Board created successfully", board: newBoard });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 2️⃣ Get all boards
export const getAllBoards = async (req, res) => {
  try {
    const boards = await Board.find().populate("user", "username email").populate("posts");
    return res.status(200).json(boards);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 3️⃣ Get a single board by ID
export const getBoardById = async (req, res) => {
  try {
    const { id } = req.params;
    const board = await Board.findById(id).populate("user", "username email").populate("posts");

    if (!board) {
      return res.status(404).json({ message: "Board not found" });
    }

    return res.status(200).json(board);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 4️⃣ Update a board
export const updateBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const board = await Board.findById(id);

    if (!board) {
      return res.status(404).json({ message: "Board not found" });
    }

    if (board.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    board.name = name || board.name;
    board.description = description || board.description;

    await board.save();

    return res.status(200).json({ message: "Board updated successfully", board });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 5️⃣ Delete a board
export const deleteBoard = async (req, res) => {
  try {
    const { id } = req.params;

    const board = await Board.findById(id);

    if (!board) {
      return res.status(404).json({ message: "Board not found" });
    }

    if (board.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await board.deleteOne();

    return res.status(200).json({ message: "Board deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
