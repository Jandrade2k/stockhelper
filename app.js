const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API está rodando!');
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
