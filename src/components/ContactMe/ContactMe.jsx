import React from "react";
import "./ContactMe.css";
// import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
// import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div className="contact-details-card">
          <a href='mailto:sakifkhan98@gmail.com' className="icon">
            <img src="./assets/images/email-icon.svg" alt="sakifkhan98@gmail.com" />
          </a>
          <p>sakifkhan98@gmail.com</p>
        </div>
        <div className="contact-details-card">
          <a href='https://github.com/SakifKhan98' className="icon">
            <img src="./assets/images/github-icon.svg" alt="https://github.com/SakifKhan98" />
          </a>
          <p>SakifKhan98</p>
        </div>
        <div className="contact-details-card">
          <a href='https://www.linkedin.com/in/sakifkhan/' className="icon">
            <img src="./assets/images/linkedinLogo.svg"  alt="https://www.linkedin.com/in/sakifkhan/" />
          </a>
          <p>sakifKhan</p>
        </div>
        <div className="contact-details-card">
          <a href='tel:+8801716761945' className="icon">
            <img src="./assets/images/phoneicon.svg" alt="+8801716761945" />
          </a>
          <p>+880 1716 761945</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
