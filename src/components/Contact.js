import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <h1>Hit me up!</h1>
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Name..."></input>
        <input type="email" placeholder="Email..."></input>
        <textarea placeholder="Message..."></textarea>
        <button>SEND EMAIL</button>
      </form>
    </div>
  );
};

export default Contact;
