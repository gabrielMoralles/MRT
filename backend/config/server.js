const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
	origin: 'https://gabrielmoralles.github.io/MRT/',
	optionsSuccessStatus: 200
};

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

consign().include('app/routes').then('config/dbConnection.js').then('app/models').then('app/controllers').into(app);

module.exports = app;
