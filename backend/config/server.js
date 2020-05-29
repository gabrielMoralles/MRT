const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
	origin: 'http://ec2-54-233-179-45.sa-east-1.compute.amazonaws.com:4200',
	optionsSuccessStatus: 200
};

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

consign().include('app/routes').then('config/dbConnection.js').then('app/models').then('app/controllers').into(app);

module.exports = app;
