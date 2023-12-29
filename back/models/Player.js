const mongoose = require('mongoose');
const playerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  position: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  signin: {
    amount:Number,
    currency:String
  },
  born: {
    type: Date
  }
});
module.exports = mongoose.model('Player', playerSchema);
