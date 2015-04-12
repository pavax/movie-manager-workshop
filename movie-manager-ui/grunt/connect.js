/*
 * grunt-contrib-connect
 *
 * https://github.com/gruntjs/grunt-contrib-connect
 *
 * Start a connect web server
 */
module.exports.tasks = {

    connect: {

        dev_vendor: {
            options: {
                hostname: 'localhost',
                port: 9001,
                base: 'vendor'
            }
        },
        dev: {
            options: {
                hostname: 'localhost',
                port: 9000,
                base: ['<%= build.dir.dev %>'],
                index: 'index.html',
                middleware: function (connect, options) {
                    if (!Array.isArray(options.base)) {
                        options.base = [options.base];
                    }
                    // Setup the proxy
                    var middlewares = [require('grunt-connect-proxy/lib/utils').proxyRequest];
                    // Serve static files.
                    options.base.forEach(function (base) {
                        middlewares.push(connect.static(base));
                    });
                    return middlewares;
                }
            },
            proxies: [
                {
                    context: '/vendor',
                    host: 'localhost',
                    port: 9001,
                    rewrite: {
                        '/vendor': '/'
                    }
                },
                {
                    context: '/api',
                    host: 'localhost',
                    port: 9090
                }
            ]
        },
        prod: {
            options: {
                hostname: 'localhost',
                port: 9000,
                base: '<%= build.dir.prod %>',
                index: 'index.html'
            }
        }
    }
};