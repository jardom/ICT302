// index.js
// author: JARDOM

"use strict";

var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

var handle = {};

handle["/"]                 = requestHandler.reqStart;
handle["/start"]            = requestHandler.reqStart;
handle["/ajaxRequests.js"]  = requestHandler.reqAjax;
handle["/css/bootstrap.css"] = requestHandler.reqGetStylesheet;
handle["/img/FBS_logo.png"] = requestHandler.getLogonImage;

server.runServer(router.route, handle);
