const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const AppError = require('../utils/appError');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter your first name'],
    minlength: [2, 'Minimum first name length is 2 characters'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Please enter your last name'],
    minlength: [2, 'Minimum last name length is 2 characters'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter an password'],
    minlength: [6, 'Minimum password length is 6 characters'],
    trim: true,
    select: false,
  },
  activation_hash: String,
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, 'Enter valid email!'],
    trim: true,
  },
  phone: {
    type: String,
  },
  role: {
    type: String,
    enum: ['SuperAdmin', 'TeamAdmin', 'LeagueAdmin', 'Delegate'],
    default: 'TeamAdmin',
  },
  image: {
    type: String,
    default: 'public/avatar.svg',
  },
  address: String,
});

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt); //password
  next();
});

userSchema.statics.login = async function (email, password, next) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password); //password
    if (auth) return user;

    new AppError('Incorrect password', 401);
  }
  new AppError('Incorrect email', 401);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
