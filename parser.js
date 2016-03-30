var request = require("request");
var http = require('http');
var cheerio = require("cheerio");

var options = {
    url: 'http://www.015.by/job/vacancy/1',
    method: 'GET'
};
var getData = function(callback) {
    request(options, function (error, response, body) {
        if (error) {
            callback(error, null);
        }
        else {
            var myData = [];
            var $ = cheerio.load(body);
            
            $(".work_content").each(function () {
                var title = $(".t_link a").attr('href');

                myData.push({
                    title: title
                });
            });

            callback(null, myData);
        }
    });
};

module.exports.getData = getData;