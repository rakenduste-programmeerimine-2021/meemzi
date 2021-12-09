const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) throw Error("User with this e-mail does not exist")

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw Error("Wrong e-mail or password!")


    const userTemplate ={
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email
    }

    res.status(200).json({
      token,
      ...userTemplate
    })

  }catch(e){
    res.status(400).json({error: e.message})
  }
}

exports.signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (user) throw Error("Given e-mail already in use")

    const salt = await bcrypt.genSalt(10)
    if (!salt) throw Error("Something critical happened 100")

    const hash = await bcrypt.hash(password, salt)
    if (!hash) throw Error("Something critical happened 200")

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hash
    })

    const savedUser = await newUser.save()
    if (!savedUser) throw Error("Error saving user")

    res.status(200).json({ message: "User successfully created!" })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}