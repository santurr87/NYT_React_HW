// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//setting var to app to use below
var app = express();
//our listener
var PORT = process.env.PORT || 3000;

//running morgan for logging -- lots of apps have morgan as a dependency
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

//below we have code to connect to and set up our db

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// get request from db
app.get("/", function(req, res) {
  res.sendFile("../public/index.html");
});

//this route we will send post requests to save each search
app.post("/api/saved", function(req, res) {
//creating new article
  var newArticle = new Article({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
  });
//creating save function
  newArticle.save(function(err, doc){
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.json(doc);
    }
  });
});
//creating a delete function
app.delete('/api/saved/:id', function(req, res){

  Article.find({'_id': req.params.id}).remove()
    .exec(function(err, doc) {
      res.send(doc);
  });

});

//localhost listener when we run file
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
