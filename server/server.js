const express = require('express');
const bodyParser = require('body-parser');

var dao = require("./data_access");
const{MongoClient} = require("mongodb");
var url = "mongodb://localhost:27017/swapi";
const client = new MongoClient(url);
const app = express();
app.use(express.json());
app.use(bodyParser.json());
const port = 3000;
console.log("server starting on port: " + port);
app.get("/api/planets",function(re,res){
    res.send("test");
});
app.listen(port);