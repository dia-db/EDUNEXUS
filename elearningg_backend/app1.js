const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const helmet = require('helmet');
const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user'); 
require('./connection'); 
const authMiddleware = require('./middleware/authMiddleware');
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: "mongodb+srv://DIA:dhiyabiju@cluster0.3wzqtez.mongodb.net/eLearning?retryWrites=true&w=majority&appName=Cluster0",
  }),
  cookie: { secure: false, httpOnly: true } 
}));


app.use(helmet({
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      'default-src': ["'self'"],
      'font-src': ["'self'", 'https:', 'data:'],
      'style-src': ["'self'", 'https:', 'unsafe-inline'],
      'script-src': ["'self'", 'https:', 'unsafe-inline'],
    },
  },
}));

app.use((req, res, next) => {
  if (!req.session.userId) {
    console.log('No userId in session');
  } else {
    console.log('UserId:', req.session.userId);
  }
  next();
});


app.use('/api/signup', signupRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/user', authMiddleware, userRoutes); 

app.listen(3000, () => {
  console.log('Server is running');
});
