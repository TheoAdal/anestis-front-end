import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ContactPageStyles.scss";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import contactOffice from "../../images/contact.png";
import contactMap from "../../images/contact-map.png";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Retrieve form data
    const formData = {
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      message: e.target.message.value,
    };

    // Check if any of the fields are empty
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setStateMessage(t("contact.error_empty"));
      setTimeout(() => {
        setStateMessage(null);
      }, 4000); // hide message after 4 seconds
      return; // Exit early if any field is empty
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage(t("contact.success"));
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          console.error("Error sending email:", error);
          setStateMessage(t("contact.error"));
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });

    e.target.reset();
  };

  return (
    <div className="flex md:flex-row flex-col px-7 pb-12">
      <img
        src={contactOffice}
        className="grayscale md:w-2/5 w-full mr-10 md:mb-0 mb-10"
        alt="office"
      />
      <img
        src={contactMap}
        className="grayscale md:w-2/5 w-full mr-10"
        alt="office"
      />
    </div>
  );
};

export default Contact;
