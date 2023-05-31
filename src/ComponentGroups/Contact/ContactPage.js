import React, { useState } from "react";
// import nodemailer from "nodemailer";
import "../RepeatedPageStyles/PageStyles.css";
import "./ContactPage.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [returnEmail, setReturnEmail] = useState("");
  const [message, setMessage] = useState("");

  // const sendEmail = (name, email, message) => {
  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: "wkoenig0814@gmail.com",
  //       pass: "Walliek0420!!",
  //     },
  //   });

  //   const mailOptions = {
  //     from: email,
  //     to: "wkoenig0814@gmail.com",
  //     subject: "PERSONAL PORTFOLIO CONTACT REQUEST",
  //     text: message,
  //   };

  //   transporter.sendMail(mailOptions, function (error, info) {
  //     if (error) {
  //       console.log(err);
  //     } else {
  //       console.log("email sent: ", info.response);
  //     }
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // sendEmail(name, returnEmail, message);
    console.log(
      "Name: ",
      name,
      "Return Email: ",
      returnEmail,
      "Message: ",
      message
    );
    setName("");
    setReturnEmail("");
    setMessage("");
  };

  return (
    <div name="contact" className="pageContainer">
      <h1 className="titleText">Contact Me</h1>
      <form className="contactForm" onSubmit={handleSubmit}>
        <p>
          Submit the form below or shoot me an email - wkoenig0814@gmail.com
        </p>
        <input
          type="name"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          value={returnEmail}
          onChange={(event) => setReturnEmail(event.target.value)}
        />
        <br />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button className="submitMessageButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
