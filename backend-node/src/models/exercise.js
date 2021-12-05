const {Schema, model} = require('mongoose')

const exerciseSchema = new Schema({
  userName: {type: String, required: true},
  description: {type: String, required: true},
  duration: {type: Number, required: true},
  date: {type: Date, required: true},
},{
  timestamps: true,
});

const Exercise = model("Exercise", exerciseSchema)

module.exports = Exercise;