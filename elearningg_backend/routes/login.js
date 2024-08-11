const express = require('express');
const router = express.Router();
const User = require('../model/UserData'); 

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    req.session.userId = user._id; 
    console.log('Session ID set:', req.session.id);

    res.status(200).json({ message: 'Login successful', role: user.role });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});


router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error during logout', error: err });
    }
    res.status(200).json({ message: 'Logout successful' });
  });
});

module.exports = router;
