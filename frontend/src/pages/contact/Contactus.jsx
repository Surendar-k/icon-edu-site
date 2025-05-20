import React from 'react';
import './ContactUs.css';
import { FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import contactImg from '../../assets/contactus.jpg';

const Contactus = () => {


const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

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
     <section
  className="contact-hero"
  style={{ backgroundImage: `url(${contactImg})` }}   /* if using import */
>
  <div className="overlay">
    <h1>Contact&nbsp;Us</h1>
    <p>We’d love to hear from you – reach out any time!</p>
  </div>
</section>


      <section className="contact-container">
        <div className="contact-info animate-slide">
          <h2>Reach Out</h2>
          <p><strong>Main Campus:</strong><br />Rathna Garden, Iyappan Nagar, Avalurpet Road, Tiruvannamalai - 606 604</p>
          <p><strong>Branch Address:</strong><br />995A, Thendral Nagar, Vengikkal, Tiruvannamalai - 606 604</p>

          <p><strong>Phone 1:</strong> <a href="tel:+918925359941">+91 89253 59941</a></p>
          <p><strong>Phone 2:</strong> <a href="tel:+919789064951">+91 97890 64951</a></p>
          <p><strong>Email:</strong> <a href="mailto:iconschooltiruvannamalai@gmail.com">iconschooltiruvannamalai@gmail.com</a></p>
          <p><strong>Working Hours:</strong> Mon - Fri, 8:00 AM - 4:00 PM</p>

          <div className="social-links">
            <a href="mailto:iconschooltiruvannamalai@gmail.com" className="icon-link email"><FaEnvelope /></a>
            <a href="https://wa.me/919789064951" target="_blank" rel="noopener noreferrer" className="icon-link whatsapp"><FaWhatsapp /></a>
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
          {result && (
  <div className={`submit-message ${result.includes("Success") ? "success" : "error"}`}>
    {result === "Sending...." ? "Sending your message..." : result}
  </div>
)}

        
        </div>
      </section>
       {/* Map Section */}
      <section className="maps-section">
        <h2>Our Locations</h2>
        <div className="maps-grid">
          <div className="map-container">
            <h4>Main Campus</h4>
             <iframe
              title="Branch Campus - Rathna Garden"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.9270119893753!2d78.94779771484139!3d11.708906791952098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab6667e4706961%3A0x5115637eec4df30!2sRathna%20Gardens%2C%20Avalurpet%20Rd%2C%20Iyyappan%20Nagar%2C%20Tiruvannamalai%2C%20Tamil%20Nadu%20606604!5e0!3m2!1sen!2sin!4v1691052300000"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="map-container">
            <h4>Branch Campus</h4>
          
             <iframe
              title="Main Campus - Thendral Nagar"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.3771128585656!2d79.0705704153427!3d12.252379991466807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc11abe9cb0b7%3A0x66dcd701d36d4249!2sIcon%20Nursery%20and%20Primary%20School!5e0!3m2!1sen!2sin!4v1691057156789"
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
