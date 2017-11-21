const Koa = require('koa');
const logger = require('koa-logger');
const path = require('path');
const config = require('config');
const serve = require('koa-static');
const historyApiFallback = require('koa2-history-api-fallback');
const KoaBodyParser = require("koa-bodyparser");
const app = new Koa();

const isProd = process.env.NODE_ENV === 'production';

app.use(KoaBodyParser());
const router = require('./routes')(app);

if (!isProd) {
    app.use(async function (ctx, next) {
        let start = new Date;
        await next();
        let ms = new Date - start;
        console.log('%s %s - %s', ctx.method, ctx.url, ms);
    });
    app.use(logger());
}

app.on('error', function (err, ctx) {
    console.log('server error', err)
});
app.use(serve(path.resolve('static')));
app.use(serve(path.resolve('dist')));

app.use(router.routes()).use(router.allowedMethods());

app.use((ctx, next) => {
    ctx.type = 'application/json';
    ctx.status = 404;
    ctx.body = {status: 404, err: 'Page Not Found'};
});
app.use(historyApiFallback());
app.listen(config.server.port, () => {
    console.log('%s is listening in %d', config.app.name, config.server.port);
});

module.exports = app;
