const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;
app.use(express.static('public'));

app.get("",(req,res)=> res.sendFile(path.join(__dirname,"views","header.html")))
app.get("/carrito",(req,res)=> res.sendFile(path.join(__dirname,"views","carrito.html")))
app.get("/error",(req,res)=> res.sendFile(path.join(__dirname,"views","404.html")))

app.listen(PORT, () =>console.log("Server running in http://localhost:" + PORT));