const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');


app.get('/', (req, res) => {

    const numero = parseInt(req.query.tabuada) || 1;
    const sequencia = parseInt(req.query.sequencia) || 10;


    const resultados = [];
    for (let i = 0; i <= sequencia; i++) {
        resultados.push({ multiplicador: i, resultado: numero * i });
    }


    res.render('tabuada', { numero, sequencia, resultados });
});

app.get("tabuada")

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
