const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'elliot.ledner@ethereal.email',
        pass: 'xmwB8XQNbHpb3rWrxw'
    }
});

const sendEmail = (email, subject, description) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: 'channoufitakwa09@gmail.com',
      to:'elliot.ledner@ethereal.email',
      subject: subject,
      text: description
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        reject('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        resolve('Email sent successfully');
      }
    });
  });
};

module.exports = { sendEmail };
