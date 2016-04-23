"use strict";

// AIM FBS server 
// author: Jardom
var http = require('http'); // import http module
var url  = require('url');  // import url module

process.env.TMPDIR = '/tmp';

function runServer(route, handle)
{
	http.createServer(function (request, response) {
		var pathname = url.parse(request.url).pathname; // get pathname from requested source
		console.log("Request for " + pathname + " received.");
		route(pathname, handle, response, request);
	}).listen(41657);

	console.log('Server running at: http://localhost:41657');
	console.log('Process ID: ', process.pid);

	console.log("Server has started");

}

// exports the runServer function
exports.runServer = runServer;
