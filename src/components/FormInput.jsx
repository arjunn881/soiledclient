import React from 'react';
import '../styles/FormInput.css';

const FormInput = ({ label, type = 'text', name, value, onChange, required }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default FormInput;
