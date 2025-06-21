import React, { useState } from 'react';
import axios from 'axios';
import FormInput from './FormInput';  // adjust path if needed
import '../styles/BookingForm.css';

const BookingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact:'',
    date: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/bookings', form, {
        headers: { 'Content-Type': 'application/json' }
      });
      alert(res.data.message || 'Booking request sent!');
      setForm({ name: '', email: '', contact: '', date: '', location: '', message: '' });
      setSubmitted(true);
    } catch (err) {
      console.error('Booking error:', err);
      if (err.response?.data?.message) {
        alert(`Error: ${err.response.data.message}`);
      } else {
        alert('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div className="booking-page" data-aos="fade-up">
      <h1>Book Me</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Name *"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Email *"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
                    <FormInput
            label="Contact *"
            type="contact"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Event Date *"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Location *"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
          />

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn">Send Booking Request</button>
        </form>
      ) : (
        <p className="thanks">Thank you! I’ll get back to you soon.</p>
      )}
    </div>
  );
};

export default BookingForm;
