var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema =  new Schema({
    text1: {
        type: String,
        required: true
    },
    text2: {
        type: String,
        required: true
    },
    text3: {
        type: String,
        //required: true
    },
    text4: {
        type: String

    }
});
var AD = new function (text1,text2){

    this.text1 = text1;
    this.text2 = text2;
    return AD;
};

exports.AD = mongoose.model('AD',schema);