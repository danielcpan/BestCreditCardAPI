const express = require('express');
const validate = require('express-validation');
const creditCardController = require('../controllers/creditCard.controller');
const paramValidation = require('../utils/param-validation.utils');
const { checkCache } = require('../utils/redis.utils');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(checkCache, creditCardController.list)
  .post(validate(paramValidation.createCreditCard), creditCardController.create);

router.route('/:creditCardId')
  .get(creditCardController.get)
  .put(validate(paramValidation.updateCreditCard), creditCardController.update)

module.exports = router;
