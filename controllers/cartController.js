const { carts } = require('../utils/db');

exports.add = (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.session.userId;

  let cart = carts.find(c => c.userId === userId);

  if (!cart) {
    cart = { userId, items: [] };
    carts.push(cart);
  }

  const item = cart.items.find(i => i.productId === productId);

  if (item) {
    item.quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  res.json(cart);
};