
const mongoose = require('mongoose');
const teamSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
}]
});
module.exports = mongoose.model('Team', teamSchema);
