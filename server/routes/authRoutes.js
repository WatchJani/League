const { Router } = require('express');
//izbaciti
const multer = require("multer")


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


//izbaciti


// const fileStorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, '../image')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname)
//   }
// })


// const upload = multer({ storage: fileStorageEngine })

router.post("/image", authController.image)



router
  .route('/:id')
  .get(getOne(User))
  .patch(updateOne(User))
  .delete(deleteOne(User));

module.exports = router;
