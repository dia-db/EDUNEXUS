import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from './Navbar4';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/api/login/login', { email, password });
      const { role } = response.data;

      if (role === 'student') {
        navigate('/StudentCourses');
      } else if (role === 'instructor') {
        navigate('/InstructorCourses');
      } else {
        setError('Invalid role');
      }
    } catch (error) {
      console.error('Login failed', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <>
     <Navbar />
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        marginTop: '20px',
        marginBottom: '20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleLogin}
    >
      <h1 style={{ textAlign: 'center', fontSize: '58px', fontWeight: 'bold' }}>
        LOGIN
      </h1>
      {error && (
        <div style={{ color: 'brown', marginBottom: '10px' }}>
          {error}
        </div>
      )}
      <TextField
        id="outlined-email"
        label="EMAIL ADDRESS"
        variant="outlined"
        value={email}
        InputLabelProps={{ style: { color: 'brown', textAlign: 'center', width: '100%', fontSize: 19,fontWeight: 'bold' } }}
        InputProps={{ style: { color: 'white' } }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-password"
        label="PASSWORD"
        variant="outlined"
        type="password"
        value={password}
        InputProps={{ style: { color: 'white' } }}
        InputLabelProps={{ style: { color: 'brown', textAlign: 'center', width: '100%', fontSize: 19,fontWeight: 'bold' } }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        style={{ marginTop: '20px', backgroundColor: '#8B0000' }}
      >
        Login
      </Button>
      <Link to="/Signup" style={{ textDecoration: 'none' }}>
        <Button variant="text" style={{ marginTop: '10px',color: 'black',fontWeight: 'bold' }}>Don't have an account? Sign Up</Button>
      </Link>
    </Box>
    </>
  );
};

export default Login;
