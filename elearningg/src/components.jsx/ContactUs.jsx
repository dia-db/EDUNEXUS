import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import Navbar from './Navbar4';

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" style={{ padding: '40px' }}>
        <Box mb={9}>
          <Typography variant="h1" fontWeight="bold" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h5" align="center" fontWeight="bold" color="black" paragraph>
            Reach out to us for any inquiries or support. We're here to help!
          </Typography>
        </Box>
        
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: '#FFE5D9', padding: '20px' }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" color="brown" gutterBottom>
                  John Doe
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  CEO & Founder
                </Typography>
                <Typography variant="body1" color="black">
                  Phone: +1 234 567 890
                </Typography>
                <Typography variant="body1" color="black">
                  Email: john.doe@example.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" color="brown" gutterBottom>
                  Jane Smith
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  Chief Technology Officer
                </Typography>
                <Typography variant="body1" color="black">
                  Phone: +1 234 567 891
                </Typography>
                <Typography variant="body1" color="black">
                  Email: jane.smith@example.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: '#FFE5D9', padding: '20px' }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" color="brown" gutterBottom>
                  Robert Brown
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  Chief Marketing Officer
                </Typography>
                <Typography variant="body1" color="black">
                  Phone: +1 234 567 892
                </Typography>
                <Typography variant="body1" color="black">
                  Email: robert.brown@example.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: '#FFE5D9', padding: '20px' }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" color="brown" gutterBottom>
                  Emily Davis
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  Chief Operations Officer
                </Typography>
                <Typography variant="body1" color="black">
                  Phone: +1 234 567 893
                </Typography>
                <Typography variant="body1" color="black">
                  Email: emily.davis@example.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
        </Grid>

      </Container>
    </>
  );
};

export default ContactUs;
