var http = require("http");
var config = require('./config/config.json');

function start(route, handle){

    function onRequest(req, res){
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        route(handle, req ,res);
    }
    http.createServer(onRequest).listen(config);
}
console.log('Server is running');

exports.start = start;