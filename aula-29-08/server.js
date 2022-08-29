const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const porta = 3000;
app.set('port', porta);
app.use(bodyParser.json())

const alunos = [
    {
        id: 1,
        nome: 'James Silva',
        email: 'james@email.com'
    },
    {
        id: 2,
        nome: 'Vinicius Salvador',
        email: 'vinicius@email.com'
    },
    {
        id: 3,
        nome: 'Lucas Oliveira',
        email: 'lucas@email.com'
    },
    {
        id: 4,
        nome: 'Victor Ivo',
        email: 'victor@email.com'
    },
    {
        id: 5,
        nome: 'Rafael Ruman',
        email: 'rafael@email.com'
    }

]


app.get("/", (req, res, next)=> {
    res.send("Olá, sejá vem vindo")
});

app.get('/alunos', (req, res, next) =>{
    res.json(alunos)
});

app.post('/alunos', (req, res, next) => {
let contador = 5
const aluno = req.body;
alunos.push({id: contador +=1, nome:aluno.nome, email:aluno.email})
console.log(alunos)
res.status(201).json(alunos)
});

const server = http.createServer(app)
server.listen(3000)

console.log("Server executando na porta " + porta)