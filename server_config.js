const express = require('express');
const bodyParser = require('body-parser');
const ip = "192.168.1.8";
const port = 5000;

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req,res,next){
	var remoteAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log(req.method+' '+req.originalUrl+' from '+remoteAddress);//log requests
	next();
});

var server = app.listen(port, function () {
  var port = server.address().port;
  var host = server.address().address;
  console.log('Listening at http://%s:%s', host, port);
});

exports.ip = ip
exports.port = port;
exports.app = app;