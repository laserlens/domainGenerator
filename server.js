//modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const request = require('request');

//routes

//use of modules
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//use of routes


app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

//for developing use
app.listen(3000);

//This code listen for any open port if none go to 3000
// var port = process.env.PORT || 3000;
//
// var server = app.listen(function() {
//     console.log('Listening on port', server.address().port);
// });
