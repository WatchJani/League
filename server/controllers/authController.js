const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const maxAge = process.env.ACTIVE_DAYS * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.login_Post = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.login(email, password);
  const token = createToken(user._id);
  res.cookie('jwt', token, { maxAge: maxAge * 1000 });
  res.status(200).json({ status: 'success', data: user._id });
});

module.exports.register_Post = catchAsync(async (req, res, next) => {
  const { firstName, lastName, password, email, phone, address } = req.body;
  const image = req.file?.filename;

  const user = await User.create({
    firstName,
    lastName,
    password,
    email,
    phone,
    image,
    address,
  });

  const token = createToken(user._id);
  res.cookie('jwt', token, {
    maxAge: maxAge * 1000,
    sameSite: 'strict',
    path: '/',
  });
  res.status(201).json({ status: 'success', data: user._id });
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
