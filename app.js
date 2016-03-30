var server = require('./server');
var router = require('./router');
var reqHandler = require('./reqHandler');
var mognodb = require('./mongodb');

var handle = {};
handle['/'] = reqHandler.loadHomePage;
handle['/home'] = reqHandler.loadHomePage;

server.start(router.route, handle);
