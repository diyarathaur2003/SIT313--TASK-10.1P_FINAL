
// const express = require('express');
// const bodyParser = require('body-parser');
// const mailgun = require('mailgun-js');
// const dotenv = require('dotenv'); // Make sure to import dotenv

// dotenv.config();

// // Rename the function to avoid conflicts
// const initializeMailgun = () => mailgun({
//   apiKey: process.env.MAILGUN_API_KEY,
//   domain:  process.env.MAILGUN_DOMAIN,
// });

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send('Server is running.'); // Respond to GET requests
// });

// app.post('/api/email', (req, res) => {
//   const { email } = req.body;
//   initializeMailgun().messages().send({
//     from: 'Diya<diya4780.be22@chitkara.edu.in>',
//     to: email,
//     subject: 'WELCOME EMAIL!',
//     text: 'Hello Subscribers\nWelcome To Daily Insider.',
//   }, (error, body) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send({ message: 'error in sending email' });
//     } else {
//       console.log(body);
//       res.send({ message: 'email sent!' });
//     }
//   });
// });
