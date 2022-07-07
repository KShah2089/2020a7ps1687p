/*************              JQUERY PRACTICE                 **************/
/*

function func() {
    var inp = $("#input").value;
    alert(inp);
}

$("button").click(function() {
    alert("uot");
});

*/

/*************              NodeJs PRACTICE                 **************/

const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
    
    // what happens at the '/' home page
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Trivandrum&appid=fd0c38017d02f42a4f3167269724dc69";
    https.get(url, function(response) {
        console.log(response)
    })
    
    res.send("now updated");
});

app.listen(3000, function() {
    console.log("Server is running at port 3000.");
});