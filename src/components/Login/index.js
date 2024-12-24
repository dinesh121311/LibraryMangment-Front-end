import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import Cookies from 'js-cookie';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle normal login
  const handleLogin = async () => {
    const payload = { email, password };
    console.log('Login Payload:', payload);
    try {
      const response = await axios.post('http://192.168.1.172:5001/api/auth/login', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Login Successful:', response.data);

      const token = response.data.token;
      Cookies.set('jwtToken', token, { expires: 7 });
      navigate('/home');
    } catch (error) {
      console.error('Login Failed:', error.response ? error.response.data : error.message);
    }
  };

  // Handle Google login redirect from OAuth success
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');
    const user = queryParams.get('user');

    if (token && user) {
      // Store the token and user data in cookies/localStorage
      Cookies.set('jwtToken', token, { expires: 7 });
      localStorage.setItem('user', user);

      // Redirect to the home page after successful login
      navigate('/home');
    }
  }, [navigate]);

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      
      {/* Redirect user to Google OAuth */}
      <a href="http://192.168.1.172:5001/api/auth/google" className="google-login">
        Sign in with Google
      </a>

      <p>
        New user? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;