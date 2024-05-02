import express from 'express';
import { getUsers, getCurrentUser } from '../controllers/userController.js';
import {
  authMiddleware,
  authAdminMiddleware,
} from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/users', authAdminMiddleware, getUsers);
router.get('/', authMiddleware, getCurrentUser);

export default router;
