import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs'


export const signup = async (req, res) => {
  try {
    const { enrollment, password } = req.body;
    const user = await User.findOne({ enrollment });
    if (user) throw new Error("User already exists");
    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json("User created Successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};