const express = require('express')
const app = express();
const lembretes = {};
app.get('/lembretes', (req, res) =>{

});

app.put('/lembretes', (req, res) => {

});

app.listen(4000, () =>{
console.log('Microserviço de lembrestes executando na porta 4000')
});