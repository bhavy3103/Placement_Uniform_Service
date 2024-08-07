import express from "express";
import dotenv from "dotenv";
import db from "./config/dbConfig.js";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import uniformRoutes from "./routes/uniformRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import mailRoutes from "./routes/mailRoutes.js";
import cors from "cors";
import path from 'path';

db();

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'dist', 'index.html')));
app.use(cors());


app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/uniform", uniformRoutes);
app.use("/api/chats", messageRoutes);
app.use("/api/mail", mailRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('build', 'index.html'));
});

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
