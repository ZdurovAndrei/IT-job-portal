var request = require("request");
var cheerio = require('cheerio');
var Config = require('./tsconfig');

//var timerId = setInterval(function() {

Url = "http://www.015.by/job/vacancy/1";
var Data = [];
var getLinks = function(callback) {
    request(Url, function (error, response, body) {
        if (!error) {
            var $ = cheerio.load(body);
            $('.t_link > a').each(function () {
                var href = $(this).attr('href');
                Data.push({
                    link: "http://www.015.by" + href
                });
            });
        } else {
            console.log(error);
        }
        // callback(null, getLinks());
    });
};

getLinks(function (err, rez) {
    if (err) {
        console.log(err.message);
        return;
    }
    getInfo();
});
module.exports.getLinks = getLinks;

var pageInfo = [];
function getInfo() {
    if (Data.length === 0) {
        return;
    }
    console.log('Запрос: ' + Data.length);
    var next = Data.shift();

    pageInfo.push({link: next.link});
    makeRequest(next.link, getInfo);
}

function makeRequest(url, callback) {
    request(url, function (err, response, body) {
        console.log(url);
        var textString = '';
        var $ = cheerio.load(body);
        $('.container-margin p').each(function () {
            var link = $(this);
            var text = link.text().replace(/^\s+|\s+$/g, '');
            if (text !== '') {
                console.log(text);
                textString += text;
            }
        });
        pageInfo.push({
            text: textString
        });
        callback();
    });
}


//}, Config.Time);