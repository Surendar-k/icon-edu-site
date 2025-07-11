import React from 'react';
import { FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import logo from '../../assets/logo.jpg'; // adjust the path if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
<div className="footer-section ">
  <a href="/" className="logo-link">
    <img src={logo} alt="School Logo" className="footer-logo" />
    <p className="logo-text">Intellectual Centre for Optimal Nurture</p>
  </a>
</div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
  <h4>Quick Links</h4>
  <div className="quick-links-row">
    <a href="/home">Home</a>
    <a href="/about">About</a>
    <a href="/events">Events</a>
    <a href="/contact">Contact</a>
    
  </div>
</div>


        {/* Social & Contact */}
        <div className="footer-section social-contact">
          <h4>Connect with Us</h4>
          <div className="social-links">
            <a
              href="mailto:iconschooltiruvannamalai@gmail.com"
              className="icon-link email"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/919789064951"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link whatsapp"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/iconschooltiruvannamalai/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link instagram"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-text">
            © {new Date().getFullYear()} Icon Nursery & Primary School. All rights reserved.
          </p>
          <p className="footer-text">
    Designed & Developed by{" "}
    <a
      href="https://surendar-k.web.app/" // Replace with your actual profile
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      Surendar K
    </a>
  </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
