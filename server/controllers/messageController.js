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
    console.log('first');
    const userId = req.body.userId;
    const { message, selectedEnrollments } = req.body;
    const sender = await User.findById(userId);
    const senderId = sender?.email;

    console.log(message, selectedEnrollments, senderId);

    if (!sender) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    }

    sender.chats.push({ message, senderId });
    sender.save();
    for (let i = 0; i < selectedEnrollments.length; i++) {
      const receiver = await User.findOne({
        enrollment: selectedEnrollments[i],
      });
      if (!receiver) {
        return res.status(404).json({
          success: false,
          message: 'Receiver not found.',
        });
      }
      receiver.chats.push({ message, senderId });
      receiver.save();
    }

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
