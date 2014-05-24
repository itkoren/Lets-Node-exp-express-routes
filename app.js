var http = require("http");
var express = require("express");
var routes = require("./routes");

var app = express();

app.set("port", process.env.PORT || 8000);

//app.use("/", routes);

app.get("/", function(req, res) {
 res.send("Express Welcome!");
});

app.get("/hello.text", function(req, res) {
 res.send("Hello World");
 res.end("(WIDE WEB)");
});

app.get("/contact", function(req, res) {
 res.render("contact");
});

app.get("*", function(req, res) {
 res.end("Hello Express");
});

var server = http.createServer(app).listen(app.get("port"), function(){
 console.log("Express Server listening on port", server.address().port);
});