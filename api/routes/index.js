/* eslint-disable consistent-return */
const router = require('koa-router')();
const mobileDetect = require('mobile-detect');
const View = require('../helpers/view');
const isProd = process.env.NODE_ENV === 'production';
const page = require('./page.js');

router.use(page.routes());

module.exports = function (app) {
    // create vue renderer instance
    const view = new View(app);

    /**
     * Custom renderer
     * @param ctx
     * @param next
     * @returns {Promise.<void>}
     */
    async function render(ctx, next) {
        ctx.type = 'html';

        const {PassThrough} = require('stream');
        ctx.body = new PassThrough();

        if (!view.renderer) {
            ctx.body.end('waiting for compilation... refresh in a moment.');
            return
        }

        function handleError(error) {
            if (error.url) {
                return ctx.redirect(error.url)
            } else if (error.code === 404) {
                ctx.status = 404;
                ctx.body.end('404 Page Not Found')
            } else {
                // Render Error Page or Redirect
                ctx.status = 500;
                ctx.body.end('500 Internal Server Error');
                console.error(`error during render : ${ctx.url}`);
                console.error(`error : ${error}`);
            }
        }

        function handleEnd(content) {
            ctx.body.end(content)
        }

        try {
            const md = new mobileDetect(ctx.headers['user-agent']);
            const context = {
                title: 'Koa2 Vue StarterKit',
                url: ctx.url,
                user: ctx.user,
                isMobile: !!md.mobile()
            };
            const content = await view.render(context);
            handleEnd(content)
        } catch (error) {
            handleError(error)
        }
    }

    // For none API routes we should render page content
    router.get(/^(?!\/api)(?:\/|$)/, isProd ? render : (ctx, next) => {
        view.ready.then(() => render(ctx, next))
    });

    return router
};
