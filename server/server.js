const express = require("express");
const api = require('./routes/api');
const auth = require('./routes/auth');
const express_jwt = require('express-jwt');
const bodyParser = require("body-parser");
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();


const app = express();

const jwtCheck = express_jwt({
    secret: process.env.JWT_KEY
});


//TODO: fix this crap
app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(express.static(path.resolve(__dirname, '../client/assets')));

app.use(bodyParser.json());
app.use('/api/', api);
app.use('/auth/', auth);

app.get('/*', (req, res) => res.sendFile(path.resolve('client/index.html')));

app.listen(process.env.PORT);

console.log('Running at Port 3000');