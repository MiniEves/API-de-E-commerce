const { products } = require('../utils/db');

exports.getAll = (req, res) => {
  let result = [...products];

  const { category, minPrice, maxPrice, search } = req.query;

  if (category) result = result.filter(p => p.category === category);
  if (minPrice) result = result.filter(p => p.price >= Number(minPrice));
  if (maxPrice) result = result.filter(p => p.price <= Number(maxPrice));
  if (search) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json(result);
};

exports.create = (req, res) => {
  const product = { id: Date.now(), ...req.body };
  products.push(product);

  res.status(201).json(product);
};