const {Schema, model} = require('mongoose')

const memeSchema = new Schema({
  filename: {type: String, required: true},
  text: { type: String, required: true },
  userName: { type: String, required: true },
  //comment: {type: String, required: true},
});

const Meme = model("Meme", memeSchema)

module.exports = Meme