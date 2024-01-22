import User from "../models/userModel.js";
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
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
