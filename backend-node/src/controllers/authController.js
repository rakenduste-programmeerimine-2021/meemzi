const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

exports.login = async (req, res) =>{

  const {email, password} = req.body;

  try{
    const user = await User.findOne({email});
    if (!user) throw Error("User with this email does not exist");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error("Password does not match given username");

    const userTemplate ={
      id: user.id,
      userName: user.userName,
      password: user.password,
      email
    }

    const token = jwt.sign(userTemplate, process.envJWT_SECRET);
    if(!token) throw Error("Something critical happend: 1")

    res.status(200).json({
      token,
      ...userTemplate
    })

  }catch(e){
    res.status(400).json({})
  }
}

exports.signup = (req, res) =>{
  const{userName, password, email} = req.body

  try{

    const user = await User.findOne({email})
    if(user) throw Error("User with that e-mail already exists")

    const salt = await bycrypt.genSalt(10)
    if(!salt) throw Error("Something critical happend: 2")

    const hash = await bcrypt. hash(password, salt)
    if(!hash) throw Error("Something critical happend: 3")

    const newUser = new User({
      userName,
      email,
      password:hash
    })

    const savedUser = newUser.save()
    if(!savedUser) throw Error("Failed to save user")

    res.status(200).json({message: "User successfully created"})
  }catch(e){
    res.status(400).json({error: e.message})
  }
}