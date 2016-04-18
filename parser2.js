/**
 * Created by Андрей on 018 18.04.16.
 */
var request = require("request");
var cheerio = require('cheerio');
var Config = require('./tsconfig');

//var timerId = setInterval(function() {

// Url = "http://www.015.by/job/vacancy/1";
var getData = function(callback) {
    var Data = [];
    request(Url, function (error, response, body) {
        if (!error) {
            var $ = cheerio.load(body);
            $('.t_link > a').each(function () {
                var href = $(this).attr('href');
                Data.push({
                    link: href
                });
            });
        } else {
            console.log(error);
        }
        callback(null, Data);
    });
};
module.exports.getData = getData;



//}, Config.Time);