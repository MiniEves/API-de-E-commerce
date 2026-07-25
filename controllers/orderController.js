const { carts, orders, products } = require('../utils/db');

exports.checkout = (req, res) => {
  const userId = req.session.userId;
  const cart = carts.find(c => c.userId === userId);

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ error: 'Carrinho vazio' });
  }

  let total = 0;

  const items = cart.items.map(item => {
    const product = products.find(p => p.id === item.productId);
    total += product.price * item.quantity;
    return item;
  });

  const order = {
    id: Date.now(),
    userId,
    items,
    total
  };

  orders.push(order);
  cart.items = [];

  res.json(order);
};