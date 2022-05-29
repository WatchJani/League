const User = require('../models/userModel');

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
};

module.exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ status: 'success', data: user });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (Object.keys(req.body).length === 0) throw new Error('Enter user data!');
    res.status(200).json({ status: 'success', data: user });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: 'success', data: null });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
