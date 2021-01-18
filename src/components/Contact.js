import React, { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(message, name, email);
    // const templateId = "template_6uvtk0r";
    // sendEmail(templateId, {
    //   message: message,
    //   from_name: name,
    //   from_email: email,
    //   to_name: "Jesper",
    // });
    setEmail("");
    setMessage("");
    setName("");
  };

  // const sendEmail = (templateId, varibles) => {
  //   window.emailjs
  //     .send("service_sndqnnb", templateId, varibles)
  //     .then((res) => {
  //       console.log("Email was send", res);
  //     })
  //     .catch((err) => console.log("Error was: ", err));
  // };

  return (
    <Wrapper>
      <h1>Hit me up!</h1>
      <Form onSubmit={onFormSubmit}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name..."
          required
        ></Input>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email..."
          required
        ></Input>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message..."
          required
        ></Textarea>
        <ButtonForm>SEND EMAIL</ButtonForm>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 7%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 400px) {
    width: 100vw;
    margin-top: 0%;
    /* margin-bottom: 10%; */
    height: 100vh;
  }
`;

const Form = styled.form`
  font-family: "Rubik", sans-serif;
  height: 450px;
  width: 550px;
  margin-bottom: 10%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 400px) {
    width: 300px;
  }
`;

const Input = styled.input`
  color: rgb(0, 0, 0);
  padding: 12px;
  width: 90%;
  height: 5%;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 2px 2px 3px 3px grey;
  outline: none;
  background: none;
  font-size: 16px;

  &:placeholder {
    font-family: "Rubik", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 16px;
  }
`;

const Textarea = styled.textarea`
  font-family: "Rubik", sans-serif;
  color: rgb(0, 0, 0);
  padding: 12px;
  width: 90%;
  height: 30%;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 2px 2px 3px 3px grey;
  outline: none;
  background: none;
  font-size: 16px;
  resize: none;

  &:placeholder {
    font-family: "Rubik", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 16px;
  }
`;

const ButtonForm = styled.button`
  font-family: "Rubik", sans-serif;
  border: 1px solid black;
  outline: none;
  padding: 10px;
  width: 40%;
  height: 10%;
  cursor: pointer;
  font-size: 16px;
  background: none;
  border-radius: 8px;
`;

export default Contact;
