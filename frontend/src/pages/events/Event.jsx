import React from 'react';
import annualday from '../../assets/annualday.jpg';
import sportsday from '../../assets/sports.jpg';
import scienceday from '../../assets/science.jpg';
import colorsday from '../../assets/coloursday.jpg';
import prideoficon from '../../assets/prideoficon.jpg';
import artandcraft from '../../assets/artandcraft.jpg';
import drawing from '../../assets/drawing.jpg';
import fancydresscompetition from '../../assets/fancydresscompetition.jpg'
import speechcompetition from '../../assets/speechcompetition.jpg';
import rhymes from '../../assets/rhymes.jpg';
import thirukkural from '../../assets/thirukkural.jpg'
import './Event.css';

const events = [
  {
    id: 1,
    title: 'Annual Day Celebration',
    date: 'September 10, 2024',
    description: 'A grand celebration that showcases student talents through cultural performances, dances, skits, and awards, bringing the entire school community together.',
    image: annualday
  },
  {
    id: 2,
    title: 'Sports Day Celebration',
    date: 'September 10, 2024',
    description: 'A dynamic event filled with athletic competitions, team spirit, and sportsmanship as students participate in track and field events, games, and relays.',
    image: sportsday
  },
  {
    id: 3,
    title: 'Pride of Icon Celebration',
    date: 'October 5, 2024',
    description: 'An inspiring showcase of student achievements where academic toppers, talent icons, and contributors are honored for their excellence and dedication.',
    image: prideoficon
  },
  {
    id: 4,
    title: "Colour's Day Celebration",
    date: 'November 14, 2024',
    description: 'A vibrant celebration for young children that focuses on the significance of colors through themed attire, fun-filled activities, and joyful performances.',
    image: colorsday
  },
  {
    id: 5,
    title: "Art & Craft Exhibition",
    date: 'November 14, 2024',
    description: 'An exhibition of creativity where students display their artistic skills through handmade crafts, paintings, and installations, reflecting imagination and effort.',
    image: artandcraft
  },
  {
    id: 6,
    title: "Science Exhibition",
    date: 'November 14, 2024',
    description: 'A platform for budding scientists to present models, experiments, and innovations that explore scientific concepts and promote inquiry-based learning.',
    image: scienceday
  }
];


const competitions = [
  {
    id: 1,
    title: 'Speech Competition',
    date: 'December 1, 2024',
    description: 'A platform for students to enhance their public speaking and communication skills on various inspiring topics.',
    image: speechcompetition
  },
  {
    id: 2,
    title: 'Thirukkural Reciting',
    date: 'January 15, 2025',
    description: 'A cultural event where students recite the timeless Thirukural couplets, promoting Tamil heritage and moral values.',
    image: thirukkural
  },
  {
    id: 3,
    title: 'Quiz Competition',
    date: 'January 15, 2025',
    description: 'A fun and competitive event to test students’ knowledge across a variety of subjects through multiple rounds of quizzing.',
    image: rhymes
  },
  {
    id: 4,
    title: 'Fancy Dress Competition',
    date: 'January 15, 2025',
    description: 'A creative stage for students to dress up as characters and convey messages through costumes and short performances.',
    image: fancydresscompetition
  },
  {
    id: 5,
    title: 'Colouring and Drawing Competition',
    date: 'January 15, 2025',
    description: 'An artistic event encouraging children to express their imagination and creativity through colors and sketches.',
    image: drawing
  },
{
  id: 6,
  title: 'Rhymes Reciting',
  date: 'January 15, 2025',
  description: 'A delightful event for young children to build confidence and improve memory by reciting their favorite rhymes with expression and clarity.',
  image: rhymes
}

];




function Events() {
  return (
    <main className="events-page">
      <section className="events-hero">
        <div className="overlay">
          <h1>Our School Highlights</h1>
          <p>Exploring excellence through Events, Competitions, and Workshops.</p>
        </div>
      </section>

      <section className="section-wrapper" id="events-section">
        <h2>Events</h2>
        <div className="hex-grid">
          {events.map(event => (
            <article key={event.id} className="hex-card" tabIndex="0" aria-label={`Event: ${event.title}`}>
              <div className="hex-inner">
                <img src={event.image} alt={event.title} className="hex-image" loading="lazy" />
                <div className="hex-content">
                  <h3>{event.title}</h3>
                  <time dateTime={new Date(event.date).toISOString()}>{event.date}</time>
                  <p>{event.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrapper" id="competitions-section">
        <h2>Competitions</h2>
        <div className="competition-gallery">
          {competitions.map(comp => (
            <article key={comp.id} className="tilt-card" tabIndex="0" aria-label={`Competition: ${comp.title}`}>
              <img src={comp.image} alt={comp.title} className="tilt-image" loading="lazy" />
              <div className="tilt-content">
                <h3>{comp.title}</h3>
                <time dateTime={new Date(comp.date).toISOString()}>{comp.date}</time>
                <p>{comp.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

    
    </main>
  );
}

export default Events;
