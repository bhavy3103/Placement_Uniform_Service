import { Error } from 'mongoose';
import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


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

export const signin = async (req, res) => {
  try {
    const { enrollment, password } = req.body;
    if (!enrollment || !password)
      throw new Error("Fill out all data");

    const isUserValid = await User.findOne({ enrollment });
    if (!isUserValid)
      throw new Error("User not found");

    const isPasswordValid = await bcryptjs.compare(password, isUserValid.password);
    if (!isPasswordValid)
      throw new Error("Invalid Password");

    const token = jwt.sign({ userId: isUserValid._id },
      process.env.JWT_SECERET_KEY, {
      expiresIn: "1d",
    });
    const { password: pass, ...rest } = isUserValid._doc;
    res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);

  } catch (error) {
    res.status(500).json(error.message);

  }

}