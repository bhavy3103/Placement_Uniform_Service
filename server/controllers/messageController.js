import { User } from '../models/userModel.js';

export const getAllMessages = async (req, res) => {
  try {
    const userId = req.body.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }
    res.status(200).json({
      success: true,
      data: user.chats,
    });
  } catch (error) {
    console.error('Error in getAllMessages:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

export const postMessage = async (req, res) => {
  try {
    const userId = req.body.userId;
    const { message, timestamp } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    }

    user.chats.push({ message, timestamp });
    user.save();

    res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
    });
  } catch (error) {
    console.error('Error in postMessage:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};
