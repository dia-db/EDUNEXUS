const express = require('express');
const router = express.Router();
const User = require('../model/UserData');

router.post('/signuppage', async (req, res) => {
  const { fullName, email, password, phoneNumber, address, role } = req.body;

  if (!fullName || !email || !password || !role) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ fullName, email, password, phoneNumber, address, role });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
