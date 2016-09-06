var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");
var port = process.env.PORT || 8000;
var school = require("./routes/schoolRoutes");

app.use(bodyParser.json());
app.use(morgan("dev"));


//app.get("/" function(req, res){
//   res.send("it worked!!");
//});


mongoose.connect("mongodb://localhost/vschool", function(){
    console.log("connected to database");
    
});


app.use("/vschool", school);
app.use(express.static("../frontend"));

app.listen(port, function(){
    console.log("Your server is running on port " + port);
})