import React from "react";
import "./ContactForm.scss";

function ContactForm() {
  return (
    <div>
      <div className="form-wrapper">
        <div class="signupSection">
          <div class="info">
            <h2>Contact Us</h2>
            {/* <br /> */}

            <p>Let's Create Something Useful</p>
          </div>
          <form action="#" method="POST" class="signupForm" name="signupform">
            <h2>Talk!</h2>
            <ul class="noBullet">
              <li>
                <label for="username"></label>
                <input
                  type="text"
                  class="inputFields"
                  id="username"
                  name="username"
                  placeholder="Your Name"
                  value=""
                  required
                />
              </li>
              <li>
                <label for="email"></label>
                <input
                  type="email"
                  class="inputFields"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value=""
                  required
                />
              </li>
              <li>
                <label for="Message"></label>
                <textarea
                  type="text"
                  class="inputFields"
                  name="password"
                  placeholder="Message"
                  value=""
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
