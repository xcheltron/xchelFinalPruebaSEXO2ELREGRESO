const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', 3000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get('/users', (req, res) => res.send('users routes'))
app.get('/notes', (req, res) => res.send('notes routes'))


module.exports = app;