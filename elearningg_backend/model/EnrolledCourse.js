const mongoose = require('mongoose');

const enrolledCourseSchema = new mongoose.Schema({
  title: String,
  courseimageurl: String,
  description: String,
  category: String,
  contentFileLink: String
});

module.exports = mongoose.model('enrolledcourse', enrolledCourseSchema);
