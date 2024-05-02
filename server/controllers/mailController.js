import { mailer } from './helperfile.js';

export const sendMail = async (req, res) => {
  try {
    const mailList = req.body.mailList;
    const data = req.body.data;
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