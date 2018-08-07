/**
 * Created by howard on 30-10-2017.
 */
module.exports = {
    app: {
        name: 'Koa2Vue2',
        version: '0.0.1'
    },
    server: {
        port: process.env.NODE_APP_INSTANCE || 6699
    },
    lang: 'ru',
    worker: process.env.NODE_WORKER_NAME,
    mongodb: {
        url: 'mongodb://localhost:27017',
        ip: '127.0.0.1',
        port: 27017,
        options: {
            server: {
                socketOptions: {
                    socketTimeoutMS: 0,
                    keepAlive: true
                },
                reconnectTries: 3
            },
        }
    },
};
