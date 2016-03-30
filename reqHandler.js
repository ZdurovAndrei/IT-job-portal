var parser = require('./parser');
var message = "No Content ";

parser.getData(function (err, result) {
    if (err) {
        console.log(err.message);
    }
    else {
        message = result;
    }
});

function loadHomePage(req, res) {
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
    res.write(JSON.stringify(message));
    res.end();
}

exports.loadHomePage = loadHomePage;