import { Error } from "mongoose";
import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { Uniform } from '../models/userModel.js';

export const signup = async (req, res) => {
  try {
    const { enrollment, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ enrollment });
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Create a new Uniform document for the user
    const newUniform = new Uniform({
      firstInstallment: false,
      secondInstallment: false,
      isMeasureMentDone: false,
      isArrived: false,
      isDistributed: false,
      isIssue: []
    });

    // Save the new Uniform document
    const savedUniform = await newUniform.save();

    // Hash the user's password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new User document with the uniform field set to the Uniform document's _id
    const newUser = new User({
      ...req.body,
      password: hashedPassword,
      uniform: savedUniform,
    });

    // Save the new User document
    await newUser.save();

    res.status(201).json("User created Successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const signin = async (req, res) => {
  try {
    const { enrollment, password } = req.body;
    if (!enrollment || !password) throw new Error("Fill out all data");

    const isUserValid = await User.findOne({ enrollment });
    if (!isUserValid) throw new Error("User not found");

    const isPasswordValid = await bcryptjs.compare(
      password,
      isUserValid.password
    );
    if (!isPasswordValid) throw new Error("Invalid Password");

    const token = jwt.sign(
      { userId: isUserValid._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    const { password: pass, ...rest } = isUserValid._doc;
    res.cookie('access_token', token, { httpOnly: true });
    res.send({
      success: true,
      message: rest,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

export const signout = async (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.status(200).json('User has been logged out');
  } catch (error) {
    next(error);
  }
};
