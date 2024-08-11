const express = require('express');
const router = express.Router();
const Course = require('../model/CourseData'); 
const EnrolledCourse = require('../model/EnrolledCourse');


router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }
});


router.get('/enrolledcourses', async (req, res) => {
  try {
    const enrolledCourses = await EnrolledCourse.find();
    res.status(200).json(enrolledCourses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching enrolled courses', error });
  }
});


router.post('/enroll', async (req, res) => {
  try {
    const { title, courseimageurl, description, category,contentFileLink} = req.body;
    const newEnrolledCourse = new EnrolledCourse({ title, courseimageurl, description, category,contentFileLink});
    await newEnrolledCourse.save();
    res.status(201).json({ message: 'Enrolled in course successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error enrolling in course', error });
  }
});

module.exports = router;
