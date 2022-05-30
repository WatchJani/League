const { Router } = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const multer = require('multer');

const router = Router();

const Storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + file?.originalname);
  },
});

const upload = multer({
  storage: Storage,
});

router.post('/login', authController.login_Post);
router.post('/register', upload.single('image'), authController.register_Post);
router.get('/logout', authController.logout_Get);
router.get('/protected', authController.protected_Get);

router.get('/', userController.getAllUsers);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
