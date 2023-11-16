const express = require('express');
const app = express();

//rotas
app.get('/', function(rec, res){
    res.send('Página principal')
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: localhost:8080')
});