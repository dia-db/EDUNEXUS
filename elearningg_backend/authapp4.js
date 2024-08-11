const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth4'); 
const mongoose = require('./connection'); 

const app = express();


app.use(cors());
app.use(bodyParser.json()); 


app.use('/api/auth4', authRoutes); 



app.listen(5003, () => {
  console.log(`Server is running`);
});
