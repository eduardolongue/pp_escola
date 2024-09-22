//vai gerenciar nossas rotas
const { Router } = require('express');
//estancia o router
const router = Router();
const { storeUser } = require('../controller/usersController');


//usado para chamar do front
router.post('/user/create', storeUser);

//exporta o noss router
module.exports = router;

