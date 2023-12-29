const mongoose = require('mongoose');
const LeagueSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  sport: {
    type: String,
  },
  teams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
}]
});
module.exports = mongoose.model('League', LeagueSchema);
