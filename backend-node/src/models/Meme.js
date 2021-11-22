const {Schema, model} = require('mongoose')

const memeSchema = new Schema({
  filename: {type: String, required: true},
  //comment: {type: String, required: true},
});

const Meme = model("Meme", memeSchema)

module.exports = Meme