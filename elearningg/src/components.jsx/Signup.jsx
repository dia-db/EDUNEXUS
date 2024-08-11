import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar4';
import Dropdown from './Dropdown';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const UserData = {
      fullName,
      email,
      password,
      phoneNumber,
      address,
      role
    };

    try {
      await axios.post('http://localhost:3000/api/signup/signuppage', UserData);
      alert('Signup successful');
      navigate('/Login');
    } catch (error) {
      console.error('Signup error:', error);
      alert('Error during signup');
    }
  };

  return (
    <>
      <Navbar />
      <Box
        component="form"
        onSubmit={handleSignup}
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
      >
        <h1>SIGNUP</h1>
        <TextField
          id="outlined-basic"
          label="FULL NAME"
          variant="outlined"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: 'brown', width: '100%', fontSize: 19, textAlign: 'center', fontWeight: 'bold' } }}
        />
        <TextField
          id="outlined-basic"
          label="EMAIL ADDRESS"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: 'brown', width: '100%', fontSize: 19, textAlign: 'center', fontWeight: 'bold' } }}
        />
        <TextField
          id="outlined-basic"
          label="PASSWORD"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: 'brown', width: '100%', fontSize: 19, textAlign: 'center', fontWeight: 'bold' } }}
        />
        <TextField
          id="outlined-basic"
          label="CONFIRM PASSWORD"
          variant="outlined"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: 'brown', width: '100%', fontSize: 19, textAlign: 'center', fontWeight: 'bold' } }}
        />
        <TextField
          id="outlined-basic"
          label="PHONE NUMBER"
          variant="outlined"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: 'brown', width: '100%', fontSize: 19, textAlign: 'center', fontWeight: 'bold' } }}
        />
        <TextField
          id="outlined-basic"
          label="ADDRESS"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: 'brown', width: '100%', fontSize: 19, textAlign: 'center', fontWeight: 'bold' } }}
        />
        <Dropdown
          label="ROLE"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          options={['student', 'instructor']}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2, backgroundColor: '#8B0000' }}
        >
          SIGNUP
        </Button>
        <Link to="/Login">
          <Button variant="text" style={{ marginTop: '10px', color: 'black', fontWeight: 'bold' }} sx={{ mt: 1 }}>
            ALREADY HAVE AN ACCOUNT? LOGIN
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Signup;
