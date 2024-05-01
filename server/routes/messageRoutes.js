import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { getAllMessages } from '../controllers/messageController.js';

const router = express.Router();

router.post('/getAllMessages', authMiddleware, getAllMessages);

export default router;