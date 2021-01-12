import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(message, name, email);
    const templateId = "template_6uvtk0r";
    sendEmail(templateId, {
      message: message,
      from_name: name,
      from_email: email,
      to_name: "Jesper",
    });
  };

  const sendEmail = (templateId, varibles) => {
    window.emailjs
      .send("service_sndqnnb", templateId, varibles)
      .then((res) => {
        console.log("Email was send", res);
      })
      .catch((err) => console.log("Error was: ", err));
  };

  return (
    <div className="form-container">
      <h1>Hit me up!</h1>
      <form onSubmit={onFormSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name..."
        ></input>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email..."
        ></input>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message..."
        ></textarea>
        <button>SEND EMAIL</button>
      </form>
    </div>
  );
};

export default Contact;
