const express = require('express');
const { body } = require('express-validator');
const validate = require('../middlewares/validate');
const controller = require('../controllers/userController');

const router = express.Router();

router.post('/register',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  validate,
  controller.register
);

router.post('/login', controller.login);

module.exports = router;