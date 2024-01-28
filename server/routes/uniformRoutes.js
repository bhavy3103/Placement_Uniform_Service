import express from "express";
import {
  authMiddleware,
  authAdminMiddleware,
} from "../middlewares/authMiddleware.js";
import { updateStudentUniform } from '../controllers/uniformController.js';

const router = express.Router();

// router.get('/details/:id', authAdminMiddleware, getUserWithUniform);

router.post('/updateUniform', authAdminMiddleware, updateStudentUniform);


export default router;