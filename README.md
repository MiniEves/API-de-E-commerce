🛒 Ecommerce API

API REST de e-commerce desenvolvida com Node.js e Express, organizada de forma modular e pronta para evoluir para um projeto completo.

✨ Funcionalidades

👤 Cadastro e listagem de usuários

🛍️ Listagem e detalhes de produtos

🛒 Gerenciamento de carrinho

📦 Criação e listagem de pedidos

⭐ Sistema de avaliações

🔐 Middleware de autenticação (simulado)


🧱 Estrutura

ecommerce-
api/

│

├── routes/

├── controllers/

├── middlewares/

├── utils/

├── server.js

└── package.json

⚙️ Instalação
git clone (https://github.com/MiniEves/API-de-E-commerce.git)
cd ecommerce-api
npm install

▶️ Rodando o projeto
npm start

Modo desenvolvimento:

npm run dev

📍 Acesse: http://localhost:3000

🔗 Endpoints
Usuários
GET /users
POST /users
Produtos
GET /products
GET /products/:id
Carrinho
GET /cart
POST /cart
DELETE /cart/:id
Pedidos
POST /orders
GET /orders
Avaliações
POST /reviews
GET /reviews

🧪 Observações
Dados são armazenados em memória (utils/db.js)
Reiniciar o servidor limpa os dados
Projeto focado em aprendizado

🚀 Tecnologias
Node.js
Express
JavaScript

📌 Próximos passos
Banco de dados (MongoDB/PostgreSQL)
Autenticação com JWT
Testes automatizados

Deploy
📄 Licença
Uso livre para fins educacionais.

Uso livre para fins educacionais.
