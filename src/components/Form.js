import React from 'react';

function Form() {
  return (
    <div className="contact" id="contact">
      <h1>CONTACT</h1>
      <p>Have a question or want to work together?</p>
      <form id="form">
        <input type="text" id="name" placeholder="Name" />
        <span className="error"></span>
        <br />
        <input type="email" id="email" placeholder="Enter Email " />
        <span className="error"></span>
        <br />
        <textarea
          name="message"
          id="message"
          placeholder="Your Message"
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
