import React from 'react';
import './App.css';
import Navbar from './components.jsx/Navbar';
import HomePage from './components.jsx/Homepage';
import Login from './components.jsx/Login';
import Signup from './components.jsx/Signup';
import Addcourses from './components.jsx/Addcourses';
import InstructorCourses from './components.jsx/InstructorCourses';
import StudentCourses from './components.jsx/StudentCourses';
import { Route, Routes } from 'react-router-dom';
import EnrolledCourses from './components.jsx/EnrolledCourses';
import AboutUs from './components.jsx/AboutUs';
import ContactUs from './components.jsx/ContactUs';
import Dropdown from './components.jsx/Dropdown';
function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/addcourses" element={<Addcourses />} />
        <Route path="/instructorcourses" element={<InstructorCourses/>}/>
        <Route path="/studentcourses" element={<StudentCourses/>}/>
        <Route path="/enrolled-courses" element={<EnrolledCourses/>} />
      </Routes>
    </div>
  );
}

export default App;
