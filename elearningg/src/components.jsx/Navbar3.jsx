
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/');
  };

  const handleInstructorCourses = () => {
    navigate('/instructorcourses');
  };
  const handleAddCourse = () => {
    navigate('/Addcourses');
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
    <Toolbar>
      <Typography fontFamily={'sans-serif'} fontWeight={900} textAlign={'left'} variant="h2" sx={{ flexGrow: 1, color: 'black' }}>
       Instructor Dashboard
      </Typography>
      <Button 
       variant="text" sx={{ color: 'black', backgroundColor: 'transparent' }}
        onClick={handleAddCourse}
        
      >
        Add Courses
      </Button>
        <Button variant="text" sx={{ color: 'black', backgroundColor: 'transparent' }} onClick={handleLogout}>
          Logout
        </Button>
        <Button variant="text" sx={{ color: 'black', backgroundColor: 'transparent' }} onClick={handleInstructorCourses}>
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
