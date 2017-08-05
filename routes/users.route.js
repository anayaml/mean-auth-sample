const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const user = require('../models/user.model');

// criar novo admin
router.post('/register', (req, res, next) => {
    let newUser = new user({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });
    user.addUser(newUser, (err, user) => {
      if (err) {
        res.json({success: false, msg: 'Falha ao cadastrar usuário'});
      } else {
        res.json({success: true, msg: 'Usuário cadastrado com sucesso'});
      }
    })
});

// logar no sistema
router.post('/login', (req, res, next) => {
  res.send('login admin');
});

// admin dash
router.get('/profile', (req, res, next) => {
  res.send('admin profile');
});

module.exports = router;
