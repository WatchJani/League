const AppError = require('../utils/appError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((err) => err.message);
  const message = `Invalid input values: ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleDuplicateErrorDB = (err) => {
  const value = err.message.match(
    /(?=["'])(?:"[^"\\]*(?:\\[\s\S][^"\\]*)*"|'[^'\\]*(?:\\[\s\S][^'\\]*)*')/
  );
  const message = `Duplicate field value ${value}. Please use another value!`;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError('Invalid token! Please log in again!', 401);

const handleJWTExpiredError = () =>
  new AppError('Your token has expired! Please log again!', 401);

const prodError = (err, res) => {
  if (err.isOperational)
    return res.status(err.statusCode || 500).json({
      status: err.status,
      message: err.message,
    });

  res.status(err.statusCode || 500).json({
    status: 'error',
    message: 'Something went very wrong!',
  });
};

const devError = (err, res) => {
  console.log(err);
  return res.status(err.statusCode || 500).json({
    status: err.status || 'error',
    error: err,
    message: err.message || 'Error occured!',
    stack: err.stack,
  });
};

module.exports = (err, req, res, next) => {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'production') {
    let error = Object.create(err);

    if (err.name === 'CastError') error = handleCastErrorDB(error);
    if (err.name === 'ValidationError') error = handleValidationErrorDB(error);
    if (err.code === 11000) error = handleDuplicateErrorDB(error);
    if (err.name === 'JsonWebTokenError') error = handleJWTError();
    if (err.name === 'TokenExpiredError') error = handleJWTExpiredError();
    prodError(error, res);
  } else if (process.env.NODE_ENV === 'development') devError(err, res);
};
