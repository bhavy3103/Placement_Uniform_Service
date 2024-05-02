import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config();

const mailId = process.env.USER;
const pass = process.env.PASS;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: mailId,
    pass: pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

export default transporter;
