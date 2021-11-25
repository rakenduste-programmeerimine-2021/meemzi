const router = require("express").Router()
const authController = require("../controllers/authController")
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

module.exports=router;