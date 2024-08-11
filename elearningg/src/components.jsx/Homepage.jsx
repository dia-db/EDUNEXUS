import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import Navbar from './Navbar';

const HomePage = () => {
  const [courses, setCourses] = useState([]);


  useEffect(()=>{
    axios.get('http://localhost:4000/courses').then((res)=>{
    console.log(res)
    setCourses(res.data)
  
    }).catch((error)=>{
      console.log(error)
    })
    },[],
    )

  return (
    <>
      <Navbar />
    <div style={{ padding: '20px' }}>
      <h1>Elevate Your Skills with Modern E-Learning</h1>
      <section>
        <h4 sx={{ marginTop: '10px', marginBottom: '15px' }}>
          Welcome to EduNexus, your Gateway to Knowledge!</h4>
          <br />
          <h3>Discover a world of learning with our comprehensive range of courses, tailored to fit your needs.</h3>
          <br /><h3>
          Whether you're looking to advance your career, pick up a new skill, or explore a new hobby, our platform offers high-quality content
          from top educators and industry experts.
          <br />
          Start your learning journey with us today and unlock your potential!
        </h3>
        <h4 fontWeight='bold'>OUR POPULAR COURSES</h4>
        <Grid container spacing={2}>
          {courses.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ minWidth: 275, display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#F2E8D6', 
                marginTop: '20px', marginBottom: '20px',transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
               } }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" fontWeight="bold" color="brown" sx={{ mb: 3.5 }} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="black" fontWeight="bold" sx={{ mb: 3.5 }}>
                    DESCRIPTION: {item.description}
                  </Typography>
                  <Typography variant="body1" color="#4B3F2B" fontWeight="bold" sx={{ mb: 1.5 }}>
                    CATEGORY: {item.category}
                  </Typography>
                  
                  <img src={item.courseimageurl} style={{ width: '100%', marginTop: '10px' }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
    </>
  );
};

export default HomePage;
