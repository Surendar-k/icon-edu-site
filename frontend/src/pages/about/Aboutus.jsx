import React from 'react';
import './AboutUs.css';

import principalImg from '../../assets/principal.jpg';
// import correspondentImg from '../../assets/correspondant.jpg';
import growthIcon from '../../assets/growthicon.png';
import environmentIcon from '../../assets/environment.png';
import curriculumIcon from '../../assets/curriculum.png';
import extracurricularIcon from '../../assets/extracurricular.png';
import staffIcon from '../../assets/staff.png';
import { FaBullseye, FaEye } from "react-icons/fa";
import aboutusimg from '../../assets/award.jpg'
import samsungsir from '../../assets/samsungsir.jpg';
const AboutUs = () => {
  return (
    <main className="about">
      {/* Hero Section */}
      <section className="about-hero" aria-label="About Us Introduction">
        <div className="overlay">
          <h1>About Us</h1>
          
         
          <h5>"Education is the seed from which the tree of knowledge grows"</h5>
        </div>
      </section>
      {/*mission and vision*/}
<section className="mission-vision-section" aria-labelledby="mission-vision">
      <div className="mission-vision-container">
        <div className="mission-vision-grid">
          <div className="mission-box">
            <div className="icon-wrapper">
              <FaBullseye className="icon" />
            </div>
            <h2 id="our-mission">Our Mission</h2>
            <p>
              To create a joyful, inclusive environment where young minds engage with knowledge, 
              develop strong values, and build essential life skills for future success.
            </p>
          </div>
          <div className="vision-box">
            <div className="icon-wrapper">
              <FaEye className="icon" />
            </div>
            <h2 id="our-vision">Our Vision</h2>
            <p>
              To be a beacon of excellence in foundational education, empowering young learners 
              to become confident, ethical, and innovative global citizens.
            </p>
          </div>
        </div>
      </div>
    </section>
      {/* Who We Are */}
      <section className="about-section" aria-labelledby="who-we-are">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={aboutusimg} alt="Icon School Campus" loading="lazy" />
            </div>
           <div className="about-content">
  <h2 id="who-we-are">Who We Are?</h2>
  <p id='para1'>
    Icon Nursery & Primary School, established in 2015, is a trusted institution committed to nurturing young minds through a balanced focus on academics, character, and creativity. We provide a safe, joyful, and stimulating environment where children thrive.
  </p>
  <p id='para2'>
    At ICON, we offer personalized learning supported by caring, qualified educators who understand each child’s unique strengths. We ensure continuous growth through regular progress monitoring and enrich student life with extracurricular activities that foster creativity, confidence, and collaboration. ICON lays the foundation for lifelong learning and empowers students to become well-rounded individuals ready to succeed in a changing world.
  </p>
</div>

          </div>
        </div>
      </section>

     {/* Core Values */}
<section className="values-section" aria-labelledby="core-values">
  <div className="container">
    <h2 id="core-values">Our Core Values</h2>
    <div className="values-grid">
      <div className="value-card">
        <div className="value-icon">
          <img src={growthIcon} alt="Growth" loading="lazy" />
        </div>
        <h3>Focus on Children's Growth</h3>
        <p>Our School is praised for focusing on children's growth and development, with skilled and trained teachers.</p>
      </div>
      <div className="value-card">
        <div className="value-icon">
          <img src={environmentIcon} alt="Learning Environment" loading="lazy" />
        </div>
        <h3>Positive Learning Environment</h3>
        <p>Good place for children with caring atmosphere and focus on both academics and social skills.</p>
      </div>
      <div className="value-card">
        <div className="value-icon">
          <img src={curriculumIcon} alt="Curriculum" loading="lazy" />
        </div>
        <h3>Well-Rounded Curriculum</h3>
        <p>Offers a well-rounded curriculum, providing a good foundation for children's future learning.</p>
      </div>
      <div className="value-card">
        <div className="value-icon">
          <img src={extracurricularIcon} alt="Extracurricular" loading="lazy" />
        </div>
        <h3>Extra-Curricular Activities</h3>
        <p>We also provide extracurricular activities and sports</p>
      </div>
      <div className="value-card">
        <div className="value-icon">
          <img src={staffIcon} alt="Staff" loading="lazy" />
        </div>
        <h3>Caring and Attentive Staff</h3>
        <p>School's staff are attentive and caring, creating a positive learning environment for young children.</p>
      </div>
    </div>
  </div>
</section>


      

      {/* Facilities */}
      <section className="facilities-section" aria-labelledby="facilities">
        <div className="container">
          <h2 id="facilities">Our Facilities</h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-icon">📚</div>
              <h3>Modern Library</h3>
              <p>Age-appropriate books and resources for young readers</p>
            </div>
            <div className="facility-card">
              <div className="facility-icon">💻</div>
              <h3>Smart Classrooms</h3>
              <p>Technology-integrated learning spaces for interactive education</p>
            </div>
           
            <div className="facility-card">
              <div className="facility-icon">⚽</div>
              <h3>Play Areas</h3>
              <p>Spacious grounds for physical development and recreation</p>
            </div>
           
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section" aria-labelledby="achievements">
               <div className="container">
          <h2 id="achievements">Our Accomplishments</h2>
          <div className="achievements-timeline">
            <div className="achievement-item">
              <div className="achievement-year">2022-2024</div>
              <div className="achievement-content">
                <h3>Yoga Competition</h3>
                <p>First place in district-level competition (Past Three Consecutive Years)</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-year">2025</div>
              <div className="achievement-content">
                <h3>700+ Students Trained</h3>
                <p>We have trained over 700 students till 2025 through our programs and initiatives</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-year">2025</div>
              <div className="achievement-content">
                <h3>100% Pass Percentage</h3>
                <p>Our students have consistently demonstrated outstanding academic performance, achieving a remarkable 100% pass rate in the 2025 examinations</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Leadership */}
      <section className="leadership-section" aria-label="School Leadership">
        <div className="container">
          <h2>Our Leadership</h2>
          <div className="leadership-team">
            <div className="leader-profile">
              <div className="leader-image">
                <img src={samsungsir} alt="Mr. S Arivumani Samson - Correspondent" loading="lazy" />
              </div>
              <div className="leader-info">
                <h3>Mr. S Arivumani Samson</h3>
                <p className="leader-title">Correspondent</p>
                <p className="leader-bio">M.E </p>
              </div>
            </div>
            <div className="leader-profile">
              <div className="leader-image">
                <img src={principalImg} alt="Mrs. T Devachinthamani - Principal" loading="lazy" />
              </div>
              <div className="leader-info">
                <h3>Mrs. T Devachinthamani </h3>
                <p className="leader-title">Principal</p>
                <p className="leader-bio">M.A, M.phil, M.Ed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </main>
  );
};

export default AboutUs;
