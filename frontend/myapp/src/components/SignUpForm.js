// src/components/SignUpForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

/*  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/signup', formData);
      alert('User registered successfully');
      // Redirect to login page or any other page
    } catch (error) {
      console.error('Error registering user:', error.response.data.message);
      alert('Error registering user: ' + error.response.data.message);
    }
  };*/

/*  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/signup', formData);
      alert('User registered successfully');
      // Redirect to login page or any other page
    } catch (error) {
      console.error('Error registering user:', error.response.data);
      alert('Error registering user: ' + error.response.data.message || 'Unknown error occurred');
    }
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/signup', formData);
      alert('User registered successfully');
      // Redirect to login page or any other page
    } catch (error) {
      console.error('Error registering user:', error.response.data);
      const errorMessage = error.response.data.message || 'An unknown error occurred';
      alert('Error registering user: ' + errorMessage);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
