/*
 * grunt-ngmin
 *
 * https://github.com/btford/grunt-ngmin
 *
 * Grunt plugin for pre-minifying Angular apps. Learn why this is awesome by reading up on the ngmin cli tool
 */
module.exports.tasks = {
    ngAnnotate: {
        build: {
            files: [
                {
                    src:    '<%= build.js.files %>',
                    dest:   '<%= build.dir.dev %>',
                    cwd:    '<%= build.dir.dev %>',
                    expand: true
                }
            ]
        }
    }
};