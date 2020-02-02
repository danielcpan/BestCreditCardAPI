const mongoose = require('mongoose');

const CreditCard = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cashBackOnGasStations: {
    type: Number,
    default: 0,
  },
  cashBackOnGrocerieStores: {
    type: Number,
    default: 0,
  },
  cashBackOnRestaurants: {
    type: Number,
    default: 0,
  },
  cashBackOnAmazon: {
    type: Number,
    default: 0,
  },
  cashBackOnHomeUtlities: {
    type: Number,
    default: 0,
  },
  cashBacOnkTVInternetStreamingServices: {
    type: Number,
    default: 0,
  },    
  cashBackOnMovieTheaters: {
    type: Number,
    default: 0,
  },
  cashBackOnEntertainment: {
    type: Number,
    default: 0,
  },
  cashBackOnGroundTransportation: {
    type: Number,
    default: 0,
  },
  cashBackOnAllOther: {
    type: Number,
    default: 0,
    required: true,
  },
}, {
  timestamps: true,
});

// Consider this for optimzations where comptued rating is not needed
// CreditCard.statics.list = function(finding, skipping, limiting, sorting) {
//   const defaultFind = { ratingCount: { $gte: 1000}}
//   const defaultSelect = [
//     'author',
//     'titleMain',
//     'titleSub',
//     'cookTimeMins',
//     'servings',
//     'calories',
//     'thumbnailUrl',
//     'ratingCount',
//     'ratingValue',
//     'createdAt'
//   ]
//   // const defaultSort = [[{'ratingCount': 1, 'ratingValue': 1}]]
//   const defaultSort = [['ratingCount', -1], ['ratingValue', -1]]

//   return this.find({...defaultFind, ...finding})
//     .select([...defaultSelect])
//     .skip(skipping || 0)
//     .limit(limiting || 100)
//     // .sort([...defaultSort, ...sorting,]);
//     .sort([...defaultSort]);
// }

// CreditCard.statics.list = async function (matching, skipping, limiting, sorting) {
//   const defaultProject = {
//     author: 1,
//     titleMain: 1,
//     titleSub: 1,
//     cookTimeMins: 1,
//     servings: 1,
//     calories: 1,
//     description: 1,
//     thumbnailUrl: 1,
//     ingredientsImageUrl: 1,
//     ingredients: 1,
//     instructions: 1,
//     ratingCount: 1,
//     ratingValue: 1,
//     cookedCount: 1,
//     isFeatured: 1,
//     createdAt: 1,
//   };

//   const recipes = await this.aggregate([
//     { $match: { ...matching } },
//     { $project: { ...defaultProject, ratingScore: { $multiply: ['$ratingCount', '$ratingValue'] } } },
//     // { $project: { ratingScore: { $multiply: ['$ratingCount', '$ratingValue']} }},
//     { $sort: { ...sorting, ratingScore: -1 } },
//     { $skip: skipping || 0 },
//     { $limit: limiting || 15 },
//     { $project: { ratingScore: 0 } },
//     // { $group:{ _id: null, ids:{ $push:"$_id" }}}
//   ]);

//   return recipes;
// };

module.exports = mongoose.model('CreditCard', CreditCard);
