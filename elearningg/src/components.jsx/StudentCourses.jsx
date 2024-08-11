import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar2';

const StudentCourses = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    axios.get('http://localhost:4000/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error(error));

    
    axios.get('http://localhost:5003/api/auth4/enrolled-courses')
      .then(response => setEnrolledCourses(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleEnroll = (course) => {
   
    const alreadyEnrolled = enrolledCourses.some(enrolledCourse => enrolledCourse._id === course._id);

    if (alreadyEnrolled) {
      alert(`You are already enrolled in the course: ${course.title}`);
    } else {
      axios.post('http://localhost:5003/api/auth4/enroll', course)
        .then(() => {
          alert(`Enrolled in course: ${course.title}`);
          navigate('/enrolled-courses');
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <>
      <Navbar /> 
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
        <Typography variant="h3" fontWeight={800} sx={{ mt: 4 }}>AVAILABLE COURSES</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {courses.map(course => (
            <Card key={course._id} sx={{ width: 300, position: 'relative', display: 'flex', flexDirection: 'column', backgroundColor: '#D8CAB8' }}>
              <CardContent sx={{ flex: 1, paddingBottom: '60px' }}>
                <img
                  src={course.courseimageurl}
                  alt={course.title}
                  style={{ width: '100%', height: 'auto' }}
                />
                <Typography variant="h5" fontWeight={1000} sx={{ mb: 3.5 }} color="brown">{course.title}</Typography>
                <Typography variant="body1" fontWeight={700} sx={{ mb: 3.5 }} color="black">DESCRIPTION: {course.description}</Typography>
                <Typography variant="body1" fontWeight={700} sx={{ mb: 3.5 }} color="#4B3F2B">CATEGORY: {course.category}</Typography>
                <Typography variant="body1" fontWeight={700} sx={{ wordBreak: 'break-all', color: 'brown' }}>
                  FILE LINK: {course.contentFileLink}
                </Typography>
              </CardContent>
              <CardActions sx={{ position: 'absolute', bottom: '10px', left: '10px' }}>
                <Button
                  variant='contained'
                  onClick={() => handleEnroll(course)}
                  size="small"
                  sx={{ backgroundColor: '#8B0000' }}
                >
                  ENROLL
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default StudentCourses;
