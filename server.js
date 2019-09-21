//Montamos la app en heroku y necesitamos estas lineas de codigo

const express = require("express");
const path= require('path');

//Aqui  declaramos port y le decimos qe de manera local usemos el puerto 8080

const port = process.env.PORT || 8080;
const app = express();


app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));


app.get("/*", function (req, res){
  res.sendFile(path.join(__dirname, "build", "index.html"))
});

app.listen(port, function (){
  console.log("Listening port: " + port);
});
