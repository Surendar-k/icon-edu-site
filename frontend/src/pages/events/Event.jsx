import React from 'react';
import './Event.css';
import event1 from '../../assets/price.jpg';
import event2 from '../../assets/logo.jpg';
import event3 from '../../assets/logo.jpg';

const events = [
  {
    id: 1,
    title: 'Annual Sports Day',
    date: 'September 10, 2024',
    description: 'A day full of fun, games, and sportsmanship where students showcase their athletic abilities.',
    image: event1
  },
  {
    id: 2,
    title: 'Science Exhibition',
    date: 'October 5, 2024',
    description: 'Our students present creative and innovative science projects, celebrating curiosity and learning.',
    image: event2
  },
  {
    id: 3,
    title: "Children's Day Celebration",
    date: 'November 14, 2024',
    description: 'A fun-filled day of performances, games, and joy to celebrate our young learners.',
    image: event3
  }
];

function Events() {
  return (
    <main className="events-page">
      <section className="events-hero">
        <div className="overlay">
          <h1>School Events</h1>
          <p>Celebrating learning, talent, and togetherness through vibrant events.</p>
        </div>
      </section>

      <section className="events-container">
        {events.map(event => (
          <article key={event.id} className="event-card" tabIndex="0" aria-label={`Event: ${event.title}`}>
            <div className="event-image-wrapper">
              <img src={event.image} alt={event.title} className="event-image" loading="lazy" />
            </div>
            <div className="event-details">
              <h2 className="event-title">{event.title}</h2>
              <time className="event-date" dateTime={new Date(event.date).toISOString()}>
                {event.date}
              </time>
              <p className="event-description">{event.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Events;
