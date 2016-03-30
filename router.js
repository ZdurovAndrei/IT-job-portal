var url = require("url");

function route(handle, req, res){
    var urlParts = url.parse(req.url, true);
    if (typeof handle[urlParts.pathname] === 'function') {
        handle[urlParts.pathname](req, res);
    } else {
        res.statusCode = 404;
        res.end("Error. Page not found");
    }
}
exports.route = route;