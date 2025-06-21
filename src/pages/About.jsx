import React from 'react';
import '../styles/About.css';

const About = () => (
  <div className="about-page">
    <h1>My Journey</h1>

    <section className="story-block">
      <h2>From dhvón to Soiled</h2>
      <p>
        My name is <strong>Soiled</strong>, formerly known as <strong>dhvón</strong>. My journey into music began not in a studio, but during the silent intensity of the 2019–2021 lockdown. Isolated yet inspired, I began releasing tracks as dhvón — music born from curiosity, crafted from passion.
      </p>
    </section>

    <section className="story-block">
      <h2>Humble Beginnings</h2>
      <p>
        In 2015, I stumbled upon the raw energy and soul of dance music. Despite no formal background, I immersed myself — not just listening but deeply observing the structure and emotion of sound. Years passed as I trained my ears, studying through YouTube, tutorials, blogs, and masterclasses.
      </p>
    </section>

    <section className="story-block">
      <h2>First Steps in Production</h2>
      <p>
        It was only in December 2019 that I opened my DAW for the first time. My production journey started with energy and vision, but due to several constraints, it was brief. Still, the spark never left me.
      </p>
    </section>

    <section className="story-block">
      <h2>Now: The Rebirth</h2>
      <p>
        Promoting my artist profile was never easy. But today, I stand determined to reignite that journey, now under a new name: <strong>Soiled</strong>. With more vision, more energy, and more stories to tell — through music, visuals, and performance.
      </p>
    </section>

    <section className="story-block quote">
      <p>“Join me as I explore a new era of dance music, sharing experiences, emotions, and soundscapes that move.”</p>
    </section>

    <div className="cta-buttons">
      <a href="/music" className="btn">Listen to My Music</a>
      <a href="/contact" className="btn">Get in Touch</a>
    </div>
  </div>
);

export default About;
