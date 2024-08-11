const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); 

router.get('/user', authMiddleware, async (req, res) => {
  try {
    
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ role: user.role });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
