import { User } from '../models/userModel.js';
export const getAllMessages = async (req, res) => {
  try {
    const { enrollment } = req.body;
    if (!enrollment) {
      return res.status(400).json({
        success: false,
        message: "Enrollment number is required.",
      });
    }

    const user = await User.findOne({ enrollment });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: user.chats,
    });
  } catch (error) {
    console.error("Error in getAllMessages:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};