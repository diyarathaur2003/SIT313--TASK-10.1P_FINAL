
import { useState } from "react";
import "./Footer.css"; // Import the CSS styles for this component
import axios from "axios"; // Import axios for making HTTP requests

const Email = () => {
    const [showText, setShowText] = useState(true);
    const [emailList, setEmailList] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const emails = emailList.split(/[,;]/).map((email) => email.trim());
            // Make a POST request to the "/api/email" endpoint with the list of emails
            await axios.post("/api/email", { emails });

            // setShowText(false);

            // setTimeout(() => {
            //     setShowText(true);
            //     setEmailList("");
            // }, 5000);

        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <div id="myForm">

            <iframe title='Sign Up' name="EmptyFrame" className="hidden" />
            <form
                id="EmailForm"
                action="/subscribe"
                target="EmptyFrame"
                method="POST"
                onSubmit={handleFormSubmit}
                className={showText ? null : "hidden"}

            >
                <h8>
                    {showText ? "SIGN UP FOR OUR DAILY INSIDER:"
                        : "Thank you for signing up"}
                </h8>
                <input
                    name="email"
                    type="text"
                    placeholder="Enter email addresses (separated by comma or semicolon)"
                    value={emailList}
                    onChange={(e) => setEmailList(e.target.value)}
                />
                <button name="submit" type="submit">
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Email;









// import React, { useState } from 'react';
// import axios from 'axios';

// function Footer(props) {
//   const [email, setEmail] = useState('');

//   const handleSubscribe = () => {
//     // Make a POST request to your server
//     axios.post('http://localhost:3007/subscribe', { email }) // Assuming your NodeJS server is running on port 3007
//       .then(response => {
//         console.log('Email sent:', response.data);
//         // Optionally, you can provide user feedback here
//       })
//       .catch(error => {
//         console.error('Error sending email:', error);
//         // Optionally, you can provide user feedback here
//       });
//   };

//   return (
//     <div className="footer">
//       <div className="foot-left">
//         <h2>{props.text}</h2>
//       </div>
//       <div className="foot">
//         <input
//           type="email"
//           placeholder="Enter your Email"
//           className="topic"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <button className="sub" onClick={handleSubscribe}>
//         Subscribe
//       </button>
//     </div>
//   );
// }

// export default Footer;



























// import './Footer.css'
// import { Input, Button } from 'semantic-ui-react'
// function Footer(props)
// {
//     return( <div className="footer">
//     <div className="foot-left">
//       <h2>{props.text}</h2>
//     </div>
//     <div className ="foot">
//      <input text ="email" placeholder="Enter your Email" className="topic " />
//     </div>
//       <Button className="sub">Subscribe</Button>
//     </div>

//   )
// }
// export default Footer