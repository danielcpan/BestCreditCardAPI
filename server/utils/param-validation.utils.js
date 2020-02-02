const Joi = require('joi');

module.exports = {
  // CREDIT CARDS ROUTE SCHEMA
  // POST /api/credit-cards
  createCreditCard: {
    body: {
      name: Joi.string().required(),
      cashBackOnGasStations: Joi.number().optional(),
      cashBackOnGrocerieStores: Joi.number().optional(),
      cashBackOnRestaurants: Joi.number().optional(),
      cashBackOnAmazon: Joi.number().optional(),
      cashBackOnHomeUtlities: Joi.number().optional(),
      cashBacOnkTVInternetStreamingServices: Joi.number().optional(),
      cashBackOnMovieTheaters: Joi.number().optional(),
      cashBackOnEntertainment: Joi.number().optional(),
      cashBackOnGroundTransportation: Joi.number().optional(),
      cashBackOnAllOther: Joi.number().required(),
    },
  },
  // PUT /api/credit-cards
  updateCreditCard: {
    body: {
      name: Joi.string().optional(),
      cashBackOnGasStations: Joi.number().optional(),
      cashBackOnGrocerieStores: Joi.number().optional(),
      cashBackOnRestaurants: Joi.number().optional(),
      cashBackOnAmazon: Joi.number().optional(),
      cashBackOnHomeUtlities: Joi.number().optional(),
      cashBacOnkTVInternetStreamingServices: Joi.number().optional(),
      cashBackOnMovieTheaters: Joi.number().optional(),
      cashBackOnEntertainment: Joi.number().optional(),
      cashBackOnGroundTransportation: Joi.number().optional(),
      cashBackOnAllOther: Joi.number().optional(),
    },
  },
};
