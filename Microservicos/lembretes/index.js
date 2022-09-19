const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
const lembretes = {};
var contador = 0; 

app.get('/lembretes', (req, res) =>{
    res.send(lembretes);

});

app.put('/lembretes', (req, res) => {
    contador++;
    const{texto} = req.body;
    lembretes[contador] = {
        contador, texto
    }
    res.send(201).send(lembretes[contador])

});

app.listen(4000, () =>{
console.log('Microserviço de lembretes executando na porta 4000')
});