const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {



    app.use(
        '/ws',
        createProxyMiddleware({
            target: 'http://localhost:8081/',
            changeOrigin: true
        })
    );
}
