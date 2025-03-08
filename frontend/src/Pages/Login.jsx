import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



 const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });
  
      if (response.data.status === "Success") {
        navigate("/");
      } else {
        console.log(response.data.status);
        navigate("/Sign-up");
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <div>
        <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
        <div className="loginsignup-fields">
          <input type="email" placeholder="Email Address" name='email' onChange={(e) => { setEmail(e.target.value) }} />
          <input type="password" placeholder="Password" name='password' onChange={(e) => { setPassword(e.target.value) }}/>
        </div>
        <button type='submit'>Log In</button>
        </form>
        <p className="loginsignup-login">
           Don't have an account? 
        <Link style={{textDecoration:'none'}} to='/Sign-up' ><span style={{cursor:'pointer'}}>Sign-Up here.</span></Link>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' style={{cursor:'pointer'}} />
          <p>By signing up, you agree to our terms of service and privacy policy.</p> 
        </div>
      </div>
    </div>
    </div>
  )
}
export default Login;