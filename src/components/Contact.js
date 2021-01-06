import React from "react";

const Contact = () => {
  const formSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <h1>Contact Me!</h1>
      <form onSubmit={formSubmit}>
        <input type="text" placeholder="Name..."></input>
        <input type="email" placeholder="Email..."></input>
        <textarea placeholder="Message..."></textarea>
        <button>SEND EMAIL</button>
      </form>
    </div>
  );
};

export default Contact;
