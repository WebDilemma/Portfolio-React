import React from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Footer from '../../Components/Footer/Footer';
import Title from '../../Components/Title/Title';
import './ContactPage.styles.css';

const ContactPage = () => {
  return (
    <div className="contactpage">
      <section>
        <Title name="contact" />
        <ContactForm />
      </section>
      <section className="reachOut">
        <Title name="reach out" />
        <div className="contactpage__reachOut">
          <div className="reachOut__map">
            <img className="reachOut__mapImg" src="https://picsum.photos/800/600" alt="map" />
          </div>
          <div className="reachOut__info">
            <div className="reachOut__infoContainer">
              <h3 className="">Address:</h3>
              <p>
                <b>AT:</b> L.D College of Engineering, Navarangpura, Ahmedabad- Gujarat.
              </p>
            </div>
            <div className="reachOut__infoContainer">
              <h3>Telephone</h3>
              <p>
                <b>Phone:</b> 99999 99999
              </p>
            </div>
            <div className="reachOut__infoContainer">
              <h3>Timings: </h3>
              <p>
                <b>Work Days:</b> Monday to Friday
              </p>
              <p>
                <b>Timings:</b> 9 to 5
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
