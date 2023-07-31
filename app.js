<<<<<<< HEAD
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

/* configuraciones */
app.use(express.static(path.join(__dirname,'public')));

/* rutas */
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','index.html')));
app.get('/carrito',(req,res) => res.sendFile(path.join(__dirname,'views','carrito.html')));
app.get('/productDetail',(req,res) => res.sendFile(path.join(__dirname,'views','productDetail.html')));
app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')));
app.get('/register',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')));
app.get('/header',(req,res) => res.sendFile(path.join(__dirname,'views','partials','header.html')));
app.get('/footer',(req,res) => res.sendFile(path.join(__dirname,'views','partials','footer.html')));
app.get('/*',(req,res)=> res.sendFile(path.join(__dirname,'/views/404.html')))



app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:' + PORT));
=======
const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;
app.use(express.static('public'));

app.get("",(req,res)=> res.sendFile(path.join(__dirname,"views","header.html")))
app.get("/carrito",(req,res)=> res.sendFile(path.join(__dirname,"views","carrito.html")))
app.get("/error",(req,res)=> res.sendFile(path.join(__dirname,"views","404.html")))

app.listen(PORT, () =>console.log("Server running in http://localhost:" + PORT));
>>>>>>> carrito
