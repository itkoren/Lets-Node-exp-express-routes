var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.send("Express Welcome!");
});

router.get("/hello.text", function(req, res) {
    res.send("Hello World");
    res.end("(WIDE WEB)");
});

router.get("/contact", function(req, res) {
    res.render("contact");
});

router.get("*", function(req, res) {
    res.end("Hello Express");
});

module.exports = router;