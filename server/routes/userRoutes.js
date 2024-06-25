import express from 'express';
import { getUsers, getCurrentUser, updateUser } from '../controllers/userController.js';
import {
  authMiddleware,
  authAdminMiddleware,
} from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/users', authAdminMiddleware, getUsers);
router.get('/', authMiddleware, getCurrentUser);
router.patch('/updateUser', authMiddleware, updateUser);


export default router;
