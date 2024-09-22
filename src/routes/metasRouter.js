const { Router } = require('express');
const router = Router();
const { storeMeta, getMetas} = require('../controller/metasController');


router.post('/user/meta', storeMeta);
router.get('/get/metas', getMetas);


module.exports = router;

