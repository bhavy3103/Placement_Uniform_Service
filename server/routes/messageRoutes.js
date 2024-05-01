import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import {
  getAllMessages,
  postMessage,
} from '../controllers/messageController.js';

const router = express.Router();

router.get('/getAllMessages', authMiddleware, getAllMessages);
router.post('/postMessage', authMiddleware, postMessage);

export default router;
