const { users } = require('../utils/db');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'Email já existe' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: Date.now(),
    name,
    email,
    password: hashedPassword,
    isAdmin: false
  };

  users.push(user);

  res.status(201).json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);

  if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });

  const match = await bcrypt.compare(password, user.password);

  if (!match) return res.status(401).json({ error: 'Credenciais inválidas' });

  req.session.userId = user.id;

  res.json({ message: 'Login realizado' });
};