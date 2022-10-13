const express = require('express')
//mysql é o nome de uma variável, pode ser qualquer coisa
//mysql parece mais intuitivo do que mysql2
const mysql = require('mysql2')
const app = express()
app.use(express.json())

app.post('/medicos', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'hospital',
        password: 'password'
    })
    const crm = req.body.crm
    const nome = req.body.nome
    const sql = "INSERT INTO medico (crm, nome) VALUES (" + crm
        + ", '" + nome + "')"
    connection.query(sql, (err, results, fields) => {
        console.log(results)
        console.log(fields)
        res.send('ok')
    })
})
app.get('/medicos', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'hospital',
        password: 'password'
    })
    connection.query('SELECT * FROM medico', (err, results, fields) => {
        res.json(results)
    })
})
app.get('/pacientes', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'hospital',
        password: 'password'
    })
    connection.query('SELECT * FROM paciente', (err, results, fields) => {
        res.json(results)
    })
})
const porta = 3000
app.listen(porta, () => console.log(`Executando. Porta ${porta}`))