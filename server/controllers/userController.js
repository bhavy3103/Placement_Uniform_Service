import { User } from '../models/userModel.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    users.forEach((user) => {
      if (user.role === 'admin') {
        users.splice(users.indexOf(user), 1);
      }
    });
    console.log(users);
    res.send({
      success: true,
      data: users,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      res.send({
        success: true,
        message: 'Error occurred in fetching user.',
      });
    }
    const { password: pass, ...rest } = user._doc;
    res.send({
      success: true,
      message: 'User fetched Successfully',
      user: rest,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { userId, updateData } = req.body;
    const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
    if (!user) {
      return res.send({
        success: false,
        message: 'User not found',
      });
    }
    const { password: pass, ...rest } = user._doc;
    res.send({
      success: true,
      message: 'User updated successfully',
      user: rest,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
