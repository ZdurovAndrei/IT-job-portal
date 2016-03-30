var mongoose = require('mongoose');
mongoose.connect('mongodb://Kniaz123:dPHJrl7S@ds011890.mlab.com:11890/databaseitportal');

var Schema = mongoose.Schema;

var titleSchema = new Schema({
    titleArticle: String,
    subArticle: String,
    link: String
});

var Title = mongoose.model('Title', titleSchema);

    var title1 = new Title({
        titleArticle: "test1",
        subArticle: "test2",
        link: "test3"
    });
    title1.save();

Title.collection.findOne({result : String}, function(err, document) {
    //console.log(document.titleArticle + ' ' + document.subArticle + ' ' + document.link);
});