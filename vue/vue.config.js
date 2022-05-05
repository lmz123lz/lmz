module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8081/webtest/user/login',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
            '/xx': {
                target: 'http://localhost:8081/webtest/cookie/add',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/xx": ""
                }
            }
        }
    }
}