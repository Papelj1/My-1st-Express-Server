const express = require("express");

const app = express();

app.get("/", function (request, response) {
    response.send("broCira ape");
});
// "Expressova" metoda koja nam omogucuje da namestimo sta ce da se desi kada browser get in tocuh sa server i trazi get request
app.get("/contact", function (request, response) {
    response.send("<h1> NADUVAJ MI SE QRCINE</h1");
});

app.get("/bio", function (request, response) {
    response.send("<h1> This is my bio, welcome </br> Name: Stefan </br> Surname: Ristic </br> Age: 23 </br> Cock Size: 22cm");
});


app.listen(3000); // Funkcija Listen trazi port 3000 

console.log("server started on port 3000");