const express = require('express');
const creditCardRoutes = require('./creditCard.route');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/health-check', (req, res) => res.send('OK'));

router.use('/credit-cards', creditCardRoutes);

module.exports = router;
