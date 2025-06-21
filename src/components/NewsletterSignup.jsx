import React, { useState } from 'react';
import '../styles/NewsletterSignup.css';
import FormInput from './FormInput';
import axios from 'axios';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);



const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/api/newsletter', { email }, {
      headers: { 'Content-Type': 'application/json' }
    });

    alert(res.data.message || 'Thanks for subscribing!');
    setSubmitted(true);
    setEmail('');

  } catch (err) {
    console.error('Newsletter subscription error:', err);

    if (err.response?.data?.message) {
      alert(`Error: ${err.response.data.message}`);
    } else {
      alert('Something went wrong. Please try again later.');
    }
  }
};


  return (
    <div className="newsletter" data-aos="fade-up">
      <h2>Stay in the Loop</h2>
      <p>Subscribe for exclusive updates, new releases, and shows.</p>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="newsletterEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn">Subscribe</button>
        </form>
      ) : (
        <p className="thanks">Thanks for subscribing!</p>
      )}
    </div>
  );
};

export default NewsletterSignup;
