
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    navigate('/');
  };

  const handleEnrolledCourses = () => {
    navigate('/enrolled-courses');
  };

  const handleStudentCourses = () => {
    navigate('/studentcourses');
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
    <Toolbar>
      <Typography fontFamily={'sans-serif'} fontWeight={900} textAlign={'left'} variant="h2" sx={{ flexGrow: 1, color: 'black' }}>
        Student Dashboard
      </Typography>
        <Button variant="text" sx={{ color: 'black', backgroundColor: 'transparent' }} onClick={handleEnrolledCourses}>
          Enrolled Courses
        </Button>
        <Button variant="text" sx={{ color: 'black', backgroundColor: 'transparent' }} onClick={handleLogout}>
          Logout
        </Button>
        <Button variant="text" sx={{ color: 'black', backgroundColor: 'transparent' }} onClick={handleStudentCourses}>
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
