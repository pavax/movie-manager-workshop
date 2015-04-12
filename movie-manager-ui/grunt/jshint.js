/*
 * grunt-contrib-jshint
 *
 * https://github.com/gruntjs/grunt-contrib-jshint
 *
 * Validate files with JSHint
 */
module.exports.tasks = {
    jshint: {
        all: ['<%= config.gruntfile %>', '<%= config.src %>', '<%= src.js.full %>'],
        options: {
            sub: true,
            esnext: true
        }
    }
};