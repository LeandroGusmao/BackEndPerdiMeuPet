const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');


function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret,  {
        expiresIn: 86400,
    });
}

router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'E-mail já cadastrado' });

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ 
            user,
            token: generateToken({id: user.id}),
         });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password'); // .select + password pois a condição na model está para não trazer o passsword em select

    if (!user)
        return res.status(400).send({ error: 'Usuário não encontrado ' });

    if (!await bcrypt.compare(password, user.password)) //Comparando se senha usado para login é a mesma senha salva no banco de dados
        return res.status(400).send({ error: 'Senha inválida' });

    user.password = undefined;


    res.send({ 
        user, 
        token: generateToken({ id: user.id}),
     });
});

module.exports = app => app.use('/auth', router);   // Passando '/register' para o app com o prefixo '/auth/regis...'