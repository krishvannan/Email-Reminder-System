const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const schedule = require('node-schedule');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configure email sender
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "your_email_here",
    pass: "your_app_password_here"
  }
});

app.post('/set-reminder', (req, res) => {
  const { email, subject, message, time } = req.body;

  // Schedule email
  const [hour, minute] = time.split(':');
  const job = schedule.scheduleJob({ hour: parseInt(hour), minute: parseInt(minute) }, function () {
    const mailOptions = {
      from: 'youremail@gmail.com',
      to: email,
      subject,
      text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.log(error);
      else console.log('Email sent: ' + info.response);
    });
  });

  res.json({ message: 'Reminder set successfully!' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
