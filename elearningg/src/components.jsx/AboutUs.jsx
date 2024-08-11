import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Container, Box } from '@mui/material';
import Navbar from './Navbar4';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" style={{ padding: '40px' }}>
        <Box mb={9}>
          <Typography variant="h1" fontWeight="bold" align="center" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h2" color="black" fontWeight="bold" align="center" sx={{ mb: 7.5 }} paragraph>
            Welcome to EduNexus!
          </Typography>
          <Typography variant="h5" align="center" fontWeight="bold" color="#4B3F2B" sx={{ mb: 3.5 }} paragraph>
            At EduNexus, we are passionate about making education accessible and engaging for everyone. Our mission is to provide high-quality, affordable, and flexible learning experiences that empower individuals to achieve their personal and professional goals.
          </Typography>
          <Typography variant="h5" align="center" fontWeight="bold" color="rgb(125, 33, 0)" sx={{ mb: 3.5 }} paragraph>
            Our platform offers a diverse range of courses taught by expert educators and industry professionals. Whether you're looking to advance your career, pick up a new skill, or explore a new hobby, we have something for you.
          </Typography>
          <Typography variant="h5" align="center" fontWeight="bold" color="#4B3F2B" sx={{ mb: 3.5 }} paragraph>
            We believe that learning should be a lifelong journey, and we are committed to supporting you every step of the way. Join us at EduNexus and unlock your potential today!
          </Typography>
        </Box>
        
        <Box mb={6}>
          <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
            Our Vision
          </Typography>
          <Typography variant="h5" align="center" fontWeight="bold"color="black" paragraph>
            Our vision is to create a world where education is a continuous journey and knowledge is accessible to all. We strive to break down barriers to learning and offer opportunities for personal and professional growth.
          </Typography>
        </Box>
        
        <Box mb={4}>
          <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
            OUR TEAM
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: '400px', display: 'flex', flexDirection: 'column', backgroundColor: '#FFE5D9', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg" 
                  alt="John Doe"
                  sx={{ borderRadius: '50%', objectFit: 'cover', width: '150px', height: '150px', margin: '0 auto' }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography variant="h5" fontWeight="bold" color="#333" gutterBottom>
                    JOHN DOE
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" color="brown" gutterBottom>
                    CEO & Founder
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" color="textSecondary" align="center">
                    John is a visionary leader with over 20 years of experience in the education sector. He is passionate about leveraging technology to enhance learning experiences and make education accessible to all.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: '400px', display: 'flex', flexDirection: 'column', backgroundColor: '#f5f5f5', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://th.bing.com/th/id/OIP.Ntwccxljc9Gmka_Y6InYMAHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
                  alt="Jane Smith"
                  sx={{ borderRadius: '50%', objectFit: 'cover', width: '150px', height: '150px', margin: '0 auto' }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography variant="h5" fontWeight="bold" color="#333" gutterBottom>
                    JANE SMITH
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" color="brown" gutterBottom>
                    Chief Technology Officer
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" color="textSecondary" align="center">
                    Jane leads our technology team with a focus on innovation and user experience. With her expertise in software development, she ensures that our platform is both cutting-edge and user-friendly.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: '400px', display: 'flex', flexDirection: 'column', backgroundColor: '#eafaf1', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://th.bing.com/th/id/OIP.O04oqzX_nVxg5iKkjtVmfQHaLH?w=125&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
                  alt="Emily Davis"
                  sx={{ borderRadius: '50%', objectFit: 'cover', width: '150px', height: '150px', margin: '0 auto' }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography variant="h5" fontWeight="bold" color="#333" gutterBottom>
                    EMILY DAVIS
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" color="brown" gutterBottom>
                    Head of Content
                  </Typography>
                  <Typography variant="body2"fontWeight="bold"  color="textSecondary" align="center">
                    Emily oversees the development and quality of our course content. She works closely with educators to ensure that our courses meet the highest standards of excellence.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: '400px', display: 'flex', flexDirection: 'column', backgroundColor: '#f5f5f5', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="data:image/jpeg;base64,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" 
                  alt="Michael Brown"
                  sx={{ borderRadius: '50%', objectFit: 'cover', width: '150px', height: '150px', margin: '0 auto' }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography variant="h5" fontWeight="bold" color="#333" gutterBottom>
                    MICHAEL BROWN
                  </Typography>
                  <Typography variant="body1"fontWeight="bold" color="brown" gutterBottom>
                    Marketing Director
                  </Typography>
                  <Typography variant="body2"fontWeight="bold" color="textSecondary" align="center">
                    Michael drives our marketing strategy and outreach efforts. His expertise in digital marketing helps us connect with learners and educators globally.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AboutUs;
