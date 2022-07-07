const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
    res.send("working fine");
});

app.listen(8000, function() {
    console.log("running fine at 8000");
});