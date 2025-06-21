import React from "react";
import "../styles/Home.css";
import NewsletterSignup from "../components/NewsletterSignup";

const Home = () => {
  const events = [
    { date: "Jul 12, 2025", venue: "Kitty Su, Mumbai", type: "Live DJ Set" },
    { date: "Aug 03, 2025", venue: "Raasta, Delhi", type: "Club Show" },
    {
      date: "Sep 14, 2025",
      venue: "Sunburn Campus, Goa",
      type: "Festival Set",
    },
  ];

  return (
    <div className="home-page">
      <section className="hero-section" data-aos="fade-in">
        <div className="youtube-bg-wrapper">
          {/* <iframe
            src="https://www.youtube.com/embed/2sG-5fbUxag?autoplay=1&mute=1&controls=0&loop=1&playlist=2sG-5fbUxag&modestbranding=1&showinfo=0"
            title="Soiled Background"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe> */}
        </div>

        <div className="hero-overlay">
          <h1>Soiled</h1>
          <p className="tagline">Dark. Minimal. Moving.</p>
          <div className="cta-buttons">
            <a href="/booking" className="btn">
              Book Me
            </a>
            <a href="/music" className="btn">
              Listen Now
            </a>
          </div>
        </div>
      </section>

      {/* Parallax/Video Hero */}
      {/* <section className="hero-section" data-aos="fade-in">
        <video autoPlay loop muted className="hero-video">
          <source src="https://youtu.be/2sG-5fbUxag?si=3nu2xOgTA_XX2S88" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <h1>Soiled</h1>
          <p className="tagline">Dark. Minimal. Moving.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn">Book Me</a>
            <a href="/music" className="btn">Listen Now</a>
          </div>
        </div>
      </section> */}

      {/* Upcoming Events */}
      <section className="events-section" data-aos="fade-up">
        <h2>Upcoming Events</h2>
        <div className="event-list">
          {events.map((e, i) => (
            <div key={i} className="event-card">
              <p className="event-date">{e.date}</p>
              <p className="event-venue">{e.venue}</p>
              <p className="event-type">{e.type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* YouTube Embed */}
      <section className="video-section" data-aos="fade-left">
        <h2>Latest Visual</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/2sG-5fbUxag?autoplay=1&mute=1&controls=0&loop=1&playlist=2sG-5fbUxag&modestbranding=1&showinfo=0"
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Spotify Release */}
      <section className="highlight-section" data-aos="zoom-in">
        <h2>🎧 Featured Release</h2>
        <div className="spotify-embed">
          <iframe
            src="https://open.spotify.com/embed/track/7hOYPxHjoXpTosgYa5hKSl?utm_source=generator&theme=0"
            width="100%"
            height="300"
            frameBorder="0"
            allow="encrypted-media"
            title="latest-track"
          ></iframe>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="services-teaser" data-aos="fade-up">
        <h2>What I Do</h2>
        <div className="service-cards">
          <div className="card">
            <h3>🎧 Live DJ Sets</h3>
            <p>
              Book high-energy performances tailored for clubs and festivals.
            </p>
            <a href="/services" className="btn">
              Learn More
            </a>
          </div>
          <div className="card">
            <h3>🎼 Music Production</h3>
            <p>Custom tracks, mixes, and collaborations available now.</p>
            <a href="/services" className="btn">
              Explore
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="callout" data-aos="fade-up">
        <h2>Join the Movement</h2>
        <p>Follow me on your favorite platforms and stay in the loop.</p>
        <div className="cta-buttons">
          <a
            href="https://instagram.com/me.soiled"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://open.spotify.com/artist/3dljDIfRciTzD1amEPHyND"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Spotify
          </a>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
};

export default Home;
