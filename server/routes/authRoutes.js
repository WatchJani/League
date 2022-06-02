const { Router } = require('express');
const authController = require('../controllers/authController');
const {
  getAll,
  getOne,
  deleteOne,
  updateOne,
} = require('../controllers/handlerFactory');

const User = require('../models/userModel');
const { upload } = require('../utils/uploadImage');

const router = Router();

router.post('/login', authController.login_Post);
router.post('/register', authController.createPendingUser_Post);
router.patch(
  '/register/:id',
  upload.single('image'),
  authController.register_Patch
);
router.get('/logout', authController.logout_Get);
router.get('/protected', authController.protected_Get);

router.get('/', getAll(User));

router
  .route('/:id')
  .get(getOne(User))
  .patch(updateOne(User))
  .delete(deleteOne(User));

module.exports = router;
