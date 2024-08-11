
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Navbar = () => {
  const navigate = useNavigate();

  const handleHome = () => {
   
    navigate('/');
  };



  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
    <Toolbar>
      <Typography fontFamily={'sans-serif'} fontWeight={900} textAlign={'left'} variant="h2" sx={{ flexGrow: 1, color: 'black' }}>
        EduNexus
      </Typography>
       
        <Button variant="text" sx={{ color: 'black', backgroundColor: 'transparent' }} onClick={handleHome}>
       HOME
        </Button>
       
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
