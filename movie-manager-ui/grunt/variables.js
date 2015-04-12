/*
 * Paths used in grunt tasks
 */
module.exports = {

    config: {
        gruntfile: 'Gruntfile.js',
        src: "grunt/**/*.js",

        usemin: 'usemin'
    },

    build: {
        dir: {
            dev: 'build_dev/',
            prod: 'build_prod/'
        },
        js: {
            dir: '/js/',
            files: 'js/app/**/*.js',
            filerev: 'js/*.*',
            ordered: ['!src/app/**/*spec.js', 'src/app/**/*Module.js', 'src/app/**/*.js']
        },
        index: 'index.html',
        config: 'config.js',
        images: '/images/',
        imagesFiltered: 'images/**/*.{png,jpg,gif}',
        fonts: '/fonts/',
        i18n: '/i18n/',
        assets: ['fonts/**/*.*', 'i18n/**/*.*', 'images/**/*.*'],
        vendor: '/js/vendor/',
        styles: {
            main: 'styles/main.css',
            vendor: 'styles/vendor.css',
            filerev: 'styles/*.*'
        },
        templates: '/js/templates-app.js'
    },

    src: {
        index: 'src/index.html',
        config: {
            dev: 'src/config/config.dev.js',
            prod: 'src/config/config.prod.js'
        },
        js: {
            cwd: 'src',
            src:['app/**/*.js'],
            full: 'src/app/**/*.js'
        },
        images: {
            cwd: 'src/images',
            src:['**/*.*'],
            full: 'src/images/**/**'
        },
        fonts: {
            cwd: 'src/fonts',
            src: ['**/*.*'],
            full: 'src/fonts/**/**'
        },
        i18n: {
            cwd: 'src/i18n',
            src: ['**/*.*'],
            full: 'src/i18n/**/**'
        },
        styles: {
            main: 'src/styles/main.less',
            app: ['src/styles/**/*.less', '!src/styles/vendor.less'],
            vendor: 'src/styles/vendor.less'
        },
        templates: {
            base: 'src/app',
            src: ['src/app/**/*.tpl.html']
        }
    },

    test: {
        vendor:     [require('wiredep')().js],
        mocks:      'vendor/**/angular-mocks.js',
        config:     'build_dev/config.js',
        templates:  'build_dev/js/templates-app.js',
        modules:    'build_dev/js/app/**/*Module.js',
        src:        'build_dev/js/app/**/*.js',
        spec:       'build_dev/js/app/**/*.spec.js'
    }

};