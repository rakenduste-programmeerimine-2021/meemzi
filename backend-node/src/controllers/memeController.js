const Meme = require('../models/Meme')

exports.getMeme = async (req, res) => {
  const memes = await Meme.find({})
  
  res.status(200).send(memes)
}

exports.createMeme = async (req, res) => {
    const {filename, userName, likeAmount, dislikeAmount} = req.body;

  const newMeme = {
    filename,
    userName,
    likeAmount,
    dislikeAmount,
  }

  const createdMeme = new Meme(newMeme)

  const savedMeme = await createdMeme.save()

  res.status(200).send(`yay ${savedMeme._id}`)
}

exports.updateMeme = async (req, res) => {
  const { id } = req.params;

  const meme = await Meme.findOneAndUpdate({ _id: id }, req.body)

  if (!meme) res.status(404).send("No item with that id found")

  const updatedMeme = await Meme.findOne({ _id: id })

  res.status(200).send(`Successfully updated the following item: \n ${updatedMeme}`)
}

exports.deleteMeme = async (req, res) => {
  const { id } = req.params;

  const meme = await Meme.findOneAndDelete({ _id: id })

  if (!meme) res.status(404).send("No meme with that id found")
  console.log(meme)

  res.status(200).send(`Successfully deleted the following meme: \n ${meme}`)
}