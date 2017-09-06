var mongoose = require("mongoose");

let gameSchema = new mongoose.Schema({
  title: {type: String, required: true},
  platform: String,
  image: { type: String, default: "http://i.imgur.com/jcWnG65.png"},
  description: String,
  completed: Boolean,
  nowPlaying: {type: Boolean, default: false},
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ]
},
{
  timestamps: true
});

let Game = mongoose.model("Game", gameSchema);

module.exports = Game;
