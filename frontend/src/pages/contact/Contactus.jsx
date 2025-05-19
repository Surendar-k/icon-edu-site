import React from 'react';
import './ContactUs.css';
import { FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import contactImg from '../../assets/price2.jpg';

const Contactus = () => {


const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8cf5f43e-3acf-450d-a470-1627530f3430");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <main className="contact-page">
      <section className="contact-hero" style={{ backgroundImage: `url(${contactImg})` }}>
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Reach out through any of the channels below.</p>
        </div>
      </section>

      <section className="contact-container">
        <div className="contact-info animate-slide">
          <h2>Reach Out</h2>
          <p><strong>Main Campus:</strong><br />995A, Thendral Nagar, Vengikkal, Tiruvannamalai</p>
          <p><strong>Branch Address:</strong><br />Rathna Garden, Avalurpet Road, Tiruvannamalai - 606 604</p>
          <p><strong>Phone 1:</strong> <a href="tel:+918925359941">+91 89253 59941</a></p>
          <p><strong>Phone 2:</strong> <a href="tel:+919789064951">+91 97890 64951</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@iconprimaryschool.com">info@iconprimaryschool.com</a></p>
          <p><strong>Working Hours:</strong> Mon - Fri, 8:00 AM - 4:00 PM</p>

          <div className="social-links">
            <a href="mailto:info@iconprimaryschool.com" className="icon-link email"><FaEnvelope /></a>
            <a href="https://wa.me/918925359941" target="_blank" rel="noopener noreferrer" className="icon-link whatsapp"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/iconschooltiruvannamalai/" target="_blank" rel="noopener noreferrer" className="icon-link instagram"><FaInstagram /></a>
          </div>
        </div>

        <div className="contact-form animate-fade">
          <h2>Send Us a Message</h2>
          <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Your Name"  required />
            <input type="email" name="email" placeholder="Your Email"  required />
            <input type="tel" name="phone" placeholder="Your Phone Number"  />
            <input type="text" name="subject" placeholder="Subject"  />
            <textarea name="message" placeholder="Your Message" rows="5"  required></textarea>
            <button type="submit" >Send Message</button>
          </form>
          <span>{result}</span>
        
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
