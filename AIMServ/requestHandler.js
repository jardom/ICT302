// requestHandler.js
// author: Jardom

"use strict";

var fs = require("fs");

function reqStart(response) {
	console.log("Request handler 'start' was called.");

	fs.readFile("web_files/index.html", function (err, data) {
		if(err) console.log(err);
		response.writeHead(200, {'Content-Type': 'text/html', 'Content-Length':data.length});
		response.write(data);
		response.end();
	});
}

function reqAjax(response) {
	console.log("Request handler 'ajaxRequests.js' was called.");
	
	fs.readFile("clientScript/ajaxRequests.js", function(err, data) {
		if(err) console.log(err);
		response.writeHead(200, {"Content-Type": "text/javascript"});
		response.write(data);
		response.end();
	});
}

function reqGetStylesheet(response) {
        console.log("Request handler 'stylesheet.css' was called.");

        fs.readFile("web_files/css/bootstrap.css", function(err, data) {
                if(err) console.log(err);
                response.writeHead(200, {"Content-Type": "text/css"});
                response.write(data);
                response.end();
        });
} 

function getLogonImage(response) {
        console.log("Request handler 'title image' was called.");

        fs.readFile("web_files/img/FBS_logo.png", function(err, data) {
                if(err) console.log(err);
                response.writeHead(200, {"Content-Type": "image/png"});
                response.write(data);
                response.end();
        });
} 

exports.reqStart            = reqStart;
exports.reqAjax             = reqAjax;
exports.reqGetStylesheet    = reqGetStylesheet;
exports.getLogonImage = getLogonImage;
