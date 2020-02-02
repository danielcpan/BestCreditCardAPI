const httpStatus = require('http-status');
const CreditCard = require('../models/creditCard.model');
const APIError = require('../utils/APIError.utils');
const { addToCache } = require('../utils/redis.utils');

module.exports = {
  get: async (req, res, next) => {
    try {
      const { creditCardId } = req.params;
      const creditCard = await CreditCard.findOne({ _id: creditCardId });

      if (!creditCard) {
        return next(new APIError('CreditCard not found', httpStatus.NOT_FOUND));
      }

      addToCache(req, 300, creditCard);
      return res.json(creditCard);
    } catch (err) {
      return next(err);
    }
  },
  list: async (req, res, next) => {
    try {
      const { category } = req.params;
      const creditCards = await CreditCard.find().sort([[category, -1]]);

      addToCache(req, 300, creditCards);
      return res.json(creditCards);
    } catch (err) {
      return next(err);
    }
  },
  create: async (req, res, next) => {
    const { 
      name,
      cashBackOnGasStations,
      cashBackOnGrocerieStores,
      cashBackOnRestaurants,
      cashBackOnAmazon,
      cashBackOnHomeUtlities,
      cashBacOnkTVInternetStreamingServices,
      cashBackOnMovieTheaters,
      cashBackOnEntertainment,
      cashBackOnGroundTransportation,
      cashBackOnAllOther
    } = req.body
    
    try {
      const newCreditCard = new CreditCard({
        name,
        cashBackOnGasStations,
        cashBackOnGrocerieStores,
        cashBackOnRestaurants,
        cashBackOnAmazon,
        cashBackOnHomeUtlities,
        cashBacOnkTVInternetStreamingServices,
        cashBackOnMovieTheaters,
        cashBackOnEntertainment,
        cashBackOnGroundTransportation,
        cashBackOnAllOther
      })
      await newCreditCard.save();

      return res.status(httpStatus.CREATED).json(newCreditCard);
    } catch (err) {
      return next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { creditCardId } = req.params;
      const creditCard = await CreditCard.findOne({ _id: creditCardId });

      if (!creditCard) {
        return next(new APIError('Credit Card not found', httpStatus.NOT_FOUND));
      }

      Object.assign(creditCard, req.body);
      await creditCard.save();

      return res.status(httpStatus.OK).json(creditCard);
    } catch (err) {
      return next(err)
    }
  },  
};
