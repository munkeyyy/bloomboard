

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/user.model.js";


export const createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    console.log("body",req.body)
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      userName,
      email,
      password: hashedPassword,
    });
    console.log(user,"user")
    await user.save();

    // Generate JWT Token
    // const token = jwt.sign({ userId: user._id }, "SECRET_KEY", { expiresIn: "7d" });

    return res.status(201).json({
      message: "User created successfully",
      user: { id: user._id, email: user.email, userName: user.userName },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    if (users) {
      return res.status(200).json({
        data: users,
        message: "users fetched successfully",
      });
    }
    return res.status(400).json({
      message: "something went wrong",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getUser = async () => {
  try {
    const { id } = req.params;
    const user = await userModel.findById({ _id: id });
    if (user) {
      return res.status(200).json({
        data: user,
        message: "user fetched successfully",
      });
    }
    return res.status(400).json({
      message: "something went wrong",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, email, password } = req.body;
    const updatedUser = await userModel.updateOne(
      { _id: id },
      { userName, email, password }
    );
    if (updatedUser.acknowledged) {
      return res.status(200).json({
        message: "User updated successfully",
      });
    }
    return res.status(400).json({
      message: "something went wrong",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await userModel.deleteOne({ _id: id });
    if (deletedUser.acknowledged) {
      return res.status(200).json({
        message: "User deleted successfully",
      });
    }
    return res.status(400).json({
      message: "something went wrong",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id }, "SECRET_KEY", { expiresIn: "1h" });

    return res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, email: user.email, userName: user.userName },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
