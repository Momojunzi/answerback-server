'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
//constants
const basePath = '/api';
const PORT = 8080;
const HOST = "0.0.0.0"
mongoose.connect("mongodb://momojunzi:M01279111h%24@cluster0-shard-00-00-lsqzg.mongodb.net:27017,cluster0-shard-00-01-lsqzg.mongodb.net:27017,cluster0-shard-00-02-lsqzg.mongodb.net:27017/answerback?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin")
  .then(()=>{
    console.log('Backend started');
  })
  .catch(err => {
    console.log('Backend error: ', err.stack);
    process.exit(1);
  });
const routes = require('./routes/routes');
//app
const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(basePath, routes);

//execute app
app.listen(PORT, HOST);
console.log(`running on port: ${PORT}`);
