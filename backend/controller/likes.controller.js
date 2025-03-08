import likedModel from "../models/liked.model.js";

export const createLike = async (req, res) => {
  try {
    const { post, user } = req.body;

    // Check if the user already liked the post
    const existingLike = await likedModel.findOne({ post, user });
    if (existingLike) {
      return res.status(400).json({ message: "Post already liked by user" });
    }

    const like = new likedModel({ user, post });
    await like.save();

    return res.status(201).json({ message: "Post liked", data: like });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Unlike a post
export const removeLike = async (req, res) => {
  try {
    const { post, user } = req.body;
    const deletedLike = await likedModel.findOneAndDelete({ post, user });

    if (!deletedLike) {
      return res.status(404).json({ message: "Like not found" });
    }

    return res.status(200).json({ message: "Post unliked" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
