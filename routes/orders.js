const express = require('express');
const { requireAuth } = require('../middlewares/auth');
const controller = require('../controllers/orderController');

const router = express.Router();

router.post('/checkout', requireAuth, controller.checkout);

module.exports = router;