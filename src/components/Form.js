import axios from "axios";
import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { data } = axios.post(
      "https://drab-puce-adder-tie.cyclic.app/feedback",
      {
        name,
        email,
        message,
      }
    );
    localStorage.setItem("message", JSON.stringify(data));

    console.log(data);
    setSubmit(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact" id="contact">
      <h1>CONTACT</h1>
      <p>
        {submit
          ? "Your Message Successfully Sent"
          : "Have a question or want to work together?"}
      </p>
      <p></p>
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="error"></span>
        <br />
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Enter Email "
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="error"></span>
        <br />
        <textarea
          name="message"
          id="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <span className="error"></span>
        <br />
        <button type="submit">SUBMIT</button>
        <br />
      </form>
    </div>
  );
}

export default Form;
