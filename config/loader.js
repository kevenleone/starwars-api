var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign')
var multipart = require('connect-multiparty')
var app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({limit: '50mb', extended: true}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-type");
    res.setHeader("Access-Control-Allow-Credentials", false);
    next();
});

app.use(multipart())

consign()
    .include('config/database.js')
    .then('src/Routes')
    .then('src/Models')
    .into(app)
    
module.exports = app;