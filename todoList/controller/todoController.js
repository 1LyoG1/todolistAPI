const express = require('express');
const router = express.Router();

router.get('/todolist', async (req, res) => {
  //
  try {
    const todoModel = require('../model/todoModel');
    const result = await todoModel.findAndCountAll();
    res.send(result);
  } catch (err) {
    return err;
  }
});

router.post('/createtodo', async (req, res) => {
  console.log(req.body);
  try {
    const todoModel = require('../model/todoModel');
    const result = await todoModel.create({
      userId: req.body.userId,
      name: req.body.name,
    });
    res.send(result);
  } catch (err) {
    res.send(err + 'error');
  }
});

module.exports = router;
