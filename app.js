// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas (exemplo)
app.get('/', (req, res) => {
  res.send('API está rodando!');
});

// Importe suas rotas aqui
// const usuarioRoutes = require('./routes/usuarioRoutes');
// app.use('/usuarios', usuarioRoutes);

// Inicie o servidor
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});