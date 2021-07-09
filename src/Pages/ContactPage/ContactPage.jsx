import React from "react";
import ContactForm from "../../Components/ContactForm_2/ContactForm";
import Footer from "../../Components/Footer/Footer";
import Title from "../../Components/Title/Title";
import "./ContactPage.styles.css";

const ContactPage = () => {
  return (
    <div className="contactpage">
      <section className="contactpage__contactForm">
        <Title name="contact" />
        <ContactForm />
      </section>
      <section className="reachOut">
        <Title name="reach out" />
        <div className="contactpage__reachOut">
          <div className="reachOut__map">
            {/* <img className="reachOut__mapImg" src="https://picsum.photos/800/600" alt="map" /> */}
            <iframe
              className="reachOut__mapImg"
              title="ldce"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4851.336908819697!2d72.5439907551523!3d23.033948794327532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c7498bb96b34c97!2sLalbhai%20Dalpatbhai%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1624345874626!5m2!1sen!2sin"
              // width="320"
              // height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="reachOut__info">
            <div className="reachOut__infoContainer">
              <h3 className="">Address:</h3>
              <p>
                <b>AT:</b> L.D College of Engineering, Navarangpura, Ahmedabad-
                Gujarat.
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
