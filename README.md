# Email Reminder System

## Overview
The **Email Reminder System** is a web-based application that allows users to schedule reminder emails.  
Users can enter an email address, subject, message, and time — and the system will automatically send an email at the specified time.

---
## Folder structure

email-reminder/            
│
├── backend/               
│   ├── server.js          
│   ├── package.json       
│   └── .env 
│
├── frontend/              
│   ├── index.html         
│   ├── style.css          
│   └── script.js          
│
└── .gitignore             

---

## Technologies Used

**Frontend:**
- HTML  
- CSS  
- JavaScript (Fetch API)

**Backend:**
- Node.js  
- Express.js  
- Nodemailer (for sending emails)  
- Node-Schedule (for scheduling reminders)  
- Body-parser, CORS

---

## Setup Instructions
Setup Instructions

## Clone the repository

git clone <your-repo-URL>
cd email-reminder


## Install backend dependencies

cd backend
npm install


## Create a .env file in the backend folder

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

Note: Use a Gmail App Password not Gmail password. Do not share your .env publicly.

Start the backend server
node server.js


By default, it runs on http://localhost:5000.
Open the frontend

Open frontend/index.html in a browser.

Fill in the form and schedule a reminder.

## Scheduling Email

Enter valid email, subject, message, and future date/time.

You should see a success message if the email is scheduled correctly.

Email will be sent automatically at the scheduled time.

## Important Notes

.env and node_modules/ are excluded from the repo for security and size reasons.
You must create your own .env to run the project.
Ensure your system time is correct for scheduling emails.

