import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'

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