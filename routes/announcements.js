const express = require('express');
const router = express.Router();

//@TODO
/* ROTAS ABAIXO SOMENTE CRIADA PARA TESTES, NÃO FUNCIONAIS AINDA */

//RETORNA TODOS ANUNCIOS
router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Return the announcements'
    });
});

//INSERE UM ANUNCIO
router.post('/', (req, res) => {
    res.status(201).send({
        message: 'Create announcements'
    });
});

//RETORNA OS DADOS DE UM ANUNCIO
router.get('/:announcement_id', (req, res) => {
    const id = req.params.announcement_id;

    res.status(200).send({
        message: 'Return unique id search',
        id: id,
    });
});

// ALTERA UM ANUNCIO
router.patch('/', (req, res) => {
    res.status(201).send({
        message: 'Alter announcements'
    });
});

// DELETA UM ANUNCIO
router.delete('/', (req, res) => {
    res.status(201).send({
        message: 'DELETE announcements'
    });
});


module.exports = router;