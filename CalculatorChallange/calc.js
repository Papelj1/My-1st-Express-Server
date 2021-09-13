const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var rez = num1 + num2;
    res.send("Rez je" + rez);
});

app.get("/bmicalc", function (req, res) {
    res.sendFile(__dirname + "/bmicalc.html");
});
app.post("/bmicalc", function (req, res) {
    var bmW = Number(req.body.bmW);
    var bmH = Number(req.body.bmH);
    var rez2 = Math.floor(Number(bmW/Math.pow(bmH/100, bmH/100)));
    res.send("Vas BMI je " + rez2);
});







app.listen(3001, function () {
    console.log("Server is running on port 3001");
});