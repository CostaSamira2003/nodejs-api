const express = require('express');


const app = express();


app.get('/', (req, res) => {
    res.send('<h1> App Online! </h1>');
});


app.listen(3000, () => console.log('Servidor online na porta 3000'));
