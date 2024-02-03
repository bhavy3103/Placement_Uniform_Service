import express from "express";
import {
  authMiddleware,
  authAdminMiddleware,
} from "../middlewares/authMiddleware.js";
import { updateStudentUniform, updateUniformIssue } from '../controllers/uniformController.js';

const router = express.Router();

// router.get('/details/:id', authAdminMiddleware, getUserWithUniform);

router.post('/updateUniform', authAdminMiddleware, updateStudentUniform);
router.patch('/updateIssue', authMiddleware, updateUniformIssue);


export default router;