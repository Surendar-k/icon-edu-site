import React from 'react';
import './ContactUs.css';
import contactImg from '../../assets/price2.jpg'; // Make sure this image exists in your assets folder

const Contactus = () => {
  return (
    <main className="contact-page">
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${contactImg})` }}
      >
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>We're here to answer your questions and help you get started.</p>
        </div>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Address:</strong> Icon Nursery & Primary School, Thendral Nagar, Tiruvannamalai, Tamil Nadu, India</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> info@iconprimaryschool.com</p>
          <p><strong>Working Hours:</strong> Monday - Friday: 8:00 AM - 4:00 PM</p>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contactus;
