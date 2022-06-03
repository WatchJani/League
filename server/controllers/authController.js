const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const nodemailer = require('../mail/email');

const maxAge = process.env.ACTIVE_DAYS * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.login_Post = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.login(email, password, next);
  console.log(user);
  const token = createToken(user._id);
  res.cookie('jwt', token, { maxAge: maxAge * 1000 });
  res.status(200).json({ status: 'success', data: user._id });
});

module.exports.createPendingUser_Post = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  const user = await User.create({ email });

  const token = createToken(user._id);
  res.cookie('jwt', token, {
    maxAge: maxAge * 1000,
    sameSite: 'strict',
    path: '/',
  });

  nodemailer.sendConfirmationEmail(user.email, user.id);

  res.status(201).json({ status: 'success', data: { token, email } });
});

module.exports.register_Patch = catchAsync(async (req, res, next) => {
  const { password, name, lastName, phone, address, role } = req.body;
  console.log(req.file, req);
  const image = req.file?.path;

  if (!password || !name || !lastName)
    return next(new AppError('Fields: password, name, lastName are required!'));

  const user = await User.findOne({ _id: req.params.id }).select('+password');
  if (!user) return next(new AppError('User with this email does not exist!'));
  if (user.activation_hash)
    return next(new AppError('You are already registrered!'));

  user.activation_hash = true;
  user.name = name;
  user.lastName = lastName;
  user.password = password;
  user.phone = phone;
  user.address = address;
  user.role = role;
  user.image = image;

  await user.save();

  res.status(201).json({ status: 'success', data: { user } });
});

module.exports.logout_Get = (req, res, next) => {
  res.status(202).clearCookie('jwt').json({ message: 'logout' });
};

module.exports.protected_Get = catchAsync(async (req, res, next) => {
  const token = req.headers?.authorization?.startsWith('Bearer')
    ? req.headers.authorization.split(' ')[1]
    : '';

  jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
    const user = await User.findById(decoded?.id);
    if (user) return res.status(200).json({ status: 'success', token });
    next(new AppError('You are not logged in. Authentication Failed!', 401));
  });
});


module.exports.image = catchAsync(async (req, res, next) => {
  const {name} = req.body;
  const image = req.file

  console.log( name)
  return res.status(200).json({ status: {  name, image } })

});
