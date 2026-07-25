const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const usersRoutes = require('./routes/user');
const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const ordersRoutes = require('./routes/orders');
const reviewsRoutes = require('./routes/reviews');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(session({
  secret: 'secret123',
  resave: false,
  saveUninitialized: true
}));

app.use(logger);

app.use('/api/users', usersRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api', reviewsRoutes);

app.use(errorHandler);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));