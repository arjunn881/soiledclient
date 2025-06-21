import React from 'react';
import '../styles/Services.css';

const Services = () => (
  <div className="services-page">
    <h1>Services</h1>
    <section className="service-block">
      <h2>🎤 Live Bookings</h2>
      <p>Book Soiled for live DJ sets or performances tailored to your event. High-energy dance music guaranteed to move the crowd.</p>
      <a href="/booking" className="btn">Request a Booking</a>
    </section>

    <section className="service-block">
      <h2>🎛 Music Production</h2>
      <p>Hire Soiled for custom music production, mixing, or collaborations. Let’s bring your sonic vision to life.</p>
      <a href="/contact" className="btn">Get a Quote</a>
    </section>
  </div>
);

export default Services;
