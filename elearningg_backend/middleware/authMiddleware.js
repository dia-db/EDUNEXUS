const User = require('../model/UserData');

const authMiddleware = async (req, res, next) => {
  console.log('Session ID:', req.session.id); 
  console.log('User ID from session:', req.session.userId); 

  if (!req.session.userId) {
    console.log('No userId in session');
    return res.status(401).json({ message: 'Access denied. Please log in.' });
  }

  try {
    const user = await User.findById(req.session.userId);
    if (!user) {
      console.log('User not found in database');
      return res.status(401).json({ message: 'Invalid session.' });
    }

    req.userId = req.session.userId;
    next();
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};


module.exports = authMiddleware;
