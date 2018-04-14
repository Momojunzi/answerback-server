const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Message = new Schema({
  owner: {type: String, required: true},
  message: {type: String, required: true},
  added: {type: Date}
},{
  collection: 'Messages'
});

module.exports = mongoose.model('Message', Message);
