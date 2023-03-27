let express = require('express');

let app = express();
console.log("Hello World");

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.use("/",(req,res)=>{
    res.sendFile(__dirname+"/public/style.css")
})










 module.exports = app;
