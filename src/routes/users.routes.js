const userController = require('../controllers/user.controller');
const validationMiddleware = require('./../middleware/validation.middleware');
const express = require('express');

const router = express.Router();

router.post(
  '/register',
  validationMiddleware.createUserValidation,
  userController.register
);

router.post(
  '/login',
  validationMiddleware.loginUserValidtaion,
  userController.login
);

module.exports = router;
