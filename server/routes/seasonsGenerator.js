
const { Router } = require('express');
const seasonsGenerator = require('../controllers/seasonController');

const router = Router();

router.post('/create', seasonsGenerator.Generate);


module.exports = router;
