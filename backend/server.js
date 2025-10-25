require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const schedule = require('node-schedule');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
app.post('/set-reminder', (req, res) => {
  const { email, subject, message, date } = req.body;
  if (!email || !subject || !message || !date) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const sendDate = new Date(date);
  if (sendDate < new Date()) {
    return res.status(400).json({ message: 'Cannot schedule a reminder in the past' });
  }
  console.log('Received reminder:', req.body);
  console.log('Scheduling email for:', sendDate);
  schedule.scheduleJob(sendDate, async () => {
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject,
        text: message,
      });
      console.log(`Scheduled email sent to ${email} at ${sendDate}`);
    } catch (err) {
      console.error('Error sending scheduled email:', err);
    }
  });
  res.json({ message: 'Reminder scheduled successfully!' });
});
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
