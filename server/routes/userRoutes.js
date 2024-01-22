import express from "express";
import { getUsers } from "../controllers/userController.js";
import {
  authMiddleware,
  authAdminMiddleware,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/users", authAdminMiddleware, getUsers);

export default router;
