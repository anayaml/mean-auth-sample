const express = require('express');
const router = express.Router();

// criar novo admin
router.get('/register', (req, res, next) => {
  res.send('new admin');
});

// logar no sistema
router.post('/login', (req, res, next) => {
  res.send('login admin');
});

// admin dash
router.get('/validate', (req, res, next) => {
  res.send('validate token');
});


module.exports = router;
