import Post from "../models/Post.model.js";
import cloudinary from "../config/cloudinaryconfig.js";

export const createPost = async (req, res) => {
  try {
    const { user, title, description, link, board } = req.body;

    if (!user) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "File is required" });
    }

    // Upload file to Cloudinary
    const uploadedFile = await cloudinary.uploader.upload(req.file.path, {
      folder: "pinterest_clone",
      resource_type: "image", // Ensuring it's an image
    });

    // Validate file format (already handled by Cloudinary)
    if (
      !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/.test(uploadedFile.secure_url)
    ) {
      return res.status(400).json({ message: "Invalid image format" });
    }

    // Create post in DB
    const newPost = new Post({
      user,
      title,
      description,
      link,
      board,
      file: uploadedFile.secure_url, // Store Cloudinary URL
      likes: [],
      comments: [],
    });

    await newPost.save();

    return res
      .status(201)
      .json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Fetch posts with pagination
export const getPosts = async (req, res) => {
  try {
    let { page, limit } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const posts = await Post
      .find()
      .populate("user")
      .skip((page - 1) * limit)
      .limit(limit);
    return res.status(200).json({ data: posts });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await postModel.findById({ id });
    if (posts) {
      return res.status(200).json({
        data: posts,
        message: "post fetched successfully",
      });
    }
    return res.status(400).json({
      message: "something went wrong!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;

    const { user, file, likes, comments, title, description, link, board } = req.body;

    const posts = await Post.findOneAndUpdate(
      { _id: id },
      {
        user: user,
        file: file,
        likes: likes,
        comments: comments,
        title: title,
        link: link,
        description: description,
        board:board
      }
    );
    if (posts.acknowledged) {
      return res.status(200).json({
        data: posts,
        message: "postc updated successfully",
      });
    }
    return res.status(400).json({
      message: "something went wrong!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const posts = await Post.deleteOne({ _id: id });
    if (posts.acknowledged) {
      return res.status(200).json({
        data: posts,
        message: "post deleted successfully",
      });
    }
    return res.status(400).json({
      message: "something went wrong!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
