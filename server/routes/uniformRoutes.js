import express from "express";
import {
  authMiddleware,
  authAdminMiddleware,
} from "../middlewares/authMiddleware.js";
import { getUserWithUniform } from '../controllers/uniformController.js';

const router = express.Router();

router.get('/details/:id', authAdminMiddleware, getUserWithUniform);

export default router;