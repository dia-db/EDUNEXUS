import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import Navbar from './Navbar3';

const InstructorCourses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error(error));
  }, []);

  const del_value = (id) => {
    axios.delete('http://localhost:4000/deletecourses/' + id)
      .then(() => {
        alert('Course removed');
        setCourses(courses.filter(course => course._id !== id)); 
      })
      .catch(error => console.error(error));
  };

  const update_Value = (course) => {
    navigate('/Addcourses', { state: { val: course } });
  };

  

  return (
    <>
    <Navbar />
    <Box sx={{ p: 2 }}>
     
      

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {courses.map(course => (
          <Card key={course._id} sx={{ width: 300, position: 'relative', display: 'flex', flexDirection: 'column',backgroundColor:'#FFE5D9' }}>
            <CardContent sx={{ flex: 1, paddingBottom: '60px' }}> 
              <img 
                src={course.courseimageurl} 
                alt={course.title} 
                style={{ width: '100%', height: 'auto' }} 
              />
              <Typography variant="h5" fontWeight={1000} sx={{ mb: 3.5 }} color="brown">{course.title}</Typography>
              <Typography variant="body1"fontWeight={700} sx={{ mb: 3.5 }} color="black">DESCRIPTION: {course.description}</Typography>
              <Typography variant="body1"fontWeight={700} sx={{ mb: 3.5 }} color="#4B3F2B" >CATEGORY: {course.category}</Typography>
              <Typography variant="body1" fontWeight={700} sx={{ wordBreak: 'break-all', color: 'brown' }}>
                FILE LINK: 
                <a href={course.contentFileLink} target="_blank" rel="noopener noreferrer" style={{ color: 'black', marginLeft: '5px', textDecoration: 'underline' }}>
                  {course.contentFileLink}
                </a>
              </Typography>
             
            </CardContent>
            <CardActions sx={{ position: 'absolute', bottom: '10px', left: '10px' }}>
              <Button 
                variant='contained' 
                onClick={() => update_Value(course)}
                size="small"
                sx={{ marginRight: '8px',backgroundColor:'#8B0000' }}
              >
                UPDATE
              </Button>
              <Button 
                variant='contained' 
                onClick={() => del_value(course._id)}
                size="small"
                sx={{backgroundColor:'#8B0000'}}
              >
                DELETE
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
    </>
  );
};

export default InstructorCourses;
