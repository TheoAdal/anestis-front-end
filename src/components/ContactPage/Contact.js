import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ContactPageStyles.scss";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

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
      setStateMessage(t('contact.error_empty'));
      setTimeout(() => {
        setStateMessage(null);
      }, 4000); // hide message after 4 seconds
      return; // Exit early if any field is empty
    }

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then(
      (result) => {
        setStateMessage(t('contact.success'));
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5 seconds
      },
      (error) => {
        console.error('Error sending email:', error);
        setStateMessage(t('contact.error'));
      }
    )
    .finally(() => {
      setIsSubmitting(false);
    });

    e.target.reset();
  };

  return (
    <Container className="container">
      <Row>
        <Col lg={8}>
          <div className="section-box">
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.intro')}</p>
          </div>
          <Form className="form-box" onSubmit={sendEmail}>
            <Form.Group className="form-group">
              <Form.Label>{t('contact.name')}</Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                placeholder={t('contact.name')}
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>{t('contact.email')}</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder={t('contact.email')}
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>{t('contact.message')}</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder={t('contact.message')}
              />
            </Form.Group>
            <Button
              variant="primary"
              className="button"
              type="submit"
              value="Send"
              disabled={isSubmitting}
            >
              {t('contact.submit')}
            </Button>
            {stateMessage && <p>{stateMessage}</p>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
