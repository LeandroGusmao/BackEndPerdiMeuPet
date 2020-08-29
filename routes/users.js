const express = require('express');
const router = express.Router();

//@TODO
/* ROTAS ABAIXO SOMENTE CRIADA PARA TESTES, NÃO FUNCIONAIS AINDA */

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Success GET in users'
    });
});

router.post('/', (req, res) => {
    res.status(201).send({
        message: 'Success POST in users'
    });
});

router.get('/:user_id', (req, res) => {
    const id = req.params.user_id;

    res.status(200).send({
        message: 'Id desejado',
        id: id,
    });
});

module.exports = router;