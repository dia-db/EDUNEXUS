const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  address: { type: String },
  role: { type: String, required: true, enum: ['student', 'instructor'] }
});

module.exports = mongoose.model('user', userSchema);
