var express = require('express');
const scoop_controlers= require('../controllers/scoop');
var router = express.Router();
/* GET costumes */
router.get('/', scoop_controlers.scoop_view_all_Page );
/* GET detail costume page */
router.get('/detail', scoop_controlers.scoop_view_one_Page );
/* GET create costume page */
router.get('/create', scoop_controlers.scoop_create_Page);
module.exports = router;