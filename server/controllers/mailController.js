import { mailer } from './helperfile.js';
import { User } from '../models/userModel.js';
export const sendMail = async (req, res) => {
  try {
    const enrollList = req.body.selectedEnrollments;
    const data = req.body.message;
    let mailList = [];
    enrollList.map(async (enroll) => {
      const user = await User.findOne({ enrollment: enroll });
      mailList.push(user.email);
    });
    await mailer(mailList, data);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully.',
    });
  } catch (error) {
    console.error('Error in sendMail:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};
