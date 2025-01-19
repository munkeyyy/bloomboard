import userModel from "../models/user.model";

export const createUser = (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const user = new userModel({
      userName,
      email,
      password,
    });
    user.save();
    if (user) {
      return res.status(200).json({
        data: user,
        message: "User created Successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
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
