//Conexão com o banco e incia api
(async () => {
  const database = require('./todoList/db');
  const todoModel = require('./todoList/model/todoModel');
  await database.open();
  await todoModel.sync({ alter: true });

  const port = process.env.PORT || 3000;

  const cors = require('cors');
  const express = require('express');
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/', require('./todoList/controller/todoController'));
  app.listen(port, () => {
    console.info('Aplicação rodando!');
  });
})();
