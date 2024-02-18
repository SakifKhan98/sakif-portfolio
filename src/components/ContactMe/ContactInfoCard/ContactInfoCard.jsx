import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <a href='www.google.com' className="icon">
        <img src={iconUrl} alt={text} />
      </a>

      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
