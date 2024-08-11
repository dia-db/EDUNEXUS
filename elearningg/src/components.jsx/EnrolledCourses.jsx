
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Navbar from './Navbar2';

const EnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5003/api/auth4/enrolledcourses')
      .then(response => setEnrolledCourses(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
        <Typography variant="h4" fontWeight={800} sx={{ mt: 4 }}>ENROLLED COURSES</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {enrolledCourses.map(course => (
            <Card key={course._id} sx={{ width: 300, position: 'relative', display: 'flex', flexDirection: 'column', backgroundColor: '#D8CAB8' }}>
              <CardContent sx={{ flex: 1, paddingBottom: '60px' }}>
                <img
                  src={course.courseimageurl}
                  alt={course.title}
                  style={{ width: '100%', height: 'auto' }}
                />
                <Typography variant="h5" fontWeight={1000} sx={{ mb: 3.5 }} color="brown">{course.title}</Typography>
                <Typography variant="body1" fontWeight={700} sx={{ mb: 3.5 }} color="black">DESCRIPTION: {course.description}</Typography>
                <Typography variant="body1"fontWeight={700}  sx={{ mb: 3.5 }} color="#4B3F2B">CATEGORY: {course.category}</Typography>
                <Typography variant="body1" fontWeight={700} sx={{ wordBreak: 'break-all', color: 'brown' }}>
  FILE LINK: {course.contentFileLink ? 
    <a href={course.contentFileLink} target="_blank" rel="noopener noreferrer" style={{ color: 'black', marginLeft: '5px', textDecoration: 'underline' }}>
      {course.contentFileLink}
    </a> : 
    'Not available'
  }
</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default EnrolledCourses;
