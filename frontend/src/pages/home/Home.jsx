import React, { useEffect, useRef } from 'react';
import './Home.css';

import digitalLearningImg from '../../assets/digitallearning.jpeg';
import safeInfrastructureImg from '../../assets/infrastructure.jpg';

 // fix the spelling: environemnt → environment
import primaryEducation from '../../assets/homebg.jpg';
import transport from '../../assets/transport.jpg';
import oldschool from '../../assets/school1.jpg';
import experiencedteacher from "../../assets/about.jpg";
import holistic from "../../assets/drawing.jpg";
import environment from "../../assets/homebg.jpg";

function Home() {
  // Refs for scroll animations
  const sectionRefs = {
    highlights: useRef(null),
    programs: useRef(null),
    facilities: useRef(null),
    cta: useRef(null)
  };
  useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.2 }
  );

  const sections = document.querySelectorAll('.scroll-section');
  sections.forEach(section => observer.observe(section));

  return () => {
    sections.forEach(section => observer.unobserve(section));
  };
}, []);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.1 }
  );

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => observer.observe(card));

  return () => cards.forEach((card) => observer.unobserve(card));
}, []);

  return (
    <main className="home">
      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${oldschool})` }}
        aria-label="Welcome hero banner"
      >
        <div className="hero-content">
          <h1>Welcome to Icon Nursery & Primary School</h1>
          <p>Nurturing excellence, inspiring future leaders</p>
          <div>
            <a href="/about" className="btn learn-more-btn" aria-label="Learn more about Icon Nursery & Primary School">
              Discover Our Approach
            </a>
          </div>
        </div>
      </section>

 {/* WHY CHOOSE US */}
<section
  className="highlights scroll-section"
  ref={sectionRefs.highlights}
  aria-labelledby="why-choose-us-title"
>
  <h2 id="why-choose-us-title">Why Choose Us?</h2>

  <div className="cards">
    <div className="card orange fade-in">
      <div className="card-icon">
        <img src={experiencedteacher} alt="Quality Education" />
      </div>
      <h3>Experienced Staffs</h3>
      <p>Our faculty brings years of experience and personalized care to every child.</p>
    </div>

    <div className="card violet fade-in">
      <div className="card-icon">
        <img src={holistic} alt="Activity Based" />
      </div>
      <h3>Holistic Learning</h3>
      <p>Our approach integrates academics, creativity, and emotional intelligence.</p>
    </div>

    <div className="card green fade-in">
      <div className="card-icon">
        <img src={environment}alt="Safe Campus" />
      </div>
      <h3>Safe Environment</h3>
      <p>We prioritize safety, hygiene, and well-being at every level of school life.</p>
    </div>
  </div>
</section>

<br></br>
<section
  className="programs scroll-section"
  ref={sectionRefs.programs}
  aria-labelledby="our-programs-title"
>
<h2 id="our-programs-title">Educational Programs</h2>
  <div className="programs-list">
        
    {[
      {
        title: "Early Years",
        description: "Pre-KG, LKG, and UKG with developmentally appropriate activities",
        imgSrc: oldschool,
        alt: "Early Years",
      },
      {
        title: "Primary Education",
        description: "Grades 1-5 with ICSE curriculum emphasizing conceptual understanding",
        imgSrc: primaryEducation,
        alt: "Primary Education",
      },
      
    ].map(({ title, description, imgSrc, alt }, i) => (
      <div key={i} className="program-card">
        <img src={imgSrc} alt={alt} className="program-image" />
        <div className="program-text-overlay">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

<section
  className="facilities scroll-section"
  ref={sectionRefs.facilities}
  aria-labelledby="our-facilities-title"
>
  <h2 id="our-facilities-title">Campus Facilities</h2>
  <div className="facilities-round-cards">
    {[
      {
        title: "Digital Learning",
        description: "Smart classrooms with interactive technology and multimedia resources.",
        imgSrc: digitalLearningImg,
        alt: "Digital Learning",
      },
      {
        title: "Safe Infrastructure",
        description: "Child-friendly campus designed with safety and accessibility in mind.",
        imgSrc: safeInfrastructureImg,
        alt: "Safe Infrastructure",
      },
      {
        title: "Transportation",
        description: "Modern fleet with GPS tracking and trained staff for secure commuting.",
        imgSrc: transport,
        alt: "Transportation",
      },
     
    ].map(({ title, description, imgSrc, alt }, i) => (
      <div key={i} className="facility-round-card">
        <img src={imgSrc} alt={alt} className="facility-round-icon" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    ))}
  </div>
</section>

      {/* CTA */}
      <section className="cta scroll-section" ref={sectionRefs.cta} aria-label="Call to action to enroll child">
        <div className="cta-container">
          <h2>Begin Your Child's Educational Journey</h2>
          <p>Give your child the foundation they deserve. Schedule a campus visit or apply for admission today.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn primary-btn" aria-label="Contact the school for admission">
              Schedule a Visit
            </a>
            
          </div>
        </div>
      </section>
    </main>
  );
}

// Helper function for description text in cards


export default Home;
