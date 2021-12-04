const {Schema, model} = require('mongoose')

const useerSchema = new Schema({
  userName: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true}
});

const User = model("User", useerSchema)

module.exports = User