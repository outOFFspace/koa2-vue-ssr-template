const KoaRouter = require('koa-router');
const router = KoaRouter();
const page = require('../controllers/page.js');

router.get('/:slug.html', page.view);
router.get('/page/contacts', page.contacts);

module.exports = router;
