import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleRegister = async () => {
    const payload = { name, email, password, role };
    console.log('Register Payload:', payload);
    
    try {
      const response = await axios.post('http://192.168.1.172:5001/api/auth/register', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Registration Successful:', response.data);
      
      navigate('/');
    } catch (error) {
      console.error('Registration Failed:', error.response ? error.response.data : error.message);
    
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="author">Author</option>
        <option value="librarian">Librarian</option>
      </select>
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
