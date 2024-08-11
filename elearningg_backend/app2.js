// const express = require('express');

// const cors = require('cors');
// const session = require('express-session');
// const mongoose = require('./connection'); 
// const userRoutes = require('./routes/user');
// const authMiddleware = require('./middleware/authMiddleware');

// const app = express();


// app.use(cors());
// app.use(express.json());
// app.use(session({
//   secret: 'hello', 
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: false }
// }));


// app.use('/api/user', authMiddleware, userRoutes); 
// app.listen(6000, () => {
//   console.log('Server is running');
// });
