const { reviews } = require('../utils/db');

exports.create = (req, res) => {
  const review = {
    id: Date.now(),
    productId: req.params.productId,
    userId: req.session.userId,
    rating: req.body.rating,
    comment: req.body.comment
  };

  reviews.push(review);

  res.status(201).json(review);
};

exports.getByProduct = (req, res) => {
  const result = reviews.filter(r => r.productId == req.params.productId);
  res.json(result);
};