const express = require('express');
const app = express();
const router = express.Router();
const Message = require('../models/messages');

router.route('/message')
  .post((req, res) => {
    const smessage = req.body;
    console.log(smessage);
    Message.create(smessage,(err, results)=>{
      console.log(results);
    });
    res.json("message sent");
  })

router.route('/answer')
  .get((req, res) => {
    Message.find({})
    .then(result=>{
      const len = result.length;
      const rand = Math.floor(Math.random()*len);
      const answer = result[rand];
      if(len<1){
        res.json({owner: "System", message: "There are no messages yet! You are the first user!"})
      }else{
        res.json(answer);
      }
      console.log(result);
    })
    .catch(err=>{console.log(err)})
  })




module.exports = router;
