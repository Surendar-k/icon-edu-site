const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 5000;

sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  const msg = {
    to: 'your-email@gmail.com',  // Your receiving email
    from: 'your-email@gmail.com', // Verified sender in SendGrid
    subject: subject || 'New Contact Form Message',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('SendGrid error:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
