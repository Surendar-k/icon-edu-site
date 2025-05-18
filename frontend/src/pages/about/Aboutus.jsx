import React from 'react';
import './AboutUs.css';
import aboutImg from '../../assets/homebg.jpg'; // Professional school image
import principalImg from '../../assets/logo.jpg'; // Principal photo
import correspondentImg from '../../assets/logo.jpg'; // Correspondent photo

const AboutUs = () => {
  return (
    <main className="about">
      {/* Removed separate top image section */}

      <section
        className="about-hero"
        aria-label="About Us Introduction"
        style={{ backgroundImage: `url(${aboutImg})` }}  // Inline style for background image
      >
        <div className="overlay">
          <h1>About Us</h1>
          <p>Inspiring young minds through quality early education.</p>
        </div>
      </section>

      <section className="about-section" aria-labelledby="who-we-are">
        <div className="about-container">
          <div className="about-image" aria-hidden="true">
            <img src={aboutImg} alt="School Campus" loading="lazy" />
          </div>
          <div className="about-info">
            <h2 id="who-we-are">Who We Are</h2>
            <p>
              Icon Nursery & Primary School nurtures children through a balanced approach to academics, character development, and creativity. Our child-first philosophy ensures personalized attention and holistic growth for every learner.
            </p>

            <h2 id="our-vision">Our Vision</h2>
            <p>
              To be a beacon of excellence in foundational education, empowering young learners to become confident, ethical, and innovative global citizens.
            </p>

            <h2 id="our-mission">Our Mission</h2>
            <p>
              Creating a joyful, inclusive environment where young minds engage with knowledge, develop strong values, and build essential life skills for future success.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section" aria-labelledby="core-values">
        <div className="values-container">
          <h2 id="core-values">Our Core Values</h2>
          <ul>
            <li><strong>Excellence:</strong> Pursuing the highest standards in learning and character.</li>
            <li><strong>Integrity:</strong> Upholding honesty, fairness, and responsibility.</li>
            <li><strong>Respect:</strong> Embracing diversity and treating everyone with kindness.</li>
            <li><strong>Innovation:</strong> Fostering creativity and critical thinking.</li>
            <li><strong>Collaboration:</strong> Building strong partnerships with families and communities.</li>
          </ul>
        </div>
      </section>

      {/* Footer Section with Principal and Correspondent */}
      <section className="leadership-section" aria-label="School Leadership">
        <div className="leadership-container">
          <div className="leader-card">
            <img src={principalImg} alt="Principal" loading="lazy" />
            <h3>Mrs. Jane Doe</h3>
            <p>Principal</p>
          </div>
          <div className="leader-card">
            <img src={correspondentImg} alt="Correspondent" loading="lazy" />
            <h3>Mr. John Smith</h3>
            <p>Correspondent</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
