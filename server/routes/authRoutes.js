const { Router } = require('express');
const authController = require('../controllers/authController');
const multer = require('multer');

const router = Router();

const Storage = multer.diskStorage({
  destination: 'images',
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

module.exports = router;
