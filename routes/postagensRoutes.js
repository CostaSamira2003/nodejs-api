const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    //buscar postagem no banco de dados
    res.send('lista de postagens..')
});

router.post('/', (req, res) => {
    //enviar para banco de dados
    res.send('Adicionado com sucesso');
});

module.exports = router;