import jwt from "jsonwebtoken";
import ROLES from "../constants/ROLES.js";
import { User } from "../models/userModel.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("authorization").split(" ")[1];
    const decryptedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.body.userId = decryptedToken.userId;
    next();
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

export const authAdminMiddleware = async (req, res, next) => {
  try {
    const token = req.header("authorization").split(" ")[1];
    const decryptedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.body.userId = decryptedToken.userId;
    const user = await User.findById(req.body.userId);
    if (user.role !== ROLES.ADMIN) throw new Error("You are not authorized...");
    next();
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
