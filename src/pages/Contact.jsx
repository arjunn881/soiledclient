import React, { useState } from 'react';

import axios from 'axios';
import FormInput from '../components/FormInput';
import '../styles/Contact.css';



const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('https://soiledbackend.onrender.com/api/contact', form, {
      headers: { 'Content-Type': 'application/json' }
    });

    // Axios auto-parses JSON response
    alert(res.data.message || 'Message sent!');
    setForm({ name: '', email: '', subject: '', message: '' });

  } catch (err) {
    console.error('Error submitting contact form:', err);

    if (err.response && err.response.data && err.response.data.message) {
      alert(`Error: ${err.response.data.message}`);
    } else {
      alert('Something went wrong. Please try again later.');
    }
  }
};



  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <FormInput label="Name" name="name" value={form.name} onChange={handleChange} required />
        <FormInput label="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
        <FormInput label="Subject" name="subject" value={form.subject} onChange={handleChange} />
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" value={form.message} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn">Send</button>
      </form>
    </div>
  );
};

export default Contact;
