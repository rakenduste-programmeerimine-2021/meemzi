const router = require("express").Router();
let User = require("../models/user");

router.route('/').get((req, res) =>{
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{

const username = req.body.username;
const newUser = new User({username});

newUser.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;





/*const authController = require("../controllers/authController")
const validationMiddleware = require('../middleware/validationMiddleware')
const {check} = require("express-validator")

router.post("/login ",[
  check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("E-mail must be correctly formatted"),

  check("password")
    .isLength({min:6})
    .withMessage("Must be at least 6 characters long"),
],
validationMiddleware,
authController.login

);

router.post("/signup",[
  check("userName")
    .isLength({min:3})
    .withMessage("Must be at least 3 characters long")
    .trim()
    .exist()
    .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
    .withMessage("Must be alphabetic"),

  check("password")
    .isLength({ min: 6 })
    .withMessage("Must be at least 6 characters long"),

  check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Must be correctly formatted e-mail"),

],
validationMiddleware,
authController.signup
);

module.exports=router; */