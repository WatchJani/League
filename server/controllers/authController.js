const User = require('../models/userModel');
const jwt = require('jsonwebtoken');


const handleErrors = (err) => {
  console.log(err.message);
  let errors = { email: '', password: '' };

  // incorrect email
  if (err.message === 'Incorrect email') {
    errors.email = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'Incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'That email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: maxAge,
  })
};

module.exports.login_Post = async (req, res) => {
  const email = req.body.Email
  const password = req.body.Password

  console.log(password)

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id)
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id })
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors })
  }
}

module.exports.register_Post = async (req, res) => {
  const username = req.body.Username
  const password = req.body.Password
  const email = req.body.Email
  const phone = req.body.Phone

  try {
    const user = await User.create({ username, password, email, phone });
    const token = createToken(user._id)
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000, sameSite: "strict", path: "/" })
    res.status(201).json({ user: user._id })
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors })
  }
}

module.exports.logout_Get = (req, res) => {
  res.status(202).clearCookie("jwt").json({ message: "logout" })
}