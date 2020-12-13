const express = require('express');
const mongoose = require('mongoose');
// const todom = require('./model/taskModel');
// const morgan = require('morgan');
const taskRouter = require('./routes/taskRoutes');
const cors = require('cors');



// express app
const app = express();

//middleware
app.use(cors());
// app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

//Routes 
app.use('/taskRoutes', taskRouter);



// listen for requests
// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://salsabil:alavi123@cluster0.ek16x.mongodb.net/node?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => console.log('connected to db'))
  .catch(err => console.log(err));


  app.listen(5000);


