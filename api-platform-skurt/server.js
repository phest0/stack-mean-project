const express = require("express"); //import du module "express" qui sert à créer l'application web
//npm install express --save et npm install nodemon --save ou -g
const app = express(); // initialisation du module express
const port = 3000;
app.set("port", port);
app.listen(port, function () {
    console.log("API running on localhost:" + port);
});

//on traite le cas des requêtes HTTP avec la méthode GET sur la route http://localhost:3000
app.get("/user", function (req, res) {
    console.log("request get on rout /user");
    res.send({
        message: "hello"
    })
});