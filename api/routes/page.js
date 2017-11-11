const KoaRouter = require('koa-router');
const router = KoaRouter();
const page = require('../controllers/page.js');

router.get('/view/:slug', page.view);

module.exports = router;
