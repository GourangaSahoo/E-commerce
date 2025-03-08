import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:5000/register", formData);
  
      if (response.data.success) {
        alert("User created successfully!");
        navigate("/login");
      } else {
        console.error("Registration failed. Response:", response);
      }
    } catch (error) {
      console.error("Error during registration:", error);
  
      // Check if the error is an Axios error with a response
      if (error.response) {
        console.error("Server responded with status:", error.response.status);
        console.error("Server error data:", error.response.data);
      } else {
        console.error("Error details:", error.message);
      }
    }
  };
  
  
  

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input
              type="text"
              placeholder="Your Name"
              name='name'
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email Address"
              name='email'
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name='password'
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
         <button type='submit'>Continue</button>
        </form>
        <p className="loginsignup-login">
          Already have an account?
          <Link style={{ textDecoration: 'none' }} to='/login'><span style={{ cursor: 'pointer' }}>Log in here.</span></Link>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='check' style={{ cursor: 'pointer' }} />
          <p>By signing up, you agree to our terms of service and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
