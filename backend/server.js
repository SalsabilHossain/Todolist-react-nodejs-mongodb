const express = require('express');
const mongoose = require('mongoose');
const todom = require('./model/todo');
const morgan = require('morgan');
const cors = require('cors');



// express app
const app = express();

//middleware
app.use(cors())
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));




//get
app.get('/', (req, res) => {
  todom.find()
      .then( todoli => {
        console.log(todoli);
      })
      .catch( err => {
          res.status(400).json('failed');
      });
  
});

//post
app.post('/add', (req, res) => {
  res.send(req.body);
  console.log(req.body)
} );


// listen for requests
// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://salsabil:alavi123@cluster0.ek16x.mongodb.net/node?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => console.log('connected to db'))
  .catch(err => console.log(err));


  app.listen(5000);


