import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
import { authMiddleware } from './middlewares/authMiddleware.js';

mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDB🥳🥳🚀');
}).catch((err) => {
  console.log(err);
});


const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


// for checking authMiddleware no other purpose
app.use('/secure-route', authMiddleware);
app.get('/secure-route', (req, res) => {
  res.send('This route is secure');
});
