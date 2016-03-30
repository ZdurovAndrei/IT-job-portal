var server = require('./server');
var router = require('./router');
var reqHandler = require('./reqHandler');

var handle = {};
handle['/'] = reqHandler.loadHomePage;
handle['/home'] = reqHandler.loadHomePage;

server.start(router.route, handle);