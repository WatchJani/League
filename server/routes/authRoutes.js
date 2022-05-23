const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.post('/login', authController.login_Post);
router.post('/register', authController.register_Post);
router.get('/logout', authController.logout_Get);
router.get('/protected', authController.protected_Get);

module.exports = router;
