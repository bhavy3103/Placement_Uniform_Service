import transporter from '../config/mailConfig.js';

export async function mailer(mailList, data) {
  const htmlContent = `
  <html>
  <body>
    <h3>Notification</h3>   
    <p>You got following notification : ${data.message}.</p>
    <br><br><br><br>
  </body>
  </html>
  `;

  const mailOptions = {
    from: 'malhargamezone@gmail.com', // Sender's email address
    to: mailList, // Recipient's email address
    subject: 'Placement Cell notification',
    html: htmlContent,
  };

  const info = await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}
