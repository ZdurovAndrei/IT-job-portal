var parser = require('./parser');
var massage = "No Content ";

parser.getData(function (err, result) {
    if (err) {
        console.log(err.message);
    }
    else {
        massage = result;
    }
});

function loadHomePage(req, res) {
    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
    res.write(JSON.stringify(massage));
    res.end();
}

exports.loadHomePage = loadHomePage;