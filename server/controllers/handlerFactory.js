const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const { password, name, lastName, phone, address, role } = req.body;
    const image = req.file?.path;

    console.log(req.params.id, req.body);
    const doc = await Model.findByIdAndUpdate(
      req.params.id,
      {
        password,
        name,
        lastName,
        phone,
        address,
        role,
        image,
        activation_hash: true,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: doc,
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const image = req.file?.filename;

    const doc = await Model.create({ ...req.body, image });

    res.status(201).json({
      status: 'success',
      data: doc,
    });
  });

exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    const doc = await query;

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: doc,
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const query = Model.find({});
    const doc = await query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: doc,
    });
  });
