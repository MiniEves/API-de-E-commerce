const express = require('express');
const { requireAuth } = require('../middlewares/auth');
const controller = require('../controllers/reviewController');

const router = express.Router();

router.post('/products/:productId/reviews', requireAuth, controller.create);
router.get('/products/:productId/reviews', controller.getByProduct);

module.exports = router;