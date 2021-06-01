import React from 'react';
import './ContactForm.styles.css';

const ContactForm = () => {
  return (
    <div className="contactForm" id="contact">
      <form action="">
        <div className="contactForm__row">
          <input required type="text" placeholder="Name" />
          <input required type="email" placeholder="Email" />
        </div>
        <div className="contactForm__row">
          <textarea required type="text" placeholder="Message" />
        </div>
        <div className="contactForm__row">
          <button className="contactForm__submitBtn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
