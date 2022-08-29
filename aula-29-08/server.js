const http = require('http');
const express = require('express');

const app = express();
const porta = 3000;

app.set('port', porta);
app.get("/unidades", (req, res, next)=> {
res.send("Olá, sejá vem vindo")
});

const server = http.createServer(app)
server.listen(3000)

console.log("Server executando na porta" + porta)