import { sendMail } from '../controllers/mailController.js';
import express from 'express';
const router = express.Router();

router.post('/sendMail', sendMail);

export default router;