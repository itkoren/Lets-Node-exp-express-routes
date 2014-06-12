var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.send("Express Welcome!");
});

router.get("/hello.text", function(req, res, next) {
    res.set("Express-Response", "Hello World");
    next();
});

router.get("/hello*", function(req, res) {
    res.send("Hello World (WIDE WEB)");
});

router.get("*", function(req, res) {
    res.send("Hello Express");
});

module.exports = router;