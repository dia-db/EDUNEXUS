import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar3';

const Addcourses = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    courseimageurl: '',
    contentFileLink: ''
  });
  const navigate = useNavigate();
  const location = useLocation();

  function fieldValue(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function valueAdd() {
    if (location.state !== null) {
      axios.put('http://localhost:4000/editcourses/' + location.state.val._id, form)
        .then(() => {
          alert('Data updated');
          navigate('/InstructorCourses');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios.post('http://localhost:4000/addcourses', form)
        .then(() => {
          alert('Data added');
          navigate('/InstructorCourses')
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    if (location.state !== null) {
      setForm({
        title: location.state.val.title,
        description: location.state.val.description,
        category: location.state.val.category,
        courseimageurl: location.state.val.courseimageurl,
        contentFileLink: location.state.val.contentFileLink 
      });
    }
  }, [location.state]);

  return (
    <>
      <Navbar />
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        backgroundColor: 'transparent',
        marginTop: '20px',
        marginBottom: '20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{ color: 'black' }}>ADD OR EDIT COURSE</h1>
      <TextField
        label="TITLE"
        variant="outlined"
        name="title"
        InputProps={{ style: { color: 'white' } }}
        InputLabelProps={{ style: { color: 'brown',fontWeight: 'bold', textAlign: 'center', width: '100%', fontSize: 19 } }}
        value={form.title}
        onChange={fieldValue}
      />
      <TextField
        label="DESCRIPTION"
        variant="outlined"
        name="description"
        value={form.description}
        InputProps={{ style: { color: 'white' } }}
        InputLabelProps={{ style: { color: 'brown',fontWeight: 'bold' ,textAlign: 'center', width: '100%', fontSize: 19 } }}
        onChange={fieldValue}
      />
      <TextField
        label="CATEGORY"
        variant="outlined"
        name="category"
        InputLabelProps={{ style: { color: 'brown',fontWeight: 'bold', textAlign: 'center', width: '100%', fontSize: 19 } }}
        value={form.category}
        InputProps={{ style: { color: 'white' } }}
        onChange={fieldValue}
      />
      <TextField
        label="COURSE IMAGE URL"
        variant="outlined"
        name="courseimageurl"
        InputProps={{ style: { color: 'white' } }}
        InputLabelProps={{ style: { color: 'brown', textAlign: 'center', fontWeight: 'bold',width: '100%', fontSize: 19 } }}
        value={form.courseimageurl}
        onChange={fieldValue}
      />
      <TextField
        label="CONTENT FILE"
        variant="outlined"
        name="contentFileLink" 
        InputProps={{ style: { color: 'white' } }}
        InputLabelProps={{ style: { color: 'brown', textAlign: 'center', fontWeight: 'bold',width: '100%', fontSize: 19 } }}
        value={form.contentFileLink} 
        onChange={fieldValue} 
      />
      <Button
        variant="contained"
        onClick={valueAdd}
        style={{ marginTop: '20px', backgroundColor: 'brown' }}
      >
        {location.state ? 'UPDATE COURSE' : 'ADD NEW COURSE'}
      </Button>
    </Box>
    </>
  );
}

export default Addcourses;
