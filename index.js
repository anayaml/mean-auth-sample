const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const users = require('./routes/users.route');

const app = express();
const port = 3000;

// mongo conexão
mongoose.connect(config.database);

// CORS middleware
app.use(cors());

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// BodyParser  middleware
app.use(bodyParser.json());

app.use('/users', users);

app.listen(port);
