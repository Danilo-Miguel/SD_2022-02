const express = require ('express')
//mysql é o nome de uma variável, pode ser qualquer coisa
//mysql parece mais intuitivo do que mysql2
const mysql = require('mysql2')
const app = express()
app.use(express.json())
app.get('/medicos', (req, res) => {
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
database: 'hospital',
password: 'password'
})
connection.query('SELECT * FROM medico', (err, results, fields) => {
//results tem as linhas
//fields tem meta dados sobre os resultados, caso estejam disponível
res.send(results)
res.send(fields)
res.send('ok')
})
})
const porta = 3000
app.listen(porta, () => console.log(`Executando. Porta ${porta}`))