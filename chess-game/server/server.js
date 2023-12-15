// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const users = [];

const corsOptions = {
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  exposedHeaders: 'Authorization',
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/login', (req, res) => {
  res.send({
    users,
  });
});
app.post('/login', (req, res) => {
  const requestBody = req.body;
  users.push({
    email: requestBody.email,
    password: requestBody.password,
  });

  res.setHeader('Content-Type', 'application/json');
  res.status(201).json({
    email: requestBody.email,
    password: requestBody.password,
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
