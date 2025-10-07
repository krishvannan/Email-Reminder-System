# Email Reminder System

## Overview
The **Email Reminder System** is a web-based application that allows users to schedule reminder emails.  
Users can enter an email address, subject, message, and time — and the system will automatically send an email at the specified time.

---

## Project Structure
```
email-reminder-system/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   └── package.json
│
└── README.md
```

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

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/email-reminder-system.git
cd email-reminder-system
```

### 2. Backend Setup
- Navigate to the backend folder:
```bash
cd backend
npm install
```
- Open **server.js**  
- Replace:
```js
user: 'youremail@gmail.com',
pass: 'yourapppassword'
```
with your **Gmail** and **App Password** (use an app password, not your Gmail password)  

### 3. Run the Backend
```bash
npm start
```
- The server will start on **http://localhost:5000**  
- Keep this terminal open while using the frontend

### 4. Frontend Setup
- Open `frontend/index.html` in your browser  
- Fill in the following fields in the form:
  - **Email** – recipient email address  
  - **Subject** – email subject  
  - **Message** – email content  
  - **Reminder Time** – time to send the email (24-hour format)  
- Click **Set Reminder** to schedule the email

---

## How It Works
1. User enters email details in the form.  
2. Frontend sends data to backend endpoint `/set-reminder`.  
3. Backend schedules the email using **node-schedule**.  
4. At the scheduled time, **Nodemailer** automatically sends the email.

---

## Example
| Field   | Example                                   |
|---------|-------------------------------------------|
| Email   | test@gmail.com                            |
| Subject | Meeting Reminder                          |
| Message | Don’t forget the 5 PM team meeting.       |
| Time    | 17:00                                     |

---

## Future Enhancements
- Add date picker for scheduling on specific days  
- Store reminders in a database (e.g., MongoDB)  
- Add login system for users  
- Deploy online using Render, Vercel, or other hosting services

---

## Author
**Krish Vannan**  
💌 krishvannan7@gmail.com  
📂 GitHub: [https://github.com/<your-username>](https://github.com/<krishvannan>)  
📅 Project created in 2025
