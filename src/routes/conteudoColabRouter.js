const { Router } = require('express');
const router = Router();
const { storeColabConteudo, getConteudosColab, getConteudosColabByID } = require('../controller/conteudoColabController');


router.post('/user/conteudo', storeColabConteudo);
router.get('/get/conteudo', getConteudosColab);
router.get('/get/conteudo/detalhes/:id', getConteudosColabByID);


module.exports = router;