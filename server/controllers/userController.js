const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

module.exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({ status: 'success', data: user });
});

module.exports.updateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (Object.keys(req.body).length === 0) throw new Error('Enter user data!');
  res.status(200).json({ status: 'success', data: user });
});

module.exports.deleteUser = catchAsync(async (req, res, next) => {
  await Tour.findByIdAndDelete(req.params.id);
  res.status(204).json({ status: 'success', data: null });
});
