const http = require('http'); // Criando serviço http.
const port = process.env.PORT || 3000;  // Definindo porta padrão
const app = require('./app'); // Importando app.js
const server = http.createServer(app); // Criando servidor com nosso app.js

server.listen(port);