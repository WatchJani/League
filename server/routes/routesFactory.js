const { Router } = require('express');
const { upload } = require('../utils/uploadImage');

const {
  getAll,
  getOne,
  deleteOne,
  updateOne,
  createOne,
} = require('../controllers/handlerFactory');

const routesFactory = (Model) => {
  const router = Router();

  router
    .route('/')
    .get(getAll(Model))
    .post(upload.single('image'), createOne(Model));

  router
    .route('/:id')
    .get(getOne(Model))
    .patch(upload.single('image'), updateOne(Model))
    .delete(deleteOne(Model));

  return router;
};

module.exports = routesFactory;
