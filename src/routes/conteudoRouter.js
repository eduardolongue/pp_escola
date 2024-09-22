const { Router } = require('express');
const router = Router();
const { storeConteudo, getConteudos, getConteudosByID } = require('../controller/conteudoController');


router.post('/user/conteudo', storeConteudo);
router.get('/get/conteudo', getConteudos);
router.get('/get/conteudo/detalhes/:id', getConteudosByID);


module.exports = router;

