//Login.jsx
import React, { useState } from 'react';
import { login, useAuth } from './Authentication';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const currentUser = useAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleCheck(e) {
    e.preventDefault();
    try {
      setError('');
      await login(email, password);
      alert('Login Successful')
      navigate('/');

    } catch (error) {
      setError(error.message);
    }

  }

  return (
    <div className='body'>
      <h1>Log In</h1>
      {error && <div className="alert">{error}</div>}
      <form onSubmit={handleCheck}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button  className="button" type="submit">LOGIN</button>
      </form>
      <div className="account">
        Create an Account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
