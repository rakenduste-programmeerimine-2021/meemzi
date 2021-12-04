const {Schema, model} = require('mongoose')

const memeSchema = new Schema({
  filename: {type: String, required: true},
  userName: {type: String, required: true},
  likeAmount: { type: Number, required: false },
  dislikeAmount: { type: Number, required: false },
  //comment: {type: String, required: true},
});

const Meme = model("Meme", memeSchema)

module.exports = Meme