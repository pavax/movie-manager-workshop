/*
 * grunt-contrib-watch
 *
 * https://github.com/gruntjs/grunt-contrib-watch
 *
 * Run predefined tasks whenever watched file patterns are added, changed or deleted
 */
module.exports.tasks = {
    watch: {
        config: {
            options: { livereload: true },
            files: ['<%= src.config.dev %>'],
            tasks: ['jshint', 'copy:app_config']
        },
        'less:app': {
            options: { livereload: true },
            files: ['<%= src.styles.app %>'],
            tasks: ['less:app', 'autoprefixer']
        },
        'less:vendor': {
            options: { livereload: true },
            files: ['<%= src.styles.vendor %>'],
            tasks: ['less:vendor']
        },
        'copy:app_index': {
            options: { livereload: true },
            files: ['<%= src.index %>'],
            tasks: ['jshint', 'index']
        },
        'copy:app_js': {
            options: { livereload: true },
            files: ['<%= src.js.full %>'],
            tasks: ['jshint', 'copy:app_js', 'babel', 'index']
        },
        'copy:app_i18n': {
            options: { livereload: true },
            files: ['<%= src.i18n.full %>'],
            tasks: ['jshint', 'copy:app_i18n']
        },
        'copy:app_assets': {
            options: { livereload: true },
            files: [
                '<%= src.images.full %>',
                '<%= src.fonts.full %>'
            ],
            tasks: ['copy:app_assets']
        },
        html2js: {
            options: { livereload: true },
            files: ['<%= src.templates.src %>'],
            tasks: ['html2js']
        }
    }
};