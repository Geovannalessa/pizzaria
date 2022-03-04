const express = require('express');
const { listen } = require('express/lib/application');
const app = express();

app.get('/', (req, res) => {
    console.log('raiz rodando ºuº.. na porta 3000')
    res.send('Olá visitante')
})

app.listen(3000);