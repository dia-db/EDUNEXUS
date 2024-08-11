import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [userRole, setUserRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user/user', { withCredentials: true });
        
        if (response.status === 200) {
          setUserRole(response.data.role);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          setUserRole(null);
        }
      } catch (error) {
        setIsLoggedIn(false);
        setUserRole(null);
      }
    };

    fetchUserData();
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/login/logout', {}, { withCredentials: true });

      if (response.status === 200) {
        setUserRole(null);
        setIsLoggedIn(false);
        navigate('/');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src="https://www.freeiconspng.com/uploads/education-png-1.png" alt="Logo" style={{ height: 90, marginRight: 8 }} />
          <Typography fontFamily={'sans-serif'} fontWeight={900} textAlign={'left'} variant="h2" sx={{ color: 'black' }}>
            EduNexus
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          {isLoggedIn ? (
            userRole === 'student' ? (
              <>
                <Button variant="text" sx={{ color: 'black' }} onClick={() => handleNavigation('/EnrolledCourses')}>
                  Enrolled Courses
                </Button>
                <Button variant="text" sx={{ color: 'black' }} onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Button variant="text" sx={{ color: 'black' }} onClick={handleLogout}>
                Logout
              </Button>
            )
          ) : (
            <>
            <Button variant="text" sx={{ color: 'black' }}>
                <Link to="/aboutus" style={{ textDecoration: 'none', color: 'black' }}>ABOUT US</Link>
              </Button>
              <Button variant="text" sx={{ color: 'black' }} onClick={() => handleNavigation('/Login')}>
                LOGIN
              </Button>
              <Button variant="text" sx={{ color: 'black' }} onClick={() => handleNavigation('/Signup')}>
                SIGN UP
              </Button>
              <Button variant="text" sx={{ color: 'black' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>HOME</Link>
              </Button>
              <Button variant="text" sx={{ color: 'black' }}>
                <Link to="/contactus" style={{ textDecoration: 'none', color: 'black' }}>CONTACT US</Link>
              </Button>
              
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
