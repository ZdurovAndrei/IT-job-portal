var request = require("request");
var http = require('http');
var cheerio = require("cheerio");
var mongoose = require('mongoose');
var AD = require('./AD');

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


            var text = $('')
            $("span.t_link").each(function () {
                var a = $(this).prev();
                //console.log(a.text());
                var rank = a.parent().parent().text();
                console.log(rank.toString());

                //var m = new AD({text1: title, text2: text});

                myData.push(rank);
                // title= null;

            });

            callback(null,myData);
        }
    });
};

module.exports.getData = getData;