/*
 * grunt-wiredep
 *
 * https://github.com/stephenplusplus/grunt-wiredep
 *
 * Inject Bower packages into your source code with Grunt.
 */
module.exports.tasks = {
    wiredep: {
        task: {
            src: [
                '<%= build.dir.dev %><%= build.index %>'
            ]
        },
        options: {
        }
    }
};