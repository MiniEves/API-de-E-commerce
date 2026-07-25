const { users } = require('../utils/db');

exports.requireAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Não autenticado' });
  }
  next();
};

exports.requireAdmin = (req, res, next) => {
  const user = users.find(u => u.id === req.session.userId);

  if (!user || !user.isAdmin) {
    return res.status(403).json({ error: 'Acesso negado' });
  }

  next();
};