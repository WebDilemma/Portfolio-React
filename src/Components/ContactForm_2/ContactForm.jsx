import React from "react";
import "./ContactForm.scss";

function ContactForm() {
  return (
    <div>
      <div className="form-wrapper">
        <div className="signupSection">
          <div className="info">
            <h2>Reach Out</h2>
            <br />

            <p>Let's Create Something Useful</p>
          </div>
          <form
            action="#"
            method="POST"
            className="signupForm"
            name="signupform"
          >
            <h2>Talk!</h2>
            <ul class="noBullet">
              <li>
                <input
                  type="text"
                  className="inputFields"
                  id="username"
                  name="username"
                  placeholder="Your Name"
                  required
                />
              </li>
              <li>
                <input
                  type="email"
                  className="inputFields"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </li>
              <li>
                <textarea
                  type="text"
                  className="inputFields"
                  name="password"
                  placeholder="Message"
                  required
                />
              </li>
              <li id="center-btn">
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
