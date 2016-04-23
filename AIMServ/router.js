"use strict"
// author: Jardom

function route(pathname, handle, response, request) {

	console.log("About to route a request for " + pathname);

	if(typeof handle[pathname] === 'function') {
		handle[pathname](response, request); // call appropriate function
	} else {
		console.log("No request handler found for: " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("Resource not found!");
		response.end();
	}
}

// exports the route function
exports.route = route;
