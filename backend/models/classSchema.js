var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var People = new Schema({
    
    fullName : {
        type: String,
        required : true
    },
    
    age : {
        type : Number,
        required: true
    },
    
    absentTimes : {
        type: Number,
        required : true
    },
    
    level : {
        type : Number,
        enum : [1, 2, 3],
        required: true
    },
    
    gender : {
        type : String,
        enum : ["male", "female"]
    },
    
    didIqTest : {
        type : Boolean,
        required : true
    },
    
    hobbies : {
        type: [String],
        require: true
    },
    
    studies : {
        type : [String],
        required : true
    },
    nationality: {
        type: "String",
        required : true
    },
    idNum : {
        type : Number,
        required: true
    }
    
});

module.exports = mongoose.model("Vschool", People);