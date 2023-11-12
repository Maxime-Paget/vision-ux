const express = require('express');
const router = require('./src/router/index');
require('dotenv').config();

const app = express();

app.use(router);
app.use(express.static('public'));

app.listen(process.env.PORT || 80);