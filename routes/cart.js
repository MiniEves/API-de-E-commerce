const express = require('express');
const { requireAuth } = require('../middlewares/auth');
const controller = require('../controllers/cartController');

const router = express.Router();

router.post('/add', requireAuth, controller.add);

module.exports = router;