import React, { useState } from 'react';
import './ContactUs.css';
import { FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import contactImg from '../../assets/price2.jpg';
import emailjs from '@emailjs/browser';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',      // Added phone field
    subject: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatusMessage('');

    // Replace with your EmailJS service/template/public key
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
      .then(() => {
        setStatusMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });  // reset including phone
      })
      .catch(() => {
        setStatusMessage('Oops! Something went wrong. Please try again later.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" style={{ backgroundImage: `url(${contactImg})` }}>
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Reach out through any of the channels below.</p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="contact-container">
        {/* Contact Info */}
        <div className="contact-info animate-slide">
          <h2>Reach Out</h2>
          <p><strong>Main Campus:</strong><br />995A, Thendral Nagar, Vengikkal, Tiruvannamalai</p>
          <p><strong>Branch Address:</strong><br />Rathna Garden, Avalurpet Road, Tiruvannamalai - 606 604</p>
          <p><strong>Phone 1:</strong> <a href="tel:+918925359941">+91 89253 59941</a></p>
          <p><strong>Phone 2:</strong> <a href="tel:+919789064951">+91 97890 64951</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@iconprimaryschool.com">info@iconprimaryschool.com</a></p>
          <p><strong>Working Hours:</strong> Mon - Fri, 8:00 AM - 4:00 PM</p>

          <div className="social-links">
            <a href="mailto:info@iconprimaryschool.com" className="icon-link email" title="Email">
              <FaEnvelope />
            </a>
            <a href="https://wa.me/918925359941" target="_blank" rel="noopener noreferrer" className="icon-link whatsapp" title="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/iconschooltiruvannamalai/" target="_blank" rel="noopener noreferrer" className="icon-link instagram" title="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form animate-fade">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"                  // new phone input
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
      </section>

      {/* Map Section */}
      <section className="maps-section">
        <h2>Our Locations</h2>
        <div className="maps-grid">
          <div className="map-container">
            <h4>Main Campus</h4>
            <iframe
              title="Main Campus - Thendral Nagar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.860636108285!2d79.065914474841!3d12.227032288047658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad3e6e93d65bb3%3A0xabc123!2sThendral%20Nagar%2C%20Vengikkal!5e0!3m2!1sen!2sin!4v1690123456789"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="map-container">
            <h4>Branch Campus</h4>
            <iframe
              title="Branch Campus - Rathna Garden"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.740123456123!2d79.0734567!3d12.2198765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad3e6abccdfe12%3A0xdef456!2sRathna%20Garden%2C%20Avalurpet%20Road!5e0!3m2!1sen!2sin!4v1690987654321"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contactus;
