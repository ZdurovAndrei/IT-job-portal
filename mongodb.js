var mongoose = require('mongoose');
var ping = require('ping');
var parser = require('./parser1');
var Config = require('./tsconfig');
//var timerId = setInterval(function() {
var hosts = ['ds011890.mlab.com'];
hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        console.log('Ping to database: ' + isAlive);
    });
});

mongoose.connect(Config.link);
var Schema = mongoose.Schema;
var links = new Schema({ link: String});
var Link = mongoose.model('Link', links);
var async = require('async'),tasksIndex = [
    function(callback){
        Link.remove({result : String}, function(err){
            if(err) return handleError(error);
            console.log("Data from databases removed!");
            callback(null, 1)
        });
    }
    ,function(callback){
        parser.getData(function(errData, resultData) {
           for(var i = 0; i < resultData.length; i++) {
               var linksb = new Link({
                   link: resultData[i].link
               });
               linksb.save();
            }
            console.log("Data is recorded");
            callback(null, 1);
        })
    }
];
async.series(tasksIndex, function(err, result){
   if(result[0] == 1){
       console.log("Actual information");
   }
    else{
        result[1];
        result[2];
    }
});

//Чтение из базы

//Вывод однго блока
//Title.collection.findOne({result : String}, function(err, document) {
    //console.log(document.titleArticle + '\n' + document.subArticle + '\n' + document.link);
//});
//Вывод всей информации
// Title.find({result : String}, function(err, document) {
//     try {
//         console.log("Links: \n");
//         for (var i = 0; i < 19; i++) {
//             //console.log(document[i].link);
//         }
//     }
//     catch(err){
//         console.log("No Titles");
//     }
// });
//}, Config.Time);