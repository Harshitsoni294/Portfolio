// Contact.js

import React from 'react';
import './Contact.css';
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <h2 className="contact-title">Get in Touch</h2>
        <div
  className="contact-info-group"
  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginTop: '20px' }}
>
  <div
    className="contact-info-item"
    style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontSize: '1.1rem' }}
  >
    <FaEnvelope />
    <span>harshitsoni2026@gmail.com</span>
  </div>

  <div
    className="contact-info-item"
    style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontSize: '1.1rem' }}
  >
    <span>📞</span>
    <span>+91 84589 55735</span>
  </div>
</div>

        <div className="contact-socials">
          <a href="https://www.linkedin.com/in/harshitsoni29" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Harshitsoni294" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/harshit_soni294" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
        <a href="mailto:harshitsoni2026@gmail.com" className="mail-btn">Say Hello</a>
      </div>
      <p className="footer">Made with ❤️ by Harshit Soni</p>
    </section>
  );
}

export default Contact;
