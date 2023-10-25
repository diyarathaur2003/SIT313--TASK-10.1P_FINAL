
// const express = require('express');
// const bodyParser = require('body-parser');
// const mailgun = require('mailgun-js');
// const dotenv = require('dotenv'); // Make sure to import dotenv

// dotenv.config();

// // Rename the function to avoid conflicts
// const initializeMailgun = () =>
//   mailgun({
//     apiKey: process.env.MAILGUN_API_KEY,
//     domain: process.env.MAILGUN_DOMAIN,
//   });

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send('Server is running.'); // Respond to GET requests
// });

// app.post('/api/email', (req, res) => {
//   const { emails } = req.body; // Expect an array of email addresses
//   if (!emails || !Array.isArray(emails) || emails.length === 0) {
//     return res.status(400).send({ message: 'Invalid email data' });
//   }

//   const mailgunInstance = initializeMailgun().messages();

//   const emailPromises = emails.map((email) => {
//     return new Promise((resolve, reject) => {
//       mailgunInstance.send(
//         {
//           from: 'Diya<diya4780.be22@chitkara.edu.in>',
//           to: email,
//           subject: 'WELCOME EMAIL!',
//           text: 'Hello Subscribers\nWelcome To Daily Insider.',
//         },
//         (error, body) => {
//           if (error) {
//             console.log(`Error sending email to ${email}:`, error);
//             reject(error);
//           } else {
//             console.log(`Email sent to ${email}:`, body);
//             resolve(body);
//           }
//         }
//       );
//     });
//   });

//   Promise.all(emailPromises)
//     .then(() => {
//       res.send({ message: 'Emails sent!' });
//     })
//     .catch((error) => {
//       res.status(500).send({ message: 'Error in sending emails' });
//     });
// });

// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
const dotenv = require('dotenv');

dotenv.config();

const initializeMailgun = () => {
  return mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  });
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Server is running.');
});

app.post('/api/email', async (req, res) => {
  const { emails } = req.body;
  if (!emails || !Array.isArray(emails) || emails.length === 0) {
    return res.status(400).send({ message: 'Invalid email data' });
  }

  const mailgunInstance = initializeMailgun().messages();

  try {
    for (const email of emails) {
      const result = await sendEmail(mailgunInstance, email);
      console.log(`Email sent to ${email}:`, result);
    }
    res.send({ message: 'Emails sent!' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).send({ message: 'Error in sending emails' });
  }
});

async function sendEmail(mailgunInstance, email) {
  return new Promise((resolve, reject) => {
    mailgunInstance.send(
      {
        from: 'Diya<diya4780.be22@chitkara.edu.in>',
        to: email,
        subject: 'WELCOME EMAIL!',
        text: 'Hello Subscribers\nWelcome To Daily Insider.',
      },
      (error, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      }
    );
  });
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
































// const express = require('express');
// const bodyParser = require('body-parser');
// const mailgun = require('mailgun-js');
// const cors = require('cors');
// const app = express();

// // Mailgun configuration
// const api_key = '2eccfe9dfa3a1ab094f4de09ae283292-28e9457d-de3d2e2d'; 
// const domain = 'sandboxd0a22738b27547c8a3e723f330a48a8d.mailgun.org	'; 
// const mailgunInstance = mailgun({ apiKey: api_key, domain: domain });

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Define a GET route for the root URL
// app.get('/', (req, res) => {
//     res.send('Welcome to the homepage');
// });

// // API endpoint for subscription
// app.post('/', (req, res) => {
//     const email = req.body.email;

//     const mailData = {
//         from: 'Diya <diya4780.be22@chitkara.edu.in>',
//         to: email, // Replace with the recipient's email address
//         subject: 'Welcome to Our Newsletter!',
//         text: 'Dear subscriber,\n\nThank you for signing up for our newsletter.',
//     };

//     mailgunInstance.messages().send(mailData, function (error, body) {
//         if (error) {
//             console.error(error);
//             return res.status(500).send("Error sending email");
//         } else {
//             console.log(body);
//             res.status(200).send("Email sent successfully");
//         }
//     });
// });

// // Start the server
// const PORT = 3001;
// app.listen(PORT, () => {
//     console.log(`The Server is running at port ${PORT}!`);
// });








    
    
    
    
    











// const express = require('express');
// const bodyParser = require('body-parser');
// const mailgun = require('mailgun-js');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

// const apiKey = '67deb00447c824196476d97323cb87a8-5465e583-44e7ffdf';
// const domain = 'sandboxd0a22738b27547c8a3e723f330a48a8d.mailgun.org';
// const mg = mailgun({ apiKey, domain });

// app.get('/', (req, res) => {
//     res.send('Welcome to the homepage');
// });

// app.post('/subscribe', (req, res) => {
//     const email = req.body.email;

//     const data = {
//         from: 'Diya<diya4780.be22@chitkara.edu.in>',
//         to: email,
//         subject: 'WELCOME EMAIL!',
//         text: `Hello Subscribers\nWelcome To Daily Insider.`
//     };

//     mg.messages().send(data, (error, body) => {
//         if (error) {
//             console.error('Error sending email:', error);
//             res.status(500).json({ error: 'Error sending email' });
//         } else {
//             console.log('Email sent:', body);
//             res.json({ message: 'Welcome! Email sent successfully' });
//         }
//     });
// });

// app.listen(3000, () => {
//     console.log("Server is running at port 3000!!!");
// });
